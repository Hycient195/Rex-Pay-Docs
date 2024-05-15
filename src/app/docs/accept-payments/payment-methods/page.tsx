import CodeBlock from "@SharedComponents/CodeBlock";
import { InfoBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function PaymentMethods() {
  return (
    <main className="">
      <PageHeading id="payment-methods">Payment methods</PageHeading>
      <Paragraph>RexPay supports a wide variety of methods for your customers to pay you, across a wide range of countries. When accepting payments, you can specify what payment methods you&apos;re willing to accept from your customers.</Paragraph>

      <Paragraph>There are two ways to specify your accepted payment methods.</Paragraph>

      <ParagraphHeading id="account-settings">Account settings</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>
      
      <ParagraphHeading id="per-payment">Per payment</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <InfoBox className="!my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisiconntum lobortis et. Pellentesque dictum lorem vitae et  Pellen fhgjhkjzsd Lorem ipsum dolor sit amet, consectetur adipiscing</InfoBox>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum </Paragraph>

      <CodeBlock copy>
        {`const response = await got.post("https://api.flutterwave.com/v3/payments", {
  headers: {
    Authorization: \`Bearer \${process.env.FLW_SECRET_KEY}\`
  },
  json: {
    // Your payload
  }
});
      `}</CodeBlock>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading id="supported-payment-methods">Supported payment methods</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full bg-slate-400/20">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
            <td>Payment Option</td>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          {
            [[ "Card payment", "card" ], [ "Bank account (direct debit)", "account" ], [ "Bank transfer", "banktransfer" ], [ "QR payment", "nqr" ], [ "USSD", "ussd" ], [ "Credit payment", "credit" ]].map((row, rowIndex: number) => (
              <tr key={`payment-row-${rowIndex}`} className="border border-slate-400/60">
                {
                  row.map((col, colIndex: number) => (
                    <td key={`payment-column-${colIndex}`} className="[&>*]:last-of-type:bg-white [&>*]:last-of-type:px-2 [&>*]:last-of-type:py-1 [&>*]:last-of-type:border [&>*]:last-of-type:rounded-md [&>*]:last-of-type:border-slate-300"><span className=" ">{col}</span></td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>

      <ParagraphHeading className="mt-10" id="expiring-payments">Expiring payments</ParagraphHeading>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <CodeBlock copy>{
      `const response = await got.post("https://api.flutterwave.com/v3/payments", {
  headers: {
    Authorization: \`Bearer \${process.env.FLW_SECRET_KEY}\`
  },
  json: {
    // Your payload
  }
});`}</CodeBlock>
    </main>
  )
}