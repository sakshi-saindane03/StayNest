const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
        default: "https://unsplash.com/photos/wooden-sauna-interior-with-forest-view-xrjx6nX3Mp4https://unsplash.com/photos/milky-way-above-radio-tower-vf_nxn3UcAA",
        set: (v) => v === ""? "https://unsplash.com/photos/wooden-sauna-interior-with-forest-view-xrjx6nX3Mp4https://unsplash.com/photos/milky-way-above-radio-tower-vf_nxn3UcAA" : v,
    },
    price:{
        type: Number
    },
    location:{
        type: String,
    },
    country:{
        type: String,
    },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;