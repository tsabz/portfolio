import React, { useRef } from "react";
import ReactDOM from "react-dom";
import useDraggable from "../useDraggable";
import "../index.css";
import Typist from 'react-typist';

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
 
      <div className="hello">
          <div className="draganddrop">
       <Typist className="TypistExample-message"
        cursor={{ hideWhenDone: true }}>
      <Typist.Delay ms={200} />
        <span className="helloworld">Drag and Drop the stars</span>
        </Typist>
        </div>
        <div className="container">
        <DraggableCard>Card 1</DraggableCard>
        <DraggableCard>Card 2</DraggableCard>
        <DraggableCard>Card 3</DraggableCard>
      </div>
      </div>
    );
  }



export default Stars