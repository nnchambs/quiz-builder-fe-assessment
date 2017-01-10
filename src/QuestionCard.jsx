import React, { Component } from 'react';


const QuestionCard = ({ questionTitle}) => {
  return(
  <h3>{questionTitle ? questionTitle : null }</h3>
)}

export default QuestionCard
