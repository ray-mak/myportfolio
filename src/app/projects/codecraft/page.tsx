import {
  CodeCraft1,
  CodeCraft2,
  CodeCraft3,
  CodeCraft4,
} from "@/app/about/_components/Images"
import Link from "next/link"

export default function CodeCraftPage() {
  return (
    <div className="w-full flex flex-col gap-12">
      <h1 className="text-4xl font-bold">CodeCraft</h1>
      <div className="flex flex-col gap-5">
        <p>
          CodeCraft is a web development agency specializing in custom solutions
          for small businesses. One project is a booking system that enables
          business owners to manage their availability while allowing clients to
          schedule appointments.
        </p>
        <p className="mt-2">
          I developed the REST API for availabilities and bookings as well as
          designed the UI and booking flow for the client facing side.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 justify-between mt-2">
          <p>React</p>
          <p>TypeScript</p>
          <p>Tailwind CSS</p>
          <p>NextJS</p>
          <p>PostgreSQL</p>
          <p>Prisma</p>
        </div>
      </div>
      <div>
        <h2 className=" text-2xl font-semibold">Github</h2>
        <Link
          href="https://github.com/ray-mak/human-body-shop"
          className="mt-2 text-lg font-medium text-retroBlue hover:underline"
        >
          Repository
        </Link>
      </div>
      <div>
        <h2 className=" text-2xl font-semibold">Live Site</h2>
        <p>
          <Link
            href="https://www.thehumanbodyshop.pro/"
            className="text-retroBlue underline hover:opacity-80 font-medium"
            target="_blank"
          >
            Click here to see the live site with the integrated booking system.
          </Link>
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <CodeCraft1 />
        <CodeCraft2 />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" text-2xl font-semibold">Purpose of the Project</h2>
        <p>
          This booking app provides service businesses with a fully customizable
          scheduling solution. Owners can set weekly schedules, special hours,
          and extended days off.
        </p>
        <p>
          There{"'"}s also a very intuitive schedule UI that allows staff
          members to visualize their weekly schedule. In addition to that, there
          is also a services section which allows admins to quickly add, edit,
          or delete services offered by the business.
        </p>
        <p>
          The client side booking flow is also very intuitive, allowing the user
          to seamlessly select their provider, service, and appointment date.
          The interface is fully responsive and includes a dark mode option for
          enhanced usability.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">The Process</h2>
        <p>
          The first step in developing this booking app was creating a front-end
          interface for admins to submit their availabilities. The form logic
          and styling was done with React and Tailwind CSS.
        </p>
        <p>
          Simultaneously, I set up the database and defined models for admins,
          users, availabilities, appointments, and all other models necessary
          for the booking flow. I used PostgreSQL as the database and Prisma as
          the ORM.
        </p>
        <p>
          Since I was using NextJS, I was able to create server-side actions to
          handle CRUD operations on availabilities, services and appointments.
        </p>
        <p>
          After creating the models and back-end logic, I continued working on
          the front-end UI to create visualizations of the availabilities and
          services.
        </p>
        <p>
          I also included an optional integration with Twilio and SendGrid to
          allow for text message and email notifications for upcoming
          appointments.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <CodeCraft3 />
        <CodeCraft4 />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Problems</h2>
        <p>
          Dealing with dates and times are an absolute headache. So instead of
          reinventing the wheel, I used date-fns. That helped standardize the
          dates and times, but it was still quite difficult integrating it with
          the admin schedule and calendar client.
        </p>
        <p>
          Another hurdle that took quite a bit of time overcoming was showing
          availabilities based off of the admin{"'"}s schedule and existing
          appointments.
        </p>
        <p>
          I had to spend a lot of time making sure appointments don{"’"}t
          overlap and that availabilities accommodate for the selected service
          time.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Lesson Learned</h2>
        <p>
          This was the first application that I built for someone else and not
          myself. I had to be a lot more rigorous when testing different
          scenarios to make sure appointments and availabilities don{"'"}t
          conflict.
        </p>
        <p>
          With multiple NextJS projects under my belt, I was able to build this
          application much quicker, with most of the time spent on the date and
          time logic.
        </p>
      </div>
    </div>
  )
}
