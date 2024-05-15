import Link from "next/link";

export default function SignIn() {
  return (
    <main className="relative p-4 lg:p-5 bg-gray-100/50 h-screen">
      <Link href="/sign-up" className="btn-black absolute top-3 !font-medium right-4">Create an account</Link>
      <div className="max-w-screen-sm w-full mx-auto mt-[10%] p-5 shadow-md py-8 md:p-6 lg:p-8 bg-white rounded-xl">
        <h1 className="text-center text-2xl font-semibold text-slate-800">Login to your account</h1>

        <form action="" className="flex flex-col gap-7 mt-10">
          <label htmlFor="business-name">
            <p className="text-slate-800 font-medium">Email</p>
            <input type="text" id="business-name" placeholder="Enter your Email Address" className="px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70" />
          </label>

          <label htmlFor="business-name">
            <p className="text-slate-800 font-medium">Password</p>
            <input type="password" id="business-name" placeholder="Enter your Password" className="px-4 w-full outline-none focus:ring-2 focus:ring-slate-300 py-2 mt-1.5 text-md text-slate-700 rounded-md border border-slate-300/70" />
          </label>

          <button className="btn-black !py-3 !rounded-lg mt-3">Login to your account</button>
        </form>

      </div>
    </main>
  )
}