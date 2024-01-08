import * as z from "zod";

const QuestionValidation = z.object({
  username: z.string().min(2).max(50),
});
