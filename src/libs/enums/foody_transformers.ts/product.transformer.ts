import { Product } from "../../types/product";

export const transformProductForFrontend = (product: Product) => {
  return {
    id: product._id,
    name: product.productName,
    title: product.productName,
    category: [product.productCollection.toLowerCase()],
    price: product.productPrice,
    image: product.productImages[0],
    thumb: product.productImages[0],
    description: product.productDesc,
    text: product.productDesc,
    rating: 5,
    createdAt: product.createdAt,
    inStock: product.productLeftCount > 0,
    stockCount: product.productLeftCount,
    productImages: product.productImages,
  };
};
