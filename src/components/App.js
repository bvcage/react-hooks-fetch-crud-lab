import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
    .then(r => r.json())
    .then(data => setQuestions(data));
  }, [])

  function onAddNewQ (newQ) {
    setQuestions([...questions, newQ]);
  }

  function onChangeQ (updatedQ) {
    const updatedQuestions = questions.filter(q => {
      if (q.id === updatedQ.id) return updatedQ;
      return q;
    });
    setQuestions(updatedQuestions);
  }

  function onDeleteQ (qId) {
    const updatedQuestions = questions.filter(q => q.id !== qId);
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddNewQ={onAddNewQ} /> : <QuestionList questions={questions} onDeleteQ={onDeleteQ} onChangeQ={onChangeQ}/>}
    </main>
  );
}

export default App;
