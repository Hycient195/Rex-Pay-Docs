import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { ListGroup, ListItem } from "@SharedComponents/Lists";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

const steps = [
  'Call the Create Payment endpoint to initiate a payment transaction.',
  'Call the Make Payment endpoint with the necessary details to complete the payment.',
  'Input the provider response into your USSD device to proceed with the payment.',
  'If a callbackUrl is provided in the Create Payment payload, you will receive transaction notifications',
  'To retrieve payment details, call the Get Payment Details endpoint.',
]

export default function CharegeByUssd() {
  return (
    <main className="grid">
      <PageHeading>Charge By USSD</PageHeading>

      <ParagraphHeading>
        <Paragraph>{'{{URL}}/api/pgs/payment/v1/makePayment'}</Paragraph>
      </ParagraphHeading>

      <Paragraph>USSD PAYMENT METHOD </Paragraph>

      <Paragraph>
        The USSD payment method allows users to make payments using Unstructured Supplementary Service Data (USSD) technology. The following steps outline the process:
      </Paragraph>
      
      <ListGroup>
        {
          steps.map((step, index: number) => (
            <ListItem index={index} key={`video-points=${index}`}>
              {step}
            </ListItem>
          ))
        }
      </ListGroup>
      
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

      <ParagraphHeading>BODY PARAMS</ParagraphHeading>
      <CodeBlock copy>
        {`{
  "reference":"rexpaydocUSSD",
  "userId":"08102164545",
  "amount":50,
  "currency":"NGN",
  "callbackUrl":"http://pgs.com",
  "paymentChannel":"USSD"
}`}
      </CodeBlock>
      <Line />

      <ParagraphHeading>Example Request</ParagraphHeading>
      <CodeBlock copy language={['JavaScript']}>
        {`var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "reference": "rexpaydocUSSD",
  "userId": "08102164545",
  "amount": 50,
  "currency": "NGN",
  "callbackUrl": "http://pgs.com",
  "paymentChannel": "USSD"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("{{URL}}/api/pgs/payment/v1/makePayment", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`}
      </CodeBlock>
      <Line />
      

      <ParagraphHeading>Example Response</ParagraphHeading>
      <CodeBlock copy language={['Json']}>
        {`{
  "reference": "rexpaydocUSSD",
  "clientId": "gaprodtest",
  "paymentUrl": "https://checkout.myrexpay.ng/pay/16965549p3a6Dbdm6I",
  "status": "ONGOING",
  "paymentChannel": "USSD",
  "providerResponse": "1589#",
  "paymentUrlReference": "16965549p3a6Dbdm6I",
  "providerExtraInfo": "4001GPG1**4001GPG10000001",
  "externalPaymentReference": "16965549p3a6Dbdm6I",
  "fees": 0.75,
  "currency": "NGN"
}`}
      </CodeBlock>
    </main>
  )
}