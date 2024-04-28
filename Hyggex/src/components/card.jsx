import React, { useState } from "react";
import "../styles/component.css";
import "../styles/media_query.css";

const Card = () => {
  const [activeTab, setActiveTab] = useState(0); // Initialize activeTab state to 0 (Study)

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = ["Study", "Quiz", "Test", "Game", "Others"];

  return (
  <>
    <div className="card-cont absolute ">
      <h1 className="absolute align-middle font-bold">
        Realtion and Functions ( Mathematics )
      </h1>

      <div className="tabs absolute flex justify-center">
        <ul className="flex">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    
      <div className="card absolute text-center">
        <div className="card-icons absolute">
        <i class="fas fa-lightbulb"></i>
        <i class="fas fa-volume-up"></i>
        </div>
          <h2 className="  text-white  font-semibold  absolute">9 + 6 + 7x - 2x -3</h2>
          <div className="bottom_card flex absolute">
   <img className="card-img"  src="/Images/syn.png" alt="" />
   <div className="middle_btm flex justify-center">
   <img  src="/Images/right.png" alt="" className="right" />
     <p className="">01/10</p>
    <img src="/Images/right.png" alt="" />
   </div>
    <img className="card-img" src="/Images/scan.png" alt="" />
 
         </div>
     </div>
    
      
    </div>
    <div className=" publish absolute flex">
      <img src="/Images/favi.png" alt="" />
      <div className="btm-pub flex flex-col">
      <p>Published By</p>
      <img src="/Images/name.png" alt="" />
      </div>
      <div className="create flex justify-center absolute">
        <img src="/Images/plus.png" alt="" />
        <h1>Create Flashcard</h1>
      </div>
    </div>
  </>
  );
};

export default Card;
