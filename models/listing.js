const mongoose = require("mongoose");
const Review = require("./review");
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
        default: "/default-img.jpg",
        set: (v) => v === ""? "/default-img.jpg" : v,
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
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({_id: { $in: listing.reviews }});
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;