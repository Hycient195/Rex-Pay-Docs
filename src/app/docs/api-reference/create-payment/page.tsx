import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function CreatePayment() {
  return (
    <main className="grid">
      <PageHeading>Create Payment V2</PageHeading>

      <ParagraphHeading>Endpoint</ParagraphHeading>
      <Paragraph className="font-bold">{`{{URL}}/api/pgs/payment/v2/createPayment`}</Paragraph>
      {/* <ParagraphHeading>
        <Paragraph>{'{{URL}}/api/pgs/payment/v2/createPayment'}</Paragraph>
      </ParagraphHeading> */}

      <Paragraph>This is the first endpoint that is called regardless of payment method to be used.</Paragraph>

      <ParagraphHeading>AUTHORIZATION</ParagraphHeading>
      <Paragraph>Basic Auth</Paragraph>
      <ParagraphHeading>DESCRIPTION</ParagraphHeading>
      <Paragraph>This endpoint allows you to initiate a payment transaction…</Paragraph>
      <ParagraphHeading>Request Parameters</ParagraphHeading>
      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full ">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
            <td>Name</td>
            <td>Type</td>
            <td>Description</td>
            <td>Optional Mandatory</td>
          </tr>
        </thead>
        <tbody>
          {
            [
              [ "reference", "String", "Unique Transaction Reference Number", "false"],
              [ "userId", "String", "Customer Reference", "false"],
              [ "String", "String", "The Transaction Amount", "false"],
              [ "amount", "String", "The Transaction Currency", "false"],
              [ "currency", "String", "Callback URL on transaction completed", "true"],
              [ "callbackUrl", "Boolean", "The version of the API call", "true"],
              
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

      <ParagraphHeading>Request Body Example</ParagraphHeading>
      <CodeBlock copy language={["JSON", "React", "PHP", "Java"]}>
        {`{
  "reference": "143379339129",
  "userId": "ga",
  "amount": "51",
  "currency": "USD",
  "callbackUrl": "http://pgs.com",
  "isV2": false
}`}
      </CodeBlock>
      <br />

      <ParagraphHeading>Response Parameters</ParagraphHeading>
      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full ">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
            <td>Name</td>
            <td>Type</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {
            [
              [ "reference", "String", "Unique Transaction Reference Number"], 
              [ "clientId", "String", "Application Name"], 
              [ "paymentURL", "String", "Payment provider payment URL"], 
              [ "status", "String", "Payment Status"], 
              [ "paymentChannel", "String", "Payment Channel"], 
              [ "paymentUrlReference", "String", "Payment Unique Reference"], 
              [ "externalPaymentReference", "String", "External Payment Unique Reference"], 
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

      <ParagraphHeading>Response Body Example</ParagraphHeading>
      <CodeBlock copy language={["JSON", "React", "PHP", "Java"]}>
        {`{
  "reference": "143379339129",
  "clientId": "admintest7",
  "paymentUrl": "https://sandbox.globalaccelerex.com:6038/pay/16661108ZjGG7aY39B",
  "status": "CREATED",
  "paymentChannel": "DEFAULT",
  "paymentUrlReference": "16661108ZjGG7aY39B",
  "externalPaymentReference": "16661108ZjGG7aY39B"
}`}
      </CodeBlock>
      <Line />
      
      <ParagraphHeading>Error Responses</ParagraphHeading>
      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full ">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
            <td>Response Code</td>
            <td>Response Message</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {
            [
              [ "BAD_MESSAGE_ERROR", "Unexpected value sent for field paymentChannel", "Must be USSD, CARD, ACCOUNT OR DEFAULT"], 
              [ "VALIDATION_ERROR", "payment reference is required", "Enter Reference"], 
              [ "VALIDATION_ERROR", "customer reference is required", "Enter Customer ID"], 
              [ "BAD_MESSAGE_ERROR", "Unexpected value sent for field currency", "Must be either USD for dollar transactions, NGN for Naira transactions, GHS for Cedis transactions"], 
              [ "BAD_MESSAGE_ERROR", "Request sent cannot be converted", "Amount must be numerical format"], 
              
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
    </main>
  )
}