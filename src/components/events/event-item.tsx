import React from "react";
import { event } from "../../../dummy-date";
import Button from "../ui/button";

interface Props {
  event: event;
}
const EventItem: React.FC<Props> = ({ event }) => {
  const { title, date, id, image, location } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/events/${id}`;

  const formattedAddress = location.replace(", ", "\n");
  return (
    <div className="m-4 flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
      <img
        className="h-72 w-full rounded-t-lg object-cover  md:w-48 md:rounded-none md:rounded-l-lg"
        src={"/" + image}
        alt={title}
      />
      <div className="flex flex-col items-start justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
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
            {formattedAddress}
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
            {humanReadableDate}
          </p>
        </div>

        <Button link={exploreLink}>Explore Event</Button>
      </div>
    </div>
  );
};
export default EventItem;
