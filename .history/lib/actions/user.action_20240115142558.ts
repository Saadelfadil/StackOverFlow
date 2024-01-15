"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    // const user = await User.findOne({ clerkId: "12345" });
    
    console.log("USER : ", user);
    return user;
  } catch (error) {
    console.log("HNA : ", error);
    throw error;
  }
}
