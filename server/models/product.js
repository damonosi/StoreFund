const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxLength: [32, "Too long"],
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: [2000, "Too long"],
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxLength: [32, "Too long"],
    },
    category: { type: ObjectId, ref: "Category", required: true },
    subs: [{ type: ObjectId, ref: "Sub" }],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
    brand: {
      type: String,
      enum: ["Miere", "Dulceata", "Sirop", "Uleiuri"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
