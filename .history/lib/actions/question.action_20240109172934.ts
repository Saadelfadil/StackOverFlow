"use server"

import { connectToDatabase } from "../mongoose"

export async function createQuestion(params : any) {
    try {
        connectToDatabase();
        
        const { title}
    } catch (error) {
        
    }
}