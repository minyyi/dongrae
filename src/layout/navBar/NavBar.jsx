import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  const navigate = useNavigate();
  const clickLogo = () => {
    navigate("/");
  };
  const location = useLocation(); // 현재 경로 가져오기
  // const isLandingPage = location.pathname === "/landing"; // LandingPage 여부 확인
  const pages = [
    { name: "소개", path: "/info" },
    { name: "구성원", path: "/members" },
    { name: "FAQ", path: "/faq" },
  ];

  const handlePageClick = (path) => {
    navigate(path);
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
              alt="logo"
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
              법무법인 <span style={{ fontSize: "28px" }}>동 래</span>
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
                  // 클릭 효과 제거
                  "&:active": {
                    transform: "none",
                    boxShadow: "none",
                  },
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                  // hover 효과 개선
                  "&:hover": {
                    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.12)",
                    transform: "translateY(-1px)", // scale 대신 위로 살짝 이동
                    fontSize: "1.02em", // 글자 크기를 직접 조정
                  },
                  // 부드러운 전환 효과
                  transition: "all 0.15s ease-out", // 시간 단축하고 ease-out 사용
                  // 기본 상태
                  boxShadow: "none",
                  // 텍스트 선명도 보장
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
