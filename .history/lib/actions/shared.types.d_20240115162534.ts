import { Schema } from "mongoose";
import { IUser } from "@/mongodb";
export interface CreateAnswerParams { content: string;
author: string; // User ID
question: string; // Question ID
path: string; }
export interface GetAnswersParams { questionId: string;
    sortBy?: string; page?: number; pageSize?: number;
}
export interface AnswerVoteParams { answerId: string;
userId: string;
hasupVoted: boolean; hasdownVoted: boolean;
path: string; }
export interface DeleteAnswerParams { answerId: string;
path: string;
}
export interface SearchParams { query?: string | null;
type?: string | null;
}
export interface RecommendedParams { userId: string;
page?: number;
pageSize?: number;
searchQuery?: string; }
export interface ViewQuestionParams { questionId: string;
userId: string | undefined;
}
export interface JobFilterParams { query: string;
page: string;
}
export interface GetQuestionsParams { page?: number;
pageSize?: number;
searchQuery?: string;
filter?: string; }
export interface CreateQuestionParams { title: string;
content: string;
tags: string[];