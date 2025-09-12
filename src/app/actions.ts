'use server';

import * as z from 'zod';
import { cookies } from 'next/headers';

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

const loginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function login(values: z.infer<typeof loginFormSchema>): Promise<FormState> {
  const validatedFields = loginFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid login data.',
    };
  }

  const { username, password } = validatedFields.data;

  // IMPORTANT: This is a hardcoded username and password for demonstration purposes.
  // In a real application, you should use a secure authentication provider and store user data in a database.
  if (username === 'admin' && password === 'password') {
    const cookieStore = cookies();
    cookieStore.set('auth_token', 'your_secure_session_token_here', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return {
      success: true,
      message: 'Login successful!',
    };
  }

  return {
    success: false,
    message: 'Invalid username or password.',
  };
}
