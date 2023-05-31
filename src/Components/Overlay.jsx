import React from "react";
import "../styles/styles.css";
import { ColorRing } from "react-loader-spinner";
import HistoryItem from "./HistoryComp/HistoryItem";

export default function Overlay({ isHidden, item, onClickClose, visible }) {
  const overlayStlye = {
    zIndex: isHidden ? "-100" : "100",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.18)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3.3px)",
    WebkitBackdropFilter: "blur(3.3px)",
    transition: "0.3s",
    opacity: isHidden ? "0" : "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div className="overlay-container" style={overlayStlye}>
        <ColorRing
          visible={typeof item === "undefined" ? true : false}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        {item && (
          <HistoryItem
            item={item}
            onClickClose={onClickClose}
            visible={visible}
          />
        )}
      </div>
    </>
  );
}
