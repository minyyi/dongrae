import { Container } from "@mui/material";

const CommonContainer = ({ children, sx }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 6,
        mx: 6,
        ...sx,
      }}
    >
      {children}
    </Container>
  );
};

export default CommonContainer;
