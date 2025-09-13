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

  try {
    const formData = new FormData();
    formData.append('name', validatedFields.data.name);
    formData.append('email', validatedFields.data.email);
    formData.append('message', validatedFields.data.message);
    formData.append('_captcha', 'false');
    
    const response = await fetch('https://formsubmit.co/myselfmkapps+contact@gmail.com', {
      method: 'POST',
      body: formData
    });

    return {
      success: true,
      message: 'Message sent successfully!',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
    };
  }
}
