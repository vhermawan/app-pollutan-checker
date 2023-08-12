import { Container } from "src/components/container";

export default function Home() {
  return (
    <Container >
      <section className="relative isolate px-6 pt-14 lg:px-8" id="container">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-[150px]">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Search your Pokemon
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find your list of Pokemon what you want and get it to you!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/articles"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Find Pokemon
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900 opacity-60 sm:left-[calc(50%+36rem)]"></div>
        </div>
      </section>
    </Container>
  )
}