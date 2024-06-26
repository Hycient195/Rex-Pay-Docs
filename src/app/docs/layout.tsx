"use client";

import { usePathname } from "next/navigation";
import { pageSectionNavigation } from "../../_SharedConstants/pageSectionsNavigation"
import Link from "next/link";
import { NavList } from "../_components/NavList";
import DashboardNav from "../_components/DashboardNav";
import { navRoutes } from "../_constants/navRoutes";
import Image from "next/image";

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  const pathname = usePathname();

  const paths = pathname.split(/\//g);
  const lastPath = paths[(paths.length-1)];

  return (
    <div className="grid fixed w-full grid-cols-1 lg:grid-cols-[max-content_1fr]  text-sm">
      <aside className="hidden lg:block max-w-[270px] w-[20vw] min-w-[250px] h-screen border bg-zinc-100 border-r-zinc-100">
        <Link href="/" className="px-5 py-5 flex flex-row items-center gap-x-2">
          <Image width={140} height={70} alt="Logo" src="/rexpay-logo.png" />
        </Link>

        <NavList route={navRoutes} />
      </aside>

          <main className="w-full relative overflow-scroll bg-white h-screen max-h-[100vh] min-h-max grid grid-rows-[max-content_1fr]">
            <DashboardNav />
            
            <div className="h-full  relative grid grid-rows-[1fr_max-content]">
              <div className="w-full relative h-full grid gap-3 xl:gap-4 grid-cols-[2.5fr_1fr] max-md:grid-cols-1 p-4 lg:p-6">
                <div className="!gri min-w-[300px]">
                  {children}
                </div>
                {
                  pageSectionNavigation[lastPath as keyof typeof pageSectionNavigation]
                  && (
                    <div className="  min-w-[300px sticky h-max top-[90px] max-md:hidden">
                      <h3 className="text-xl text-slate-800 font-bold">On this page</h3>
                      <ul className="mt-5 flex flex-col gap-2">
                        {
                          pageSectionNavigation[lastPath as keyof typeof pageSectionNavigation] &&
                          pageSectionNavigation[lastPath as keyof typeof pageSectionNavigation].map(section => (
                            <li key={section.id} className="text-slate-800 "><Link className="py-2 hover:text-red-600/70 duration-300 text-sm" href={`${pathname}#${section.id}`}>{section.text}</Link></li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
              </div>
              
              <footer className=" px-4 lg:px-6 bottom-0 bg-white ">
                <div className="border-t border-t-zinc-200 py-5 text-slate-800">
                  {/* <div className="max-w-screen-md grid grid-cols-[1fr_1px_1fr] gap-4 justify-between"> */}
                  <div className="max-w-screen-md grid gap-4">
                    <div className="">
                      <h4 className="font-semibold flex flex-row items-center gap-3 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(220 38 38 / 0.6)" className="w-6 h-6">
                          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                          <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                        </svg>
                        Have any questions?
                      </h4>
                      <p className="">Feel free to reach out if you have any questions or need assistance with integrating the RexPay API.</p>
                    </div>
                    <div className="w-px h-full px-[5%] bg-zinc-200 " />
                    {/* <div className="">
                      <h4 className="font-semibold flex flex-row items-center gap-3 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(220 38 38 / 0.6)" className="w-6 h-6">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                        </svg>
                        Video tutorials
                      </h4>
                      <p className="">Visit our YouTube channel for tutorials on integrating the RexPay API.</p>
                    </div> */}
                  </div>
                </div>
              </footer>
            </div>
            {/* {
              pageSectionNavigation[lastPath as keyof typeof pageSectionNavigation]
              && (
                <div className="  min-w-[300px sticky h-max top-[90px] max-md:hidden">
                  <h3 className="text-xl text-slate-800 font-bold">On this page</h3>
                  <ul className="mt-5 flex flex-col gap-2">
                    {
                      pageSectionNavigation[lastPath as keyof typeof pageSectionNavigation] &&
                      pageSectionNavigation[lastPath as keyof typeof pageSectionNavigation].map(section => (
                        <li key={section.id} className="text-slate-800"><Link className="py-2 hover:text-red-600/70 duration-300" href={`${pathname}#${section.id}`}>{section.text}</Link></li>
                      ))
                    }
                  </ul>
                </div>
              )
            } */}
          
          
          {/* <footer className=" px-4 lg:px-6 bottom-0 bg-white ">
            <div className="border-t border-t-zinc-200 py-5 text-slate-800">
              <div className="max-w-screen-md grid grid-cols-[1fr_1px_1fr] gap-4 justify-between">
                <div className="">
                  <h4 className="font-semibold flex flex-row items-center gap-3 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(220 38 38 / 0.6)" className="w-6 h-6">
                      <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                      <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                    </svg>
                    Have any questions?
                  </h4>
                  <p className="">Lorem ipsum dolor sit amet, constet jdkdkd adipiscing elit.</p>
                </div>
                <div className="w-px h-full px-[5%] bg-zinc-200 " />
                <div className="">
                  <h4 className="font-semibold flex flex-row items-center gap-3 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(220 38 38 / 0.6)" className="w-6 h-6">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                    </svg>
                    Video tutorials
                  </h4>
                  <p className="">Lorem ipsum dolor sit amet, constet jdkdkd adipiscing elit.</p>
                </div>
              </div>
            </div>
          </footer> */}
      
      </main>
    </div>    
  )
}