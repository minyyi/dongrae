import { useState } from "react";
// import { createTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Train,
  DirectionsBus,
  DirectionsCar,
  Business,
  Send,
} from "@mui/icons-material";
import usePageSEO from "../utils/usePageSEO";
import useMetaTags from "../utils/useMetaTags";

const ContactUs = () => {
  usePageSEO("/contact");

  useMetaTags({
    titleKo: "연락처 | 법무법인 동래 - 부산 법률상담 문의",
    titleEn: "Contact Us | Dongrae Law Firm - Busan Legal Consultation",
    descriptionKo:
      "법무법인 동래에 문의하세요. 부산광역시 연제구 법원남로 18 (세헌빌딩) 5층 위치, 전화 051-507-7000. 민사, 형사, 부동산 등 전문 법률상담을 제공합니다.",
    descriptionEn:
      "Contact Dongrae Law Firm. Located at 5F Seheon Building, 18 Beopwonnam-ro, Yeonje-gu, Busan. Phone: 051-507-7000. We provide professional legal consultation for civil, criminal, and real estate matters.",
    keywords:
      "법무법인 동래 연락처, 부산 변호사 문의, 법률상담 예약, 051-507-7000, 연제구 법무법인, 세헌빌딩, Dongrae Law Firm contact",
    pagePath: "/contact",
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 실제 API 호출 로직을 여기에 추가
      console.log("Form submitted:", formData);

      // 성공 메시지
      setSnackbar({
        open: true,
        message:
          "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
        severity: "success",
      });

      // 폼 초기화
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "주소",
      content: ["부산광역시 연제구 거제1동", "법원남로 18 (세헌빌딩) 5층"],
    },
    {
      icon: <Phone sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "전화번호",
      content: ["051-507-7000", "평일 09:00 - 18:00"],
    },
    {
      icon: <Email sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "이메일",
      content: ["info@dongraelaw.com", "24시간 접수"],
    },
  ];

  const transportInfo = [
    {
      icon: <Train sx={{ fontSize: 36, color: "primary.main" }} />,
      title: "지하철",
      content: ["부산지하철 3호선 거제역", "7번 출구에서 도보 3분"],
    },
    {
      icon: <DirectionsBus sx={{ fontSize: 36, color: "primary.main" }} />,
      title: "버스",
      content: ["거제역 정류장 하차", "17, 31, 51, 83번 등"],
    },
    {
      icon: <DirectionsCar sx={{ fontSize: 36, color: "primary.main" }} />,
      title: "자동차",
      content: ["부산지방법원 인근", "세헌빌딩 지하 주차장 이용"],
    },
    {
      icon: <Business sx={{ fontSize: 36, color: "primary.main" }} />,
      title: "주변 시설",
      content: ["부산지방법원, 검찰청", "법조타운 내 위치"],
    },
  ];

  const subjectOptions = [
    { value: "민사", label: "민사소송" },
    { value: "형사", label: "형사변호" },
    { value: "가사", label: "가사사건" },
    { value: "부동산", label: "부동산" },
    { value: "기업", label: "기업법무" },
    { value: "기타", label: "기타" },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        {/* 헤더 섹션 */}
        <Paper
          elevation={0}
          sx={{
            background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            color: "white",
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" component="h2" sx={{ opacity: 0.9 }}>
            법무법인 동래에 문의하세요
          </Typography>
        </Paper>

        {/* 연락처 정보 카드들 */}
        <Grid
          container
          spacing={3}
          sx={{ mb: 4, display: "flex", justifyContent: "center" }}
        >
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>{info.icon}</Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {info.title}
                  </Typography>
                  {info.content.map((text, idx) => (
                    <Typography
                      key={idx}
                      variant="body1"
                      gutterBottom={idx === 0}
                    >
                      {text}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 지도 섹션 */}
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ p: 3, textAlign: "center" }}>
              <Typography
                variant="h4"
                component="h3"
                color="primary"
                gutterBottom
              >
                오시는 길
              </Typography>
            </Box>

            <Grid container sx={{ flexDirection: "column", gap: 4 }}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      p: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" component="h4" fontWeight="bold">
                      Google Maps
                    </Typography>
                  </Paper>
                  <Box
                    component="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.0!2d129.0833!3d35.1756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEwJzMyLjIiTiAxMjnCsDA1JzAwLjAiRQ!5e0!3m2!1sko!2skr!4v1234567890&markers=color:red%7Clabel:L%7C35.1756,129.0833"
                    sx={{
                      width: "100%",
                      height: 400,
                      border: 0,
                      display: "block",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      p: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" component="h4" fontWeight="bold">
                      Bing Maps
                    </Typography>
                  </Paper>
                  <Box
                    component="iframe"
                    src="https://www.bing.com/maps/embed?h=400&w=1200&cp=35.1756~129.0833&lvl=17&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                    sx={{
                      width: "100%",
                      height: 400,
                      border: 0,
                      display: "block",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* 교통편 안내 */}
        <Card sx={{ mb: 4, p: 4 }}>
          <CardContent>
            <Typography
              variant="h4"
              color="primary"
              textAlign="center"
              sx={{ mb: 3 }}
              // gutterBottom
            >
              교통편 안내
            </Typography>

            <Grid
              container
              spacing={3}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {transportInfo.map((transport, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      width: "100%",
                      flex: 1,
                      textAlign: "center",
                      borderLeft: "4px solid",
                      borderLeftColor: "primary.main",
                      bgcolor: "#f8f9fa",
                      height: "100%",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 1 }}>{transport.icon}</Box>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {transport.title}
                    </Typography>
                    {transport.content.map((text, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        gutterBottom={idx === 0}
                      >
                        {text}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* 문의 폼 */}
        {/* <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              color="primary"
              textAlign="center"
              gutterBottom
            >
              온라인 문의
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="성함"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    required
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="연락처"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange("phone")}
                    required
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="이메일"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    required
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>문의 분야</InputLabel>
                    <Select
                      value={formData.subject}
                      label="문의 분야"
                      onChange={handleInputChange("subject")}
                    >
                      {subjectOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="문의 내용"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    placeholder="문의하실 내용을 자세히 적어주세요."
                    required
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        minWidth: 200,
                        py: 1.5,
                        background:
                          "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #0f1b36 0%, #1e3c72 100%)",
                        },
                      }}
                    >
                      문의하기
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card> */}

        {/* 스낵바 알림 */}
        {/* <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar> */}
      </Container>
    </Box>
  );
};

export default ContactUs;
