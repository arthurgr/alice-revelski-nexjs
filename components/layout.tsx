import Head from "next/head";
import Link from "next/link";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="bg-slate-300 p-5 h-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alice Sharie Revelski Website" />
        <meta name="og:title" content="Alice Revelski Portfolio Website" />
      </Head>
      <div className="bg-white shadow-lg md:max-w-3xl md:mx-auto p-5 rounded-lg">
        <header>
          <h1 className="flex-auto text-3xl font-semibold text-slate-900">
            Alice Sharie Revelski
          </h1>
          <h2 className="flex-auto text-lg font-normal text-slate-600 mb-3">
            Artist Webpage
          </h2>
        </header>
        <nav className="bg-slate-500 rounded-lg">
          <ul className="flex border-b inline-block">
            <li className="py-2 px-4 text-slate-50">
              <Link href="/">
                <a>Whats New</a>
              </Link>
            </li>
            <li className="py-2 px-4 text-slate-50">
              <Link href="/work">
                <a>Work</a>
              </Link>
            </li>
            <li className="py-2 px-4 text-slate-50">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="py-2 px-4 text-slate-50">
              <Link href="/exhibitions">
                <a>Exhibitions</a>
              </Link>
            </li>
            <li className="py-2 px-4 text-slate-50">
              <Link href="/resume">
                <a>Resume</a>
              </Link>
            </li>
          </ul>
        </nav>
        <section>{children}</section>
      </div>
    </div>
  );
}
