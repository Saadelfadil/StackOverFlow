"use server";

import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        {name: { $regex: new RegExp(`^${tag}$`, "i") }},
        { $setOnInsert: { name: tag}, $push: { questions: question._id } },
        { upsert: true, new: true }
        );
        
    }
  } catch (error) {
    console.log(error)
  }
}