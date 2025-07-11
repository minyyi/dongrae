import { Typography, Box, Paper } from "@mui/material";
import CommonContainer from "../components/CommonContainer";
import { useTheme } from "@mui/material/styles";
import { getCurrentLanguage, getLanguageText } from "../utils/language";
import usePageSEO from "../utils/usePageSEO";
import useMetaTags from "../utils/useMetaTags";

const Members = () => {
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

  const theme = useTheme();
  // const currentLang = getCurrentLanguage();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const members = [
    {
      name: getLanguageText(
        "이태환 \n대표 변호사",
        "Lee Taehwan \nSenior Partner"
      ),
      img: "/lawyer_lee.png",
      description: getLanguageText(
        "사법시험 35회, 연수원 25기, \n민사·형사·가사·건설·손해배상 분야 전문 \n 부산대학교 대학원 석사 수료",
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

  return (
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
              {/* {isMobile ? member.name : member.name.replace(/\n/g, " ")} */}
              {member.name}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              px: 2,
              lineHeight: 1.6,
            }}
          >
            {member.description}
          </Typography>
        </Paper>
      ))}
    </CommonContainer>
  );
};

export default Members;
