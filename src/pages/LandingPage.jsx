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

// 완전히 새로운 스타일 컴포넌트들 (DOM에 불필요한 props 전달 방지)
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
    <div
      ref={heroRef}
      style={{
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
        <LawIcon className="law-icon" top="25%" right="8%" animationDelay="3s">
          📜
        </LawIcon>
        <LawIcon className="law-icon" top="45%" left="3%" animationDelay="6s">
          🏛️
        </LawIcon>
        <LawIcon className="law-icon" top="65%" right="12%" animationDelay="9s">
          ⚖️
        </LawIcon>
        <LawIcon className="law-icon" top="75%" left="8%" animationDelay="12s">
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
            aria-label="무료 상담 신청하기"
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
            무료 상담 신청
          </Button>
        </div>
      </Box>

      {/* 스크롤 인디케이터 */}
      {/* {isClient && (
        <div
          className="scroll-indicator"
          aria-hidden="true"
          role="presentation"
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0,
            animation: "fadeIn 5s ease-out 5s forwards",
            pointerEvents: "none",
          }}
        >
          <div
            className="scroll-arrow"
            style={{
              width: "30px",
              height: "30px",
              borderRight: "2px solid #d4af37",
              borderBottom: "2px solid #d4af37",
              transform: "rotate(45deg)",
              animation: "bounce 2s infinite",
            }}
          />
        </div>
      )} */}

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
        <DialogTitle id="consultation-dialog-title">무료 상담 신청</DialogTitle>
        <DialogContent>
          <Typography id="consultation-dialog-description">
            상담 문의: 051-507-7000
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="inherit" type="button">
            닫기
          </Button>
          <Button
            onClick={handleCallPhone}
            variant="contained"
            color="primary"
            type="button"
            aria-label="051-507-7000번으로 전화 걸기"
          >
            전화걸기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HeroSection;
