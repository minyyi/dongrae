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

const ContactStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: "법무법인 동래",
    alternateName: "부산 법무법인 동래",
    description:
      "부산 연제구 위치한 민사, 형사, 부동산 전문 법무법인. 1995년 설립, 30년 경력의 이태환 대표변호사 직접 상담",
    url: "https://ko.dongraelaw.shop",
    telephone: "+82-51-507-7000",
    email: "info@dongraelaw.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "법원남로 18 (세헌빌딩) 5층",
      addressLocality: "연제구",
      addressRegion: "부산광역시",
      postalCode: "47508",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.1756,
      longitude: 129.0833,
    },
    openingHours: ["Mo-Fr 09:00-18:00"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: [
      { "@type": "City", name: "부산광역시" },
      { "@type": "State", name: "경상남도" },
      { "@type": "City", name: "울산광역시" },
    ],
    serviceType: ["민사소송", "형사변호", "가사사건", "부동산분쟁", "기업법무"],
    priceRange: "$$",
    paymentAccepted: ["현금", "카드", "계좌이체"],
    currenciesAccepted: "KRW",
    founder: {
      "@type": "Person",
      name: "이태환",
      jobTitle: "대표변호사",
      alumniOf: "부산대학교 대학원 법학과",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "200",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "법률서비스",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "무료 법률상담",
            description: "초기 상담 무료, 24시간 응급상담 가능",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "민사소송",
            description: "부산 지역 민사분쟁 전문 해결, 승소율 92%",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
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
      content: ["부산지하철 3호선 거제역", "10번 출구에서 도보 3분"],
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
      content: ["부산지방법원 도보 5분", "법조타운 내 위치"],
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
    <>
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <h1>법무법인 동래 연락처 - 부산 법률상담 문의</h1>
        <h2>부산광역시 연제구 법원남로 18 세헌빌딩 5층</h2>
        <p>
          부산 법무법인 동래에 연락하세요. 전화 051-507-7000, 이메일
          info@dongraelaw.com. 민사소송, 형사변호, 부동산분쟁 전문 변호사가 직접
          상담해드립니다.
        </p>
        <address>
          <strong>법무법인 동래</strong>
          <br />
          주소: 부산광역시 연제구 법원남로 18 (세헌빌딩) 5층
          <br />
          전화: 051-507-7000
          <br />
          이메일: info@dongraelaw.com
          <br />
          운영시간: 평일 09:00-18:00
          <br />
          교통: 지하철 3호선 거제역 10번 출구 도보 3분
        </address>
        <div>
          <h3>상담 가능 분야</h3>
          <ul>
            <li>민사소송 - 계약분쟁, 손해배상</li>
            <li>형사변호 - 구속영장, 형사사건</li>
            <li>부동산 - 매매분쟁, 경계분쟁</li>
            <li>가사사건 - 이혼, 상속</li>
            <li>기업법무 - 계약서 작성, 법률자문</li>
          </ul>
        </div>
      </div>

      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        법무법인 동래 연락처 - 부산 법률상담 문의
      </h1>
      <ContactStructuredData />

      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 4 }}>
        <span style={{ fontSize: 0, opacity: 0, position: "absolute" }}>
          부산 법무법인 동래 연락처 051-507-7000 세헌빌딩 연제구 거제역 법률상담
          문의
        </span>
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
            <Typography variant="h3" component="h2" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h6" component="h3" sx={{ opacity: 0.9 }}>
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
                    <Typography
                      variant="h6"
                      component="h3"
                      color="primary"
                      gutterBottom
                    >
                      {info.title}
                    </Typography>
                    {info.content.map((text, idx) => (
                      <Typography
                        key={idx}
                        variant="body1"
                        component="p"
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
                  component="h2"
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
                      <Typography variant="h6" component="h3" fontWeight="bold">
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
                      <Typography variant="h6" component="h3" fontWeight="bold">
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
                component="h3"
                color="primary"
                textAlign="center"
                sx={{ mb: 3 }}
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
                      <Typography
                        variant="h6"
                        component="h4"
                        color="primary"
                        gutterBottom
                      >
                        {transport.title}
                      </Typography>
                      {transport.content.map((text, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          component="p"
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
        </Container>
      </Box>
    </>
  );
};

export default ContactUs;
