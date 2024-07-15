import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { ListGroup, ListItem } from "@SharedComponents/Lists";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

const steps = [
  'The ACCOUNT payment method allows users to make payments by initiating a bank transfer. The following steps outline the process:',
  'Call the Create Payment endpoint to initiate a payment transaction.',
  'Call the Pay with Transfer endpoint with the necessary details to obtain the account number for the bank transfer.',
  'Make a transfer to the account number received from the response. ',
  'If a callbackUrl is provided in the create payment payload, you will receive transaction notifications. ',
  'Call the Get Transaction Status endpoint to check the status of the transaction.',
]

export default function CharegeByTransfer() {
  return (
    <main className="grid">
      <PageHeading>Charge By Transfer</PageHeading>

      <ParagraphHeading>
        <Paragraph>{'{{URL}}/api/cps/v1/initiateBankTransfer'}</Paragraph>
      </ParagraphHeading>

      <Paragraph>ACCOUNT PAYMENT METHOD </Paragraph>

      <Paragraph>
        The ACCOUNT payment method allows users to make payments by initiating a bank transfer. The following steps outline the process:
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
  "customerName": "customername",
  "reference": "rexpaydoc2",
  "amount": "100",
  "customerId": "yourcustomermail@gmail.com"
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
              [ "amount", "Number", "Transaction Amount", "true"],
              [ "transactionReference", "String", "Transaction reference id", "true"],              
              [ "accountNumber", "Number", "Transaction account number", "true"],              
              [ "accountName", "String", "Name of recipient", "true"],              
              [ "bankName", "String", "Name of recipient's bank", "true"],              
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

      <ParagraphHeading>Example Request</ParagraphHeading>
      <CodeBlock copy language={['JavaScript']}>
        {`{
  "amount": "101.50",
  "transactionReference": "rexpaydoc2",
  "accountNumber": "8767949853",
  "accountName": "John Doe",
  "bankName": "WEMA",
  "responseCode": "00",
  "responseDescription": "Success"
}`}
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
              [ "transactionReference", "String", "Transaction reference id", "true"],              
              [ "accountNumber", "Number", "Transaction account number", "true"],              
              [ "accountName", "String", "Name of recipient", "true"],              
              [ "bankName", "String", "Name of recipient's bank", "true"],              
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
  "amount": "101.50",
  "transactionReference": "rexpaydoc2",
  "accountNumber": "8767949853",
  "accountName": "John Doe",
  "bankName": "WEMA",
  "responseCode": "00",
  "responseDescription": "Success"
}`}
      </CodeBlock>
    </main>
  )
}