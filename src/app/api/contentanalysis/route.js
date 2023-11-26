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

    try {
        const messages = [
            {
                role: "assistant",
                content: `As a content creator, envision a digital assistant tailored to your needs. Design a tool that streamlines your content creation process by analyzing websites for inspiration. Specify features that would make this tool indispensable, such as the ability to extract key information like titles, meta descriptions, and tags, and provide creative suggestions or prompts based on the analyzed content. How can this digital assistant elevate your content creation workflow and keep your ideas fresh and engaging?"
                  Evaluate the following contente make them professional:\n\n${body.content}\n\n`,
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

