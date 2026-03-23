import mongoose, { Schema } from "mongoose";
import { MemberType, MemberStatus } from "../libs/enums/member.enum";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
  ProductVolume,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },
    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productLeftCount: {
      type: Number,
      required: true,
    },
    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },
    productVolume: {
      type: Number,
      enum: ProductVolume,
      default: ProductVolume.ONE,
    },
    productDesc: {
      type: String,
    },
    productImages: {
      type: [String],
      default: [],
    },
    productViews: {
      type: Number,
      default: 0,
    },

    // ✨ ADD THESE 5 NEW FIELDS:
    productOldPrice: {
      type: Number,
      required: false,
    },
    productRating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    productReviews: {
      type: Number,
      default: 0,
      min: 0,
    },
    productTags: {
      type: [String],
      default: [],
    },
    productBadge: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

productSchema.index(
  { productName: 1, productSize: 1, productVolume: 1 },
  { unique: true },
);
export default mongoose.model("Product", productSchema);
