import { WarningBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph } from "@SharedComponents/Texts";
import sharedImages from "@SharedConstants/images";
import Image from "next/image";

const frameworks = [
  {
    image: sharedImages.android,
    text: "Android",
    url: 'https://github.com/accelerex-developer/RexPayAndroid'
  }, 
  {
    image: sharedImages.ios,
    text: "IOS",
    url: 'https://github.com/accelerex-developer/RexPayiOS'
  }, 
  {
    image: sharedImages.flutter,
    text: "Flutter",
    url: 'https://github.com/accelerex-developer/RexPayFlutter/tree/master'
  }
]

export default function MobileSDKs() {
  return (
    <main className="">
      <PageHeading>SDKs for mobile apps</PageHeading>

      <div className="grid grid-cols-2 mt-8 gap-4  gap-y-10 max-w-screen-md">
        {
          frameworks.map(each => (
            <a key={each.text} href={each.url}>
              <div className="grid grid-cols-[70px_1fr] items-center gap-3 lg:gap-4">
                <figure className="relative w-full rounded-lg h-auto aspect-square">
                  <Image fill src={each.image} alt={each.text} />
                </figure>
                <h3 className="text-red-500/80 font-bold text-lg">{each.text}</h3>
              </div>
            </a>
          ))
        }
      </div>
    </main>
  )
}