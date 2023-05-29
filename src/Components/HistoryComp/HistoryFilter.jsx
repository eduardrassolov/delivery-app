import { React, useState } from "react";

export default function HistoryFilter({ onSubmit }) {
  const [filter, setFilter] = useState({
    filterType: "order",
    filterValue: "",
  });
  const handleFilter = ({ target }) => {
    setFilter((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(filter);
  };
  //TODO: refactor code to use this component
  return (
    <>
      <div className="history-find-container">
        <form>
          <fieldset>
            <label htmlFor="filterType">Choose find option: </label>
            <select
              name="filterType"
              id="history"
              onChange={handleFilter}
              value={filter.filterType}
            >
              <option value="order">Order number</option>
              <option value="phone">Phone number</option>
              <option value="email">Email</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="history">Enter your {filter.filterType}:</label>
            <input
              name="filterValue"
              type={filter.filterType === "email" ? "email" : "number"}
              onChange={handleFilter}
              value={filter.filterValue}
            />
            <button className="btn-find btn-16" onClick={handleSubmit}>
              Find
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
