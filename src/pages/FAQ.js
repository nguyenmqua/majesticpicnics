import React from "react";
import Collapses from "../components/Collapse";
import "./faq.css"


const FAQ = () => {

  const questions = [
    {
        question: "When should I book a picnic?",
        answer: "If you could me know two weeks in advance, I would appreciate it. The earlier the better I can accommodate you."
    },
    {
        question: "Do you provide food?",
        answer: "Unfortunately, it isn't within my service but Iwould be more than happy to give you recommendations",
    },
    {
      question: "Do I need to clean up after the picnics?",
      answer: "No, I take care of that. All you have to do is show up & have a good time.",
  },
  {
      question: "Can I pick a location?",
      answer: "Yes, you can pick a location as long as it's within the Denver and Aurora area. I can also give recommendations if you're having difficulties finding one.",
  }, {
      question: "Do you do indoor picnics",
      answer: "Yes, I understand we live in sate where weather is unexpected.",
  },
  {
      question: "Refund Policy",
      answer: "	A 50% deposit is required to secure the date and the full amount must be paid upon arrival. I cannot promise a spot if the deposit hasn’t been made. 72hr cancellation notice for a partial refund. If I do not receive a notice your deposit will be nonrefundable. The picnic is held for 2 hours. If you surpass the hour there will be an additional $40 fee.",
  }, 
 
]


  return (
    <>
    <div className="faqtitle"><h5>Frequently Asked Questions</h5></div>
    {questions.map((list)=>{
    return (
    <Collapses question={list.question} answer={list.answer}/>
    )})}
    </>
  );
};

export default FAQ;
