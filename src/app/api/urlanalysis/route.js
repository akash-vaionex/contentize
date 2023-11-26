import axios from 'axios';
import cheerio from 'cheerio';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');
    const referer = request.headers.get('referer');
    let title = '';
    let metaDescription = '';
    let links = [];
    let favicon;
    let keywords
    let tagCounts

    try {
        const response = await axios.get(url);

        // Parse the HTML content of the page
        const $ = cheerio.load(response.data);

        // Extract relevant information from the HTML (customize as needed)
        title = $('title').text().trim();
        metaDescription = $('meta[name="description"]').attr('content') || '';

        // Extract links from the page
        $('a').each((index, element) => {
            links.push($(element).attr('href'));
        });
        favicon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href');

        // Extract keywords from the page content
        keywords = $('meta[name="keywords"]').attr('content') || '';

        const logoUrl = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href');

        // Extract canonical link
        const canonicalLink = $('link[rel="canonical"]').attr('href');

        // Extract meta tags
        const metaTags = [];
        $('meta').each((index, element) => {
            const tag = {
                name: $(element).attr('name'),
                content: $(element).attr('content'),
            };
            metaTags.push(tag);
        });


        console.log(logoUrl, canonicalLink, metaTags, 'dddd');
    } catch (e) {
        console.error('API Error:', e.response ? JSON.stringify(e.response.data, null, 2) : e.message);
        return new Response(
            JSON.stringify({
                error: 'Failed to analyze the URL. Please check if the URL is valid.',
            }),
            {
                status: 500,
                headers: { referer: referer },
            }
        );
    }

    return new Response(
        JSON.stringify({
            title,
            metaDescription,
            favicon,
            keywords,
            message: 'URL analyzed successfully.',
        }),
        {
            status: 200,
            headers: { referer: referer },
        }
    );
}