"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";

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

export async function deleteUser(params: del) {
  try {
    connectToDatabase();

    const newUser = await User.create({ userData });

    return newUser;
  } catch (error) {
    console.log("HNA : ", error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();

    const { clerkId, updateData, path } = params;
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });

    revalidatePath(path);
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
