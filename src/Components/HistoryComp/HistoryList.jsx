import React from "react";
import HistoryItem from "./HistoryItem";

export default function HistoryList({ searchedData }) {
  return (
    <>
      <main>
        {searchedData ? (
          searchedData.map((item) => {
            return <HistoryItem key={item._id} item={item} />;
          })
        ) : (
          <h1 className="header">No result on your request. Try again.</h1>
        )}
      </main>
      ;
    </>
  );
}
