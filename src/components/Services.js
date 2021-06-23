import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info: "Amazing Tropical cocktail drinks with daily picked fresh fruits",
      },
      {
        icon: <FaHiking />,
        title: "unlimited hiking trails",
        info: "Amazing Tropical cocktail drinks with daily picked fresh fruits",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttles",
        info: "Amazing Tropical cocktail drinks with daily picked fresh fruits",
      },
      {
        icon: <FaBeer />,
        title: "free local Brewed beer",
        info: "Amazing Tropical cocktail drinks with daily picked fresh fruits",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
