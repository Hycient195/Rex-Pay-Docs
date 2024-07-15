import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function CharegeCard() {
  return (
    <main className="grid">
      <PageHeading>Get Transaction Status</PageHeading>

      <ParagraphHeading>
        <Paragraph>{'{{URL}}/api/cps/v1/getTransactionStatus'}</Paragraph>
      </ParagraphHeading>

      <Paragraph>
        This endpoint is used to get the status of a transaction.
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

      <ParagraphHeading>BODY PARAMS</ParagraphHeading>
      <CodeBlock copy>
        {`{
  "transactionReference": "sm23oyr1122"
}`}
      </CodeBlock>
      <Line />

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
              [ "transactionReference", "String", "Unique transaction reference ID", "true"],
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
        {`var raw = "{\r\n  \"transactionReference\": \"sm23oyr1122\"\r\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("{{URL}}/api/cps/v1/getTransactionStatus", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`}
      </CodeBlock>
      <Line />
      
       <ParagraphHeading>Response Parameters</ParagraphHeading>
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
              [ "amount", "Number", "Transaction Amount", "true"],
              [ "paymentReference", "String", "Payment reference id", "true"],              
              [ "transactionDate", "String", "Transaction date", "true"],              
              [ "fees", "Number", "Transaction charge fee", "true"],             
              [ "currency", "String", "Transaction currency", "true"],                   
              [ "responseCode", "Number", "Status code of request", "true"],              
              [ "responseDescription", "Number", "Status description of request", "true"],              
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

      <ParagraphHeading>Example Response</ParagraphHeading>
      <CodeBlock copy language={['Json']}>
        {`{
  "amount": "2.03",
  "paymentReference": "sm23oyr1122",
  "transactionDate": "06/10/2023 00:28",
  "currency": "NGN",
  "fees": 0.03,
  "channel": "CARD",
  "responseCode": "00",
  "responseDescription": "Transaction Successful"
}`}
      </CodeBlock>
    </main>
  )
}