import CodeBlock from "@SharedComponents/CodeBlock";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";
import Image from "next/image";
import sharedImages from "../../../../_SharedConstants/images";
import { ListGroup, ListItem } from "@SharedComponents/Lists";

export default function CheckoutPage() {
  return (
    <main className="">
      <PageHeading>Checkout page</PageHeading>
      <Paragraph>RexPay supports a wide variety of methods for your customers to pay you, across a wide range of countries. When accepting payments, you can specify what payment methods you are willing to accept from your customers.</Paragraph>
      <Paragraph>There are two ways to specify your accepted payment methods.</Paragraph>

      <ParagraphHeading id="assemble-payment-details">Step 1. Assemble payment details</ParagraphHeading>
      <Paragraph>From your server, call our create payment endpoint with the payment details.</Paragraph>

      <CodeBlock copy language={['JavaScript']}>{
      `var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "reference": "sm23oyr1122",
  "amount": 2,
  "currency": "NGN",
  "userId": "awoyeyetimilehin@gmail.com",
  "callbackUrl": "https://your_callback_url.com",
  "metadata": {
    "email": "awoyeyetimilehin@gmail.com",
    "customerName": "Victor Musa"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("{{URL}}/api/pgs/payment/v2/createPayment", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`}
      </CodeBlock>
      <br />
      
      <ParagraphHeading id="get-a-payment-link">Step 2: Get a payment link</ParagraphHeading>
      <Paragraph>We will return a link to a payment page. Redirect your customer to this link to make the payment.</Paragraph>

      <figure className="relative my-4 w-full h-auto">
        <Image src={sharedImages.checkoutResp} alt="checkout response" />
      </figure>

      <Paragraph>After redirecting to the payment URL, you will see the checkout page as shown below.</Paragraph>
      <figure className="relative my-4 w-full h-auto aspect-video bg-black/30">
        <Image fill src={sharedImages.redirectUserToPayment} alt="Authentication live mode" />
      </figure>
      

    <ParagraphHeading id="redirect-the-customer-back-to-merchant-website">Step 3: Redirect the customer back to merchant website</ParagraphHeading>
    <Paragraph>When the transaction is completed, we will redirect the customer back to you.</Paragraph>

    <ParagraphHeading id="after-the-payment">Step 4: After the payment</ParagraphHeading>
    <Paragraph>Four things will happen when payment is done (successful):</Paragraph>

    <ListGroup className="gap-3">
      {
        [
          "We will redirect to your callback URL after payment is complete.",
          "We will send an email receipt to your customer if the payment was successful (if not disabled).",
          "We will send you an email notification (if not disabled).",
        ].map((each, index: number) => (
          <ListItem index={index} key={`payment-item-${index}`}>{each}</ListItem>
        ))
      }
    </ListGroup>

    <Paragraph>On your server, you should handle the redirect and always verify the final state of the transaction.</Paragraph>
    </main>
  )
}