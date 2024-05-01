import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            College Archive
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" style={{ marginTop: 20 }}>
        <Paper style={{ padding: "20px", backgroundColor: "#f3e5f5" }}>
          <Typography variant="h3" gutterBottom>
            Explore College Archives
          </Typography>
          <Typography variant="h6" gutterBottom>
            A comprehensive collection of college tests and activities.
          </Typography>
          <Button variant="contained" color="primary">
            Start Exploring
          </Button>
        </Paper>

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search archives"
            inputProps={{ "aria-label": "search archives" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Document Title
                  </Typography>
                  <Typography color="text.secondary">Upload Date</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
