import { ListGroup, ListItem } from "@SharedComponents/Lists";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";
import Image from "next/image";
import sharedImages from "../../../../_SharedConstants/images";
import { InfoBox, WarningBox } from "@SharedComponents/TextBoxes";
import CodeBlock from "@SharedComponents/CodeBlock";
import Link from "next/link";

export default function Authentication() {
  return (
    <main className="">
      <PageHeading id="authentication">Authentication</PageHeading>
      <ParagraphHeading id="test-vs-live-mode">Test Mode vs Live Mode</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Paragraph>

      <ListGroup className="gap-5 mb-5">
        {
         [
          { title: "Live Mode", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et" },
          { title: "Test Mode", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et" },
        ].map((item: any, index: number) => (
            <ListItem index={index} key={`video-points=${index}`} className="">
              <div className=""><strong>{item.title}: </strong> {item.text}</div>
            </ListItem>
          ))
        }
      </ListGroup>

      <Paragraph className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <figure className="relative my-4 w-full max-w-screen-md h-auto aspect-video bg-black/30">
        <Image fill src={sharedImages.auth1} alt="Authentication live mode" />
      </figure>

      <ParagraphHeading id="api-keys">API Keys</ParagraphHeading>

      <Paragraph>When you create a Rex Pay account, you&apos;re given three kinds of API keys:</Paragraph>

      <ListGroup className="gap-5 mb-5">
        {
         [
          { title: "Secret Key", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et" },
          { title: "Public key", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et" },
          { title: "Encryption key", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et" },
        ].map((item: any, index: number) => (
            <ListItem index={index} key={`video-points=${index}`} className="">
              <div className=""><strong>{item.title}: </strong> {item.text}</div>
            </ListItem>
          ))
        }
      </ListGroup>

      <ParagraphHeading id="retrieving-your-api-keys" className="mt-14 bg-eme">Retrieving your API Keys</ParagraphHeading>

      <Paragraph>Your API keys are very vital to making requests successfully to our servers. To get your keys on testmode:</Paragraph>

      <ListGroup>
        {
         [
          "Log into your Rexpay account",
          "Navigate to settings",
          "Select the API Keys open in the Developers section of the menu to view and copy your keys.", 
        ].map((item: string, index: number) => (
            <ListItem index={index} key={`video-points=${index}`}>
             {item}
            </ListItem>
          ))
        }
      </ListGroup>

      <figure className="relative my-4 w-full max-w-screen-md h-auto aspect-video bg-black/30">
        <Image fill src={sharedImages.auth1} alt="Authentication live mode" />
      </figure>

      <Paragraph>On the live environment, API key management is slightly different. To better secure your live transactions, we mask them so no one can have access to them.</Paragraph>

      <WarningBox className="!my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisiconntum lobortis et. Pellentesque dictum lorem vitae et  Pellen fhgjhkjzsd Lorem ipsum dolor sit amet, consectetur adipiscing</WarningBox>

      <ParagraphHeading id="authorizing-api-calls" className="mt-14 bg-eme">Authorizing API calls</ParagraphHeading>

      <Paragraph>All API calls on Rexpay are authenticated. API requests made without authorization will fail with the status code 401: Unauthorized.</Paragraph>

      <InfoBox className="!my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisiconntum lobortis et. Pellentesque dictum lorem vitae et  Pellen fhgjhkjzsd Lorem ipsum dolor sit amet, consectetur adipiscing</InfoBox>

      <Paragraph>To authorize API calls from your server, pass your secret key as a bearer token. This means passing an Authorization header with a value of &quot;Bearer: YOUR_SECRET_KEY&quot;.</Paragraph>

      <Paragraph>For example, an API call could look like this in Node.js:</Paragraph>
      
      <CodeBlock>
        {
          `const response = await got.post("https://api.flutterwave.com/v3/payments", {
  headers: {
    Authorization: \`Bearer \${process.env.FLW_SECRET_KEY}\`
  },
  json: {
    // Your payload
  }
});`
        }
      </CodeBlock>

      <Paragraph>If you&apos;re using one of our <Link className="underline" href="/docs/sdk-and-plugins/backend-libraries">backend SDKs</Link>, you don&apos;t need to pass the header manually; instead you&apos;ll provide your keys when initialising the library.</Paragraph>

      <CodeBlock>{
      `// Install with: npm i RexPay-node-v3
        
const Flutterwave = require(&apos;RexPay-node-v3&apos;);
const flw = new RexPay (process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);
// Subsequqent calls will automatically have the header added
flw.Misc.bvn({bvn: "123456789010"})
  .then(response => console.log(response)
`}</CodeBlock>
    </main>
  )
}