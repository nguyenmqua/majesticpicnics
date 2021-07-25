import React from "react";
import Collapses from "../components/Collapse";
import Collpases2 from "../components/Collapse2"
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
  
 
]


  return (
    <>
    <div className="faqtitle"><h5>Frequently Asked Questions</h5></div>
    {questions.map((list)=>{
    return (
    <Collapses question={list.question} answer={list.answer}/>
    )})}
    <Collpases2 />
    </>
  );
};

export default FAQ;
