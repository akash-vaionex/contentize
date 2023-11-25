'use client'
import { useState } from "react"
export function Form() {
const [websiteUrl, setWebsiteUrl] = useState('')

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
            // value={websiteUrl}
          />
        </div>
      </div>
    </div>
  )
}
