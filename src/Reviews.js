import React, { useState } from "react";
import "./Reviews.css";
import data from "../data";
import { AiOutlineArrowRight , AiOutlineArrowLeft } from "react-icons/ai";

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = data[index];
    const checkNumber = (number) => {
      if (number > data.length - 1) {
        return 0;
      }
      if (number < 0) {
        return data.length - 1;
      }
      return number;
    };
    const nextButton = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    };
    const prevButton = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
    };
    return(
        <article className="article">
            <div className="img-container">
                <img src={image} alt={name}/>
            </div>
            <h4 className="name">{name}</h4>
            <h3 className="job">{job}</h3>
            <p>{text}</p>
            <div className="buttons">
                <button className="btn" onClick={prevButton}>
                    <AiOutlineArrowLeft />
                </button>
                <button className="btn" onClick={nextButton}>
                    <AiOutlineArrowRight />
                </button>
            </div>
        </article>
    )
}

export default Reviews;