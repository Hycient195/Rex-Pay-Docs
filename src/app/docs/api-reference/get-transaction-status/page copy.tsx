import CodeBlock from "@SharedComponents/CodeBlock";
import { InfoBox, WarningBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

export default function GetTransactionStatus() {
  return (
    <main className="grid">
      <PageHeading>Get transaction status</PageHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading id="how-to-verify-payments">How to verify payments</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <ParagraphHeading id="collect-user-information" >Collect Customer Information</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      <InfoBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </InfoBox>

      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing </Paragraph>

      <div className="p-3 border grid border-slate-300 rounded-xl">
        <div className="flex justify-between gap-4">
          <div className="bg-slate-200 rounded-lg px-3 py-1 5">cURL</div>
          <div className="">Show response</div>
        </div>
        <CodeBlock>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi
condimentum lobortis et. Pellentesque dictum lorem vitae et`}
        </CodeBlock>
      </div>

      <WarningBox>
        <h3 className="text-slate-800 font-semibold">Limited support</h3>
        <p className="mt-3 text-slate-800">Not all endpoints are supported by our SDKs yet. You will see a list of which endpoints are supported for each SDK in its documentation. If you find an endpoint that is missing in your preferred SDK, please send in a PR.</p>
      </WarningBox>

      <ParagraphHeading id="change-returning-users">Change returning users</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>
    </main>
  )
}