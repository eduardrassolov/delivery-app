import { React, useEffect, useState } from "react";
import Header from "../Components/Header";
import HistoryList from "../Components/HistoryComp/HistoryList";
import HistoryFilter from "../Components/HistoryComp/HistoryFilter";
import Overlay from "../Components/Overlay";
import { QUERY_SEARCH } from "../config";

import { model } from "../model.js";

export default function History() {
  const [mask, setMask] = useState();
  const [searchedData, setSearchedData] = useState();
  const [isHidden, setIsHidden] = useState(true);

  //After click on button find
  const onSubmit = (filter) => {
    setIsHidden(false);
    setMask({ ...filter });
  };
  const renderQuery = () =>
    `${QUERY_SEARCH}${mask.filterType}?${mask.filterType}=${mask.filterValue}`;

  //Looking for a change in mask state, changes in state are caused by user click find button on HistoryFilter component
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!mask?.filterType || !mask?.filterValue) return;
        const query = renderQuery();
        const result = await model.fetchData(query);
        console.log(result.data);
        setSearchedData(result?.data);

        setIsHidden(true);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [mask]);

  return (
    <>
      <Overlay isHidden={isHidden} />
      <section id="history-container">
        <Header>History</Header>
        <HistoryFilter onSubmit={onSubmit}></HistoryFilter>

        <HistoryList searchedData={searchedData}></HistoryList>
      </section>{" "}
    </>
  );
}
