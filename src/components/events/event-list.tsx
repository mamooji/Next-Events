import React from "react";
import { event } from "../../../dummy-date";
import EventItem from "./event-item";

interface Props {
  events: event[];
}
const EventList: React.FC<Props> = ({ events }) => {
  return (
    <ul className=" my-20 mx-auto w-11/12 max-w-2xl">
      {events.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </ul>
  );

  //   return <div>event-list</div>;
};

export default EventList;
