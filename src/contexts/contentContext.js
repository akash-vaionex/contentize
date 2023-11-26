'use client'

import React, { createContext, useContext, useState } from 'react'

export const ContentContext = createContext()



export const ContentProvider = ({ children }) => {
    const [generatedContent, setGeneratedContent] = useState({})

    return (
        <ContentContext.Provider value={{ generatedContent, setGeneratedContent }}>
            {children}
        </ContentContext.Provider>
    )
}


export const useContentContext = () => useContext(ContentContext)

