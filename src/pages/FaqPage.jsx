import { useEffect } from "react";
import CommonContainer from "../components/CommonContainer";
import { Typography, Box } from "@mui/material";
import FaqTable from "../components/FaqTable";
import { faqDataKo, faqDataEn } from "../data/faqData";
import { getCurrentLanguage, getLanguageText } from "../utils/language";
import usePageSEO from "../utils/usePageSEO";
import useMetaTags from "../utils/useMetaTags";
// import { categoryOrder, categoryOrderEn } from "../data/faqData";

const FaqPage = () => {
  const currentLang = getCurrentLanguage();
  usePageSEO("/faq");

  useMetaTags({
    titleKo: "자주 묻는 질문 | 법무법인 동래 - 부산 법률상담",
    titleEn: "FAQ | Dongrae Law Firm - Busan Legal Consultation",
    descriptionKo:
      "부산 법무법인 동래에 대해 자주 묻는 질문과 답변을 확인하세요. 형사사건, 민사소송, 법률상담 등 관련 궁금한 점을 해결해드립니다.",
    descriptionEn:
      "Check out frequently asked questions and answers about Dongrae Law Firm in Busan. We solve your questions related to criminal cases, civil litigation, and legal consultation.",
    keywords:
      "법무법인 동래 FAQ, 부산 법률상담, 변호사 질문, 법률 문의, Dongrae Law Firm FAQ",
    pagePath: "/faq",
  });

  const currentFaqData = currentLang === "en" ? faqDataEn : faqDataKo;

  useEffect(() => {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name:
        currentLang === "en"
          ? "Dongrae Law Firm FAQ - Busan Legal Consultation"
          : "법무법인 동래 자주 묻는 질문 - 부산 법률상담",
      description:
        currentLang === "en"
          ? "Frequently asked questions about Dongrae Law Firm's legal services in Busan"
          : "부산 법무법인 동래의 법률 서비스에 대한 자주 묻는 질문",
      about: {
        "@type": "LegalService",
        name: currentLang === "en" ? "Dongrae Law Firm" : "법무법인 동래",
      },
      mainEntity: currentFaqData.map((faq, index) => ({
        "@type": "Question",
        name: faq.Q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.A,
          author: {
            "@type": "Organization",
            name: currentLang === "en" ? "Dongrae Law Firm" : "법무법인 동래",
          },
        },
        position: index + 1,
        url: `#faq-${index + 1}`,
      })),
      provider: {
        "@type": "LegalService",
        name: currentLang === "en" ? "Dongrae Law Firm" : "법무법인 동래",
        telephone: "+82-51-507-7000",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Busan",
          addressCountry: "KR",
        },
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((s) => {
        if (s.text.includes('"@type":"FAQPage"')) {
          document.head.removeChild(s);
        }
      });
    };
  }, [currentFaqData, currentLang]);

  return (
    <>
      {/* SEO용 숨겨진 콘텐츠 - 크롤러용 */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <h1>법무법인 동래 자주 묻는 질문 FAQ - 부산 법률상담</h1>
        <h2>변호사 상담비용, 사건 처리기간, 승소 가능성 등 궁금한 점 해결</h2>
        <p>
          부산 법무법인 동래에 자주 묻는 질문들입니다. 형사변호, 민사소송,
          건설분쟁, 상담비용, 변호사 선임 등에 대한 답변을 확인하세요.
          051-507-7000
        </p>
        <div>
          <h3>주요 FAQ 주제</h3>
          <ul>
            <li>변호사 상담 비용은 얼마인가요?</li>
            <li>사건 처리 기간은 얼마나 걸리나요?</li>
            <li>승소 가능성은 어떻게 판단하나요?</li>
            <li>야간이나 주말에도 상담 가능한가요?</li>
            <li>법무법인 동래의 전문 분야는 무엇인가요?</li>
          </ul>
        </div>
      </div>

      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        법무법인 동래 자주 묻는 질문 FAQ - 부산 법률상담
      </h1>

      <CommonContainer>
        <span style={{ fontSize: 0, opacity: 0, position: "absolute" }}>
          부산 법무법인 동래 FAQ 변호사 상담 질문 답변 형사변호 민사소송
          건설분쟁 051-507-7000
        </span>

        <Typography component="h2" variant="h4">
          {getLanguageText("자주 묻는 질문", "Frequently Asked Questions")}
        </Typography>
        <br />
        <Typography
          component="h3"
          sx={{ fontSize: "1.2rem", whiteSpace: "pre-line" }}
        >
          {getLanguageText(
            `부산 법무법인 동래에 대해 자주 묻는 질문과 답변을 확인하세요.
형사사건, 민사소송, 법률상담 등 관련 궁금한 점을 해결해드립니다.`,
            `Check out frequently asked questions and answers about Dongrae Law Firm in Busan.
We solve your questions related to criminal cases, civil litigation, and legal consultation.`
          )}
        </Typography>
        <Box>
          <FaqTable data={currentFaqData} id="faq-list" />
        </Box>
      </CommonContainer>
    </>
  );
};

export default FaqPage;
