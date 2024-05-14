export default function HelpfullPage() {
  return (
    <div className="flex mt-20 mb-10 flex-row w-full justify-between items-center md:max-w-screen-sm flex-wrap gap-4">
      <p className="text-slate-800">Did you find this page helpful?</p>
      <ul className="flex flex-row items-center gap-3">
        <li className=""><button className="btn-black">Yes I did</button></li>
        <li className=""><button className="btn-white">No i didnt</button></li>
      </ul>
    </div>
  )
}