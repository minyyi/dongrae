// Faq.jsx - 수정된 버전
import { useEffect } from "react";
import CommonContainer from "../components/CommonContainer";
import { Typography, Box } from "@mui/material";
import FaqTable, { faqData } from "../components/FaqTable"; // faqData import 추가

const FaqPage = () => {
  // JSON-LD 스키마 추가
  useEffect(() => {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((faq) => ({
        "@type": "Question",
        name: faq.Q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.A,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 제거
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((s) => {
        if (s.text.includes('"@type":"FAQPage"')) {
          document.head.removeChild(s);
        }
      });
    };
  }, []);

  return (
    <CommonContainer>
      <Typography component="h1" variant="h4">
        자주 묻는 질문 (FAQ)
      </Typography>
      <br />
      <Typography
        component="h2"
        sx={{ fontSize: "1.2rem", whiteSpace: "pre-line" }}
      >
        부산 법무법인 동래에 대해 자주 묻는 질문과 답변을 확인하세요.
        <br />
        형사사건, 민사소송, 법률상담 관련 궁금한 점을 해결해드립니다.
      </Typography>
      <Box>
        <FaqTable />
      </Box>
    </CommonContainer>
  );
};

export default FaqPage;
