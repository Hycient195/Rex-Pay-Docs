import Image from "next/image";
import { homeConstants } from "../_constants/homeConstants";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold text-slate-700">RexPay Documentation</h1>
      <div className="grid grid-cols-2 max-md:grid-cols-1 mt-7 gap-4  gap-y-10 max-w-screen-md">
        {
          homeConstants.map(each => (
            <div key={each.title} className="">
              <figure className="relative w-full border rounded-lg border-zinc-200 h-auto aspect-[1.8/1]">
                <Image fill src={each.image} alt={each.title} />
              </figure>
              <div className="mt-4">
                <h3 className="text-red-500/80 font-bold text-lg">{each.title}</h3>
                <p className="text-slate-800">{each.subtitle}</p>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}