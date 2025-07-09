// FaqTable.jsx - SEO 최적화 버전
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { getCurrentLanguage, getLanguageText } from "../utils/language";

const Row = (props) => {
  const { row, index } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label={`${row.question} 답변 ${open ? "닫기" : "열기"}`}
            aria-expanded={open}
            size="small"
            onClick={() => setOpen(!open)}
            sx={{
              "&:focus": {
                outline: "2px solid #795548",
                outlineOffset: "2px",
              },
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography
            component="h3"
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1rem" }}
            id={`faq-question-${index}`}
          >
            {row.Q}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 2,
                p: 2,
                borderRadius: 1,
                backgroundColor: "#f8f9fa",
              }}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <Typography
                component="h4"
                variant="h6"
                gutterBottom
                sx={{ color: "#3A6D8C", mb: 1, fontSize: "1rem" }}
              >
                {getLanguageText("답변", "Answer")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  whiteSpace: "pre-line",
                  color: "#333",
                }}
              >
                {row.A}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

Row.propTypes = {
  row: PropTypes.shape({
    Q: PropTypes.string.isRequired,
    A: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export const faqData = [
  {
    Q: "고소와 고발의 차이점이 무엇인가요?",
    A: "고소란 수사기관에 대해 고소권을 가지는 사람 즉 '범죄의 피해를 입은 피해자' 또는 '그 피해자와 일정한 관계가 있는 고소권자'가 수사기관(검찰, 경찰, 근로감독관 등)에게 범죄사실을 신고하여 범인의 처벌을 구하는 것입니다.\n\n고발은 고소권자와 범인이 아닌 사람이 수사기관에게 범죄사실을 신고하고 그 범인의 처벌을 구하는 의사표시를 말합니다. 단순한 피해 신고는 고발이 될 수 없습니다.\n\n쉽게 말해 고소는 형사사건의 피해자 또는 고소권자가 직접 하는 것이고, 고발은 제 3자가 하는 것이라는 것에서 차이가 있습니다.",
  },
  {
    Q: "형사소송 절차는 어떻게 진행되나요?",
    A: "형사소송은 일반적으로 다음과 같은 절차로 진행됩니다:\n\n1. 수사 단계: 경찰 또는 검찰의 수사\n2. 기소 단계: 검찰의 기소 여부 결정\n3. 공판 단계: 법원에서의 재판 진행\n4. 판결 단계: 법원의 최종 판결\n\n각 단계마다 피의자/피고인의 권리가 보장되며, 변호사의 조력을 받을 권리가 있습니다.",
  },
  {
    Q: "피의자, 피고인은 정확히 무엇이 다른가요?",
    A: "피의자와 피고인의 차이점은 다음과 같습니다:\n\n• 피의자: 수사기관(경찰, 검찰)의 수사 대상이 되는 사람\n• 피고인: 검찰에 의해 기소되어 법원에서 재판을 받는 사람\n\n즉, 수사 단계에서는 '피의자', 재판 단계에서는 '피고인'이라고 부릅니다.",
  },
  {
    Q: "공소제기란 무엇인가요?",
    A: "공소제기란 검사가 범죄 혐의가 있다고 판단한 피의자를 법원에 재판받도록 하는 것을 말합니다.\n\n공소제기의 종류:\n• 약식기소: 간단한 사건에 대해 서면으로만 진행\n• 정식기소: 공개법정에서 정식재판 진행\n\n공소제기되면 피의자는 피고인이 되어 법원에서 재판을 받게 됩니다.",
  },
  {
    Q: "상소, 항소, 상고는 무엇인가요?",
    A: "상소는 불복신청의 총칭이며, 다음과 같이 구분됩니다:\n\n• 항소: 1심 판결에 불복하여 2심 법원에 재심을 요청\n• 상고: 2심 판결에 불복하여 대법원에 재심을 요청\n• 재항고: 항고 기각 결정에 대한 불복신청\n\n각각 정해진 기간 내에 신청해야 하며, 상고의 경우 법리 오해 등 특별한 사유가 있어야 합니다.",
  },
  {
    Q: "집행유예에 신고유예에 차이점은 무엇인가요?",
    A: "집행유예와 신고유예는 다음과 같이 구분됩니다:\n\n• 집행유예: 유죄판결을 받았지만 일정기간 동안 형의 집행을 미루고, 그 기간을 무사히 지내면 형을 받지 않게 되는 제도입니다.\n• 신고유예: 검사가 기소를 하지 않고 일정기간 동안 관찰하여 재범하지 않으면 불기소 처분하는 제도입니다.\n\n집행유예는 법원의 판결이고, 신고유예는 검찰의 처분이라는 점에서 차이가 있습니다.",
  },

  {
    Q: "집행유예를 받을 수 있는 조건은?",
    A: "집행유예를 받기 위한 조건은 다음과 같습니다:\n\n• 3년 이하의 징역이나 금고 또는 500만원 이하의 벌금에 해당하는 죄\n• 범정상 참작할 만한 사유가 있을 때\n• 재범의 위험성이 적다고 인정될 때\n• 피해자와의 합의나 반성의 정도\n\n집행유예 기간은 1년 이상 5년 이하이며, 이 기간 동안 다른 죄를 범하지 않으면 형이 면제됩니다.",
  },

  {
    Q: "형법의 종류에는 어떤 것이 있나요?",
    A: "우리나라 형법상 형의 종류는 다음과 같습니다:\n\n주형(主刑):\n• 사형\n• 무기징역\n• 유기징역 (1개월 이상 30년 이하)\n• 유기금고 (1개월 이상 15년 이하)\n• 벌금 (5만원 이상)\n• 구류 (1일 이상 30일 미만)\n• 과료 (2천원 이상 5만원 미만)\n\n부가형(附加刑):\n• 몰수\n• 추징\n\n각 형벌은 죄의 경중과 상황에 따라 선택적으로 적용됩니다.",
  },

  {
    Q: "법정지상권 관습법상의 지상권이란?",
    A: "법정지상권과 관습법상의 지상권은 다음과 같이 구분됩니다:\n\n• 법정지상권: 민법 제366조에 따라 토지와 건물의 소유자가 다를 때 건물소유자가 토지에 대해 갖는 법정 지상권입니다.\n\n• 관습법상의 지상권: 판례에 의해 인정되는 지상권으로, 건물 건축 당시 토지와 건물이 동일인 소유였다가 후에 소유자가 달라진 경우에 성립합니다.\n\n주요 차이점:\n- 성립요건이 다름\n- 존속기간 및 지료 산정 방법이 상이\n- 관습법상 지상권이 더 넓게 인정되는 경향\n\n부동산 거래 시 반드시 전문가의 검토가 필요합니다.",
  },

  {
    Q: "협의이혼을 할 때 꼭 부부가 함께 법원에 출석해야 하나요?",
    A: "협의이혼 시 법원 출석에 대한 규정은 다음과 같습니다:\n\n가정법원 출석 원칙:\n• 부부가 함께 출석하는 것이 원칙입니다\n• 이혼의사 확인 및 자녀 양육 등에 대한 협의사항 점검\n• 3개월의 숙려기간 후 재출석 필요\n\n예외적 단독 출석 가능한 경우:\n• 상대방이 해외 거주 등으로 출석이 불가능한 경우\n• 질병 등으로 출석이 어려운 경우\n• 법원의 허가를 받은 경우\n\n준비서류:\n• 이혼신고서\n• 가족관계증명서\n• 주민등록등본\n• 자녀가 있는 경우 양육계획서\n\n원활한 진행을 위해 사전에 전문가 상담을 받으시기 바랍니다.",
  },

  {
    Q: "집행정지 신청이란?",
    A: "집행정지 신청은 행정처분의 효력이나 집행을 일시적으로 중단시키는 제도입니다:\n\n신청 요건:\n• 행정소송이 계속 중일 것\n• 처분 등의 집행으로 인해 회복하기 어려운 손해가 생길 우려\n• 본안승소 가능성이 있을 것\n• 공공복리에 중대한 영향을 미치지 않을 것\n\n집행정지의 효과:\n• 행정처분의 집행이 중단됨\n• 의무이행명령의 경우 이행의무가 정지됨\n• 임시적 효력이므로 본안 판결까지만 유효\n\n신청 시점:\n• 행정소송 제기와 동시에 또는 소송 계속 중\n• 긴급한 경우 본안소송 제기 전에도 가능\n\n집행정지는 전문적 판단이 필요하므로 변호사 조력을 받으시기 바랍니다.",
  },

  {
    Q: "음주운전 관련 행정심판위원회의 구제 판단기준은 어떻게 되나요?",
    A: "음주운전 관련 행정심판에서의 판단기준은 다음과 같습니다:\n\n면허취소 처분의 적법성 심사:\n• 혈중알코올농도의 정확성\n• 측정 절차의 적정성\n• 음주측정 거부 시 정당한 사유 유무\n• 처분 기준의 적용 적정성\n\n구제 가능한 경우:\n• 측정기기의 오작동이 입증된 경우\n• 측정 절차상 하자가 있는 경우\n• 의료상 정당한 사유로 측정을 거부한 경우\n• 과도한 처분이 내려진 경우\n\n심판 절차:\n• 처분통지를 받은 날로부터 90일 이내 신청\n• 관련 증거자료 수집 및 제출\n• 심판위원회 심리 진행\n• 재결서 송달\n\n성공률을 높이기 위해서는 전문적인 법률 검토와 증거 수집이 필수적입니다.",
  },

  {
    Q: "음주운전의 경우 행정심판을 통하여 구제될 수 있는 조건이 있나요?",
    A: "음주운전 행정심판에서 구제될 수 있는 주요 조건들은 다음과 같습니다:\n\n측정 절차상 하자:\n• 음주측정기 검정 유효기간 경과\n• 부적절한 측정 환경 (온도, 습도 등)\n• 측정 전 20분 대기시간 미준수\n• 측정자의 자격 미비\n\n의료적 정당 사유:\n• 폐질환으로 인한 측정 불가\n• 구강 내 상처나 질환\n• 약물 복용으로 인한 측정값 영향\n• 의료기기(인공호흡기 등) 사용\n\n기타 구제 사유:\n• 혈중알코올농도 역추산의 오류\n• 위드마크 공식 적용의 부적정성\n• 음주량과 측정값의 현저한 불일치\n• 단속 절차상 위법성\n\n처분 감경 사유:\n• 초범이고 알코올농도가 낮은 경우\n• 사회적 특수 사정 (생계형 운전자 등)\n• 진심어린 반성과 재발 방지 의지\n\n전문적인 법률 검토와 의료 자문이 반드시 필요합니다.",
  },

  {
    Q: "국가공무원법상 소청심사제도의 대상은 어떤 것이 포함되나요?",
    A: "국가공무원법상 소청심사제도의 대상은 다음과 같습니다:\n\n소청심사 대상 처분:\n• 파면, 해임, 강등, 정직의 징계처분\n• 직위해제, 휴직, 직무복귀 관련 처분\n• 전보, 파견, 겸임 등 인사발령\n• 승진, 승급에서의 불이익 처분\n• 성과평가 결과에 대한 이의\n\n소청심사 제외 대상:\n• 견책 (경미한 징계)\n• 기간제 공무원의 임용 관련\n• 시험 성적에 관한 사항\n• 연수, 교육 관련 처분\n\n소청 절차:\n• 처분통지를 받은 날로부터 30일 이내 신청\n• 소청심사위원회 심사 진행\n• 90일 이내 재결 (연장 가능)\n• 재결에 불복 시 행정소송 가능\n\n소청심사의 효과:\n• 처분의 집행정지 효과 없음\n• 별도 집행정지 신청 가능\n• 재결로 처분 취소 또는 변경 가능\n\n공무원의 권익 보호를 위해 적극적으로 활용하시기 바랍니다.",
  },
  {
    Q: "조사를 받게 됐는데 언제 변호사 선임을 해야 할까요?",
    A: "변호사 선임 시기는 다음과 같이 권장됩니다:\n\n• 수사기관 조사 통지를 받은 즉시\n• 참고인 조사라도 혐의가 있다면 미리 선임\n• 피의자 신분 조사 전에 반드시 선임\n• 구속영장이 청구되기 전에 선임\n\n변호사는 조사 과정에서:\n• 조사 입회 및 조언\n• 진술거부권 행사 도움\n• 불법 수사 방지\n• 구속영장 기각을 위한 대응\n\n가능한 한 빠른 시점에 전문 변호사의 도움을 받으시기 바랍니다.",
  },

  {
    Q: "지하철추행으로 조사를 받았는데 어떻게 하면 될까요?",
    A: "지하철 추행 혐의로 조사를 받으시는 경우 다음과 같이 대응하시기 바랍니다:\n\n즉시 해야 할 일:\n• 전문 변호사 선임\n• 수사기관 조사 시 변호사 동석 요청\n• 함부로 진술하지 않기\n\n대응 방법:\n• CCTV 영상 확보 및 분석\n• 목격자 진술 확인\n• 피해자와의 합의 시도\n• 반성문 및 선처 탄원서 준비\n\n주의사항:\n• 허위 진술 금지\n• 증거인멸 시도 금지\n• 피해자에게 직접 연락 금지\n\n빠른 대응이 중요하므로 즉시 전문 변호사와 상담받으시기 바랍니다.",
  },

  {
    Q: "제가 쓴 글이 명예훼손이라는데 방법이 있을까요?",
    A: "명예훼손 혐의에 대한 대응 방법은 다음과 같습니다:\n\n법적 검토사항:\n• 공연성: 불특정 다수가 볼 수 있었는지\n• 사실적시: 구체적 사실을 적시했는지\n• 명예훼손: 사회적 평가를 저하시켰는지\n\n면책 사유:\n• 진실성: 적시한 사실이 진실인 경우\n• 상당성: 진실이라고 믿을 상당한 이유가 있는 경우\n• 공익성: 공공의 이익을 위한 경우\n\n대응 방법:\n• 증거자료 수집 및 보전\n• 피해자와의 합의 시도\n• 사과문 게재 또는 정정보도\n• 전문 변호사를 통한 법적 대응\n\n온라인상 표현의 자유도 중요하지만 타인의 인격권도 보호받아야 합니다.",
  },

  {
    Q: "폭행사건 대처 방법이 어떻게 될까요?",
    A: "폭행사건 발생 시 대처 방법은 다음과 같습니다:\n\n피해자인 경우:\n• 즉시 병원 치료 및 진단서 발급\n• 112신고 또는 경찰서 고소\n• 상해 부위 사진 촬영\n• 목격자 연락처 확보\n• CCTV 등 증거자료 보전 요청\n\n가해자인 경우:\n• 즉시 전문 변호사 선임\n• 피해자 치료비 지원\n• 합의 시도 (변호사를 통해)\n• 반성문 작성\n• 재범 방지 의지 표명\n\n공통 주의사항:\n• 추가 분쟁 발생 방지\n• SNS 등 무분별한 게시 금지\n• 감정적 대응 자제\n\n폭행사건은 초기 대응이 매우 중요하므로 전문가의 도움을 받으시기 바랍니다.",
  },

  {
    Q: "법치를 저질렀는데 구속이 될까요?",
    A: "법죄 저질렀을 때 구속 여부는 다음 요소들을 종합적으로 판단합니다:\n\n구속 요건:\n• 범죄혐의가 상당할 것\n• 도망하거나 증거인멸의 우려가 있을 것\n• 또는 재범의 우려가 있을 것\n\n구속 가능성이 높은 경우:\n• 중대한 범죄 (살인, 강도, 성범죄 등)\n• 상습범 또는 재범\n• 증거인멸 시도\n• 피해자에 대한 보복 우려\n• 주거 불정, 도망 우려\n\n구속 방지 방법:\n• 전문 변호사 즉시 선임\n• 피해자와의 합의\n• 반성문 및 탄원서 제출\n• 가족의 감독 의지 표명\n• 사회유대관계 입증\n\n구속영장 실질심사에서 변호사의 역할이 매우 중요합니다.",
  },

  {
    Q: "재심청구가 가능할까요?",
    A: "재심청구가 가능한 경우와 절차는 다음과 같습니다:\n\n재심 사유:\n• 무죄를 인정할 명백한 새로운 증거 발견\n• 유죄 인정 증거가 위조·변조된 경우\n• 증인이 위증했음이 확정판결로 증명된 경우\n• 판사가 직무에 관한 죄를 범한 경우\n• 원판결의 기초가 된 민사판결이 다른 확정판결로 변경된 경우\n\n재심청구 절차:\n• 확정판결을 한 법원에 청구\n• 재심청구 기간: 사유를 안 날로부터 30일 이내\n• 단, 무죄를 인정할 새로운 증거의 경우 2년 이내\n\n주의사항:\n• 재심은 피고인에게 불리하게 할 수 없음\n• 전문 변호사를 통한 철저한 준비 필요\n• 새로운 증거의 명백성이 핵심\n\n재심은 법적 전문성이 매우 요구되는 절차입니다.",
  },
];

export const faqDataEn = [
  {
    Q: "What is the difference between accusation and denunciation?",
    A: "An accusation is when a person with the right to accuse, namely the 'victim who suffered from the crime' or 'a person with a certain relationship with the victim,' reports criminal facts to investigative agencies (prosecutors, police, labor inspectors, etc.) to seek punishment of the perpetrator.\n\nA denunciation is when someone other than the accuser and the perpetrator reports criminal facts to investigative agencies and expresses their intention to seek punishment of the perpetrator. A simple damage report cannot constitute a denunciation.\n\nSimply put, an accusation is made directly by the victim or accuser of a criminal case, while a denunciation is made by a third party.",
  },
  {
    Q: "How does criminal litigation proceed?",
    A: "Criminal litigation generally proceeds in the following steps:\n\n1. Investigation stage: Investigation by police or prosecutors\n2. Indictment stage: Prosecutor's decision on whether to indict\n3. Trial stage: Court proceedings\n4. Judgment stage: Court's final judgment\n\nAt each stage, the rights of suspects/defendants are guaranteed, and they have the right to legal assistance.",
  },
  {
    Q: "What exactly is the difference between a suspect and a defendant?",
    A: "The differences between suspects and defendants are as follows:\n\n• Suspect: A person who becomes the subject of investigation by investigative agencies (police, prosecutors)\n• Defendant: A person who is indicted by prosecutors and stands trial in court\n\nIn other words, they are called 'suspects' during the investigation stage and 'defendants' during the trial stage.",
  },
  {
    Q: "What legal services do you provide?",
    A: "Dongrae Law Firm provides comprehensive legal services including:\n\n• Civil Litigation: Contract disputes, damages, real estate disputes\n• Criminal Defense: Criminal case defense, arrest warrant response\n• Corporate Law: Contract drafting, legal consultation, corporate consulting\n• Family Law: Divorce, custody, inheritance matters\n• Real Estate Law: Property transactions, disputes, registration\n\nWe serve clients throughout Busan Metropolitan City with experienced attorneys.",
  },
  {
    Q: "How can I schedule a consultation?",
    A: "You can schedule a consultation through the following methods:\n\n• Phone: Call 051-507-7000 during business hours\n• Online: Submit a consultation request through our website\n• Visit: Walk-in consultations available during office hours\n\nOffice Hours: Monday to Friday, 9:00 AM to 6:00 PM\nLocation: Seheon Building 5F, 1490-3 Geoje 1-dong, Yeonje-gu, Busan\n\nInitial consultations are free of charge.",
  },
];

const FaqTable = () => {
  const currentLang = getCurrentLanguage();
  const currentFaqData = currentLang === "en" ? faqDataEn : faqData;

  return (
    <section aria-labelledby="faq-heading">
      <TableContainer
        component={Paper}
        sx={{
          mt: 4,
          width: "100%",
          boxShadow: 2,
        }}
      >
        <Table aria-label="faq table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell sx={{ width: 50 }} />
              <TableCell>
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{ fontWeight: 600 }}
                  id="faq-heading"
                >
                  FAQs
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentFaqData.map((faq, index) => (
              <Row key={index} row={faq} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default FaqTable;
