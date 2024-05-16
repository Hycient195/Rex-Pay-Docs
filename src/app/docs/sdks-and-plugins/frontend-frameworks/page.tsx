import { PageHeading, Paragraph } from "@SharedComponents/Texts";
import sharedImages from "@SharedConstants/images";
import Image from "next/image";

export default function FrontendFrameworks() {
  return (
    <main className="">
      <PageHeading>Frontend Frameworks</PageHeading>
      <Paragraph>These libraries should be used on the frontend.</Paragraph>

      <div className="grid grid-cols-2 mt-5 gap-4  gap-y-10 max-w-screen-md">
        {
          [{ image: sharedImages.react, text: "React" }, { image: sharedImages.angular, text: "Angular" },].map(each => (
            <div key={each.text} className="grid grid-cols-[70px_1fr] items-center gap-3 lg:gap-4">
              <figure className="relative w-full rounded-lg h-auto aspect-square">
                <Image fill src={each.image} alt={each.text} />
              </figure>
              <h3 className="text-red-500/80 font-bold text-lg">{each.text}</h3>
            </div>
          ))
        }
      </div>
    </main>
  )
}