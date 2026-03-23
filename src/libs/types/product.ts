import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productVolume: number;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  productOldPrice?: number;
  productRating: number;
  productReviews: number;
  productTags: string[];
  productBadge?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry {
  page: number;
  limit: number;
  order: string;
  search?: string;
  productCollection?: ProductCollection;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages: string[];
  productViews?: number;
  productOldPrice?: number;
  productRating?: number;
  productReviews?: number;
  productTags?: string[];
  productBadge?: string;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
  productOldPrice?: number;
  productRating?: number;
  productReviews?: number;
  productTags?: string[];
  productBadge?: string;
}
