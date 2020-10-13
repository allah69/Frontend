import React from "react";
import SuggestItem from "./SuggestItem";
import { propsSuggestItem } from "./type";

function DormList() {
  const suggestLists: propsSuggestItem[] = [{
    id: "999999",
    name: "หอพักนอกใน"
  }, {
    id: "12534",
    name: "หอพักในนอก"
  }, {
    id: "12534",
    name: "หอพักในนอก"
  }, {
    id: "12534",
    name: "หอพักในนอก"
  }, {
    id: "12534",
    name: "หอพักในนอก"
  }, {
    id: "12534",
    name: "หอพักในนอก"
  }, {
    id: "12534",
    name: "หอพักในนอก"
  }, {
    id: "12534",
    name: "หอพักในนอก"
  }, {
    id: "12534",
    name: "หอพักในนอก"
  }]
  return (
    <div >
      <div
        className="overflow-auto"
        style={{ textAlign: "center", maxWidth: "705px", maxHeight: "480px" ,}}
      >
        {suggestLists.map((item, index) => {
          return <SuggestItem {...item} key={index} />
        })}
      </div>
    </div>
  );
}

export default DormList;
