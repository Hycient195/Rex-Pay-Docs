import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";
import sharedImages from "@SharedConstants/images";
import Image from "next/image";
import Link from "next/link";

export default function AuthorizeCard() {
  return (
    <main className="grid">
      <PageHeading>Authorize Card</PageHeading>

      <ParagraphHeading>
        <Paragraph>{'{{URL}}/api/cps/v1/authorizeTransaction'}</Paragraph>
      </ParagraphHeading>

      <Paragraph>CARD TRANSACTIONS</Paragraph>

      <div>
        <b>PREREQUISITE</b>

        <Paragraph>
          The ACCOUNT payment method allows users to make payments by initiating a bank transfer. The following steps outline the process:
        </Paragraph>
        
        <Paragraph>
          To ensure secure communication between your system and Rexpay, all request payloads for card must be encrypted using our PGP public key.
        </Paragraph>

        <Paragraph>
          In addition, all response payloads are encrypted. To achieve this, we require that you create your own PGP key pair and share your public key with us via the INSERT CLIENT PUBLIC KEY endpoint.
        </Paragraph>

        <Paragraph>
          Upon receipt of the encrypted response, you can use the private key equivalent of your PGP key pair to decrypt the information, ensuring that it is readable only by authorized parties.
        </Paragraph>

        <Paragraph>
          You can generate your pgp key pair via online sites such as <Link href={'https://pgptool.org'} style={{color: '#FF4512'}}>https://pgptool.org</Link>.
        </Paragraph>

        <Paragraph>
          Save your private keys and send your public key to the Insert Public Key Endpoint.
        </Paragraph>
      </div>

      <figure className="relative my-4 w-full max-w-screen-md h-auto aspect-video">
        <Image src={sharedImages.authCard} alt="Authentication live mode" />
      </figure>

      <div>
        <ParagraphHeading>TEST CARDS</ParagraphHeading>

        <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full ">
          <thead >
            <tr className="border border-slate-400/60 font-bold">
              <td>Type</td>
              <td>Card number</td>
              <td>Expiry</td>
              <td>PIN</td>
              <td>CVV</td>
            </tr>
          </thead>
          <tbody>
            {
              [
                ['MasterCard PIN',	'5531236650942950',	'1230',	'5818',	'123',	'12345'], 
                ['MasterCard PIN',	'5976222222299999',	'1230',	'4178',	'456',	'12345'], 
                ['MasterCard PIN',	'5071333333222223',	'1230',	'3628	',	'789',	'12345'], 
                ['Verve',	'5063990580219217411',	'1230',	'1234',	'643',	'12345'], 
                ['Verve',	'5060990580219217499',	'1230',	'5678',	'404',	'12345'], 
                ['Verve',	'5060990580210217499',	'1230',	'9012',	'219',	'12345'], 
                ['Card Insufficient Funds',	'5258585922666506',	'0233',	'5672',	'883',	'12345'], 
                ['Incorrect PIN',	'5399834697894723',	'0131',	'5172',	'883',	'12345'], 
                ['Verve Card - Card enrolment',	'5531882884804517',	'0932',	'5092',	'564',	'12345']
              ].map((row, rowIndex: number) => (
                <tr key={`payment-row-${rowIndex}`} className="border border-slate-300/60  odd:bg-slate-400/20">
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
      </div>

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

      <ParagraphHeading>BODY PARAMS</ParagraphHeading>
      <CodeBlock copy>
        {`{
    "encryptedRequest": "-----BEGIN PGP MESSAGE-----\nVersion: Didisoft OpenPGP Library for Java 3.2\n\nhIwDT9UVaCho7XYBBACJeW06QdtjPUI0mUgQRfOacgy9uM0qXMseEerzl7TSv4Ic\nuaDoWoOC7uy18EHoWB8uRQD478i+7fYxAWePNrcPn0OkQ3hD1GoxmLbNsOZwUg1R\nbNbiliuP8jLlRO8ay+Qj/JBJ8zFPusbl2rU/F0w6MuBwcg8mm2uCodHAVY+ZjtKz\nAYnNM40lsH99IOIKXOEDlqUZDNiUrpnwl7Xj1FescDGIfPnTrEpbH/Ei5MeVlMLM\n6ary3eTmtT4SgPa0g4cj3d4Y0a9n+98aZi/skWsisYIbaLxyi9eMnHKhGW+6KRHh\nkICZ2Pw55s1SKbWJDg6BLByg9ctgPjgpXQZ273uakQjnvkCOn70JquvZLuYEIWwh\nQFIbVKbRCIq1+tZtmePYp3KiYu7yR6pwwAdKNVM1vQNMTbk=\n=k1w9\n-----END PGP MESSAGE-----\n"
}`}
      </CodeBlock>
      <Line />

      <ParagraphHeading>Example Request</ParagraphHeading>
      <CodeBlock copy language={['JavaScript']}>
        {`var myHeaders = new Headers();

var raw = "{\r\n    \"encryptedRequest\": \"-----BEGIN PGP MESSAGE-----\\nVersion: Didisoft OpenPGP Library for Java 3.2\\n\\nhIwDT9UVaCho7XYBBACJeW06QdtjPUI0mUgQRfOacgy9uM0qXMseEerzl7TSv4Ic\\nuaDoWoOC7uy18EHoWB8uRQD478i+7fYxAWePNrcPn0OkQ3hD1GoxmLbNsOZwUg1R\\nbNbiliuP8jLlRO8ay+Qj/JBJ8zFPusbl2rU/F0w6MuBwcg8mm2uCodHAVY+ZjtKz\\nAYnNM40lsH99IOIKXOEDlqUZDNiUrpnwl7Xj1FescDGIfPnTrEpbH/Ei5MeVlMLM\\n6ary3eTmtT4SgPa0g4cj3d4Y0a9n+98aZi/skWsisYIbaLxyi9eMnHKhGW+6KRHh\\nkICZ2Pw55s1SKbWJDg6BLByg9ctgPjgpXQZ273uakQjnvkCOn70JquvZLuYEIWwh\\nQFIbVKbRCIq1+tZtmePYp3KiYu7yR6pwwAdKNVM1vQNMTbk=\\n=k1w9\\n-----END PGP MESSAGE-----\\n\"\r\n}\r\n";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("{{URL}}/api/cps/v1/authorizeTransaction", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`}
      </CodeBlock>
      <Line />
      

      <ParagraphHeading>Example Response</ParagraphHeading>
      <CodeBlock copy language={['Json']}>
        {`{
  "encryptedResponse": "-----BEGIN PGP MESSAGE-----\nVersion: Didisoft OpenPGP Library for Java 3.2\n\nhIwDT9UVaCho7XYBA/4qo0fpTxnJ+MliKu0LSjQBX5/laxfeQraj1ct0485soHGh\nTIVy79qY5kNRagxi/540Iz0WMNsQbBAav9HLNRiUhH8DYCWNOEU60l+rFpohCbUR\nN2ia97juHu/HR9QPO8bKofog42FMFpFCv0b7WZz8GGXJokVGeHS7YDOBHw5bPNKn\nATVkGrGKMax8hvWFbAkZmUE6T+iZ+JMaHDZ0YOMgzDW0s+R2oQeeri2ebZaWGhzs\nzPj9l+HTrGIGJSjDyhSSJn6ydZGOPFHelCCQ5ZH9VO47lgMpxAiOYA/QqCRJOWnz\nd5vjKGOqUez3OaujqK2nyvYGluDRECreIQLzrPuHVYNrjh/i4vHRcXdufp7pjzm8\nM+loV/31pNfHFhcxeV1VyGlos0YdAi8=\n=U22O\n-----END PGP MESSAGE-----\n"
}`}
      </CodeBlock>
    </main>
  )
}