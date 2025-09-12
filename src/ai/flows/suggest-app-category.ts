'use server';

/**
 * @fileOverview This file contains the Genkit flow for suggesting app categories based on app descriptions.
 *
 * @module ai/flows/suggest-app-category
 *
 * @exports suggestAppCategory - A function that takes an app description and returns suggested categories.
 * @exports SuggestAppCategoryInput - The input type for the suggestAppCategory function.
 * @exports SuggestAppCategoryOutput - The output type for the suggestAppCategory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAppCategoryInputSchema = z.object({
  description: z.string().describe('The description of the app.'),
});
export type SuggestAppCategoryInput = z.infer<typeof SuggestAppCategoryInputSchema>;

const SuggestAppCategoryOutputSchema = z.object({
  categories: z
    .array(z.string())
    .describe('An array of suggested categories for the app.'),
});
export type SuggestAppCategoryOutput = z.infer<typeof SuggestAppCategoryOutputSchema>;

export async function suggestAppCategory(input: SuggestAppCategoryInput): Promise<SuggestAppCategoryOutput> {
  return suggestAppCategoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAppCategoryPrompt',
  input: {schema: SuggestAppCategoryInputSchema},
  output: {schema: SuggestAppCategoryOutputSchema},
  prompt: `You are an expert in app categorization. Given the description of an app, suggest appropriate categories for it.

Description: {{{description}}}

Categories:`,
});

const suggestAppCategoryFlow = ai.defineFlow(
  {
    name: 'suggestAppCategoryFlow',
    inputSchema: SuggestAppCategoryInputSchema,
    outputSchema: SuggestAppCategoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
