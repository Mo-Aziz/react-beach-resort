import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

export default function RoomsFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  return <section className="filter-container">
      <Title title="search rooms"/>
      <form className="filter-from">
          {/* select type */}
          
          {/* end of select type */}
      </form>

  </section>;
}