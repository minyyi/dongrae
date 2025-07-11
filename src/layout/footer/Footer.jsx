import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { IoLogoGithub } from "react-icons/io";
// import { IoLogoYoutube } from "react-icons/io";
// import { IoLogoInstagram } from "react-icons/io";
import { useTheme } from "@mui/material/styles";
import { getLanguageText } from "../../utils/language";

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const clickLogo = () => {
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#d7ccc8",
          pt: 4,
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
            columnGap: 10,
          }}
        >
          {/* 로고, 시간 */}
          <Box
            sx={{ display: "flex", cursor: "pointer", flexDirection: "column" }}
            onClick={clickLogo}
            aria-label={getLanguageText(
              "법무법인 동래 메인페이지로 이동",
              "Go to Dongrae Law Firm main page"
            )}
          >
            <img
              src="/logo.png"
              alt="부산 법무법인 동래 로고"
              itemProp="logo"
              style={{
                width: "120px",
                height: "92px",
                marginLeft: "16px",
                borderRadius: "4px",
              }}
            />
            {/* <Typography>법무법인 동래</Typography> */}
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
                <strong>{getLanguageText("운영시간:", "Office Hours:")}</strong>{" "}
                {getLanguageText(
                  "평일 10:00 ~ 17:30 (점심시간 12:00 ~ 13:00)",
                  "Mon-Fri 10:00 ~ 17:30 (Lunch 12:00 ~ 13:00)"
                )}
              </Typography>
              <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                {getLanguageText(
                  "토/일/공휴일 휴무",
                  "Closed on weekends and holidays"
                )}
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
                <strong>{getLanguageText("계좌:", "Account:")}</strong>{" "}
                {getLanguageText(
                  "하나은행 309-9101-***",
                  "Hana Bank 309-9101-***"
                )}
              </Typography>
              <Typography
                sx={{ fontSize: { md: 14, xs: 12 } }}
                aria-label={getLanguageText(
                  "법무법인 주소",
                  "Law firm address"
                )}
              >
                <strong>{getLanguageText("주소:", "Address:")}</strong>{" "}
                {getLanguageText(
                  "부산광역시 연제구 거제1동 법원남로 18 (세헌빌딩) 5층",
                  "Seheon Building 5F, 18, Beobwonnam-ro, Yeonje-gu, Busan"
                )}
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
              <Typography
                sx={{ fontSize: { md: 14, xs: 12 } }}
                aria-label={getLanguageText(
                  "개인정보처리방침",
                  "Privacy Policy"
                )}
              ></Typography>
              <Typography
                sx={{ fontSize: { md: 14, xs: 12 } }}
                aria-label={getLanguageText("이용약관", "Terms of Service")}
              >
                {getLanguageText("이용약관", "Terms of Service")}{" "}
              </Typography>
              {/* <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
                가맹점 고지사항
              </Typography> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "large",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: { md: 14, xs: 12 } }}
                aria-label={getLanguageText(
                  "저작권 정보",
                  "Copyright information"
                )}
              >
                {getLanguageText(
                  "© 2025 법무법인 동래. All rights reserved.",
                  "© 2025 Dongrae Law Firm. All rights reserved."
                )}
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
            <Typography
              sx={{ fontSize: 20 }}
              aria-label={getLanguageText(
                "051-507-7000번으로 전화걸기",
                "Call 051-507-7000"
              )}
            >
              051‑507‑7000
            </Typography>
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
