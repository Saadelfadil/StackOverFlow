import { Schema, models, model, Document } from 'mongoose';

export interface IQuestion extends Document {
    title: string;
    content: string;
    tags: Types.;
}