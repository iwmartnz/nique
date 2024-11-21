import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string({ required_error: 'Please add your name' }).min(2, {
    message: 'Name must have at least 2 characters.',
  }),
  email: z.string({ required_error: 'Please add your email address' }).email(),
  message: z
    .string({ required_error: 'Please add your message.' })
    .min(5, {
      message: 'Message must have at least 5 characters.',
    })
    .max(400, {
      message: 'Oops! your message is too long.',
    }),
});

export const bookingSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must have at least 2 characters.',
  }),
  numberOfGuests: z.coerce.number().min(0).max(10),
  date: z.date({
    required_error: 'A date of reservation is required.',
  }),
  time: z.string({
    required_error: 'A time of reservation is required.',
  }),
});
