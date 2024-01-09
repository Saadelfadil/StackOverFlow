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
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    views: { type: Number, default: 0 },
    upvotes: [{ types: Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ types: Schema.Types.ObjectId, ref: 'User' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    anwsers: [{ type: Schema.Types.ObjectId, ref: 'Anwser' }],
    createdAt: { type: Date, default: Date.now }
})

const Question = models.Question || model()