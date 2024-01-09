import { Schema, models, model, Document } from 'mongoose';

export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  anwsers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const QuestionSchema = new Schema({
    title: { type: String, required: true },
})