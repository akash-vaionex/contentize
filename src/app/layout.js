import React from 'react'
import { CombinedAuthProvider } from '../contexts/authContext'

export const metadata = {
  title: 'Main root of the Project',
  description: 'Main root description of the Project',
}

export default function AppLayout({ children }) {
  return (
    <html lang="en" className={`bg-gray-900`}>
      <body className="flex flex-col bg-gray-900">
        <CombinedAuthProvider>{children}</CombinedAuthProvider>
      </body>
    </html>
  )
}
