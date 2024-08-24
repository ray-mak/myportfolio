import { GenPT1, GenPT2, GenPT3, GenPT4 } from "@/app/about/_components/Images"
import Link from "next/link"

export default function GenPTChefPage() {
  return (
    <div className="w-full flex flex-col gap-12">
      <h1 className="text-4xl font-bold">GenPT Chef</h1>
      <div className="flex flex-col gap-5">
        <p>
          GenPT Chef is a recipe generator that creates innovative dishes based
          on the ingredients users input. It's also a social platform where
          users can share their recipes and food photos with others.
        </p>
        <p className="mt-2">
          I designed the UI for this applicaton and developed the back-end API
          for saving and sharing recipes. The recipes are generated using
          OpenAI.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 justify-between mt-2">
          <p>React</p>
          <p>TypeScript</p>
          <p>Tailwind CSS</p>
          <p>NextJS</p>
          <p>Prisma</p>
          <p>Neon</p>
        </div>
      </div>
      <div>
        <h2 className=" text-2xl font-semibold">Github</h2>
        <Link
          href="https://github.com/ray-mak/genptchef"
          className="mt-2 text-lg font-medium text-retroBlue hover:underline"
        >
          Repository
        </Link>
      </div>
      <div>
        <h2 className=" text-2xl font-semibold">Demo</h2>
        <p>
          <Link
            href="https://genptchef.vercel.app/"
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
            src="https://player.vimeo.com/video/1002141475?muted=1"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" text-2xl font-semibold">Purpose of the Project</h2>
        <p>
          The purpose of GenPT Chef was to provide users with creative recipes
          based on the ingredients they have on hand. While many similar apps
          search for pre-existing traditional recipes, few offer the ability to
          generate inventive ones.
        </p>
        <p>
          GenPT Chef has a slider that allows users to dial up the creativity
          when generating recipes. This can lead to some very interesting
          substitutions and dish variations, like ramen patties or mashed
          potatoes with beef curry.
        </p>
        <p>
          My goal was to design an intuitive UI that lets users quickly and
          easily add ingredients. Users can also choose to register an account
          if they want to save or share recipes with the community.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <GenPT1 />
        <GenPT2 />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">The Process</h2>
        <p>
          The first step in developing GenPT Chef was creating a front-end
          interface for users to input their ingredients and a component to
          display the recipes. Unlike my previous project, Sportfolio, I decided
          to create the front-end first to determine the type of data I would
          need to store in the back-end.
        </p>
        <p>
          After constructing the recipe and ingredient objects in the front-end,
          I created models in the back-end to store this data. I also developed
          functions that allowed registered users to save and share generated
          recipes.
        </p>
        <p>
          For GenPT Chef, I integrated third party applications to handle image
          hosting and user management. Previously, I had used JSON Web Tokens
          for authentication, but for this project, I decided to use Clerk.
        </p>
        <p>
          I wanted to familiarize myself with other applications, and there was
          the added benefit of simplifying user registration since Clerk allows
          users to sign up via Google or Facebook.
        </p>
        <p>
          For image hosting, I chose Cloudinary. Cloudinary provided a simple
          and intuitive way for users to share images.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Problems</h2>
        <p>
          The first issue I ran into was integrating OpenAI and crafting prompts
          to receive consistent structured responses. The initial responses for
          my recipe requests came back as a string, which made it very tedious
          to manipulate and store.
        </p>
        <p>
          Fortunately, OpenAI is capable of formatting the response in JSON
          format as long as you are specific with the format. After that, I
          simply needed to trim and parse the data so that I can render and
          store it on the back-end.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <GenPT3 />
        <GenPT4 />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Lesson Learned</h2>
        <p>
          This was my first solo project implementing NextJS and TypeScript.
          Using Typescript felt a little clunky at first, but once I got used to
          it, I found it's ability to keep my code consistent invaluable.
        </p>
        <p>
          I also found the structure of NextJS to be very intuitive. The
          organization of components and actions made the development process
          feel more streamlined. Furthermore, the routing system of NextJS
          simplified the navigation setup, allowing me to focus more on building
          features.
        </p>
        <p>
          Overall, this project helped enhance my understanding of these
          techonologies and gave me the confidence to implement them in future
          projects.
        </p>
      </div>
    </div>
  )
}
