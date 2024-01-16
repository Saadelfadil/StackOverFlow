"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function createUser(userData: any) {
  try {
    connectToDatabase();

    const user = await User.create({ clerkId: userId });

    return user;
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
