import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import Param from "@SharedComponents/Param";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";
import { Fragment } from "react";

export default function CharegeCard() {
  const data = [
    {
      param: "card_number",
      paramType: "int32",
      text: "This is the number on the cardholders card. E.g. 5399 6701 2349 0229.",
      value: "1073837383399"
    },
    {
      param: "cvv",
      paramType: "int32",
      text: "This is the number on the cardholders card. E.g. 5399 6701 2349 0229.",
      value: "664"
    },
    {
      param: "expiry month*",
      paramType: "int32",
      text: "Two-digit number representing the card's expiration month. It is usually the first two digits of the expiry date on the card.",
      value: "09"
    },
    {
      param: "expiry_year*",
      paramType: "int32",
      text: "This is the number on the cardholders card. E.g. 5399 6701 2349 0229.",
      value: "32"
    },
    {
      param: "email*",
      paramType: "String",
      text: "The customer's email address.",
      value: "xyz@gmail.com"
    },
    {
      param: "tx-ref*",
      paramType: "String",
      text: "This is a unique reference peculiar to the transaction being carried out.",
      value: "YOUR_PAYMENT_REF"
    },
    {
      param: "body",
      paramType: "object",
      text: "This is an object that contains the authorization details of the card you want to charge. The authorization instructions for card charges are returned in the initiate charge call as `meta.authorization`",
      value: ""
    },
  ]

  const optionalParameters = [
    {
      param: "currency",
      paramType: "string",
      text: "This is the specified currency to charge in.",
    },
    {
      param: "phone number",
      paramType: "string",
      text: "This is the phone number linked to the customer's bank account or mobile money account",
    },
    {
      param: "fullname ",
      paramType: "string",
      text: "The customer's full name.",
    },
    {
      param: "preauthorize",
      paramType: "boolean",
      text: "This should be set to true for preauthoize card transactions.",
    },
    {
      param: "redirect_url",
      paramType: "string",
      text: "The redirect for customers after completing their payment. (3DSecure only).",
    },
    {
      param: "client_ip",
      paramType: "string",
      text: "IP - Internet Protocol. This represents the current IP address of the customer carrying out the transaction.",
    },
    {
      param: "device_fingerprint",
      paramType: "boolean",
      text: "This is the fingerprint for the device being used. It can be generated using a library on whatever platform is being used.",
    },
    {
      param: "payment_plan",
      paramType: "boolean",
      text: "This is the id of a previously created payment plan needed to add a card user to the payment plan.",
    },
    {
      param: "meta",
      paramType: "string",
      text: "This is used to include additional payment information.",
    },
  ]
  return (
    <main className="grid">
      <PageHeading>Charge card</PageHeading>
      <Paragraph>The charge APIs help you to collect payments using different payment methods.</Paragraph>

      <ParagraphHeading>Cards</ParagraphHeading>
      <Paragraph>Collect card payments with RexPay. We implore you read the method overview before you proceed.</Paragraph>

      <div className="flex flex-row items-center gap-2 lg:gap-3">
        <span className="px-3 py-1 rounded-lg bg-gray-300">POST</span>
        <p className="text-slate-800">https://api.rexpay.com/v3/charges?type=card</p>
      </div>

      <CodeBlock copy language={["Node.js", "PHP", "Ruby", "Sample Request"]}>
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
      <Line />

      <ParagraphHeading>BODY PARAMS</ParagraphHeading>
      <Param text="amount" type="int32" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">This is the amount to be charged for the transaction</p>
        <div className="px-2 py-1 border text-sm border-gray-300">10</div>
      </div>
      <CodeBlock language={[ "200 Okay", "400 Bad Request"]}>
        {`{
  "status": "success",
  "message": "Charge initiated",
  "data": {
      "id": 288192886,
    "tx_ref": "sample_ref",
    "flw_ref": "RXP275389391",
    "device_fingerprint": "N/A",
    "amount": 100,
    "charged_amount": 100,
    "app_fee": 1.4,
    "merchant_fee": 0,
    "processor_response": "Kindly enter the OTP sent to *******0328",
  }`}
      </CodeBlock>

      {
        data.map(each => (
          <Fragment key={each.param}>
            <Param text={each.param} type={each.paramType} />
            <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
              <p className="text-slate-800">{each.text}</p>
              { each.value && <div className="px-2 py-1 border text-sm border-gray-300">{each.value}</div> }
            </div>
            <Line />
          </Fragment>
        ))
      }

      <details className="mt-5 [&[open]_summary_span.opened]:hidden [&:not([open])_summary_span.closed]:hidden">
        <summary className="font-bold text-xl mb-8 cursor-pointer">
          <span className="opened">Show optional parameters</span>
          <span className="closed">Hide optional parameters</span>
        </summary>
        {
          optionalParameters.map(each => (
            <Fragment key={each.param}>
              <Param text={each.param} type={each.paramType} />
              <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
                <p className="text-slate-800">{each.text}</p>
              </div>
              <Line />
            </Fragment>
          ))
        }

        <div className="border border-gray-300 bg-gray-100">
          <div className="px-[3%] py-[2%]">
            <Param text="meta" type="string" />
            <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
              <p className="text-slate-800">This could be the extra information you want to pass.</p>
            </div>
          </div>
          <Line className="!bg-gray4300 !mb-0" />
          <div className="px-[3%] pt-[2%] pb-[3%]">
            <Param text="sideNote" type="string" />
            <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
              <p className="text-slate-800">This could be any message you would like to associate with this call.</p>
            </div>
          </div>
        </div>
      </details>

      <ParagraphHeading className="!mt-14">HEADERS</ParagraphHeading>
      <Param text="Authorization*" type="string" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">Pass your secret key as a bearer token in the request header to authorize this call. Unauthorized calls would return a 401 http code or raise unauthorized error in the different SDKs.</p>
        {/* <div className="px-2 py-1 border text-sm border-gray-300">10</div> */}
      </div>
    </main>
  )
}