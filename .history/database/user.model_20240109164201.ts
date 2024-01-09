import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    
}