import CodeBlock from "@SharedComponents/CodeBlock";
import { InfoBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";
import Image from "next/image";
import sharedImages from "../../../../_SharedConstants/images";
import { ListGroup, ListItem } from "@SharedComponents/Lists";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="">
      <PageHeading>Checkout page</PageHeading>
      <Paragraph>RexPay supports a wide variety of methods for your customers to pay you, across a wide range of countries. When accepting payments, you can specify what payment methods you're willing to accept from your customers.</Paragraph>
      <Paragraph>There are two ways to specify your accepted payment methods.</Paragraph>

      <ParagraphHeading id="assemble-payment-details">Step 1. Assemble payment details</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading>Per payment</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <InfoBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisiconntum lobortis et. Pellentesque dictum lorem vitae et  Pellen fhgjhkjzsd Lorem ipsum dolor sit amet, consectetur adipiscing</InfoBox>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum </Paragraph>

      <ParagraphHeading id="get-a-payment-link">Step 2: Get a payment link</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum </Paragraph>

      <CodeBlock copy>{
      `const response = await got.post("https://api.flutterwave.com/v3/payments", {
  headers: {
    Authorization: \`Bearer \${process.env.FLW_SECRET_KEY}\`
    },
  json: {
    // Your payload
  }
});`}</CodeBlock>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <CodeBlock copy>{
      `const response = await got.post("https://api.flutterwave.com/v3/payments", {
  headers: {
    Authorization: \`Bearer \${process.env.FLW_SECRET_KEY}\`
    },
  json: {
    // Your payload
  }
});`}</CodeBlock>

    <ParagraphHeading id="redirect-user-to-payment-link">Step 3: Redirect the user to the payment link</ParagraphHeading>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

    <figure className="relative my-4 w-full h-auto aspect-video bg-black/30">
      <Image fill src={sharedImages.redirectUserToPayment} alt="Authentication live mode" />
    </figure>

    <ParagraphHeading id="after-the-payment">Step 4: After the payment</ParagraphHeading>
    <Paragraph>Four things will happen when payment is done (successful):</Paragraph>

    <ListGroup className="gap-3">
      {
        [
          "We'll redirect to your redirect_url with status, tx_ref, and transaction_id query parameters after payment is complete.",
          "We'll send you a webhook if you have that enabled. Learn more about webhooks and see examples here.",
          "We'll send an email receipt to your customer if the payment was successful (unless you've disabled that).",
          "We'll send you an email notification (unless you've disabled that).",
        ].map((each, index: number) => (
          <ListItem index={index} key={`payment-item-${index}`}>{each}</ListItem>
        ))
      }
    </ListGroup>

    <Paragraph>On your server, you should handle the redirect and always verify the final state of the transaction.</Paragraph>
    <Paragraph>Here's what transaction verification could look like in a Node.js app with our backend SDK:</Paragraph>

    <CodeBlock copy>{
      `const response = await got.post("https://api.flutterwave.com/v3/payments", {
  headers: {
    Authorization: \`Bearer \${process.env.FLW_SECRET_KEY}\`
    },
  json: {
    // Your payload
  }
});`}</CodeBlock>

    <ParagraphHeading id="if-payment-fails">What if the payment fails?</ParagraphHeading>
    <Paragraph>If the payment attempt fails (for instance, due to insufficient funds), you don't need to do anything. We'll keep the payment page open, so the customer can try again until the payment succeeds or they choose to cancel, after which we'll redirect to the redirect_url with the query parameters tx_ref and a status of failed.</Paragraph>
    <Paragraph>If you have webhooks enabled, we'll send you a notification for each failed payment attempt. This is useful in case you want to later reach out to customers who had issues paying. See our <Link href="" className="text-red-700/60">webhooks guide</Link> for an example.</Paragraph>
    </main>
  )
}