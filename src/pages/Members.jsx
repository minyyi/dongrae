import { useEffect } from "react"; // 추가 필요
import { Typography, Box, Paper } from "@mui/material";
import CommonContainer from "../components/CommonContainer";
import { useTheme } from "@mui/material/styles";
import { getCurrentLanguage, getLanguageText } from "../utils/language";
import usePageSEO from "../utils/usePageSEO";
import useMetaTags from "../utils/useMetaTags";

const Members = () => {
  const currentLang = getCurrentLanguage(); // 추가 필요
  const theme = useTheme();

  usePageSEO("/members");

  useMetaTags({
    titleKo: "변호사 소개 | 법무법인 동래 - 부산 전문 변호사",
    titleEn: "Our Attorneys | Dongrae Law Firm - Busan Professional Lawyers",
    descriptionKo:
      "법무법인 동래의 전문 변호사진을 소개합니다. 이태환 대표변호사를 비롯한 경험 많은 변호사들이 최고의 법률 서비스를 제공합니다.",
    descriptionEn:
      "Meet the professional attorneys at Dongrae Law Firm. Led by senior partner Lee Taehwan, our experienced lawyers provide the best legal services.",
    keywords:
      "법무법인 동래 변호사, 이태환 변호사, 부산 전문 변호사, 변호사 소개, Dongrae Law Firm attorneys",
    pagePath: "/members",
  });

  // 원래 members 배열 그대로 유지
  const members = [
    {
      name: getLanguageText(
        "이태환 \n대표 변호사",
        "Lee Taehwan \nSenior Partner"
      ),
      img: "/lawyer_lee.png",
      description: getLanguageText(
        `사법시험 35회, 연수원 25기 
        민사·형사·가사·건설·손해배상 분야 전문 
        부산대학교 대학원 법학과 석사 수료 
        부산시 남구 선거관리위원 
        한국 전기 통신공사 법률고문 
        선박통신사협회 및 부산건축사회 고문 변호사  
        가톨릭대학교 전임강사 
        (주)삼지건설, (주)삼지종합건설, (주)대영교통 법률고문`,
        "Bar Exam 35th, Judicial Research and Training Institute 25th, \nSpecializing in Civil, Criminal, Family, Construction, and Damages"
      ),
    },
    {
      name: getLanguageText("최현우 \n변호사", "Choi Hyeonwoo \nAttorney"),
      img: "/lawyer_choi.png",
      description: getLanguageText(
        "사법시험 37회, 연수원 27기",
        "Bar Exam 37th, Judicial Research and Training Institute 27th"
      ),
    },
    {
      name: getLanguageText("김충희 \n변호사", "Kim Chunghee \nAttorney"),
      img: "/lawyer_kim.png",
      description: getLanguageText(
        "사법시험 37회, 연수원 27기, 군법무관임용고시8회",
        "Bar Exam 37th, Judicial Research and Training Institute 27th"
      ),
    },
    {
      name: getLanguageText("배경렬 \n변호사", "Bae Gyeongryeol \nAttorney"),
      img: "/lawyer_bae.jpg",
      description: getLanguageText(
        "사법시험 44회, 연수원 34기",
        "Bar Exam 44th, Judicial Research and Training Institute 34th"
      ),
    },
  ];

  // 구조화된 데이터 추가 (원래 코드는 그대로 유지)
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: currentLang === "en" ? "Dongrae Law Firm" : "법무법인 동래",
      employee: members.map((member, index) => ({
        "@type": "Person",
        name: member.name.replace(/\n/g, " "),
        jobTitle:
          index === 0
            ? currentLang === "en"
              ? "Senior Partner"
              : "대표변호사"
            : currentLang === "en"
            ? "Attorney"
            : "변호사",
        description: member.description,
        image: member.img,
        alumniOf: index === 0 ? "부산대학교 대학원 법학과" : "사법연수원",
        award:
          index === 0
            ? ["부산시 남구 선거관리위원", "한국전기통신공사 법률고문"]
            : [],
        knowsAbout:
          currentLang === "en"
            ? ["Civil Litigation", "Criminal Defense", "Construction Law"]
            : ["민사소송", "형사변호", "건설분쟁"],
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    return () => {
      // cleanup
    };
  }, [currentLang, members]);

  return (
    <>
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <h1>법무법인 동래 변호사 소개 - 부산 전문 변호사진</h1>
        <h2>이태환 대표변호사 - 사법시험 35회, 30년 경력</h2>
        <p>
          부산 법무법인 동래의 전문 변호사진을 소개합니다. 이태환
          대표변호사(사법시험 35회)를 비롯해 최현우, 김충희, 배경렬 변호사가
          민사소송, 형사변호, 건설분쟁 전문 법률서비스를 제공합니다.
        </p>
        <ul>
          <li>이태환 대표변호사: 사법시험 35회, 건설·의료·형사 전문</li>
          <li>최현우 변호사: 사법시험 37회, 민사소송 전문</li>
          <li>김충희 변호사: 사법시험 37회, 군법무관 출신</li>
          <li>배경렬 변호사: 사법시험 44회, 형사변호 전문</li>
        </ul>
        <address>부산광역시 연제구 법원남로 18 세헌빌딩 5층</address>
      </div>

      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        법무법인 동래 변호사 소개 - 부산 전문 변호사진
      </h1>

      <CommonContainer
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          rowGap: { xs: 1, sm: 3 },
          columnGap: 6,
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          padding: { xs: 2, sm: 6 },
        }}
      >
        {members.map((member, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", sm: "600px" },
              maxWidth: {
                xs: "100%",
                sm: "calc(50% - 24px)",
              },
              minHeight: "400px",
              rowGap: 2,
              mb: 4,
              justifyContent: "flex-start",
              alignItems: "center",
              borderRadius: 2,
              p: 3,
            }}
          >
            <span style={{ fontSize: 0, opacity: 0, position: "absolute" }}>
              {index === 0
                ? "부산 법무법인 동래 이태환 대표변호사 사법시험 35회 건설분쟁 형사변호 전문"
                : `부산 변호사 ${member.name.replace(
                    /\n/g,
                    " "
                  )} 법무법인 동래`}
            </span>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                width: "100%",
                flexDirection: "row",
                mb: 2,
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "200px",
                  height: "240px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  textAlign: "center",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                  [theme.breakpoints.up("sm")]: {
                    whiteSpace: "normal",
                  },
                }}
              >
                {member.name}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                px: 2,
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              {member.description}
            </Typography>
          </Paper>
        ))}
      </CommonContainer>
    </>
  );
};

export default Members;
