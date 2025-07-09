import { Typography } from "@mui/material";
import CommonContainer from "../components/CommonContainer";
import { getLanguageText, getCurrentLanguage } from "../utils/language";

const Info = () => {
  const currentLang = getCurrentLanguage();
  return (
    <CommonContainer>
      <Typography component="h1" variant="h4">
        {getLanguageText(
          "법률, 그 이상의 가치를 추구합니다",
          "Pursuing Values Beyond Law"
        )}
      </Typography>
      <br />
      <Typography
        component="h2"
        sx={{ fontSize: "1.2rem", whiteSpace: "pre-line" }}
      >
        {getLanguageText(
          `법무법인 동래는 1995년 부산에 설립되어 지역 밀착형 법률 서비스를 제공하고 있는 중소규모 로펌입니다.
이태환 대표 변호사님은 민·형사 및 건설·의료 등 다양한 분야를 다루며, 공공기관 고문 변호사의 경험도 갖추고 있습니다.
부산지역에서 근무하며 균형 있는 업무와 생활을 원하는 분께 적합한 로펌입니다.`,
          `Dongrae Law Firm was established in Busan in 1995 and is a small to medium-sized law firm providing community-focused legal services.
Attorney Lee Taehwan, the representative lawyer, handles various fields including civil, criminal, construction, and medical law, and has experience as a legal advisor for public institutions.
This is a law firm suitable for those who want to work in the Busan area with a balanced work and life.`
        )}
      </Typography>
    </CommonContainer>
  );
};

export default Info;
