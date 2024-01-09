import { Schema, models, model, Document } from "mongoose";

export interface ITag extends Document {
    name: string;
    }

const TagSchema = new Schema({

})
