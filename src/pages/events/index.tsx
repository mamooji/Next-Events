import React from "react";
import { getAllEvents } from "../../../dummy-date";
import EventList from "../../components/events/event-list";
import Layout from "../../components/layout/layout";

const AllEventsPage = () => {
  const featuredEvents = getAllEvents();
  return (
    <Layout>
      <EventList events={featuredEvents} />
    </Layout>
  );
};

export default AllEventsPage;
