import React, { useRef } from "react";
import ReactDOM from "react-dom";
import useDraggable from "../useDraggable";
import "../index.css";

const DraggableCard = ({ children }) => {
    const cardRef = useRef(null);
    useDraggable(cardRef);
  
    return (
      <div className="card" ref={cardRef}>
        {children}
      </div>
    );
  };
  
  function Stars() {
    return (
      <div className="container">
        <DraggableCard>Card 1</DraggableCard>
        <DraggableCard>Card 2</DraggableCard>
        <DraggableCard>Card 3</DraggableCard>
      </div>
    );
  }



export default Stars