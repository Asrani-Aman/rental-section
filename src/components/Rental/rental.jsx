import React, { useState, useEffect } from "react";
import SearchBox from "../search-box/searchBox.component";
import RentalCard from "../Card/Card";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
  width: 100%;
`;

const Rentals = () => {
  const [searchField, setSearchField] = useState("");
  const [rentals, setRentals] = useState([]);

  // api fetching
  useEffect(() => {
    fetch("https://honbil-back.onrender.com/api/v1/rentals")
      .then((response) => response.json())
      .then((users) => setRentals(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredRentals = rentals.filter((rental) => {
    return rental.title.toLocaleLowerCase().includes(searchField);
  });
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Rentals</h2>
      <span className="section__subtitle">
        {" "}
        <SearchBox onChangeHandler={onSearchChange} />
      </span>
      <CardContainer className="cardss">
        <RentalCard rentals={filteredRentals} />
      </CardContainer>
    </section>
  );
};

export default Rentals;
