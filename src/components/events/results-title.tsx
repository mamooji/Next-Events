import React from "react";
import Button from "../ui/button";

interface Props {
  date?: Date;
  message?: string;
}
const ResultsTitle: React.FC<Props> = ({ date, message }) => {
  let title = "";
  if (date) {
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    title = `Events in ${humanReadableDate}`;
  }
  if (message) {
    title = message;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <Button link="/events">All Events</Button>
    </div>
  );
};

export default ResultsTitle;
