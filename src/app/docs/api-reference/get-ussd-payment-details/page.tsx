import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function CharegeCard() {
  return (
    <main className="grid">
      <PageHeading>Get USSD Payment Details</PageHeading>

      <ParagraphHeading>
        <Paragraph>{'{{URL}}/api/pgs/payment/v1/getPaymentDetails/{{TransRef}}'}</Paragraph>
      </ParagraphHeading>

      <Paragraph>
        This endpoint is used to get the status of a USSD transaction.
      </Paragraph>
      
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
              [ "Password", "{{SECRETKEY}}"], 
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
      <br />

      <ParagraphHeading>PARAMS</ParagraphHeading>
      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full ">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
          </tr>
        </thead>
        <tbody>
          {
            [
              [ "transRef"], 
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

      <ParagraphHeading>Example Request</ParagraphHeading>
      <CodeBlock copy language={['JavaScript']}>
        {`var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("{{URL}}/api/pgs/payment/v1/getPaymentDetails/rexpaydocUSSD", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`}
      </CodeBlock>
      <Line />

      <ParagraphHeading>Example Response</ParagraphHeading>
      <CodeBlock copy language={['Json']}>
        {`{
  "referenceId": "rexpaydocUSSD",
  "clientId": "gaprodtest",
  "userId": "ga@gmail.com",
  "amount": 50,
  "fees": 0.75,
  "currency": "NGN",
  "createdAt": "2023-10-06 01:15:29.000+0000",
  "channel": "USSD",
  "status": "ONGOING",
  "statusMessage": "Request in progress",
  "providerReference": "23100640302541501589",
  "provider": "CoralPay",
  "providerInitiated": false,
  "providerResponse": "Request in progress",
  "paymentUrl": "https://checkout.myrexpay.ng/pay/16965549p3a6Dbdm6I",
  "clientName": "gaprodtest",
  "metadata": {
    "customerName": "Victor Musa",
    "email": "ga@gmail.com"
  }
}`}
      </CodeBlock>
    </main>
  )
}