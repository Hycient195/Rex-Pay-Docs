import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { NavList } from "./NavList";
import { navRoutes } from "../_constants/navRoutes";

interface IProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavMenuModal: React.FC<IProps> = memo(({ isOpen, setIsOpen }) => {

  if (isOpen) {
    return (
        <aside className="bg-white z-[1] fixed lg:hidden bottom-0 left-0 w-full h-full border border-r-slate-200">
          <div className="shadow flex flex-row items-center justify-between py-2 px-4">
            <Link href="/" className="relative py-3 flex flex-row  max-w-max items-center gap-x-2">
              {/* <Image
                width={150}
                height={40}
                loading="lazy"
                src="/images/logo-and-text.svg"
                className=""
                alt="Study Abroad"
              /> */}
              <h1 className="text-2xl font-bold -mb-2 text-slate-800 tracking-wider">RexPay</h1>
            </Link>
            <button onClick={() => setIsOpen(false)} className=" right-3 top-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

  
          <NavList setIsOpen={setIsOpen} route={navRoutes} />
        </aside>
    )
  }
})

MobileNavMenuModal.displayName = "MobileNavMenuModal";
export default MobileNavMenuModal;