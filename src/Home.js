import React from "react";
import { Link } from "react-router-dom";
import firstProduct from "./first.jpg";
import secondProduct from "./second.jpg";
import thirdProduct from "./third.jpg";
import "./Home.css";

import Rating from "@mui/material/Rating";

export default function Home() {
  return (
    <div className="main">
      <div className="container">
        <div className="product">
          <div>
            <Link to="/Product1">
              <img className="images" src={firstProduct} alt="first Product" />
            </Link>
          </div>
          <div>
            <h2>Soimoi Rose Floral Printed</h2>

            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.5}
              readOnly
            />
            <p>
              It is always a good idea to empower the world with your abilities
              and let everybody or everyone use their creativity for the best
              outcome. that's the power of individual thinking by Super minds.
            </p>
          </div>
        </div>
        <div className="product">
          <div>
            <Link to="/Product2">
              <img
                className="images"
                src={secondProduct}
                alt="second Product"
              />
            </Link>
          </div>
          <div>
            <h2>Soimoi White Cotton Voile</h2>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
            <p>
              we create unique designs with digitally printed fabrics which can
              help you to create a product we could not have imagined and that's
              the power of individual thinking by Super minds.
            </p>
          </div>
        </div>
        <div className="product">
          <div>
            <Link to="/Product3">
              <img className="images" src={thirdProduct} alt="third Product" />
            </Link>
          </div>
          <div>
            <h2>Soimoi White Cotton Cambric</h2>
            <Rating
              name="half-rating-read"
              defaultValue={1.5}
              precision={0.5}
              readOnly
            />
            <p>
              It is always a good idea to empower the world with your abilities
              and let everybody or everyone use their creativity for the best
              outcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
