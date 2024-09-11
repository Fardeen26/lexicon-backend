import { z } from 'zod';

export const bookSchema = z.object({
    title: z.string().min(5, { message: "Name must be at least 5 characters" }),
    description: z.string().min(10, { message: "Name must be at least 5 characters" }).max(200, { message: "Description must be no more then 200 characters" }),
    coverImage: z.string().url(),
    file: z.string().url(),
    author: z.string().min(5, { message: "Name must be at least 5 characters" })
})
