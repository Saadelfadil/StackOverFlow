import * as z from "zod";

export const QuestionValidation = z.object({
  title: z.string().min(5).max(130),
});
