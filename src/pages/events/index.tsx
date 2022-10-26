import React from "react";
import { getAllEvents } from "../../../dummy-date";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Layout>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={allEvents} />
    </Layout>
  );
};

export default AllEventsPage;
