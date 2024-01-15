"use server"

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose"
import { Tag } from "lucide-react";

export async function createQuestion(params : any) {
    try {
        connectToDatabase();
        
        const { title, content, tags, author, path } = params;

        const question = await Question.create({
            title,
            content,
            author
        })

        const tagDocuments = [];

        for (const tag of tags) {
            const existingTag = await Tag.find
        }
    } catch (error) {
        
    }
}