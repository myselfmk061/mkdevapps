'use server';

import * as z from 'zod';
import { cookies } from 'next/headers';
import { apps, appCategories } from '@/lib/data';
import { revalidatePath } from 'next/cache';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(values: z.infer<typeof contactFormSchema>): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your inputs.',
    };
  }
  
  console.log('New contact form submission:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);

  return {
    success: true,
    message: 'Message sent successfully!',
  };
}
