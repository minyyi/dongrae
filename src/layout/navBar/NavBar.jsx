import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  getCurrentLanguage,
  switchLanguage,
  getLanguageText,
} from "../../utils/language";

const NavBar = () => {
  const navigate = useNavigate();
  const clickLogo = () => {
    navigate("/");
  };
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState("ko");

  useEffect(() => {
    setCurrentLang(getCurrentLanguage());
  }, []);

  const pages = [
    {
      name: getLanguageText("소개", "About"),
      path: "/info",
    },
    {
      name: getLanguageText("구성원", "Members"),
      path: "/members",
    },
    {
      name: getLanguageText("FAQ", "FAQ"),
      path: "/faq",
    },
  ];

  const handlePageClick = (path) => {
    navigate(path);
  };

  const handleLanguageToggle = () => {
    const newLang = currentLang === "ko" ? "en" : "ko";
    switchLanguage(newLang);
  };

  return (
    <Box sx={{}}>
      <AppBar
        position="static"
        sx={{ minHeight: 100, justifyContent: "center" }}
      >
        <Toolbar>
          {/* {!isLandingPage && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FiMenu />
            </IconButton>
          )} */}
          <Box
            onClick={clickLogo}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              cursor: "pointer",
            }}
          >
            <img
              src="/favicon.png"
              alt={getLanguageText(
                "법무법인 동래 로고",
                "Dongrae Law Firm Logo"
              )}
              itemProp="logo"
              style={{
                width: "40px",
                height: "38px",
                marginLeft: "16px",
                borderRadius: "4px",
              }}
            />
            <Typography
              component="div"
              variant="h6"
              sx={{
                flexGrow: 1,
                ml: 2,
              }}
            >
              {getLanguageText(
                <>
                  법무법인 <span style={{ fontSize: "28px" }}>동 래</span>
                </>,
                <>
                  <span style={{ fontSize: "28px" }}>Dongrae</span> Law Firm
                </>
              )}{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              mr: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handlePageClick(page.path)}
                sx={{
                  my: 2,
                  color: "inherit",
                  textDecoration: "none",
                  display: "flex",
                  "&:active": {
                    transform: "none",
                    boxShadow: "none",
                  },
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                  "&:hover": {
                    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.12)",
                    transform: "translateY(-1px)",
                    fontSize: "1.02em",
                  },
                  transition: "all 0.15s ease-out",
                  boxShadow: "none",
                  fontSmooth: "always",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {/* <Button color="inherit">Login</Button> */}

          {/* 언어 토글 스위치 */}
          <FormControlLabel
            control={
              <Switch
                checked={currentLang === "en"}
                onChange={handleLanguageToggle}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#d4af37",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#d4af37",
                  },
                }}
              />
            }
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ color: currentLang === "ko" ? "#fff" : "#ccc" }}
                >
                  KR
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: currentLang === "en" ? "#fff" : "#ccc" }}
                >
                  EN
                </Typography>
              </Box>
            }
            sx={{
              margin: 0,
              "& .MuiFormControlLabel-label": {
                fontSize: "0.875rem",
              },
            }}
          />
          {/* </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
