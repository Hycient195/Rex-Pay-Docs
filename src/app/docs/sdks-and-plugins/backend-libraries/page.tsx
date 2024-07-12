import { WarningBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph } from "@SharedComponents/Texts";
import sharedImages from "@SharedConstants/images";
import Image from "next/image";

const frameworks = [
  {
    image: sharedImages.java,
    text: "Java",
    url: 'https://github.com/accelerex-developer/RexPayJava/tree/master'
  }, 
  {
    image: sharedImages.cSharp,
    text: "C#",
    url: 'https://github.com/accelerex-developer/RexPayCSharp/'
  }, 
  {
    image: sharedImages.python,
    text: "Python",
    url: '#'
  }, 
  {
    image: sharedImages.php,
    text: "PHP",
    url: 'https://github.com/accelerex-developer/RexPayPHP'
  }
]

export default function BackendFrameworks() {
  return (
    <main className="">
      <PageHeading>Backend Libraries</PageHeading>
      <Paragraph>These SDKs should be used on the backend.</Paragraph>

      <WarningBox className="mt-4">
        <h3 className="text-slate-800 font-semibold">Limited support</h3>
        <p className="mt-3">Not all endpoints are supported by our SDKs yet. You will see a list of which endpoints are supported for each SDK in its documentation. If you find an endpoint that is missing in your preferred SDK, please send in a PR.</p>
      </WarningBox>

      <div className="grid grid-cols-2 mt-8 gap-4  gap-y-10 max-w-screen-md">
        {
          frameworks.map(each => (
            <a key={each.text} href={each.url} target="_blank">
              <div key={each.text} className="grid grid-cols-[70px_1fr] items-center gap-3 lg:gap-4">
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