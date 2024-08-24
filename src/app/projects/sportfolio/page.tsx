import {
  SportfolioImage2,
  SportfolioImage3,
  SportfolioImage4,
  SportfolioImage5,
} from "@/app/about/_components/Images"
import Link from "next/link"

export default function SportfolioPage() {
  return (
    <div className="w-full flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Sportfolio</h1>
      <div>
        <p>
          Sportfolio is a sports betting simulator and tracking app that I built
          to help users track, analyze, and compare their results with other
          users. Sportfolio offers users a way to track their progress and
          refine their strategy without having to wager any money.
        </p>
        <p className="mt-2">
          I designed the UI for logging picks and developed the REST API for
          event results and advanced user statistics.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 justify-between mt-2">
          <p>React</p>
          <p>Redux</p>
          <p>Tailwind CSS</p>
          <p>Node</p>
          <p>Express</p>
          <p>MongoDB</p>
        </div>
      </div>
      <div>
        <h2 className=" text-2xl font-semibold">Github</h2>
        <Link
          href="https://github.com/ray-mak/sportfolio"
          className="mt-2 text-lg font-medium text-retroBlue hover:underline"
        >
          View Repository
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className=" text-2xl font-semibold">Demo</h2>
        <p>
          <Link
            href="https://sport-folio.onrender.com/"
            className="text-retroBlue underline hover:opacity-80 font-medium"
            target="_blank"
          >
            Click here to see the deployed project.
          </Link>{" "}
          The server is hosted on a free account so please allow a few moments
          for it to wind up.
        </p>
        <div className="relative w-full h-80 mt-6">
          <iframe
            allowFullScreen
            allow="fullscreen"
            className="w-full h-full"
            src="https://player.vimeo.com/video/1002137952?muted=1"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className=" text-2xl font-semibold">Purpose of the Project</h2>
        <p>
          I've always been fascinated by how sportsbooks generate odds for
          sporting events and matchups. As an avid mixed martial arts fan, I
          enjoy analyzing fights and assigning my own odds based on my
          assessments.
        </p>
        <p>
          I created Sportfolio as a way for users to easily track their wagers
          and see how they stack up against the bookmakers without having to
          risk any money.
        </p>
        <p>
          My goal was to design an intuitive UI that is easy to use while
          offering users in-depth statistics of their past performance. The app
          also features a public leaderboard, allowing users to share their
          picks and strategies and see how they rank against others.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <SportfolioImage2 />
        <SportfolioImage3 />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">The Process</h2>
        <p>
          The first step in developing Sportfolio was setting up a Node.js
          server to provide an API for the front-end. I chose MongoDB for the
          database. Initially, Sportfolio only tracked picks, but I gradually
          layered in additional functions like pick evaluation and stats
          calculation.
        </p>
        <p>
          After setting up the server and database, I implemented Redux to
          manage cached data and data fetching. I used Tailwind CSS for styling
          elements and React to render dynamic components.
        </p>
        <p>
          Finally, I implemented authentication and authorization using JSON Web
          Tokens, allowing admins to post new events and results and users to
          log their picks.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Problems</h2>
        <p>
          Sportfolio was the first full-stack app I developed, and it was done
          before I learned TypeScript. So, as you can imagine, a lot of issues
          popped up on the back end when writing logic to evaluate picks and
          calculate stats.
        </p>
        <p>
          It's a bit embarrassing to admit, but I encountered situations where
          numbers were read as strings, leading to errors with mismatched
          objects. There were also errors that weren’t immediately caught, like
          a component crashing the page due to an API missing a property.
        </p>
        <p>
          To fix this, I had to review large chunks of code and ensure all data
          types and object structures matched. While tedious, this process made
          me more aware of how the front end and back end interact.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <SportfolioImage4 />
        <SportfolioImage5 />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Lesson Learned</h2>
        <p>
          The biggest takeaway for me from this project was being more diligent
          with data types.
        </p>
        <p>
          Having worked primarily on front-end only projects before, I had
          limited experience with sending data. It led to some poor practices
          that I was not aware of.
        </p>
        <p>
          Working with back-end technologies broadened my perspective on how
          everything in a web app interacts. It was also a valuable learning
          experience in building models and APIs.
        </p>
        <p>
          I made many mistakes while developing Sportfolio, but those mistakes
          pushed me to write better code and to learn new technologies like
          TypeScript, which I implemented in my next project,{" "}
          <Link
            href="/projects/genptchef"
            className="text-retroBlue font-medium hover:underline"
          >
            GenPT Chef
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
