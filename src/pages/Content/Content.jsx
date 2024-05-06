import React from "react";
import { useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";

const Contents = () => {
  const [contents, setContents] = useState();
  const [loading, setLoading] = useState(false);

  const mockContents = {
    id: 1,
    title: "Calculus I Final Exam",
    date: "2021-05-15",
    content: [
      "Question 1: Solve the following equation...",
      "Question 2: Evaluate the integral...",
      "Question 3: Find the derivative of...",
    ],
  };

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setContents(mockContents);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Typography variant="h4" gutterBottom>
        {contents ? contents.title : "Loading..."}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Typography variant="h5" component="div">
            {contents &&
              contents.content.map((item, index) => (
                <Typography key={index} variant="body1" gutterBottom>
                  {item}
                </Typography>
              ))}
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default Contents;
