import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
 <div className="min-h-screen bg-gray-950 text-white">
  <h1 className="pt-10 mb-4 text-center text-4xl font-bold text-white">
    Welcome to KISSENA Baked Goods
  </h1>

  <h2 className="mb-8 text-center text-2xl font-semibold text-gray-400">
    Financial Statements
  </h2>
</div>   
  )
}
