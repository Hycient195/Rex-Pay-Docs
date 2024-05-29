import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function CreatePayment() {
  return (
    <main className="grid">
      <PageHeading>Create Payment</PageHeading>
      <Paragraph>This is the first endpoint that is called regardless of payment method to be used.</Paragraph>

      <ParagraphHeading>AUTHORIZATION (Basic Auth)</ParagraphHeading>
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
              <tr key={`payment-row-${rowIndex}`} className="border border-slate-300/60 odd:bg-slate-400/20">
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
              <tr key={`payment-row-${rowIndex}`} className="border border-slate-300/60 odd:bg-slate-400/20">
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
      "reference": "sman23oyr1122",
      "amount": 2,
      "currency": "NGN",
      "userId": "awoyeyetimilehin@gmail.com",
      "callbackUrl":"",
      "metadata": {
        "email": "awoyeyetimilehin@gmail.com",
        "customerName":"Victor Musa"
      }
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