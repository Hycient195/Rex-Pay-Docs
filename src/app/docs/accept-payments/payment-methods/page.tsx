import CodeBlock from "@SharedComponents/CodeBlock";
import { ListGroup, ListItem } from "@SharedComponents/Lists";
import { InfoBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";

const steps = ['Card', 'Transfer', 'USSD']

export default function PaymentMethods() {
  return (
    <main className="">
      <PageHeading id="payment-methods">Payment methods</PageHeading>
      <Paragraph>RexPay supports a wide variety of methods for your customers to pay you, across a wide range of countries. When accepting payments, you can specify what payment methods you&apos;re willing to accept from your customers.</Paragraph>

      <ParagraphHeading id="account-settings">Supported payment methods</ParagraphHeading>
      <Paragraph>Here&apos;s a list of currently supported payment methods:</Paragraph>

      <ListGroup>
        {
          steps.map((step, index: number) => (
            <ListItem index={index} key={`video-points=${index}`}>
              {step}
            </ListItem>
          ))
        }
      </ListGroup>
      
      <ParagraphHeading id="card">Card</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      
      <ParagraphHeading id="transfer">Transfer</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>

      
      <ParagraphHeading id="ussd">USSD</ParagraphHeading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisi condimentum lobortis et. Pellentesque dictum lorem vitae et </Paragraph>
    </main>
  )
}