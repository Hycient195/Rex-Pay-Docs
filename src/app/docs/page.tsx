import Image from "next/image";
import { homeConstants } from "../_constants/homeConstants";
import { PageHeading } from "@SharedComponents/Texts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <PageHeading className="">RexPay Documentation</PageHeading>
      <div className="grid grid-cols-2 max-md:grid-cols-1 mt-7 gap-4  gap-y-10 max-w-screen-md">
        {
          homeConstants.map(each => (
            <Link key={each.title} href={each.href} className="">
              <figure className="relative w-full border rounded-lg border-zinc-200 h-auto aspect-[1.8/1]">
                <Image fill src={each.image} alt={each.title} />
              </figure>
              <div className="mt-4">
                <h3 className="text-red-500/80 font-bold text-lg">{each.title}</h3>
                <p className="text-slate-800">{each.subtitle}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </main>
  )
}