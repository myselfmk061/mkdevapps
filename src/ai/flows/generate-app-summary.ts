'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a short, engaging summary for an application using AI.
 *
 * - generateAppSummary - A function that takes an app description as input and returns a generated summary.
 * - GenerateAppSummaryInput - The input type for the generateAppSummary function, which is the app description.
 * - GenerateAppSummaryOutput - The return type for the generateAppSummary function, which is the generated summary.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAppSummaryInputSchema = z.object({
  appDescription: z.string().describe('The detailed description of the application.'),
});
export type GenerateAppSummaryInput = z.infer<typeof GenerateAppSummaryInputSchema>;

const GenerateAppSummaryOutputSchema = z.object({
  summary: z.string().describe('A short, engaging summary of the application.'),
});
export type GenerateAppSummaryOutput = z.infer<typeof GenerateAppSummaryOutputSchema>;

export async function generateAppSummary(input: GenerateAppSummaryInput): Promise<GenerateAppSummaryOutput> {
  return generateAppSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAppSummaryPrompt',
  input: {schema: GenerateAppSummaryInputSchema},
  output: {schema: GenerateAppSummaryOutputSchema},
  prompt: `You are an AI assistant specialized in creating engaging and concise summaries for mobile applications.

  Given the following detailed description of an application, generate a short, attention-grabbing summary that will be used on a portfolio website to attract potential users.

  App Description: {{{appDescription}}}
  Summary:`, // Ensure the LLM only returns the summary
});

const generateAppSummaryFlow = ai.defineFlow(
  {
    name: 'generateAppSummaryFlow',
    inputSchema: GenerateAppSummaryInputSchema,
    outputSchema: GenerateAppSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
