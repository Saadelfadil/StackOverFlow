"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    // const user = await User.findOne({ clerkId: "12345" });
    User.find({}, (err, users) => {
      if (err) {
        console.error("Error retrieving users:", err);
        return;
      }

      console.log("All users:", users);
    });
    console.log("USER : ", user);
    return user;
  } catch (error) {
    console.log("HNA : ", error);
    throw error;
  }
}
