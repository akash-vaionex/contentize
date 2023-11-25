import { MessagesSquare, Heart, PenSquare, Trash2, CheckIcon } from 'lucide-react'

const features = [
  {
    name: 'Comprehensive Scanning',
    description: 'Our AI technology thoroughly analyzes submitted website URLs, examining content structures, themes, and topics.',
  },
  { name: 'Content Assessment', description: 'Identifies key areas and topics within the website to suggest relevant article ideas for content generation.' },
  {
    name: 'Tailored Article Creation',
    description: "Automatically generates blog articles based on the analyzed website's content, ensuring relevance and coherence.",
  },
  {
    name: 'Diverse Content Formats',
    description: 'Offers a variety of article formats, including informative pieces, listicles, how-tos, and more.',
  },
  { name: 'Cutting-Edge AI Algorithms', description: 'Utilizes advanced AI algorithms to deliver accurate website analysis and high-quality content suggestions.' },
  { name: 'Continuous Improvement', description: '.Constantly evolves and adapts to ensure superior content recommendations and generation..' },
]


export function Features() {
  return (
    // <div className="bg-white py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    //       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //         Stay on top of customer support
    //       </h2>
    //       <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
    //         {features.map((feature) => (
    //           <div key={feature.name}>
    //             <dt className="text-base font-semibold leading-7 text-gray-900">
    //               <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
    //                 <feature.icon
    //                   className="h-6 w-6 text-white"
    //                   aria-hidden="true"
    //                   color="white"
    //                 />
    //               </div>
    //               {feature.name}
    //             </dt>
    //             <dd className="mt-1 text-base leading-7 text-gray-600">
    //               {feature.description}
    //             </dd>
    //           </div>
    //         ))}
    //       </dl>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Empower Your Content Strategy with Intelligent Features</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Empower Your Content Strategy with Intelligent Features</p>
            <p className="mt-6 text-base leading-7 text-slate-300">
            Discover How Contentize.com Redefines Content Creation and Management
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-slate-300 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-100">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
