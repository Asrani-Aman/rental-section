import React from "react";
import styled from "styled-components";
import "./card.css";

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 0.5rem;
  flex: 1 0 15rem;
  background: rgb(190 206 230 / 25%);
  border-radius: 0.5rem;
  max-width: 25rem;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

const RentalCard = (props) => {
  const { rentals } = props;
  //   const user = localStorage.getItem("token");
  //   const navigate = useNavigate();
  //   const loginCheck = () => {
  //     if (user === undefined || user === null) {
  //       navigate("/login");
  //     } else {
  //       console.log(user, "hello");
  //     }
  //   };
  console.log(rentals);
  return (
    <>
      {rentals.map((rental, index) => {
        return (
          <div className="cardss">
            <div className="rental-cards">
              <div className="card-img">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src={rental.images[0].url}
                    alt={rental.title}
                  />
                </a>
              </div>
              <div className="card-content">
                <h2 className="card-title"> {rental.title}</h2>
                <div className="star-container">
                  <span class="fa fa-star checked "></span>
                  <span class="fa fa-star  checked"></span>
                  <span class="fa fa-star  checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <p className="rating-number">27 Ratings</p>
                </div>
                <p className="place">Deharadun City</p>
                <div className="tags">
                  <p>verified</p>
                </div>

                <div className="buttons">
                  <button className="button-28" role="button">
                    Call Now
                  </button>
                  <button className="button-28" role="button">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RentalCard;
