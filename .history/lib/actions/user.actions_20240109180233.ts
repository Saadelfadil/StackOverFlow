"use server"

import { connectToDatabase } from "../mongoose";

export async function getUserById(params: any) {
 
    try {
        connectToDatabase();

        const { userId } = params;

        const user = 
    } catch (error) {
        
    }

}