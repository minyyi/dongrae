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
                답변
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
    Q: "조사를 받게 됐는데 언제 변호사 선임을 해야 할까요?",
    A: "변호사 선임 시기는 다음과 같이 권장됩니다:\n\n• 수사기관 조사 통지를 받은 즉시\n• 참고인 조사라도 혐의가 있다면 미리 선임\n• 피의자 신분 조사 전에 반드시 선임\n• 구속영장이 청구되기 전에 선임\n\n변호사는 조사 과정에서:\n• 조사 입회 및 조언\n• 진술거부권 행사 도움\n• 불법 수사 방지\n• 구속영장 기각을 위한 대응\n\n가능한 한 빠른 시점에 전문 변호사의 도움을 받으시기 바랍니다.",
  },

  {
    Q: "1:1 비밀상담에는 어떤 것들을 적어야 할까요?",
    A: "법률 상담 시 다음 사항들을 정확히 기재해 주시면 더 정확한 상담이 가능합니다:\n\n사건 관련 정보:\n• 사건 발생 일시 및 장소\n• 구체적인 사건 경위\n• 현재 수사 진행 상황\n• 받은 서류나 통지서 내용\n\n개인 정보:\n• 연락 가능한 전화번호\n• 이메일 주소\n• 상담 희망 일시\n\n기타 사항:\n• 급한 사안인지 여부\n• 이전 법률 상담 경험\n• 특별히 궁금한 점\n\n모든 상담 내용은 변호사 비밀유지 의무에 따라 철저히 보호됩니다.",
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

const FaqTable = () => {
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
        <Table aria-label="자주 묻는 질문 테이블">
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
            {faqData.map((faq, index) => (
              <Row key={index} row={faq} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default FaqTable;
