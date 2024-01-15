import { Schema } from "mongoose";
import { IUser } from "@/mongodb";
export interface CreateAnswerParams { content: string;
author: string; // User ID
question: string; // Question ID
path: string; }
export interface GetAnswersParams { questionId: string;