import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.bluesky} target="_blank">
        <Image
          src="/images/author.jpg"
          alt="Mads Opheim"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <div className="prose prose-neutral dark:prose-invert">
        <p>

          I'm a tech lead, developer and test enthusiast. I'm at my best when I can make people awesome, or when I'm with a keyboard and an IDE.
        </p>
        <p>
          Currently, I work in Computas, a Norwegian consultancy company. I'm working on an assignment for the Norwegian Welfare Administration (NAV).
        </p>
        <p>
          I want to make people awesome, and I've found test-driven development, Domain-driven design and Modern agile as very useful techniques to achieve that.
        </p>
        <p>
          Building software is - and should be! - fun, while we should keep in mind that we're doing it to help the users get going. The software and the code is not a goal in itself, it's means to an end.
        </p>
        <p>
          Technically, I feel most at home on the JVM, using Java or Kotlin.
        </p>
        <p>
          I also do speaking at conferences and meetups, and a list of my talks along with slides and, where available, recording, is available at the <a href="talks">talks page</a>.
        </p>
      </div>
    </section>
  );
}
