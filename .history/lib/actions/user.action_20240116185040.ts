"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function createUser(userData: any) {
  try {
    connectToDatabase();

    const newUser = await User.create({ userData });

    return newUser;
  } catch (error) {
    console.log("HNA : ", error);
    throw error;
  }
}

export async function createUser(userData: any) {
  try {
    connectToDatabase();

    const newUser = await User.create({ userData });

    return newUser;
  } catch (error) {
    console.log("HNA : ", error);
    throw error;
  }
}

export async function getUserById(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });
    
    console.log("USER : ", user);
    return user;
  } catch (error) {
    console.log("HNA : ", error);
    throw error;
  }
}
