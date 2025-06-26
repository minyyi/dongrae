import React, { useEffect, useRef, useState } from "react";
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

// Styled Components for geometric shapes and particles
const GeometricShape = styled(Box)(
  ({
    theme,
    delay,
    top,
    left,
    right,
    transform,
    borderRadius,
    width,
    height,
  }) => ({
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
  })
);

const Particle = styled(Box)(({ theme, top, left, animationDelay }) => ({
  position: "absolute",
  width: 4,
  height: 4,
  background: "#d4af37",
  borderRadius: "50%",
  opacity: 0.6,
  animation: `sparkle 3s linear infinite ${animationDelay || "0s"}`,
  top: top,
  left: left,
}));

const LawIcon = styled(Box)(({ theme, top, left, right, animationDelay }) => ({
  position: "absolute",
  fontSize: "24px",
  color: "rgba(212, 175, 55, 0.15)",
  animation: `drift 15s linear infinite ${animationDelay || "0s"}`,
  top: top,
  left: left,
  right: right,
  pointerEvents: "none",
}));

const HeroSection = () => {
  const heroRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [open, setOpen] = useState(false);

  // 파티클 생성 로직
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animationDelay: Math.random() * 3 + "s",
      });
    }
    setParticles(newParticles);
  }, []);

  // 마우스 움직임에 따른 패럴랙스 효과
  useEffect(() => {
    const handleMouseMove = (e) => {
      const shapes = document.querySelectorAll(".geometric-shape");
      const lawIcons = document.querySelectorAll(".law-icon"); // 법률 아이콘도 움직이도록 추가
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
        const intensity = (index + 1) * 5; // 아이콘은 조금 덜 움직이도록
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
  }, []);

  // 버튼 클릭 시 스크롤 부드러운 효과 + 리플 효과 (MUI Button에 내장된 ripple 효과 사용)
  const handleCtaClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={heroRef}
      sx={{
        height: "100vh",
        background:
          "linear-gradient(135deg, #1a2332 0%, #2c3e50 50%, #34495e 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        className="geometric-bg"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1,
          zIndex: 1,
        }}
      >
        <GeometricShape
          width={200}
          height={200}
          top="10%"
          left="10%"
          transform="rotate(45deg)"
          delay="0s"
        />
        <GeometricShape
          width={150}
          height={150}
          top="60%"
          right="15%"
          borderRadius="50%"
          delay="2s"
        />
        <GeometricShape
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
      </Box>

      <Box className="law-icons">
        <LawIcon top="15%" left="5%">
          ⚖️
        </LawIcon>
        <LawIcon top="25%" right="8%" animationDelay="3s">
          📜
        </LawIcon>
        <LawIcon top="45%" left="3%" animationDelay="6s">
          🏛️
        </LawIcon>
        <LawIcon top="65%" right="12%" animationDelay="9s">
          ⚖️
        </LawIcon>
        <LawIcon top="75%" left="8%" animationDelay="12s">
          📋
        </LawIcon>
      </Box>

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
        <Box
          className="logo-section"
          sx={{
            marginBottom: "30px",
            opacity: 1,
            animation: "fadeInUp 1s ease-out 0.5s forwards",
          }}
        >
          <Box
            className="logo-icon"
            sx={{
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
          </Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 300,
              color: "#d4af37",
              mb: 6,
            }}
          >
            법무법인 동래
          </Typography>
        </Box>

        <Typography
          variant="h3"
          component="h1"
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
          신뢰할 수 있는
          <br />
          법률 파트너
        </Typography>

        <Typography
          variant="body1"
          component="p"
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
          전문성과 경험을 바탕으로 최고의 법률 서비스를 제공합니다
          <br />
          기업법무 • 민사소송 • 형사변호 • 국제거래
        </Typography>

        <Box
          className="cta-container"
          sx={{
            opacity: 1,
            animation: "fadeInUp 1s ease-out 2s forwards",
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px", md: "20px" },
          }}
        >
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
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
              margin: { xs: "0 auto", md: "0 10px" }, // 모바일 중앙 정렬
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 12px 35px rgba(212, 175, 55, 0.4)",
                background: "linear-gradient(45deg, #d4af37, #f1c40f)", // hover 시 배경 유지
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
            무료 상담 신청
          </Button>
          {/* <Button
            variant="outlined" // MUI 아웃라인 버튼 스타일 사용
            onClick={(e) => handleCtaClick(e, "#about")}
            sx={{
              padding: "18px 40px",
              background: "transparent",
              border: "2px solid #d4af37",
              color: "#d4af37",
              textDecoration: "none",
              borderRadius: "50px",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(212, 175, 55, 0.3)", // 그림자 추가
              margin: { xs: "0 auto", md: "0 10px" },
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                background: "#d4af37",
                color: "#1a2332",
                transform: "translateY(-3px)",
                boxShadow: "0 12px 35px rgba(212, 175, 55, 0.4)",
                border: "2px solid #d4af37", // hover 시에도 테두리 유지
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
            법무법인 소개
          </Button> */}
        </Box>
      </Box>

      <Box
        className="scroll-indicator"
        sx={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0,
          animation: "fadeIn 5s ease-out 5s forwards",
        }}
      >
        <Box
          className="scroll-arrow"
          sx={{
            width: "30px",
            height: "30px",
            borderRight: "2px solid #d4af37",
            borderBottom: "2px solid #d4af37",
            transform: "rotate(45deg)",
            animation: "bounce 2s infinite",
          }}
        />
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>무료 상담 신청</DialogTitle>
        <DialogContent>
          <Typography>상담 문의: 051-507-7000</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>닫기</Button>
          <Button onClick={() => (window.location.href = "tel:02-1234-5678")}>
            전화걸기
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HeroSection;
