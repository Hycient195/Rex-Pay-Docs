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
      <Paragraph>RexPay account supports two modes of operation. </Paragraph>

      <ListGroup className="gap-5 mb-5">
        {
         [
          { title: "Live Mode", text: "The transactions are real, and the effects are real. This should only be used once you have thoroughly tested your integration with this method and are confident that it is working properly." },
          { title: "Test Mode", text: "The transactions are not real, but the effects are the same. The only cards that can be used are our test cards and bank accounts." },
        ].map((item: any, index: number) => (
            <ListItem index={index} key={`video-points=${index}`} className="">
              <div className=""><strong>{item.title}: </strong> {item.text}</div>
            </ListItem>
          ))
        }
      </ListGroup>

      <Paragraph className="mt-2">To switch between Live and Test modes, click Developer Tools at the bottom of the menu sidebar as seen below.</Paragraph>

      <figure className="relative my-4 w-full max-w-screen-md h-auto aspect-video">
        <Image  src={sharedImages.auth1} alt="Authentication live mode" />
      </figure>

      {/* <ParagraphHeading id="api-keys">API Keys</ParagraphHeading>

      <Paragraph>When you create a RexPay account, you are given three kinds of API keys:</Paragraph>

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
      </ListGroup> */}

      <ParagraphHeading id="retrieving-your-api-keys" className="mt-14 bg-eme">Retrieving your API Keys</ParagraphHeading>

      <Paragraph>Your API keys are very vital to making requests successfully to our servers. When you create an account on RexPay, a secret ket is generated for you. To get your keys on test mode:</Paragraph>

      <ListGroup>
        {
         [
          "Log into your RexPay account",
          "Navigate to Developer Tools",
          "View and copy your secret keys.", 
        ].map((item: string, index: number) => (
            <ListItem index={index} key={`video-points=${index}`}>
             {item}
            </ListItem>
          ))
        }
      </ListGroup>

      <figure className="relative my-4 w-full max-w-screen-md h-auto aspect-video">
        <Image src={sharedImages.auth1} alt="Authentication live mode" />
      </figure>

      {/* <Paragraph>On the live environment, API key management is slightly different. To better secure your live transactions, we mask them so no one can have access to them.</Paragraph>

      <WarningBox className="!my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisiconntum lobortis et. Pellentesque dictum lorem vitae et  Pellen fhgjhkjzsd Lorem ipsum dolor sit amet, consectetur adipiscing</WarningBox> */}

      <ParagraphHeading id="authorizing-api-calls" className="mt-14 bg-eme">Authorizing API calls</ParagraphHeading>

      <Paragraph>All API calls on RexPay are authenticated. API requests made without authorization will fail with the status code 401: Unauthorized.</Paragraph>

      <InfoBox className="!my-5">
        Your secret key can perform unrestricted actions on your RexPay account. It should remain confidential and be stored only on your servers, preferably as an environment variable. Ensure it is not included in your Git repository or front-end JavaScript code.
      </InfoBox>

      <Paragraph>
        RexPay Uses Basic  Auth. To authorize API calls from your server, pass your email as username and your secret key as password. This means passing an Authorization header with a value of <code>&quot;&quot;Basic&quot;, base64_string_of_username_and_password({'{Username:Password}'})&quot;</code>.
      </Paragraph>

      <Paragraph>For example, an API call could look like this in Node.js:</Paragraph>
      
      <CodeBlock copy>
        {
          `const response = await got.post("https://pgs-sandbox.globalaccelerex.com/api/pgs/payment/v2/createPayment", {
  headers: {
    Authorization: Basic Base64Encode(CLIENT_ID:SECRET_KEY}
  },
  json: {
    // Your payload
  }
});`
        }
      </CodeBlock>

      <Paragraph>If you are using one of our <Link className="underline" href="/docs/sdks-and-plugins/backend-libraries">backend SDKs</Link>, you do not need to pass the header manually; instead you will provide your keys when initialising the library.</Paragraph>

      <CodeBlock copy>{
      `// Install with: npm i RexPay-node-v3
        
const RexPay = require(&apos;RexPay-node-v3&apos;);
const rxp = new RexPay (process.env.RXP_PUBLIC_KEY, process.env.RXP_SECRET_KEY);
// Subsequqent calls will automatically have the header added
flw.Misc.bvn({bvn: "123456789010"})
  .then(response => console.log(response)
`}</CodeBlock>
    </main>
  )
}