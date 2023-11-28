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
                content: `Provide the title, a brief description of the website's purpose or focus, associated keywords, and a reference to the main content for a blog post. Additionally, include any specific preferences for the target audience or niche. For instance, if the title is "Unlocking the Secrets of ${body.title}" and the website focuses on [describe the purpose or focus], with keywords like ${body?.keywords}, and a reference to the main content "${body.mainContent}", generate a compelling blog post of about 200 words. Ensure the content offers valuable insights, informative details, or engaging stories related to the specified keywords, maintaining an informative yet conversational tone tailored to the specified audience or niche. Finally, expand the content to a full-length blog post within the range of 300-500 words, balancing information and engagement.`
            },
        ];

        const result = await openai.chat.completions.create({
            model: "gpt-4",
            messages: messages,
            functions: [documentAnalysisFunctionSchema],
            function_call: {
                name: "content_analysis",
                arguments: {
                    text: body.mainContent,
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

