'use client'
import { useState } from "react"
export function Form() {
  const [websiteUrl, setWebsiteUrl] = useState('')

  const [urlInput, setUrlInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState({});
  const [loading, setLoading] = useState(false);


  const analyzeUrl = async () => {
    setLoading(true);

    try {
      // Make an HTTP request to the provided URL
      const response = await fetch(`/api/analyze?url=${encodeURIComponent(urlInput)}`);

      // Check if the request was successful
      if (response.ok) {
        // Parse the JSON response
        const result = await response.json();
        setAnalysisResult(result);
      } else {
        setAnalysisResult({ error: `Error: ${response.status}` });
      }
    } catch (error) {
      setAnalysisResult({ error: `Error: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        // 👇️ call submit function here
        analyzeUrl();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl">
        <label
          htmlFor="websiteUrl"
          className="block text-sm font-medium leading-6 text-white"
        >
          Website Url
        </label>
        <div className="mt-2 z-10">
          <input
            type="email"
            name="email"
            id="websiteUrl"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 bg-transparent"
            placeholder="Enter website url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
