import React from "react";

function QuestionItem({ question, onDeleteQ, onChangeQ }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange (event) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "correctIndex": event.target.value,
      })
    })
    .then(r => r.json())
    .then(updatedQ => onChangeQ(updatedQ));
  }

  function handleDelete (event) {
    fetch(`http://localhost:4000/questions/${id}`, {method: "DELETE"})
    .then(r => r.json())
    .then(() => onDeleteQ(id));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
