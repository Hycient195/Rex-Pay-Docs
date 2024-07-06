import CodeBlock from "@SharedComponents/CodeBlock";
import { ListGroup, ListItem } from "@SharedComponents/Lists";
import { InfoBox } from "@SharedComponents/TextBoxes";
import { PageHeading, Paragraph, ParagraphHeading } from "@SharedComponents/Texts";
import sharedImages from "@SharedConstants/images";
import Image from "next/image";

const steps = ['Card', 'Transfer', 'USSD'];

const cardPaymentDeetails = [
  "▪ Visa",
  "▪ MasterCard",
  "▪ Verve",
  "▪ Afrigo",
];

const paymentProcess = [
  "▪ Customers enter their card details. Card number, expiry date and CVV",
  "▪ Payment authorization via OTP sent to the card owner's phone number",
  "▪ Upon successful verification, the payment is completed.",
]

const bankTransferDetails = [
  "▪ Customers select their preferred bank.",
  "▪ A bank transfer code and account details are displayed.",
  "▪ Customers complete the transfer using their banking app or online banking.",
  "▪ The system confirms the transfer and completes the payment.",
];

const ussdPayments = [
  "▪ Customers choose the USSD payment option.",
  "▪ They select their bank from the list provided.",
  "▪ The relevant USSD code for their bank is displayed",
  "▪ Customers use their mobile phones to enter the USSD code and complete the payment.",
  "▪ Successful transactions are confirmed on the checkout page.",
]

const tableData = [
  [ "ACCESS BANK", "901" ],
  [ "ECOBANK NIGERIA", "326" ],
  [ "FIDELITY BANK", "770" ],
  [ "FIRST BANK OF NIGERIA", "894" ],
  [ "FIRST CITY MONUMENT BANK", "329" ],
  [ "GUARANTY TRUST BANK", "737" ],
  [ "KEYSTONE BANK", "7111" ],
  [ "STANBIC IBTC BANK", "909" ],
  [ "STERLING BANK", "822" ],
  [ "UNITED BANK FOR AFRICA", "919" ],
  [ "UNITY BANK", "7799" ],
  [ "VFD", "5037" ],
  [ "WEMA BANK", "945" ],
  [ "ZENITH BANK", "966" ],
  [ "ACCESS DIAMOND", "901" ],
  [ "RUBIES (HIGHSTREET) MFB", "7797" ],
  [ "GLOBUS BANK", "989" ],
  [ "PREMIUM TRUST BANK", "858" ],
  [ "LOTUS BANK", "5045" ],
];

export default function PaymentMethods() {
  return (
    <main className="">
      <PageHeading id="payment-methods">Payment methods</PageHeading>
      <Paragraph>RexPay supports a wide variety of methods for your customers to pay you, across a wide range of countries. When accepting payments, you can specify what payment methods you are willing to accept from your customers.</Paragraph>

      <ParagraphHeading id="account-settings">Supported payment methods</ParagraphHeading>
      <Paragraph>Here is a list of currently supported payment methods:</Paragraph>

      <ListGroup>
        {
          steps.map((step, index: number) => (
            <ListItem index={index} key={`video-points=${index}`}>
              {step}
            </ListItem>
          ))
        }
      </ListGroup>
      
      <ParagraphHeading id="card">Card Payments</ParagraphHeading>
      <dl className="pl-2 lg:pl-4">
        <dt className="text-lg text-slate-800 font-semibold">▪ Supported Cards</dt>
        <ul className="pl-2 lg:pl-4 mt-2 flex flex-col gap-2">
          { cardPaymentDeetails.map((each, index) => <li key={`payment-detail-${index}`}>{each}</li>)}
        </ul>
      </dl>

      <ParagraphHeading id="card">Payment Process</ParagraphHeading>
      <dl className="pl-2 lg:pl-4">
        {/* <dt className="text-lg text-slate-800 font-semibold">▪ Supported Cards</dt> */}
        <ul className="pl-2 lg:pl-2 mt-2 flex flex-col gap-2">
          { paymentProcess.map((each, index) => <li key={`payment-detail-${index}`}>{each}</li>)}
        </ul>
        <br />
        
        <figure className="aspect-[9/10] relative mt-4 w-full max-w-lg h-auto ">
          <Image fill src={sharedImages.payment1} alt="Bank Transfer" className="object-contain" />
        </figure>
      </dl>
      
      <ParagraphHeading className="!mt-10" id="transfer">Bank Transfer</ParagraphHeading>
      
      <ParagraphHeading id="card">Payment Process</ParagraphHeading>
      <dl className="pl-3 lg:pl-5">
        <ul className=" mt-1 flex flex-col gap-2">
          { bankTransferDetails.map((each, index) => <li key={`payment-detail-${index}`}>{each}</li>)}
        </ul>
        <br />

        <figure className="aspect-[9/10] relative mt-4 w-full max-w-lg h-auto">
          <Image fill src={sharedImages.payment2} alt="Bank Transfer" className="object-contain" />
        </figure>
      </dl>

      <ParagraphHeading className="!mt-14" id="ussd">USSD Payments</ParagraphHeading>
      <dl className="mb-20 pl-2 lg:pl-4">
        <ParagraphHeading id="card">Payment Process</ParagraphHeading>
        <ul className="pl-2 lg:pl-4 mt-2 flex flex-col gap-2">
          { ussdPayments.map((each, index) => <li key={`payment-detail-${index}`}>{each}</li>)}
        </ul>
        <br />

        <figure className="aspect-[9/10] relative mt-4 w-full max-w-lg h-auto">
          <Image fill src={sharedImages.payment3} alt="Bank Transfer" className="object-contain" />
        </figure>
      </dl>


      <ParagraphHeading className="!mt-16" id="ussd">Here is the list of USSD Bank code we currently support:</ParagraphHeading>
      
      <table cellPadding={20} cellSpacing={2} className="border border-slate-200 w-full ">
        <thead >
          <tr className="border border-slate-400/60 font-bold">
            <td>Bank</td>
            <td>USSD Code</td>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((row, rowIndex: number) => (
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
    </main>
  )
}
