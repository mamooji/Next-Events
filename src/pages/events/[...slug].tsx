import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/layout/layout";
import Loader from "../../components/ui/loader";
import { getFilteredEvents } from "../../../dummy-date";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <Layout>
        <div className="flex w-full justify-center">
          <Loader />
        </div>
      </Layout>
    );
  }
  //both strings currently
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear!;
  const numMonth = +filteredMonth!;

  if (numYear && numMonth) {
    if (
      isNaN(numYear) ||
      isNaN(numMonth) ||
      numYear > 2030 ||
      numYear < 2021 ||
      numMonth < 1 ||
      numMonth > 12
    ) {
      return <p>Invalid Filter</p>;
    }
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Layout>
        <ResultsTitle message="No Event found for the chosen Event" />
      </Layout>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Layout>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Layout>
  );
};

export default FilteredEventsPage;
