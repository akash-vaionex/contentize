// export function About() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
//           <div className="mx-auto w-full max-w-xl lg:mx-0">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">
//               Trusted by the most innovative teams
//             </h2>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
//               egestas tempus tellus etiam sed. Quam a scelerisque amet
//               ullamcorper eu enim et fermentum, augue.
//             </p>
//             <div className="mt-8 flex items-center gap-x-6">
//               <a
//                 href="#"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Create account
//               </a>
//               <a href="#" className="text-sm font-semibold text-gray-900">
//                 Contact us
//                 {' '}
//                 <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>
//           <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
//             <img
//               className="max-h-12 w-full object-contain object-left"
//               src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
//               alt="Tuple"
//               width={105}
//               height={48}
//             />
//             <img
//               className="max-h-12 w-full object-contain object-left"
//               src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
//               alt="Reform"
//               width={104}
//               height={48}
//             />
//             <img
//               className="max-h-12 w-full object-contain object-left"
//               src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
//               alt="SavvyCal"
//               width={140}
//               height={48}
//             />
//             <img
//               className="max-h-12 w-full object-contain object-left"
//               src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
//               alt="Laravel"
//               width={136}
//               height={48}
//             />
//             <img
//               className="max-h-12 w-full object-contain object-left"
//               src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
//               alt="Transistor"
//               width={158}
//               height={48}
//             />
//             <img
//               className="max-h-12 w-full object-contain object-left"
//               src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
//               alt="Statamic"
//               width={147}
//               height={48}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

const cards = [
  {
    name: 'AI-Powered Innovation',
    description: 'We harness cutting-edge AI algorithms to analyze websites comprehensively and suggest relevant article ideas, ensuring content is relevant and captivating.',
  },
  {
    name: 'User-Centric Approach',
    description: 'Our user-friendly dashboard allows effortless project management, enabling users to oversee content generation and request specific article types or topics.',

  },
  {
    name: 'Continuous Improvement',
    description: " We're committed to continuous enhancement, refining our AI technology to provide increasingly accurate website analyses and content suggestions.",

  },
]

export  function About() {
  return (
    <div className="relative isolate  bg-gray-900 py-24 sm:py-32">
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Contentize.com is driven by a passion for redefining content creation through innovative AI technology. Our platform brings together the power of artificial intelligence and content strategy to revolutionize the way websites generate and manage engaging articles.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
