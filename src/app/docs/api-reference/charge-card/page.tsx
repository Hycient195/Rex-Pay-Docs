import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { ListGroup, ListItem } from "@SharedComponents/Lists";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

const steps = [
  'Call the Create Payment endpoint to initiate a payment transaction.',
  'Encrypt the chargeCard payload with the rexpay public key and call the Charge Card endpoint with the encrypted payload.',
  'Decrypt the response from the Charge Card endpoint using your privateKey generated.',
  'Based on the responseCode of the Charge Card endpoint:',
  'If 00: Transaction Successful.',
  'If TO: Call Authorize Card endpoint to finalize the transaction.',
  'If SO: A redirect link and HTTP method is part of the response which must be triggered to fill in the necessary data.',
  'Call the Get Transaction Status endpoint to check the status of the transaction.',
]

export default function CharegeCard() {
  return (
    <main className="grid">
      <PageHeading>Charge Card</PageHeading>

      <ParagraphHeading>
        <Paragraph>{'{{URL}}/api/cps/v1/chargeCard'}</Paragraph>
      </ParagraphHeading>

      <Paragraph>CARD PAYMENT METHOD</Paragraph>

      <Paragraph>
        The CARD payment method allows users to make payments using credit/debit cards. The following steps outline the process:
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

      <ParagraphHeading>Object to encrypt</ParagraphHeading>
      <CodeBlock copy>
        {`{
  "reference" : "(reference generated on createPayment",
  "amount" : "100",
  "customerId" : "tname@gmail.com",
  "cardDetails" : {
  "authDataVersion" : "1",
  "pan" : "5976222222299999",
  "expiryDate" : "1230",
  "cvv2" : "456",
  "pin" : "4178"
  }
}`}
      </CodeBlock>
      
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
    "encryptedRequest": "-----BEGIN PGP MESSAGE-----\nVersion: Didisoft OpenPGP Library for Java 3.2\n\nhIwDT9UVaCho7XYBA/9W5WiA9I4mQ67igGjKuvVRhbZojqhNKE6S0dXU3HC8BmOm\nj6LrdLsAe5bhILhPRRf2xl/oaODWy4dUf7Sstx8gcMJhJuvmpYLX6OiYjhhBTK+i\nmthv+njBLkOdK/0/Ugf+nY/+12IAi/u+Z8/yl17ye5aHLEVHl2vKGPAcSACX39LA\nOQHGM9z6ccc0n3idnZRMdqb5qkkpsy3InbWzSSzf/WK0Ad7Cc+ASz22OaSfC5Eux\njmp7Dblseoif00XWDM6izeeo/DC2Z79oJaeQ+yezIBtZcyTurU1kQtz0UYgsgofY\nphzHCFg0POQVLP7PYve2G8OAx+M7O8bra3TzZQhiQVCBMP3nt/YuWHEAoqOX8QbB\nxcQs9EVRpP7HeHmngWSCN1l0qPc8XR50A0RJ/5lnBN4nvRq7eguC4Ad0eF9Frbe2\n7fGeR3fCouDjVxHwox0esSR8drVuk2tLOktnUd2LY92mvgcOdrDXkA+tlmkMFUk6\njkU2bfyEf81q9w==\n=i9oR\n-----END PGP MESSAGE-----\n"
}`}
      </CodeBlock>
      <Line />

      <ParagraphHeading>Example Request</ParagraphHeading>
      <CodeBlock copy language={['JavaScript']}>
        {`var myHeaders = new Headers();

var raw = "{\r\n    \"encryptedRequest\": \"-----BEGIN PGP MESSAGE-----\\nVersion: Didisoft OpenPGP Library for Java 3.2\\n\\nhIwDT9UVaCho7XYBA/9W5WiA9I4mQ67igGjKuvVRhbZojqhNKE6S0dXU3HC8BmOm\\nj6LrdLsAe5bhILhPRRf2xl/oaODWy4dUf7Sstx8gcMJhJuvmpYLX6OiYjhhBTK+i\\nmthv+njBLkOdK/0/Ugf+nY/+12IAi/u+Z8/yl17ye5aHLEVHl2vKGPAcSACX39LA\\nOQHGM9z6ccc0n3idnZRMdqb5qkkpsy3InbWzSSzf/WK0Ad7Cc+ASz22OaSfC5Eux\\njmp7Dblseoif00XWDM6izeeo/DC2Z79oJaeQ+yezIBtZcyTurU1kQtz0UYgsgofY\\nphzHCFg0POQVLP7PYve2G8OAx+M7O8bra3TzZQhiQVCBMP3nt/YuWHEAoqOX8QbB\\nxcQs9EVRpP7HeHmngWSCN1l0qPc8XR50A0RJ/5lnBN4nvRq7eguC4Ad0eF9Frbe2\\n7fGeR3fCouDjVxHwox0esSR8drVuk2tLOktnUd2LY92mvgcOdrDXkA+tlmkMFUk6\\njkU2bfyEf81q9w==\\n=i9oR\\n-----END PGP MESSAGE-----\\n\"\r\n}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("{{URL}}/api/cps/v1/chargeCard", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`}
      </CodeBlock>
      <Line />
      

      <ParagraphHeading>Example Response</ParagraphHeading>
      <CodeBlock copy language={['Json']}>
        {`{
  "reference": "sm23oyr1122",
  "clientId": "dummy@gmail.com",
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