"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);

    console.log("NEW USER : ", newUser);
    return newUser;
  } catch (error) {
    console.log("HNA : ", error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();
    const { clerkId } = params;

    const user = await User.findOne({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // delete user from database
    // and questions, answers, comments, and votes

    // const questionsIds = await Question.find({ author: user._id}).distinct('_id');

    await Question.deleteMany({ author: user._id });

    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {
    console.log("HNA : ", error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();

    const { clerkId, updateData, path } = params;
    const updatedUser = await User.findOneAndUpdate({ clerkId }, updateData, { new: true });

    console.log("UPDATED USER : ", updatedUser);

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
