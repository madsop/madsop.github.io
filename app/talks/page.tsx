import Link from "next/link";
import type { Metadata } from "next";
import { talks } from "./talk-data";

export const metadata: Metadata = {
  title: "Talks",
  description: "My talks",
};

function location(city: string | null, country: string) {
    if (!city) {
        return <>, {country}<br /></>;
    }
    return <> in {city}, {country}<br /></>;
}

function video(video: string | null) {
    if (!video) {
        return "";
    }
    return <><br /><a href={video} className="hover:opacity-80">Video</a></>
}

function cospeaker(cospeaker: string | null) {
    if (!cospeaker) {
        return "";
    }
    return <><br />with {cospeaker}<br /></>
}

export default function Talks() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Talks</h1>
      <div>
        {talks.map((talk, index) => (
            <div className="w-full justify-between items-start sm:items-center space-y-1 mb-5 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{talk.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                  {cospeaker(talk.cospeaker)}
                at {talk.conference}
                  {location(talk.city, talk.country)}
                  <Link
                      key={index}
                      href={talk.link}
                      className="hover:opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                  >Link</Link>
                  {video(talk.video)}
              </p>
                <hr />
            </div>
        ))}
      </div>
    </section>
  );
}
