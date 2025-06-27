import { Typography } from "@mui/material";
import CommonContainer from "../components/CommonContainer";

const Info = () => {
  return (
    <CommonContainer>
      <Typography variant="h4">법률, 그 이상의 가치를 추구합니다</Typography>
      <br />
      <Typography sx={{ fontSize: "1.2rem", whiteSpace: "pre-line" }}>
        법무법인 동래는 1995년 부산에 설립되어 지역 밀착형 법률 서비스를
        제공하고 있는 중소규모 로펌입니다.
        <br />
        이태환 대표 변호사님은 민·형사 및 건설·의료 등 다양한 분야를 다루며,
        공공기관 고문 변호사의 경험도 갖추고 있습니다.
        <br />
        부산지역에서 근무하며 균형 있는 업무와 생활을 원하는 분께 적합한
        로펌입니다.
      </Typography>
    </CommonContainer>
  );
};

export default Info;
