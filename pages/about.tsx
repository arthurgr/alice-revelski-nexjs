import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";

const About: NextPage = () => {
  return (
    <Layout>
      <main>
        <h1 className="text-xl font-semibold mt-5 mb-3 text-slate-700">
          About
        </h1>
        <div className="flex-wrap mt-6 w-auto">
          <div className="mt-3">
            <Image
              src="/images/alice.jpg"
              height={283}
              width={375}
              alt="Photo of Alice Revelski"
              className="rounded-lg shadow"
            />
          </div>
          <p className="text-xs  text-slate-700">
            Textures, patterns, and quality are all characteristics that inspire
            me when I paint the dolls from my collection. Most of the dolls are
            antique and seem to have a history or past that emerges when I use
            them as the models for my paintings. My undergraduate degree is in
            Medieval Studies from the University of Michigan. I came to Chicago
            to study restoration at the Art Institute of Chicago. While there, I
            took studio art classes. The rest is history. I was lucky to take
            several painting classes with Imagist painters, who encouraged me to
            paint in my original style. I originally began doing paintings of
            antique and primitive dolls. I still Like to focus on the doll
            paintings, continually collecting dolls on my travels or where I can
            find them. The textures patterns and quality of the doll come
            through when I paint them, and associations from a book I am
            readding (I work part time as a children&apos;s librarian) or
            similar associations will come through. I like to incorparate
            foliage from medieval tapestries for figures from paintings or
            iluminated manuscripts. I am also attracted to Outsider Art with its
            quirky spontaneous style. Many dolls in my collection are African
            American and I like to relate my paintings to African American
            historical figures. Once I put together a book, &quot;Dolls As
            Heros&quot;, that includes paintings with poetry that I wrote.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default About;
