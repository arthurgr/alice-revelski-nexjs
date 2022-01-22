import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";

const config = [
  {
    title: "Women Made Profile",
    src: "/images/whatsnew/womenmade.jpg",
    description:
      "Textures, patterns, and quality are all characteristics that inspire me when I paint the dolls from my collection. Most of the dolls are antique and seem to have a history or past that emerges when I use them as the models for my paintings. I work part time in the childrens department of a library, and often a book that I am reading or illustrations that I see will coincide with a painting that I am doing, and this connection will bring the painting together.",
    href: "http://womanmade.org/galleries/alicerevelski.php",
  },
  {
    title: "Cool Urban Roofs",
    src: "/images/whatsnew/coolglobes.jpg",
    description:
      "When roofs are made of dark-colored materials, more heat is absorbed into the building and, consequently, more air conditioning is necessary to keep the inside cool. A cluster of dark roofs actually increases a city’s air temperature, creating a “heat island.” In urban areas or warm climates, homeowners should choose a “cool roof” that reflects the sun. Reflective roofing materials can reduce the surface temperature of a roof by as muchas 100 degrees, cooling whole cities and making attics up to 30 degrees cooler.Combining art with the practice of making scientific concepts into hands-on projects, Alice Sharie Revelski created a planet full of “cool roofs.” The mosaic shapes covering the continents are made of roof shingles that reflect UV rays and make roofs energy efficient. The silver oceans dazzle the eye, showing how beautiful, and healthy, the planet will be with more cool roofs.",
    href: "http://www.coolglobes.org/?page_id=3",
  },
  {
    title: "Art On Armitage",
    src: "/images/whatsnew/artonarmitage.jpg",
    description:
      "Alice Sharie-Revelski’s displays her “Herb Angels” with lichens and moss from Northern Michigan and vintage hats from her mother, to create a unique and whimsical holiday display. The primitive-looking black and gold angels are stuffed with garden herbs, and draw their inspiration from the artist’s collection of antique dolls. Her doll collection is a frequent source of inspiration and subject matter for her artwork.",
    href: "http://artonarmitage.com/alice-sharie-revelski/",
  },
  {
    title: "Dolls as Heroes",
    src: "/images/whatsnew/dollsasheros.jpg",
    description:
      "Dolls as Heroes presents nine artworks by Alice Sharie Revelski, featuring paintings of dolls in her collection and an artist book by the same title. Revelskis faux-nave painting style facilitates an easy viewer connection to her diverse dolls. In Revelskis own words: Textures, patterns, and quality are all characteristics that inspire me when I paint the dolls from my collection. Most of the dolls are antique and seem to have a history or past that emerges when I use them as the models for my paintings. I work part time in the childrens department of a library, and often a book that I am reading or illustrations that I see will coincide with a painting that I am doing, and this connection will bring the painting together.",
    href: "http://womanmade.org/show.html?type=solo&amp;gallery=dollheroes2005&amp;pic=1",
  },
  {
    title: "Art For Sale",
    src: "/images/whatsnew/artforsale.jpg",
    description:
      "My undergraduate degree is in Medieval Studies from the University of Michigan. I came to Chicago to study art restoration at the Art Institute of Chicago. While there, I took studio art classes. The rest is history. I was lucky to take several painting classes with Imagist painters, who encouraged me to paint in my original style. I originally began doing paintings of antique and primitive dolls. I still like to focus on the doll paintings, continually collecting dolls on my travels or were I can find them. The textures, patterns and quality of the doll come through when I paint them, and associations from a book I am reading (I work part time as a childrens librarian) or similar associations will come through.",
    href: "http://www.womanmade.org/show_pics.cgi?type=group&amp;gallery=fromthecenter2010&amp;pic=96",
  },
  {
    title: "Homage Dolls",
    src: "/images/whatsnew/homagedolls.jpg",
    description:
      "Identification List of The Harry S. Family 1. Harry Harry #4--Family Dog 2. Beatrice S.Harry 3. Harry S. Family Member- per request Anonymous 4. E. E. Harry 5. Bruce S. Harry 6. Helene- Curator 7. Dr. J. I. S. Harry 9. Richard S. Hardy Harry 111 10. Madame S. Harry 11. Grace Kennedy",
    href: "http://idueart4youmuseum.com/homage_dolls.html",
  },
];

const Home: NextPage = () => {
  return (
    <Layout home>
      <main>
        <h1 className="text-xl font-semibold mt-5 mb-3 text-slate-700">
          Whats New
        </h1>
        <div id="content">
          <div className="grid">
            {config.map((e) => {
              return (
                <div key={e.title}>
                  <Image
                    src={e.src}
                    alt={e.title}
                    width={550}
                    height={550}
                    className="rounded-lg"
                  />
                  <h4 className="font-semibold text-slate-600 mb-1 mt-4">
                    {e.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 mb-4">
                    {e.description}
                  </p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={e.href}
                    className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded"
                  >
                    View Article
                  </a>
                  <hr className="my-10" />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
