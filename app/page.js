import ProductBox from "./Components/maduleSection/MainCard/ProductBox";
import Image from 'next/image'
import iranIn from "../public/Covers/iranIn.png"
import localFont from 'next/font/local'
import Calendars from "./Components/Calendars/Calendars";
import DropDown from "./Components/maduleSection/DropDown/DropDown";
import CardContainer from "./Components/CardContainer/CardContainer";

const myFont = localFont({ src: './IRANSans.woff2' })

export default function Home() {

  const ticketStatus = [
    "یک طرفه", "رفت و برگشت"
  ]

  return (
    <main className={myFont.className}>
      <Image
        src={iranIn}
        width="100vw"
        alt="Picture of the author"
        priority={true}
        className="static"
      />
      <CardContainer>
        <div className="divide-y-reverse divide-black">
          <ProductBox  />
        </div>
        <form>
          <div>
            <DropDown items={ticketStatus} />
          </div>
        </form>
      </CardContainer>
    </main>
  )
}
