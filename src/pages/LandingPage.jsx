import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { getCurrentLanguage, getLanguageText } from "../utils/language";
import usePageSEO from "../utils/usePageSEO";
import useMetaTags from "../utils/useMetaTags";

const GeometricShape = styled("div", {
  shouldForwardProp: (prop) =>
    ![
      "delay",
      "top",
      "left",
      "right",
      "transform",
      "borderRadius",
      "width",
      "height",
    ].includes(prop),
})(({ delay, top, left, right, transform, borderRadius, width, height }) => ({
  position: "absolute",
  border: "2px solid #d4af37",
  animation: `float 6s ease-in-out infinite ${delay || "0s"}`,
  top: top,
  left: left,
  right: right,
  transform: transform,
  borderRadius: borderRadius,
  width: width,
  height: height,
  pointerEvents: "none",
}));

const Particle = styled("div", {
  shouldForwardProp: (prop) =>
    !["animationDelay", "top", "left"].includes(prop),
})(({ top, left, animationDelay }) => ({
  position: "absolute",
  width: 4,
  height: 4,
  background: "#d4af37",
  borderRadius: "50%",
  opacity: 0.6,
  animation: `sparkle 3s linear infinite ${animationDelay || "0s"}`,
  top: top,
  left: left,
  pointerEvents: "none",
}));

const LawIcon = styled("div", {
  shouldForwardProp: (prop) =>
    !["animationDelay", "top", "left", "right"].includes(prop),
})(({ top, left, right, animationDelay }) => ({
  position: "absolute",
  fontSize: "24px",
  color: "rgba(212, 175, 55, 0.15)",
  animation: `drift 15s linear infinite ${animationDelay || "0s"}`,
  top: top,
  left: left,
  right: right,
  pointerEvents: "none",
}));

// 시드 기반 랜덤 함수 (SSR 안전)
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// 고정된 파티클 배열 생성 (서버/클라이언트 동일)
const generateFixedParticles = () => {
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      id: i,
      left: seededRandom(i * 7) * 100 + "%",
      top: seededRandom(i * 13) * 100 + "%",
      animationDelay: seededRandom(i * 17) * 3 + "s",
    });
  }
  return particles;
};

