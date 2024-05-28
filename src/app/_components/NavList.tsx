"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { navRoutes } from "../_constants/navRoutes";


interface IProps {
  route: Array<typeof navRoutes[0]>,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavList = ({ route, setIsOpen }: IProps) => {
  const pathname = usePathname();

  const highlightActive = (arg: string): boolean => pathname.split(/\//).includes(arg.split(/\//)[0]);
  const isSelected = (arg: string): boolean => {
    
    return ((pathname === "/docs" && arg === "/" ) || (arg !== "/" && pathname.includes(arg)))
  };

  // @ts-ignore
  // console.log(route[4]?.subroutes[0]?.subroutes[0].route)

  return (
    <ul className="flex flex-col gap-y-1 my-[2vh]">
      {
        route.map((item: typeof route[4]|any, index: number) => (
          <li key={index} className={`pl-4 pr-5 `}>
            <Link
              href={`/docs${item.route ? `/${item.route}` : ""}${item.subroutes ? `/${item.subroutes[0]?.route}` : ""}${(item?.subroutes && item?.subroutes[0]?.subroutes) ? `/${item.subroutes[0].subroutes[0]?.route}` : ""}`}
              // onClick={() => { setIsOpen && setIsOpen(false)}}
              onClick={() => { (!item.subroutes && setIsOpen) && setIsOpen(false)}}
              className={`flex flex-row  px-3 py-1.5 items-center gap-2 !border-l-4 ${isSelected(item.route) ? "!border-l-[#FF4512]" : "!border-l-transparent"} hover:text-red-600  ${isSelected(item.route) ? "!text-[#FF4512] !font-bold" : "text-zinc-600 font-medium"}`}
            >
              <span className={`flex rounded-md flex-row gap-2.5 `}>
                {/* {item.icon} */}
                <p className="text-md">{item.text}</p>
              </span>
              </Link>
              {
                (isSelected(item.route) && item.subroutes)
                && (
                  <ul className="flex fo mt-1 ml-8 flex-col py-1 g-zinc-100 text-zinc-700 inset-10  rounded-md">
                    {
                      item.subroutes.map((subroute: typeof item.subroutes[1] | any, innerIndex: number) => (
                        <li key={innerIndex} className={`py-2 ${isSelected(subroute.route) ? "!text-red-500 font-semibold" : "text-zinc-600"}`}>
                          <Link onClick={() => { (!subroute.subroutes && setIsOpen) && setIsOpen(false)}} href={`/docs/${item.route}/${subroute.route}${(subroute.subroutes) ? `/${subroute?.subroutes[0]?.route}` : ""}`} className="">
                            {subroute.text}
                            {
                              (isSelected(subroute.route) && subroute.subroutes)
                              && (
                                <ul className="flex fo mt-1 flex-col py-1 g-zinc-100 text-zinc-700 inset-10 font-normal rounded-md">
                                  {
                                    subroute.subroutes.map((subsubroute: typeof subroute.subroutes[0] | any, innerIndex: number) => (
                                      <li key={innerIndex} className={`py-2 ml-4 ${isSelected(subsubroute.route) ? "!text-red-500" : "text-zinc-600"}`}>
                                        <Link  onClick={() => { setIsOpen && setIsOpen(false)}} href={`/docs/${item.route}/${subroute.route}/${subsubroute.route}`} className="">
                                          {subsubroute.text}
                                        </Link>
                                      </li>
                                    ))
                                  }
                                </ul>
                              )
                            }
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                )
              }
          </li>
        ))
      }
    </ul>
  )
}