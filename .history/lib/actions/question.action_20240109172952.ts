"use server"

import { connectToDatabase } from "../mongoose"

export async function createQuestion(params : any) {
    try {
        connectToDatabase();
        
        const { title, content, tags, author } = params;

        const question = await Question.create({
            
        })
    } catch (error) {
        
    }
}