import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQ, onChangeQ }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(q => {
        return <QuestionItem
          key={q.id}
          question={q}
          onDeleteQ={onDeleteQ}
          onChangeQ={onChangeQ}
        />
      })}</ul>
    </section>
  );
}

export default QuestionList;
