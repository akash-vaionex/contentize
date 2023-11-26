import axios from 'axios';
const OpenAI = require("openai");


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const documentAnalysisFunctionSchema = {
    name: "content_analysis",
    description: "Analyzes content to extract key details.",
    parameters: {
        type: "object",
        properties: {
            text: {
                type: "string",
                description: "Content Text",
            },
            title: {
                type: "string",
                description: "Content title",
            },

            content: {
                type: "string",
                description: "Generated content",
            },
            description: {
                type: "string",
                description: "Generated content description",
            },

        },
        required: [
            "title",
            "content",
            "description",
        ],
    },
};

export async function POST(request) {
    const body = await request.json()
    const referer = request.headers.get('referer')
    let gptResult;
    console.log(body, 'ddd')

    try {
        const messages = [
            {
                role: "assistant",
                content: `
                "Imagine you are a seasoned writer crafting an engaging blog post for a website titled ${body.title}' The website aims to [describe the purpose or focus of the website from the description provided]. The keywords associated with this website are ${body?.keywords}.

Write a compelling blog post of about 200 words that provides valuable insights, informative content, or engaging stories related to [one or more keywords from the provided list]. Ensure the tone is informative yet conversational, catering to the audience interested in mention the target audience or niche.

Feel free to delve into ${body?.keywords}. The content should captivate readers, offering them actionable advice, interesting facts, or solutions to common problems within the domain of ${body.description}. Make the blog within 300-500 words only.\n Take this content for the refrence${body.mainContent}\n\n`,
            },
        ];

        const result = await openai.chat.completions.create({
            model: "gpt-4",
            messages: messages,
            functions: [documentAnalysisFunctionSchema],
            function_call: {
                name: "content_analysis",
                arguments: {
                    text: body.content,
                },
            },
        });

        if (!result.choices[0].message) {
            throw new Error("No return error from chat");
        }
        let parsedRes = JSON.parse(
            result?.choices[0]?.message?.function_call?.arguments
        );
        gptResult = parsedRes;
    } catch (e) {
        console.error('API Error:', e.response ? JSON.stringify(e.response.data, null, 2) : e.message);
        return new Response(
            JSON.stringify({
                error: 'Failed to analyze the Content. Please check if the URL is valid.',
            }),
            {
                status: 500,
                headers: { referer: referer },
            }
        );
    }

    return new Response(
        JSON.stringify({
            result: gptResult,
            message: 'Content analyzed successfully.',
        }),
        {
            status: 200,
            headers: { referer: referer },
        }
    );
}

