"use client"

import Link from "next/link";
import { memo, useState } from "react";
import { useRouter } from "next/navigation";
import MobileNavMenuModal from "./MobileNavModal";

const DashboardNav = memo(() => {
  const router = useRouter();
  const [ isNavOpen, setIsNavOpen ] = useState<boolean>(false);
  // const pathname = usePathname();
  // const loggedInUser = typeof window != "undefined" && JSON.parse(localStorage.getItem("userToken") as string);

  // useEffect(() => {
  //   if (typeof window !== "undefined" && !loggedInUser) router.push("/backoffice/sign-in ");
  // }, [ loggedInUser ]);

  // const rootReducer = useSelector((RootReducer: any) => RootReducer);

  // useEffect(() => {
  //   if (typeof window != "undefined"){
  //     if (!loggedInUser) router.push("/backoffice/sign-in");
  //   }
  // }, [ rootReducer, typeof window ]);

  // const handleSignOut = (): void => {
  //   if (typeof window !== "undefined" && loggedInUser) {
  //     localStorage.removeItem("userToken");
  //     router.push("/backoffice/sign-in");
  //   }
  // }

  const handleNaviageToSettings = (): void => {
    router.push("/backoffice/settings")
  }

  return (
    <nav className="w-full z-[3] sticky top-0 bg-white flex justify-between py-2 md:py-3 px-3 md:px-4 xl:px-6 shadow items-center">
      <button onClick={() => setIsNavOpen(true)} className="block lg:hidden text-primary border border-primary/60 px-2 py-0.5 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <div className="items-center max-md:hidden gap-x-1.5 flex flex-row gap-2 border lg:w-[60%] border-zinc-2/7000 rounded-full p-2.5 px-3 text-zinc-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input type="text" className="focus:outline-none text-left" placeholder="Search Documentation" />
      </div>


      <ul className="flex flex-row gap-2 items-center">
        <li className="max-h-max grid">
          <a href="https://www.myrexpay.ng/login" target="_blank" rel="no-referrer" className="text-black font-semibold hover:bg-zinc-100 px-5 py-2.5 duration-300 rounded-md">
            Log in
          </a>
        </li>

        <li className="bg-zinc-100 shadow-sm p-1 rounded-full flex flex-row items-center gap-2">
          <a href="https://www.myrexpay.ng/signup" target="_blank" rel="no-referrer" className="text-white font-semibold bg-black hover:bg-black/80 px-5 py-2.5 duration-300 rounded-md">
            Sign up
          </a>
        </li>
      </ul>
      <MobileNavMenuModal isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
    </nav>
  )
})

DashboardNav.displayName = "DashboardNav";
export default DashboardNav;