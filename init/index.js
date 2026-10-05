require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to Atlas");
}

const initDB = async () => {
    await Listing.deleteMany({});

    const user = await User.findOne();

    if (!user) {
        console.log("No user found!");
        return;
    }

    console.log("Using owner:", user.username);

    const listings = initData.data.map((obj) => ({
        ...obj,
        owner: user._id,
    }));

    await Listing.insertMany(listings);

    console.log("Data was initialized");
};

main()
    .then(async () => {
        await initDB();
        await mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });