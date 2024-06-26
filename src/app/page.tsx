import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/docs" className="btn-black my-auto !py-3 !px-8">Go To Docs</Link>
    </main>
  );
}
