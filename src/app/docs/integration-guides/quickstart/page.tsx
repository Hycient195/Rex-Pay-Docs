import { ListGroup, ListItem } from "@SharedComponents/Lists";
import { InfoBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function QuickStart() {
  return (
    <main className="">
      <PageHeading>Quickstart</PageHeading>
      <Paragraph>
        Welcome! With our APIs, you can make and receive payments in dozens of currencies and countries, with a variety of payment channels. Here&apos;s what you need to do:
      </Paragraph>
      <ParagraphHeading>Step 1. Create an account</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>
      <figure className="relative w-full max-w-screen-md h-auto aspect-video bg-black/30">

      </figure>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>

      <ListGroup>
        {
          Array.from({ length: 5 }).map((_, index: number) => (
            <ListItem index={index} key={`video-points=${index}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ab id.
            </ListItem>
          ))
        }
      </ListGroup>

      <ParagraphHeading>Step 2. Create an account</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ListGroup>
        {
         ["HTML Checkout", "In-app checkout", "Javascript inline script", "Libraries and plugins", "Direct API Integrations", ].map((item: string, index: number) => (
            <ListItem index={index} key={`video-points=${index}`}>
             {item}
            </ListItem>
          ))
        }
      </ListGroup>

      <InfoBox>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisiconntum lobortis et. Pellentesque dictum lorem vitae et  Pellen fhgjhkjzsd Lorem ipsum dolor sit amet, consectetur adipiscing
      </InfoBox>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading>Step 3 Create an account</ParagraphHeading>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>
    </main>
  )
}