const HeroSection = () => {
  const currentLang = getCurrentLanguage();
  usePageSEO("/");

  useMetaTags({
    titleKo: "부산 법무법인 동래 - 전문 법률 서비스",
    titleEn: "Dongrae Law Firm Busan - Professional Legal Services",
    descriptionKo:
      "부산 소재 법무법인으로 민사, 형사, 가족법 등 다양한 법률 서비스를 제공합니다. 풍부한 경험과 전문성으로 고객의 권익을 보호합니다.",
    descriptionEn:
      "Professional law firm in Busan providing comprehensive legal services including civil, criminal, and family law with expertise and experience.",
    keywords:
      "법무법인 동래, 부산 변호사, 법률 서비스, 민사소송, 형사변호, Dongrae Law Firm, Busan lawyer",
    pagePath: "/",
  });

  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      president: {
        "@type": "Person",
        name: "이태환",
        jobTitle: "대표변호사",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "150",
      },
      review: [
        {
          "@type": "Review",
          author: "김○○",
          reviewBody: "30년 경력의 전문성으로 만족스러운 해결",
        },
      ],
      name: currentLang === "en" ? "Dongrae Law Firm" : "법무법인 동래",
      alternateName:
        currentLang === "en" ? "Busan Dongrae Law Firm" : "부산 법무법인 동래",
      url:
        currentLang === "en"
          ? "https://en.dongraelaw.shop/"
          : "https://ko.dongraelaw.shop/",
      logo: "https://www.dongraelaw.shop/logo.png",
      telephone: "051-507-7000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Seheon Building 5F, 1490-3 Geoje 1-dong",
        addressLocality: "Busan",
        addressRegion: "Yeonje-gu",
        postalCode: "47500",
        addressCountry: "KR",
      },
      areaServed:
        currentLang === "en" ? "Busan Metropolitan City" : "부산광역시",
      openingHours: "Mo-Fr 09:00-18:00",
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: currentLang === "en" ? "Legal Services" : "법률 서비스",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: currentLang === "en" ? "Civil Litigation" : "민사소송",
              description:
                currentLang === "en"
                  ? "Contract disputes, damages, real estate disputes"
                  : "계약분쟁, 손해배상, 부동산분쟁 전문",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: currentLang === "en" ? "Criminal Defense" : "형사변호",
              description:
                currentLang === "en"
                  ? "Criminal case defense, arrest warrant response"
                  : "형사사건 전문 변호, 구속영장 대응",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: currentLang === "en" ? "Corporate Law" : "기업법무",
              description:
                currentLang === "en"
                  ? "Contract drafting, legal consultation, corporate consulting"
                  : "계약서 작성, 법률 자문, 기업 컨설팅",
            },
          },
        ],
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((s) => {
        if (s.text.includes('"@type":"LegalService"')) {
          document.head.removeChild(s);
        }
      });
    };
  }, [currentLang]);

  const heroRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // 클라이언트 사이드임을 확인
  useEffect(() => {
    setIsClient(true);
    // 고정된 파티클 배열 사용
    setParticles(generateFixedParticles());
  }, []);

  // 마우스 움직임에 따른 패럴랙스 효과 (클라이언트 전용)
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e) => {
      const shapes = document.querySelectorAll(".geometric-shape");
      const lawIcons = document.querySelectorAll(".law-icon");
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      // Reset transform before applying new one to avoid cumulative effect
      shapes.forEach((shape) => {
        shape.style.transform = shape.dataset.initialTransform || "";
      });
      lawIcons.forEach((icon) => {
        icon.style.transform = icon.dataset.initialTransform || "";
      });

      shapes.forEach((shape, index) => {
        const intensity = (index + 1) * 10;
        const x = (mouseX - 0.5) * intensity;
        const y = (mouseY - 0.5) * intensity;
        shape.style.transform += ` translate(${x}px, ${y}px)`;
      });

      lawIcons.forEach((icon, index) => {
        const intensity = (index + 1) * 5;
        const x = (mouseX - 0.5) * intensity;
        const y = (mouseY - 0.5) * intensity;
        icon.style.transform += ` translate(${x}px, ${y}px)`;
      });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      // Store initial transforms to reset later
      document.querySelectorAll(".geometric-shape").forEach((shape) => {
        shape.dataset.initialTransform =
          window.getComputedStyle(shape).transform;
      });
      document.querySelectorAll(".law-icon").forEach((icon) => {
        icon.dataset.initialTransform = window.getComputedStyle(icon).transform;
      });
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isClient]);

  // Dialog 닫기 함수
  const handleCloseDialog = () => {
    setOpen(false);
  };

  // 전화 걸기 함수
  const handleCallPhone = () => {
    window.location.href = "tel:051-507-7000";
    setOpen(false);
  };

  return (
    <>
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <h1>법무법인 동래 - 부산 전문 법률 서비스</h1>
        <h2>30년 경력의 믿을 수 있는 변호사</h2>
        <p>
          부산 연제구 위치한 법무법인 동래는 민사소송, 형사변호, 기업법무 전문
          변호사가 직접 상담하는 법무법인입니다. 051-507-7000
        </p>
        <address>부산광역시 연제구 법원남로 18 세헌빌딩 5층</address>
      </div>

      <div
        ref={heroRef}
        style={{
          height: "100vh",
          width: "100vw",
          background:
            "linear-gradient(135deg, #1a2332 0%, #2c3e50 50%, #34495e 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* 배경 기하학적 요소들 - 완전히 접근성에서 제외 */}
        <div
          className="geometric-bg"
          aria-hidden="true"
          role="presentation"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <GeometricShape
            className="geometric-shape"
            width={200}
            height={200}
            top="10%"
            left="10%"
            transform="rotate(45deg)"
            delay="0s"
          />
          <GeometricShape
            className="geometric-shape"
            width={150}
            height={150}
            top="60%"
            right="15%"
            borderRadius="50%"
            delay="2s"
          />
          <GeometricShape
            className="geometric-shape"
            width={100}
            height={100}
            top="20%"
            right="30%"
            transform="rotate(30deg)"
            delay="4s"
          />
          {particles.map((p) => (
            <Particle
              key={p.id}
              top={p.top}
              left={p.left}
              animationDelay={p.animationDelay}
            />
          ))}
        </div>

        {/* 법률 아이콘들  */}
        <div
          className="law-icons"
          aria-hidden="true"
          role="presentation"
          style={{ pointerEvents: "none" }}
        >
          <LawIcon className="law-icon" top="15%" left="5%">
            ⚖️
          </LawIcon>
          <LawIcon
            className="law-icon"
            top="25%"
            right="8%"
            animationDelay="3s"
          >
            📜
          </LawIcon>
          <LawIcon className="law-icon" top="45%" left="3%" animationDelay="6s">
            🏛️
          </LawIcon>
          <LawIcon
            className="law-icon"
            top="65%"
            right="12%"
            animationDelay="9s"
          >
            ⚖️
          </LawIcon>
          <LawIcon
            className="law-icon"
            top="75%"
            left="8%"
            animationDelay="12s"
          >
            📋
          </LawIcon>
        </div>

        {/* 메인 콘텐츠 */}
        <Box
          className="content-container"
          sx={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            maxWidth: 800,
            padding: "0 20px",
            color: "white",
          }}
        >
          <span style={{ fontSize: 0, opacity: 0, position: "absolute" }}>
            부산 법무법인 동래 전문 변호사 민사소송 형사변호 기업법무
            051-507-7000
          </span>
          <Box
            className="logo-section"
            sx={{
              marginBottom: "30px",
              opacity: 1,
              animation: "fadeInUp 1s ease-out 0.5s forwards",
            }}
          >
            <div
              className="logo-icon"
              aria-label="법무법인 동래 로고"
              style={{
                width: 80,
                height: 80,
                margin: "0 auto 20px",
                background: "linear-gradient(45deg, #d4af37, #f1c40f)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                fontWeight: "bold",
                color: "#1a2332",
                boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)",
              }}
            >
              ⚖
            </div>
            <Typography
              component="h2"
              variant="h5"
              sx={{
                fontWeight: 300,
                color: "#d4af37",
                mb: 6,
              }}
            >
              {getLanguageText("법무법인 동래", "Dongrae Law Firm")}
            </Typography>
          </Box>

          <Typography
            component="h3"
            variant="h2"
            className="main-title"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 400,
              mb: 6,
              opacity: 1,
              animation: "fadeInUp 1s ease-out 1s forwards",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              lineHeight: 1.4,
            }}
          >
            {getLanguageText(
              <>
                신뢰할 수 있는
                <br />
                법률 파트너
              </>,
              <>
                Trusted
                <br />
                Legal Partner
              </>
            )}
          </Typography>

          <Typography
            component="h3"
            variant="body1"
            className="subtitle"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              color: "#ecf0f1",
              marginBottom: "40px",
              opacity: 1,
              animation: "fadeInUp 1s ease-out 1.5s forwards",
              fontWeight: 300,
            }}
          >
            {getLanguageText(
              <>
                전문성과 경험을 바탕으로 최고의 법률 서비스를 제공합니다
                <br />
                기업법무 • 민사소송 • 형사변호 • 국제거래
              </>,
              <>
                Providing the best legal services based on expertise and
                experience
                <br />
                Corporate Law • Civil Litigation • Criminal Defense •
                International Trade
              </>
            )}
          </Typography>

          <div
            className="cta-container"
            style={{
              opacity: 1,
              animation: "fadeInUp 1s ease-out 2s forwards",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              aria-label={getLanguageText(
                "무료 상담 신청하기",
                "Request Free Consultation"
              )}
              sx={{
                padding: "18px 40px",
                background: "linear-gradient(45deg, #d4af37, #f1c40f)",
                color: "#1a2332",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(212, 175, 55, 0.3)",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 35px rgba(212, 175, 55, 0.4)",
                  background: "linear-gradient(45deg, #d4af37, #f1c40f)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transition: "left 0.5s",
                },
                "&:hover::before": {
                  left: "100%",
                },
              }}
            >
              {getLanguageText("무료 상담 신청", "Free Consultation")}
            </Button>
          </div>
        </Box>

        {/* 상담 신청 다이얼로그 */}
        <Dialog
          open={open}
          onClose={handleCloseDialog}
          aria-labelledby="consultation-dialog-title"
          aria-describedby="consultation-dialog-description"
          maxWidth="sm"
          fullWidth
          disablePortal={false}
        >
          <DialogTitle
            aria-label="051-507-7000번으로 즉시 전화상담"
            id="consultation-dialog-title"
          >
            {getLanguageText("무료 상담 신청", "Free Consultation Request")}
          </DialogTitle>
          <DialogContent>
            <Typography id="consultation-dialog-description">
              {getLanguageText(
                "상담 문의: 051-507-7000",
                "Consultation Inquiry: 051-507-7000"
              )}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="inherit" type="button">
              {getLanguageText("닫기", "Close")}
            </Button>
            <Button
              onClick={handleCallPhone}
              variant="contained"
              color="primary"
              type="button"
              aria-label="051-507-7000번으로 전화 걸기"
            >
              {getLanguageText("전화걸기", "Call Now")}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default HeroSection;
