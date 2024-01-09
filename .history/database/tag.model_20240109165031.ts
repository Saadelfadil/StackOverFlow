import { Schema, models, model, Document } from "mongoose";

export interface ITag extends Document {
    name: string;
    questions: Schema.Types.ObjectId[];
}

const TagSchema = new Schema({

})
