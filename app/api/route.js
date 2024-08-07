import { Configuration, OpenAIApi } from 'openai';
import { NextResponse } from 'next/server';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req, res) {
    try {
        const { body } = await req.json();
        const response = await openai.createCompletion({
            model: 'text-davinci-003',  // You can use other models like 'gpt-3.5-turbo' or 'gpt-4'
            prompt: body,
            max_tokens: 100,
        });

        const output = response.data.choices[0].text;
        return NextResponse.json({ output });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
