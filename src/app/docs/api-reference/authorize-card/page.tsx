import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function AuthorizeCard() {
  return (
    <main className="grid">
      <PageHeading>Authorize Card</PageHeading>

      <ParagraphHeading>
        <Paragraph>{'{{URL}}/api/pgs/payment/v2/createPayment'}</Paragraph>
      </ParagraphHeading>

      <Paragraph>This is the first endpoint that is called regardless of payment method to be used.</Paragraph>

      <ParagraphHeading>AUTHORIZATION</ParagraphHeading>
      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full ">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
            <td>Username</td>
            <td>Password</td>
          </tr>
        </thead>
        <tbody>
          {
            [
              [ "Username", "{{USERNAME}}"], 
              [ "Password", "{{PASSWORD}}"], 
            ].map((row, rowIndex: number) => (
              <tr key={`payment-row-${rowIndex}`} className="border border-slate-300/60">
                {
                  row.map((col, colIndex: number) => (
                    <td key={`payment-column-${colIndex}`} className=" break-all">{col}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
      <br />

      <ParagraphHeading>HEADERS</ParagraphHeading>
      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full ">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
          </tr>
        </thead>
        <tbody>
          {
            [
              [ "Content-Type", "application/json"], 
            ].map((row, rowIndex: number) => (
              <tr key={`payment-row-${rowIndex}`} className="border border-slate-300/60">
                {
                  row.map((col, colIndex: number) => (
                    <td key={`payment-column-${colIndex}`} className=" break-all">{col}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>

      <ParagraphHeading>BODY PARAMS</ParagraphHeading>
      <CodeBlock copy>
        {`{
  "encryptedResponse": "-----BEGIN PGP MESSAGE-----\nVersion: Didisoft OpenPGP Library for Java 3.2\n\nhIwDT9UVaCho7XYBA/9bAy3u0+5IdiwWgAFImPxONXAFG+w0WaiH46AMSCRP9mZd\nymNw7kvFOQwRj4eYeGcD4EXUZDwG1Na+tLhDPfusflIWYJD/G4U3RSVBv9UNt5VB\n5tret3z8ed1FAF64UqoqQLBeGFBKorvoNwLER/vPIW7z/qw0OzuKPk0/RpOmbtLA\nKAH+gvMq2hh42Z74w4plXa2ypW7k6HkFio03bhAaIwxcSbh2MkeCtG67EtPaxJcV\nnvkJW5ixe7p4rh7vIkNaeMlKln3R9h1Kg4jy6jhlkAeMIXEb24V/w2yyhReAG7Vf\n6ssg9uR0w+CCFG54mdeP+11hcftTVqSdV9pCP2V6W79/FniGMUN9EpOeUmSwcCCs\nGo/49erBiTkOlypcXFKnwHSInd5MwnDuQ5BJy1x3nAcNURT/cipBnBkn3XuFCAde\nBCZtdGb73iGci5sW3T8QMXPm3wRVaJ6oqqxdw/5TIzcn1ErkIrXmhTM=\n=E5pi\n-----END PGP MESSAGE-----\n"
}`}
      </CodeBlock>
      <Line />

      <ParagraphHeading>Example Request</ParagraphHeading>
      <CodeBlock copy language={['JavaScript']}>
        {`var myHeaders = new Headers();
myHeaders.append("Content-Type",
"application/json");

var raw = JSON.stringify({
      "reference": "sm23oyr1122",
      "amount": 2,
      "currency": "NGN",
      "userId": "awoyeyetimilehin@gmail.com",
      "callbackUrl": "",
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
      <Line />
      

      <ParagraphHeading>Example Response</ParagraphHeading>
      <CodeBlock copy language={['Body']}>
        {`{
  "reference": "sm23oyr1122",
  "clientId": "timilehinawoyeyeglobalaccelerexcom",
  "paymentUrl": "https://checkout-dev.globalaccelerex.com/pay/16965521OQbS4EfoEX",
  "status": "CREATED",
  "paymentChannel": "DEFAULT",
  "paymentUrlReference": "16965521OQbS4EfoEX",
  "externalPaymentReference": "16965521OQbS4EfoEX",
  "fees": 0.03,
  "currency": "NGN"
}`}
      </CodeBlock>
    </main>
  )
}