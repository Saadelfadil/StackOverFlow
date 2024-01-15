"use server"

import { connectToDatabase } from "../mongoose";

export async function getUserById(params: any) {
 
    try {
        connectToDatabase();
    } catch (error) {
        
    }

}