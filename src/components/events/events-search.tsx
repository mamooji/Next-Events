import React from "react";
import Button from "../ui/button";
import { useRef } from "react";

interface Props {
  onSearch: (year: string, month: string) => void;
}
const EventsSearch: React.FC<Props> = ({ onSearch }) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);

  const monthInputRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
    if (selectedYear && selectedMonth) {
      onSearch(selectedYear, selectedMonth);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex w-full items-center justify-evenly gap-4 "
    >
      <div className="w-full">
        <label
          htmlFor="year"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select a year
        </label>
        <select
          id="year"
          ref={yearInputRef}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="w-full">
        <label
          htmlFor="month"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select an month
        </label>
        <select
          id="month"
          ref={monthInputRef}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default EventsSearch;
