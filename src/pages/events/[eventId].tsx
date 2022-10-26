import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-date";
import Layout from "../../components/layout/layout";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId as string;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found</p>;
  }
  const { date, description, id, image, isFeatured, location, title } = event;
  return (
    <Layout>
      <section>
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              {title}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {description}
            </p>
            <div className="flex gap-2">
              <svg
                className="h-6 w-6 fill-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {location}
              </p>
            </div>
            <div className="flex gap-2">
              <svg
                className="h-6 w-6 fill-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {date}
              </p>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-1 lg:flex">
            <img src={"/" + image} alt="mockup" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetailPage;
