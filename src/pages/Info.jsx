import { Typography } from "@mui/material";
import CommonContainer from "../components/CommonContainer";
import { getLanguageText, getCurrentLanguage } from "../utils/language";
import usePageSEO from "../utils/usePageSEO";
import useMetaTags from "../utils/useMetaTags";

const Info = () => {
  const currentLang = getCurrentLanguage();
  usePageSEO("/info");

  useMetaTags({
    titleKo: "소개 | 법무법인 동래 - 부산 법무법인",
    titleEn: "About Us | Dongrae Law Firm - Busan Law Office",
    descriptionKo:
      "1995년 부산에 설립된 법무법인 동래는 지역 밀착형 법률 서비스를 제공하는 중소규모 로펌입니다. 민·형사 및 건설·의료 등 다양한 분야를 다룹니다.",
    descriptionEn:
      "Dongrae Law Firm, established in Busan in 1995, is a small to medium-sized law firm providing community-focused legal services in various fields including civil, criminal, construction, and medical law.",
    keywords:
      "법무법인 동래 소개, 부산 법무법인, 회사 정보, 법률사무소, Dongrae Law Firm about",
    pagePath: "/info",
  });

  return (
    <CommonContainer>
      <Typography component="h1" variant="h4">
        {getLanguageText(
          "법률, 그 이상의 가치를 추구합니다",
          "Pursuing Values Beyond Law"
        )}
      </Typography>
      <hr style={{ border: "1px solid gray", width: "100%" }} />
      {/* <br /> */}
      <Typography
        component="h3"
        sx={{ fontSize: "1.5rem", whiteSpace: "pre-line", my: 2 }}
      >
        지역사회와 함께한 30년, 신뢰로 이어온 법률 전문성
      </Typography>
      <Typography
        component="h2"
        sx={{ fontSize: "1.2rem", whiteSpace: "pre-line" }}
      >
        {getLanguageText(
          `법무법인 동래는 1995년 부산에 설립된 이래, 30년에 가까운 시간 동안 지역사회와 함께 성장해온 중소규모 법무법인입니다.
부산 연제구 법조타운 인근에 위치하여, 민사·형사·가사·건설·의료·행정 분야 등 폭넓은 법률 서비스를 지역 밀착형으로 제공하고 있습니다.

이태환 대표변호사님은 사법시험 제35회(사법연수원 25기)를 수료한 후, 다양한 민·형사 사건과 더불어 건설 및 의료소송 등 전문분야에 대한 실무 경험을 쌓아왔으며, 부산시 남구 선거관리위원회 위원 및  
여러 공익·전문 협회의 법률 고문으로 활동하며,  
공공성과 전문성을 함께 갖춘 법률 서비스를 제공해왔습니다. 이러한 축적된 경험을 바탕으로 정확하고 실질적인 법률 자문과 소송 대응 역량을 갖추고 있습니다.`,
          `Dongrae Law Firm was established in Busan in 1995 and is a small to medium-sized law firm providing community-focused legal services.
Attorney Lee Taehwan, the representative lawyer, handles various fields including civil, criminal, construction, and medical law, and has experience as a legal advisor for public institutions.
This is a law firm suitable for those who want to work in the Busan area with a balanced work and life.`
        )}
      </Typography>
    </CommonContainer>
  );
};

export default Info;
