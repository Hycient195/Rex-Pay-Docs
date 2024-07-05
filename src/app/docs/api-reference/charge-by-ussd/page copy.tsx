import CodeBlock from "@SharedComponents/CodeBlock";
import Line from "@SharedComponents/Line";
import Param from "@SharedComponents/Param";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";
import { Fragment } from "react";

export default function CharegeCard() {
  const optionalParameters = [
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
      param: "meta",
      paramType: "object",
      text: "This is used to include additional payment information.",
    }
  ]

  return (
    <main className="grid">
      <PageHeading>Charge By USSD</PageHeading>
      <Paragraph>Collect USSD payments from customers in Nigeria. We recommend you read the method overview before you proceed.</Paragraph>

      <div className="flex flex-row items-center gap-2 lg:gap-3 mt-5">
        <span className="px-3 py-1 rounded-lg bg-gray-300">POST</span>
        <p className="text-slate-800">https://api.rexpay.com/v3/charges?type=ussd</p>
      </div>

      <Line />

      <ParagraphHeading>BODY PARAMS</ParagraphHeading>
      <Param text="account_bank" type="string" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">This is the Bank numeric code. It can be gotten from the banks endpoint.</p>
        <div className="px-2 py-1 border text-sm border-gray-300">044</div>
      </div>

      <CodeBlock copy language={["Sample Request", "Sample Request (with expiry)" ]}>
        {`{
  "tx_ref": "MC-15852309v5050e8y",
  "account_bank": "057",
  "amount": "10",
  "currency": "NGN",
  "email": "user@example.com",
  "phone_number": "054709929220",
  "fullname": "Yolande Aglaé Colbert"
}`}
      </CodeBlock>

      <CodeBlock language={[ "200 Okay", "400 Bad Request"]}>
        {`{
  "status": "success",
  "message": "Charge initiated",
  "data": {
    "id": 2382777,
    "tx_ref": "MC-15852309v5050e8y",
    "rxp_ref": "WKOM430901627909006960",
    "device_fingerprint": "N/A",
    "amount": 10,
    "charged_amount": 10,
    "app_fee": 481.5,
    "merchant_fee": 0,
    "processor_response": "Transaction in progress",
    "auth_model": "USSD",
    "currency": "NGN",
    "ip": "::ffff:127.0.0.1",
    "narration": "Yolande Aglaé Colbert",
    "status": "pending"
}`}
      </CodeBlock>

      <Param text="amount" type="int32" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">This is the amount to be charged for the transaction</p>
        <div className="px-2 py-1 border text-sm border-gray-300">10</div>
      </div>
      <Line />

      <Param text="email" type="String" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">The customer&apos;s email address.</p>
        <div className="px-2 py-1 border text-sm border-gray-300">xyz@gmail.com</div>
      </div>
      <Line />

      <Param text="tx-ref" type="String" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">This is a unique reference peculiar to the transaction being carried out.</p>
        <div className="px-2 py-1 border text-sm border-gray-300">YOUR_PAYMENT_REF</div>
      </div>
      <Line />

      <Param text="currency" type="String" />
      <div className="grid grid-cols-[2.7fr_1fr] items-center gap-2">
        <p className="text-slate-800">This is the specified currency to charge in.</p>
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