import Link from "next/link"

export default function TranslatablePage() {
  return (
    <div className="w-full flex flex-col gap-12">
      <h1 className="text-4xl font-bold">Translatable</h1>
      <div className="flex flex-col gap-5">
        <p>
          Translatable is a translation app that allows users to transcribe
          their speech and translate it to their desired language. This was the
          first AI wrapper I built before I even knew what an AI wrapper was.
        </p>
        <p className="mt-2">
          It features a searchable dropdown menu that allows users to quickly
          select their desired input and output language. Transcriptions are
          done with Web Speech API while translations are powered with OpenAI.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 justify-between mt-2">
          <p>React</p>
          <p>CSS</p>
          <p>Node</p>
          <p>Express</p>
        </div>
      </div>
      <div>
        <h2 className=" text-2xl font-semibold">Github</h2>
        <Link
          href="https://github.com/ray-mak/translatable"
          className="mt-2 text-lg font-medium text-retroBlue hover:underline"
        >
          Repository
        </Link>
      </div>
      <div>
        <h2 className=" text-2xl font-semibold">Demo</h2>
        <p>
          <Link
            href="https://translatable.onrender.com/"
            className="text-retroBlue underline hover:opacity-80 font-medium"
            target="_blank"
          >
            Click here to see the deployed project.
          </Link>
        </p>
        <div className="relative w-full h-80 mt-6">
          <iframe
            allowFullScreen
            allow="fullscreen"
            className="w-full h-full"
            src="https://player.vimeo.com/video/1002149719?muted=1"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" text-2xl font-semibold">Purpose of the Project</h2>
        <p>
          The purpose of Translatable was to provide a quick and easy way for
          users to transcribe and translate their speech.
        </p>
        <p>
          I implemented a searchable dropdown menu for users to quickly find
          their desired input and output language.
        </p>
        <p>
          This was my first individual project, and I wanted to find a unique
          way to implement an API.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">The Process</h2>
        <p>
          This app can be broken down into three parts in terms of the amount of
          time and code: speech recognition/transcription, language input/output
          selection, and OpenAI API translation.
        </p>
        <p>
          Web Speech API was the first time I had worked with a library. Up
          until this point I was just building pages with HTML, CSS and a bit of
          Javascript.
        </p>
        <p>
          After getting Web Speech API set up, I needed to create a dropdown
          that allowed users to search the input out output languages. This
          required some custom code and a bit of creativity since 'select'
          elements have limited styling.
        </p>
        <p>
          Lastly, since I wanted to deploy this project, I needed to store the
          API keys on the server side. This was my first foray into the back-end
          as I had to learn how to use Express to create a server.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Problems</h2>
        <p>
          The first issue I encountered was with Web Speech API. The voice
          recordings were a bit glitchy, where the recording would sometimes
          terminate prematurely, or conversely, continue recording even after I
          had manually stopped it.
        </p>
        <p>
          To fix this issue, I implemented a solution that involved creating
          multiple shorter recordings and stitching them together to get the
          final transcription.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Lesson Learned</h2>
        <p>
          This was the first time I implemented AI in my project. Learning how
          to set up and prompt OpenAI opened the door for implementation in
          upcoming projects.
        </p>
        <p>
          It was also the first time I had dealt with any back-end technology,
          and in doing so sparked my curiosity to dive deeper into this area.
        </p>
      </div>
    </div>
  )
}
