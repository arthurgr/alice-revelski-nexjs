import type { NextPage } from "next";
import { StringifyOptions } from "querystring";
import Layout from "../components/layout";

const config = [
  {
    title: "Alice Sharie Revelski",
    items: [
      { text: "B.A. University of Michigan" },
      { text: "Medieval Studies, History of Art" },
      { text: "School of the Art Institute of Chicago" },
      {
        text: "Alumni - intern in convservation laboratory & studio art classes",
      },
    ],
  },
  {
    title: "Residencies",
    items: [
      {
        date: "August 2002, August 2003, July 2006",
        text: "Ox-Bow Summer School of painting - Saugatuck, MI. (Sponsored by TheSchool of the Art Institute of Chicago)",
      },
      {
        date: "February 2002",
        text: "CAAP Grant City of Chicago Department of Cutural Affairs",
      },
      {
        date: "February 2002",
        text: "Residency at the Ragdale Foundation, Lake Forest, Illinois",
      },
    ],
  },
  {
    title: "Awards",
    items: [
      {
        date: "October 2004 - August 2008",
        text: "Illinois Art's Council Art In education Roster",
      },
    ],
  },
  {
    title: "Solo Shows",
    items: [
      {
        date: "January 2005",
        text: "Dolls As Heros, Women Made Gallery, Chicago, Illinois",
      },
      { date: "May 2004", text: "Evanston Public Library, Evanston Illinois" },
      { date: "March 2004", text: "Brighton Park Library, Chicago Illinois" },
    ],
  },
  {
    title: "Employment",
    items: [
      {
        date: "September 1991-Present",
        text: "Library Assistant, Assist patrons in selection of books, and children with homework. Help Schedule computers and completion of bibliographic lists. Evanston Public Library, 1703 Orrinton Ave, Evanston, Il 60201",
      },
      {
        date: "September 1985-Present",
        text: "Mother And Artist, Sold Work through Objects Gallery, Plum Line Gallery, Art Effect / Good Taste, Women Work, Evanston Art Center",
      },
      {
        date: "November 1988-Present",
        text: "Served As President & Vice President of Chicago Garden Club. Arrange for speakers, give garden talks. Help maintain various public gardens",
      },
      {
        date: "February 1979 - September 1985",
        text: "File Clerk, Maintained Litigation files. Helped attorneys in their selection of filed papers Skidmore Owings & Merril, 30 West Monroe, Chicago, IL 60603",
      },
      {
        date: "January 1978 - February 1979",
        text: "Slide Organizer, Remounted and Labeled complete collection of slides kept in architectural library Adler Planetarium, 1300 South Lake Shore Drive, Chicago IL 60605",
      },
      {
        date: "September 1976 - August 1978",
        text: "Tour Guide, Aided school children and general public intheir visits to the planetarium by giving directions and assisting in the sky shows Adler Planetarium, 1300 South Lake Shore Drive, Chicago IL 60605",
      },
    ],
  },
];

const Resume: NextPage = () => {
  return (
    <Layout>
      <main>
        <h1 className="text-xl font-semibold mt-5 mb-3 text-slate-700">
          Resume
        </h1>
        <div>
          {config.map(
            (e: {
              title: string;
              items: Array<{ date?: string; text: string }>;
            }) => {
              return (
                <div key={e.title} className="mb-2">
                  <p className="font-semibold text-slate-600 mb-2 mt-4">
                    {e.title}
                  </p>
                  {e.items.map((i) => {
                    return (
                      <>
                        <p className="text-xs font-semibold text-slate-600">
                          {i.date}
                        </p>
                        <p className="text-xs text-slate-500">{i.text}</p>
                        {i.date && <br />}
                      </>
                    );
                  })}
                </div>
              );
            }
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Resume;
