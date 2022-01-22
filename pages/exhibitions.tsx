import type { NextPage } from "next";
import Layout from "../components/layout";

const config = [
  {
    date: "January/February, 2010:",
    title:
      '"From The Center, Now" National Wome\'s Caucus For Art 25th Anniversary Exhibition, juried by Lucy Lippard',
  },

  {
    date: "Winter, 2011:",
    title: '"Cool Globe"',
    location: "Lodon, England.",
  },

  {
    date: "Summer, 2010:",
    title: '"Cool Globe"',
    location: "Marseille, France.",
  },

  {
    date: "Spring 2010:",
    title: '"Cool Globe"',
    location: "Geneva, Switzerland.",
  },

  {
    date: "Fall 2009:",
    title: '"Cool Globe"',
    location: "Transferred to Copenhagen, for Environmental summit.",
  },

  {
    date: "August, 2009 - present:",
    title: "Work represented at: Tamarack Gallery",
    location: "Omena, Michigan.",
  },

  {
    date: "February 2006:",
    title: '"Cirlicue" (4 Person Show)',
    location: "Beacon Street Gallery, Chicago Illinois.",
  },

  {
    date: "October 2005:",
    title: '"Day of the Dead"',
    location: "Maud Kerns Art Center, Eugene, Oregon.",
  },

  {
    date: "November 2005:",
    title: "Chicago Artists Month",
    location: "Peter Jones Gallery, Chicago, Illinois.",
  },

  {
    date: "September 2005 - December 2005:",
    title: '"Harry S. Family", Northern Illinois University',
    location: "Altgeld Gallery, De Kalb, Illinois",
  },

  {
    date: "January 2003",
    title: "The Chicago Solution Show, Juried by Ed Paschke",
    location: "Gallery on The Lake, Chicago, Illinois",
  },

  {
    date: "January 2003",
    title: "Daughters, Chicago Women's Caucus For Art Traveling Exposition",
    location: "Beacon Street Gallery, Chicago Illnois",
  },

  {
    date: "March 2002",
    title: '"Female Art" Sponsored by Chicago Women\'s Caucus For Art',
    location: "Harold Washington Library, Chicago Illinois",
  },

  {
    date: "July 2002",
    title: "Minneapolis College Of Art & Design",
    location: "Minneapolis, MN",
  },

  {
    date: "February 2002",
    title:
      "Midwest Regional Exhibition, Juried by Jean Brody, Lisa Stien, Susan Weininger",
    location: "A.R.C. Gallery, Chicago, Illinois",
  },

  {
    date: "Summer 2001",
    title: "Group Show",
    location: "Wild Goose Gallery, Washington Island, Wisconsin",
  },
];

const Exhibitions: NextPage = () => {
  return (
    <Layout>
      <main>
        <h1 className="text-xl font-semibold mt-5 mb-3 text-slate-700">
          Exhibitions
        </h1>
        {config.map((e) => (
          <>
            {e.date && (
              <p className="font-semibold text-slate-600 mb-1 mt-4">{e.date}</p>
            )}
            <p className="text-xs font-semibold text-slate-600">{e.title}</p>
            {e.location && (
              <p className="text-xs  text-slate-700">{e.location}</p>
            )}
          </>
        ))}
      </main>
    </Layout>
  );
};

export default Exhibitions;
