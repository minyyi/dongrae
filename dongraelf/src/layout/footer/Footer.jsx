import React from "react";
import { Box, Typography, Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  //   const navigate = useNavigate();
  //   const clickLogo = () => {
  //     navigate("/");
  //   };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#d7ccc8",
          // mt: 6,
          //   opacity: 0.2,
        }}
      >
        <Container
          sx={{
            minHeight: 80,
            py: 2,
            display: "flex",
            // flexDirection: "column",
            // rowGap: 1,
            justifyContent: "center",
            columnGap: 6,
          }}
        >
          {/* 로고, 시간 */}
          <Box sx={{ display: "flex", cursor: "pointer" }}>
            <Typography>법무법인 동래</Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { sm: "row", xs: "column" },
                columnGap: 2,
                mb: 2,
              }}
            >
              <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                10:00 ~ 17:30 (점심시간 12:00 ~ 13:00)
              </Typography>
              <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                토/일/공휴일 휴무
              </Typography>
            </Box>

            {/* 계좌/주소 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { sm: "row", xs: "column" },
                columnGap: 1,
                mb: 2,
              }}
            >
              <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                계좌정보:하나은행 309-9101-***
              </Typography>
              <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                주소: 부산 연제구 거제1동 1490‑3 세헌빌딩 5층
              </Typography>
            </Box>
            {/* 개인정보처리/이용약관/가맹점 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { sm: "row", xs: "column" },
                columnGap: 1,
                mb: 2,
                textDecoration: "none",
              }}
            >
              <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                개인정보처리방침
              </Typography>
              <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                이용약관
              </Typography>
              <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                가맹점 고지사항
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "large",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                Copyright 2025. dongrae. All right reserved
              </Typography>
            </Box>
          </Box>

          {/* 전화번호 SNS */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 1,
            }}
          >
            <Typography sx={{ fontSize: 20 }}>051‑507‑7000</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                columnGap: 1,
              }}
            >
              {/* <IoLogoGithub fontSize="20px" />
              <IoLogoYoutube fontSize="20px" />
              <IoLogoInstagram fontSize="20px" /> */}
              {/* <YouTubeIcon fontSize="medium" />
            <InstagramIcon fontSize="medium" /> */}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
