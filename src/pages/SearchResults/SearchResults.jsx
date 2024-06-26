import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";

// Mock data for demonstration
const mockResults = [
  { id: 1, title: "Calculus I Final Exam", date: "2021-05-15" },
  { id: 2, title: "Introduction to Psychology Midterm", date: "2022-03-10" },
  { id: 3, title: "Modern History: Term Paper", date: "2022-01-12" },
];

const SearchResults = () => {
  // State to manage loading status (assuming data fetching mechanism)

  const { input } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);

  console.log(input);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setResults(mockResults); // Set mock data as results
      setLoading(false);
    }, 1000);
  }, [input]);

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Typography variant="h4" gutterBottom>
        Search Results for "{input}"
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {results.length > 0 ? (
            results.map((result) => (
              <Grid item xs={12} sm={6} md={4} key={result.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {result.title}
                    </Typography>
                    <Typography color="text.secondary">
                      Date: {result.date}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      component={Link}
                      to={`/content/${result.id}`}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No results found.</Typography>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default SearchResults;
