import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const LandingPage = () => {
  return (
    <Container maxWidth="xl">
      <Paper elevation={4} className="p-4" style={{ marginTop: "16em" }}>
        <h2>This is a Landing page!</h2>
        <h1>Landing here</h1>
      </Paper>
    </Container>
  );
};

export default LandingPage;
