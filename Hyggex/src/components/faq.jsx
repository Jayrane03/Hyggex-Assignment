import React, { useState } from 'react';
import "../styles/component.css";
import "../styles/media_query.css";

const Faq = () => {
  const [dropdowns, setDropdowns] = useState([
    { id: 1, question: 'Can education flashcards be used for all age groups?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 2, question: 'How do education flashcards work?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { id: 3, question: 'Can education flashcards be used for test preparation?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit' },
  ]);

  const toggleDropdown = (id) => {
    setDropdowns(dropdowns.map(drop => {
      if (drop.id === id) {
        return { ...drop, isOpen: !drop.isOpen };
      }
      return { ...drop, isOpen: false };
    }));
  };

  return (
    <div className="faq-cont">
      <h1 className='faq-title absolute'>FAQ</h1>
      <div className="dropdown-container absolute flex flex-col">
        {dropdowns.map(drop => (
          <div className={`dropdown ${drop.isOpen ? 'active' : ''}`} key={drop.id}>
            <div className="dropdown-header" onClick={() => toggleDropdown(drop.id)}>
              <span className="dropdown-text">{drop.question}</span>
              <i className={`arrow fas ${drop.isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {drop.isOpen && (
              <div className="dropdown-content">
                {drop.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
