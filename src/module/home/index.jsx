import { Container } from "@/components/container";
import { useLocation } from "./hooks/useLocation";
import { useState } from "react";
import { Card } from "./components/card";
import { Loading } from "@/components/loading";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false)
  const { pollutan, isLoading } = useLocation(isClicked)

  return (
    <Container>
      {isLoading ? <Loading isLoading /> : (
        <>
          <section className="relative isolate px-0 pt-14 md:px-8" id="container">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)]"></div>
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-20 lg:py-[100px]">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Area Pollutant Checker
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Discover real-time pollutant levels from IQAir! Utilize our advanced mapping tools to monitor air quality, pinpoint pollution hotspots,
                  and make informed decisions about your outdoor activities. Stay safe, breathe better with Area Pollutant Checker.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button
                    onClick={() => setIsClicked(true)}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Check Your Place!
                  </button>
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
          {pollutan &&
            <section id="location" className="flex justify-center align-middle">
              <Card pollutan={pollutan.data} />
            </section>
          }
        </>
      )}
    </Container>
  )
}