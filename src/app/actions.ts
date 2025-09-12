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


const addAppFormSchema = z.object({
  name: z.string().min(2, { message: 'App name must be at least 2 characters.' }),
  summary: z.string().min(10, { message: 'Summary must be at least 10 characters.' }),
  category: z.string().min(2, { message: 'Category must be at least 2 characters.' }),
  appStoreUrl: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  playStoreUrl: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
});


export async function addApp(values: z.infer<typeof addAppFormSchema>): Promise<FormState> {
  const validatedFields = addAppFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your inputs.',
    };
  }

  const { name, summary, category, appStoreUrl, playStoreUrl } = validatedFields.data;

  // NOTE: This is a temporary in-memory solution. Data will be lost on server restart.
  const newApp = {
    id: `app-${Date.now()}`,
    name,
    summary,
    category,
    appStoreUrl: appStoreUrl || '#',
    playStoreUrl: playStoreUrl || '#',
    logoId: 'default-logo', // Using a default logo for now
  };

  apps.push(newApp);

  if (!appCategories.includes(category)) {
    appCategories.push(category);
  }

  console.log('New app added:', newApp);
  revalidatePath('/');
  revalidatePath('/admin');

  return {
    success: true,
    message: 'App added successfully!',
  };
}
