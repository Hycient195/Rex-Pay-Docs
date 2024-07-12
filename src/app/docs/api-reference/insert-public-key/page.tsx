import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function InsertPublicKey() {
  return (
    <main className="grid">
      <PageHeading>Insert Public Key</PageHeading>

      <ParagraphHeading>
        <Paragraph>{'{{URL}}/api/pgs/clients/v1/publicKey'}</Paragraph>
      </ParagraphHeading>
      
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
      {/* <CodeBlock copy>
        {`var raw = "\n{\n  \"clientId\": \"{{USERNAME}}\",\n  \"publicKey\": \"-----BEGIN PGP PUBLIC KEY BLOCK-----\\nVersion: Keybase OpenPGP v1.0.0\\nComment: https://keybase.io/crypto\\n\\n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\\n=x4rx\\n-----END PGP PUBLIC KEY BLOCK-----\\n\"\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("{{URL}}/api/pgs/clients/v1/publicKey", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`}
      </CodeBlock> */}
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
              [ "clientId", "String", "Unique client identification number", "true"],
              [ "publicKey", "String", "Public API key", "true"],              
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
        {`var raw = "\n{\n  \"clientId\": \"{{USERNAME}}\",\n  \"publicKey\": \"-----BEGIN PGP PUBLIC KEY BLOCK-----\\nVersion: Keybase OpenPGP v1.0.0\\nComment: https://keybase.io/crypto\\n\\n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\\n=x4rx\\n-----END PGP PUBLIC KEY BLOCK-----\\n\"\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("{{URL}}/api/pgs/clients/v1/publicKey", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`}
      </CodeBlock>
      <Line />
      

      <ParagraphHeading>Example Response</ParagraphHeading>
      <CodeBlock copy>
        {`No response body
This request doesn't return any response body`}
      </CodeBlock>
    </main>
  )
}