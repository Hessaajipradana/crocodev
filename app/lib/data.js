import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return {
      count,
      users,
    };
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

// fungsi dari hesa untuk single user
export const fetchUser = async (id) => {
  try {
    await connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    await connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return {
      count,
      products,
    };
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

//fungsi untuk single product
export const fetchProduct = async (id) => {
  try {
    await connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
};