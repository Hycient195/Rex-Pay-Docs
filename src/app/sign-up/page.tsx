import { countryList } from "@SharedConstants/countryList";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="relative p-4 lg:p-5 bg-gray-100/50">
            <Link href="/sign-in" className="btn-black absolute top-3 !font-medium right-4">Already have an account? Log in</Link>

      <div className="max-w-screen-sm w-full mx-auto p-5 shadow-md py-8 md:p-6 lg:p-8 bg-white rounded-xl">
        <h1 className="text-center text-2xl font-semibold text-slate-800">Create an account</h1>
        <p className="text-center text-slate-800 text-md mt-3">Sign up to create your business account</p>

        <form action="" className="flex flex-col gap-7 mt-10">
          <label htmlFor="business-name">
            <p className="text-slate-800 font-medium">Country</p>
            <select name="" id="" className="appearance-none px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70">
              <option value="" className="">Select Country</option>
              {
                countryList.map(country => (
                  <option key={country.code} value={country.code} className="">{country.name}</option>
                ))
              }
            </select>
            {/* <input type="text" id="business-name" placeholder="Enter your Business Name" className="px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70" /> */}
          </label>

          <label htmlFor="business-name">
            <p className="text-slate-800 font-medium">Business name</p>
            <input type="text" id="business-name" placeholder="Enter your Business Name" className="px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70" />
          </label>
          
          <label htmlFor="business-name">
            <p className="text-slate-800 font-medium">First Name</p>
            <input type="text" id="business-name" placeholder="Enter your First Name" className="px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70" />
          </label>

          <label htmlFor="business-name">
            <p className="text-slate-800 font-medium">Last Name</p>
            <input type="text" id="business-name" placeholder="Enter your Last Name" className="px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70" />
          </label>

          <label htmlFor="business-name">
            <p className="text-slate-800 font-medium">Email Address</p>
            <input type="text" id="business-name" placeholder="Enter your Email Address" className="px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70" />
          </label>

          <label htmlFor="business-name">
            <p className="text-slate-800 font-medium">Phone Number</p>
            <input type="text" id="business-name" placeholder="Enter your Phone Number" className="px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70" />
          </label>

          <label htmlFor="business-name">
            <p className="text-slate-800 font-medium">Password</p>
            <input type="password" id="business-name" placeholder="Enter your Password" className="px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70" />
          </label>

          <label htmlFor="ack" className="flex flex-row gap-2 items-start">
            <input type="checkbox" className="h-[20px] w-[20px] mt-1" name="" id="ack" />
            <p className="">I acknowledge that I have read and do hereby accept the terms and conditions in the Rex Pay Terms of Use, Merchant Agreement and Privacy Policy.</p>
          </label>
          
          <button className="btn-black !py-3 !rounded-lg mt-5">Create your account</button>
        </form>
      </div>
    </main>
  )
}