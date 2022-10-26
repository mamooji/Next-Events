import type { NextPage } from "next";
import { getFeaturedEvents } from "../../dummy-date";
import EventList from "../components/events/event-list";
import Layout from "../components/layout/layout";
const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <Layout>
      <EventList events={featuredEvents} />
    </Layout>
  );
};

export default Home;
