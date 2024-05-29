import CodeBlock from "@SharedComponents/CodeBlock";
import { InfoBox, WarningBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function CreatePayment() {
  return (
    <main className="grid">
      <PageHeading>Create payment</PageHeading>
      <InfoBox>
        <h3 className="text-lg font-semibold text-slate-800">Lorem ipsum dolor sit amet</h3>
        <p className="text-slate-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </p>
      </InfoBox>

      <ParagraphHeading id="popup">Popup</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading id="collect-customer-information">Collect Customer Information</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full ">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
            <td>Param</td>
            <td>Required?</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {
            [
              [ "key", "Yes", "Lorem ipsum dolor sit amet," ], 
              [ "email", "Yes", "Lorem ipsum dolor sit amet," ], 
              [ "amount", "Yes", "Lorem ipsum dolor sit amet," ], 
              [ "ref", "No", "Lorem ipsum dolor sit amet," ],
              [ "currency", "No", "Lorem ipsum dolor sit amet," ],
              [ "channels", "No", "Lorem ipsum dolor sit amet," ],
              [ "metadata", "No", "Lorem ipsum dolor sit amet," ],
              [ "label", "No", "Lorem ipsum dolor sit amet," ],
              [ "callback", "No", "Lorem ipsum dolor sit amet," ],
              [ "onBankTransferConfirmationPending", "No", "Lorem ipsum dolor sit amet," ],
              [ "onClose", "No", "Lorem ipsum dolor sit amet," ],
            ].map((row, rowIndex: number) => (
              <tr key={`payment-row-${rowIndex}`} className="border border-slate-300/60 odd:bg-slate-400/20">
                {
                  row.map((col, colIndex: number) => (
                    <td key={`payment-column-${colIndex}`} className=" break-all">{col}</td>
                  ))
                }
              </tr>
            ))
          }
          <tr className="border border-slate-300/60">
            <td colSpan={3} className="font-semibold ">For single <span className="text-green-600">split payments</span></td>
          </tr>
          {
            [
              [ "subaccount", "No", "Lorem ipsum dolor sit amet," ],
              [ "transaction_charge", "No", "Lorem ipsum dolor sit amet," ],
              [ "bearer", "No", "Lorem ipsum dolor sit amet," ],
            ].map((row, rowIndex: number) => (
              <tr key={`payment-row-${rowIndex}`} className="border border-slate-300/60 odd:bg-slate-400/20">
                {
                  row.map((col, colIndex: number) => (
                    <td key={`payment-column-${colIndex}`} className="break-all">{col}</td>
                  ))
                }
              </tr>
            ))
          }
          <tr className="border border-slate-300/60">
            <td colSpan={3} className="font-semibold">For <span className="text-green-600"> multi_split plit payments</span></td>
          </tr>
          {
            [
              [ "plan", "Yes", "Lorem ipsum dolor sit amet," ],
              [ "quantity", "No", "Lorem ipsum dolor sit amet," ],
            ].map((row, rowIndex: number) => (
              <tr key={`payment-row-${rowIndex}`} className="border border-slate-300/60 odd:bg-slate-400/20">
                {
                  row.map((col, colIndex: number) => (
                    <td key={`payment-column-${colIndex}`} className="">{col}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <CodeBlock language={[ "JavaScript", "HTML" ]}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et`}
      </CodeBlock>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <InfoBox>
        <h3 className="text-lg font-semibold text-slate-800">Lorem ipsum dolor sit amet</h3>
        <p className="text-slate-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </p>
      </InfoBox>

      <ParagraphHeading id="initialize-transactions">Initialize transactions</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <CodeBlock language={[ "JavaScript" ]}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et`}
      </CodeBlock>

      <ParagraphHeading id="important-notes">Important notes</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading>Important notes</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <InfoBox>
        <h3 className="text-lg font-semibold text-slate-800">Helpful Tips</h3>
        <p className="text-slate-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </p>
      </InfoBox>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <CodeBlock language={[ "JavaScript" ]}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et`}
      </CodeBlock>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <CodeBlock language={[ "JavaScript" ]}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et`}
      </CodeBlock>

      <WarningBox>
        <h3 className="text-lg font-semibold text-slate-800">Limited support</h3>
        <p className="text-slate-800">Not all endpoints are supported by our SDKs yet. You&apos;ll see a list of which endpoints are supported for each SDK in its documentation. If you find an endpoint that&apos;s missing in your preferred SDK, please send in a PR.</p>
      </WarningBox>

      <ParagraphHeading id="verify-transaction">Verify Transaction</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading id="handle-webhook">Handle webhook</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading id="redirect">Redirect</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <WarningBox>
        <h3 className="text-lg font-semibold text-slate-800">Limited support</h3>
        <p className="text-slate-800">Not all endpoints are supported by our SDKs yet. You&apos;ll see a list of which endpoints are supported for each SDK in its documentation. If you find an endpoint that&apos;s missing in your preferred SDK, please send in a PR.</p>
      </WarningBox>
      
      <ParagraphHeading id="collect-customer-information">Collect customer information</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <CodeBlock language={[ "JavaScript" ]}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et`}
      </CodeBlock>

      <ParagraphHeading>Initialize transactions</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <CodeBlock language={[ "PHP" ]}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et`}
      </CodeBlock>

      <ParagraphHeading>Verify transactions</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading>Handle webhook</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading id="mobile-sdks">Mobike SDKs</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading id="charge-apis">Charge APIs</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading id="use-cases">Use cases</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <CodeBlock language={[ "JSON" ]}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et`}
      </CodeBlock>

      <ParagraphHeading id="handling-charge-api-responses">Handling charge API responses</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full bg-slate-400/20">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
            <td>Value</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {
            [
              [ "pending", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et " ],
              [ "timeout", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et " ],
              [ "success", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et " ],
              [ "send_birthday", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et " ],
              [ "send_otp", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et " ],
              [ "send_otp", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et " ],
              
            ].map((row, rowIndex: number) => (
              <tr key={`payment-row-${rowIndex}`} className="border border-slate-400/60">
                {
                  row.map((col, colIndex: number) => (
                    <td key={`payment-column-${colIndex}`} className=""><span className=" ">{col}</span></td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>

      <ParagraphHeading>Handle webhooks</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>
    </main>
  )
}