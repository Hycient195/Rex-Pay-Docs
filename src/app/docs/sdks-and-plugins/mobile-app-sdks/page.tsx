import { WarningBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph } from "@SharedComponents/Texts";
import sharedImages from "@SharedConstants/images";
import Image from "next/image";

export default function MobileSDKs() {
  return (
    <main className="">
      <PageHeading>SDKs for mobile apps</PageHeading>

      <div className="grid grid-cols-2 mt-8 gap-4  gap-y-10 max-w-screen-md">
        {
          [{ image: sharedImages.android, text: "Android" }, { image: sharedImages.ios, text: "IOS" }, { image: sharedImages.flutter, text: "Flutter" }].map(each => (
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