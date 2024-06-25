import { ListGroup, ListItem } from "@SharedComponents/Lists";
import { InfoBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

const stepOne = [
  'Collect payments using simulated card data',
  'Make transfers to dummy accounts',
  'Configure your integration',
  'Complete your KYC and go live.'
]

const stepTwo = [
  'Redirect Checkout',
  'In-app Checkout',
  'Libraries and Plugins',
  'Direct API Integrations'
]

export default function QuickStart() {
  return (
    <main className="">
      <PageHeading>Quickstart</PageHeading>
      <Paragraph>
        Welcome! With our APIs, you can make and receive payments in dozens of currencies and countries, with a variety of payment channels. Here is what you need to do:
      </Paragraph>
      <ParagraphHeading>Step 1. Create an account</ParagraphHeading>
      <Paragraph>Begin your journey by creating a <a href="https://www.myrexpay.ng/signup" style={{color: '#FF4512'}}>RexPay account</a>. Upon signing up, you will automatically have access to the test environment.</Paragraph>
      <figure className="relative w-full max-w-screen-md h-auto aspect-video bg-black/30">
        <iframe
          style={{
            width: '100%',
            height: '100%'
          }}
          src="https://www.youtube.com/embed/JY4z0GMM_5M?si=R93B3N_qZIaG2NZZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </figure>
      <Paragraph>In the test environment, you would be able to:</Paragraph>
      {/* 
      In the test environment, you would be able to:


      */}

      <ListGroup>
        {
          stepOne.map((step, index: number) => (
            <ListItem index={index} key={`video-points=${index}`}>
              {step}
            </ListItem>
          ))
        }
      </ListGroup>

      <ParagraphHeading>Step 2. Configure your integration</ParagraphHeading>
      <Paragraph>Select from our range of integration methods to build your solution. Some of our popular options include:</Paragraph>

      <ListGroup>
        {
         stepTwo.map((step: string, index: number) => (
            <ListItem index={index} key={`video-points=${index}`}>
             {step}
            </ListItem>
          ))
        }
      </ListGroup>

      {/* <InfoBox>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisiconntum lobortis et. Pellentesque dictum lorem vitae et  Pellen fhgjhkjzsd Lorem ipsum dolor sit amet, consectetur adipiscing
      </InfoBox>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph> */}

      <ParagraphHeading>Step 3. Complete your KYC</ParagraphHeading>
      <Paragraph>In order to take your account live, we will need to review your account details and profile it correctly to ensure you have the best experience. In order to be able to complete this review, you will need to submit your business documents as well as any other relevant information that may help us with the assessment.</Paragraph>

      <ParagraphHeading>Step 4. Accept payment from your customers</ParagraphHeading>
      <Paragraph>You can start collecting payments from your customers once your account has been approved (check out this quick tutorial to learn how to use your dashboard once it has been approved).</Paragraph>
    </main>
  )
}