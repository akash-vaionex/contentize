'use client'
import axios from "axios";
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import { useContentContext } from "@/contexts/contentContext";

export function Hero() {
  const [urlInput, setUrlInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [isContentLoading, setIsContentLoading] = useState(false)
  const router = useRouter();
  const { setGeneratedContent } = useContentContext()

  const analyzeUrl = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Make an HTTP request to the provided URL
      const response = await axios.get(
        `/api/urlanalysis?url=${encodeURIComponent(urlInput)}`,
      )
      // Check if the request was successful
      if (response.status == 200) {
        // Parse the JSON response
        setAnalysisResult(response.data)
      } else {
        setAnalysisResult({ error: `Error: ${response.status}` })
      }
    } catch (error) {
      setAnalysisResult({ error: `Error: ${error.message}` })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const keyDownHandler = (event) => {

      if (event.key === 'Enter') {
        event.preventDefault();
        // 👇️ call submit function here
        analyzeUrl(event);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  //       // 👇️ call submit function here
  //       analyzeUrl(event)
  //     }
  //   }

  const analyseContent = async (e) => {
    setIsContentLoading(true)
    e.preventDefault();
    try {
      // Make an HTTP request to the provided URL
      const response = await axios.post(`/api/contentanalysis`, {
        data: analysisResult
      });
      console.log(response, 'dddadsffsdfasdfdsa')
      console.log(response.status, 'dddhhdh')
      // Check if the request was successful
      if (response.status == 200) {
        console.log('pushing it to data')
        setGeneratedContent(response.data.result)
        router.push('/generated-content')
      } else {
        // setAnalysisResult({ error: `Error: ${response.status}` });
      }
    } catch (error) {
      // setAnalysisResult({ error: `Error: ${error.message}` });
    } finally {
      setIsContentLoading(false);
    }
  };


  return (
    <div className="relative isolate bg-gray-900 px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Website URL Analysis
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Thoroughly Scan and Analyze Websites for Content Insights
          </p>
        </div>
        <div className="mt-8">
          <form className="mt-2 flex flex-row space-x-2" onSubmit={analyzeUrl}>
            <input
              type="url"
              name="url"
              id="url"
              className="block w-full rounded-md border-0 p-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  bg-transparent sm:text-sm sm:leading-6"
              placeholder="Enter Website URL"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </form>
        </div>
        <div id="result" className="mt-8">
          {analysisResult == {} ? (
            <p>{analysisResult.error}</p>
          ) :
            (Object.keys(analysisResult).length !== 0 ?
              <div>
                <div className="mt-12">
                  <dl className="divide-y divide-white/10">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-white">
                        Website URL
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                        {urlInput}
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-white">
                        Title
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                        {analysisResult.title !== '' ? analysisResult.title : 'NA'}
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-white">
                        Description
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                        {analysisResult.metaDescription !== '' ? analysisResult.metaDescription : 'NA'}
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-white">
                        Keywords
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                        {analysisResult.keyword !== undefined ? analysisResult.keyword : 'NA'}
                      </dd>
                    </div>
                  </dl>
                  {/* <Link href={'/generated-content'} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-8">Generate Content</Link> */}
                </div>

                <dl className="divide-y divide-gray-100">

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-white">Icon</dt>
                    <dd className="mt-2 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                      {analysisResult?.favicon?.includes("http") ?
                        <img src={`${analysisResult.favicon}`} className="w-10 h-10" /> : <img src={`${analysisResult.canonicalLink}${analysisResult.favicon}`} className="w-10 h-10" />
                      }
                    </dd>
                  </div>
                </dl>

              </div> : null

            )}
        </div>
        {analysisResult && Object.keys(analysisResult).length != 0 && <button
          onClick={analyseContent}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isContentLoading}
        >
          {isContentLoading ? 'Generating...' : 'Click to generate content'}
        </button>}
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
