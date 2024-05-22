import * as React from 'react';
import { Container, Box } from "@mui/material";
import Heroes from "./Components/Heroes"


function App() {

  return (
    <Container>
      <h1>My super heroes App</h1>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        List of Super Heroes.
      </Box>
      <Heroes />
    </Container>
  )
}

export default App
