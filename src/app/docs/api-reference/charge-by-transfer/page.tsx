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
      param: "bank_transfer_options",
      paramType: "string",
      text: "This is used to configure additional setting for the bank transfer payment.",
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
    // {
    //   param: "preauthorize",
    //   paramType: "boolean",
    //   text: "This should be set to true for preauthoize card transactions.",
    // },
    // {
    //   param: "redirect_url",
    //   paramType: "string",
    //   text: "The redirect for customers after completing their payment. (3DSecure only).",
    // },
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
      param: "is_permanent",
      paramType: "boolean",
      text: "This allows you to create a static account number i.e. the account number doesn't change and customers can pay into the account number multiple times.",
    },
    {
      param: "narration",
      paramType: "string",
      text: "This allows the developer set the name that is shown to the customer when the account is resolved to a name. It also displays in the debit narration.",
    },
    {
      param: "meta",
      paramType: "object",
      text: "This is used to include additional payment information.",
    },
    {
      param: "subaccounts",
      paramType: "object",
      text: "This is an array of objects containing the subaccount IDs to split the payment into.",
    },
  ]
  return (
    <main className="grid">
      <PageHeading>Charge By Transfer</PageHeading>
      <Paragraph>Collect payments from your customers via bank transfers. We recommend you read the method overview before you proceed.</Paragraph>

      <ParagraphHeading>Cards</ParagraphHeading>
      <Paragraph>Collect card payments with RexPay. We implore you read the method overview before you proceed.</Paragraph>

      <div className="flex flex-row items-center gap-2 lg:gap-3">
        <span className="px-3 py-1 rounded-lg bg-gray-300">POST</span>
        <p className="text-slate-800">https://api.flutterwave.com/v3/charges?type=bank_transfer</p>
      </div>

      <Line />

      <ParagraphHeading>BODY PARAMS</ParagraphHeading>
      <Param text="amount" type="int32" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">This is the amount to be charged for the transaction</p>
        <div className="px-2 py-1 border text-sm border-gray-300">10</div>
      </div>

      <CodeBlock copy language={["Sample Request", "Sample Request (with expiry)" ]}>
        {`{
  "tx_ref":"YOUR_PAYMENT_REFERENCE",
  "amount":"10",
  "email":"user@example.com",
  "phone_number":"08000000000",
  "currency":"NGN",
  "client_ip":"154.123.220.1",
  "device_fingerprint":"62wd23423rq324323qew1",
  "narration":"FlW Devs",
  "is_permanent":false
}`}
      </CodeBlock>

      <CodeBlock language={[ "200 Okay", "400 Bad Request"]}>
        {`{
  "status":"success",
  "message":"Charge initiated",
  "meta":{
  "authorization":{
    "transfer_reference":"FLW-ee58c31372724f2889b8211a5a477bb1",
    "transfer_account":"7825397990",
    "transfer_bank":"WEMA BANK",
    "account_expiration":"2020-03-27 09:53:39",
    "transfer_note":"Please make a bank transfer to FLW Devs",
    "transfer_amount":10,
    "mode":"banktransfer"
  }
}`}
      </CodeBlock>

      <Param text="email" type="String" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">The customer's email address.</p>
        <div className="px-2 py-1 border text-sm border-gray-300">xyz@gmail.com</div>
      </div>
      <Line />

      <Param text="tx-ref" type="String" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">This is a unique reference peculiar to the transaction being carried out.</p>
        <div className="px-2 py-1 border text-sm border-gray-300">YOUR_PAYMENT_REF</div>
      </div>
      <Line />

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
      </details>

      <ParagraphHeading className="!mt-14">HEADERS</ParagraphHeading>
      <Param text="Authorization" type="string" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">Pass your secret key as a bearer token in the request header to authorize this call. Unauthorized calls would return a 401 http code or raise unauthorized error in the different SDKs.</p>
        {/* <div className="px-2 py-1 border text-sm border-gray-300">10</div> */}
      </div>
    </main>
  )
}