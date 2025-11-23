const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema  = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: { type: String, default: "listingimage" },
    url: {
      type: String,
      default: "https://unsplash.com/photos/hikers-walk-on-a-trail-through-a-sunlit-forest-GwEQzamy4MA"
    }
  },
  price: Number,
  location: String,
  country: String,
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;