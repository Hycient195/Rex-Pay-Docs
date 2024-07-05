import CodeBlock from "@SharedComponents/CodeBlock";
import { InfoBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph } from "@SharedComponents/Texts";
import Link from "next/link";

export default function Encryption() {
  return (
    <main className="">
      <PageHeading>Encryption</PageHeading>

      <InfoBox>
        This type of encryption only applies if you are using <Link href="/docs/api-reference/charge-card" className="text-red-600/70">direct card charge.</Link>
      </InfoBox>

      <Paragraph>
        When using our <Link href="/docs/api-reference/charge-card" className="text-red-600/70">direct card charge API</Link>  to charge a card directly, you will need to encrypt the payload containing the card details before making the request.
      </Paragraph>

      <InfoBox className="!my-4">
        If you are using one of our  <Link href="/docs/sdks-and-plugins/backend-libraries" className="text-red-600/70">backend SDKs</Link> , you do not need to worry about encryption. Pass your encryption key to the library, and it will automatically encrypt the payload before sending.
      </InfoBox>

      <Paragraph>
        To encrypt the payload manually, you will need your encryption key (from the Settings {`>`} API 
        section of your dashboard). You will use the 3DES algorithm to encrypt the payload.
      </Paragraph>

      <Paragraph>Here is an example of an encryption function in different languages. In each case, the function takes the payload as a hash, converts it to JSON, encrypts it and encodes it in base64:</Paragraph>

      <CodeBlock language={["Node.js"]} copy>
        {`function encrypt(encryptionKey, payload) {
  const text = JSON.stringify(payload);
  const forge = require("node-forge");
  const cipher = forge.cipher.createCipher(
    "3DES-ECB",
    forge.util.createBuffer(encryptionKey)
  );
  cipher.start({iv: ""});
  cipher.update(forge.util.createBuffer(text, "utf-8"));
  cipher.finish();
  const encrypted = cipher.output;
  return forge.util.encode64(encrypted.getBytes());
}`}
      </CodeBlock>
    </main>
  )
}