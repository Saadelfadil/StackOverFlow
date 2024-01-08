"use client";

import { QuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";


const Question = () => {
    export function ProfileForm() {
      // 1. Define your form.
      const form = useForm<z.infer<typeof QuestionSchema>>({
        resolver: zodResolver(QuestionSchema),
        defaultValues: {
          username: "",
        },
      });
    
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof QuestionSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
      }
    }
    return <div>Questions</div>;
};

export default Question;