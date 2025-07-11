import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100%",
        width: "100vw",
      }}
    >
      <NavBar />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
