import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, CircularProgress } from "@mui/material";

const Contents = () => {
  const [contents, setContents] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  const mockContents = [
    {
      id: 1,
      title: "Calculus I Final Exam",
      date: "2021-05-15",
      content: [
        "Question 1: Solve the following equation...",
        "Question 2: Evaluate the integral...",
        "Question 3: Find the derivative of...",
      ],
    },
    {
      id: 2,
      title: "Introduction to Psychology Midterm",
      date: "2022-03-10",
      content: [
        "Question 1: What is the definition of...",
        "Question 2: Explain the concept of...",
      ],
    },
    {
      id: 3,
      title: "Modern History: Term Paper",
      date: "2022-01-12",
      content: [
        "Topic: The impact of World War II on...",
        "Introduction: The Second World War...",
        "Body: The aftermath of the war...",
      ],
    },
  ];

  useEffect(() => {
    const foundContent = fetchContentById(id);
    if (foundContent) {
      setTimeout(() => {
        setContents(foundContent);
        setLoading(false);
      }, 1000);
    } else {
      console.error(`Content with id ${id} not found.`);
    }
  }, [id]);

  const fetchContentById = (id) => {
    return mockContents.find((content) => content.id === parseInt(id));
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Typography variant="h4" gutterBottom>
        {contents ? contents.title : "Loading..."}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        contents.content.map((item, index) => (
          <Typography key={index} variant="body1" gutterBottom>
            {item}
          </Typography>
        ))
      )}
    </Container>
  );
};

export default Contents;
