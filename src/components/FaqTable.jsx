// FaqTable.jsx - Props 기반 버전
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
import Pagination from "@mui/material/Pagination";
import Chip from "@mui/material/Chip";
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
            aria-label={`${row.Q} 답변 ${open ? "닫기" : "열기"}`}
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {/* 카테고리 표시 */}
            {row.category && (
              <Chip
                label={row.category}
                size="small"
                variant="outlined"
                sx={{
                  alignSelf: "flex-start",
                  fontSize: "0.75rem",
                  height: "20px",
                }}
              />
            )}
            <Typography
              component="h3"
              variant="body1"
              sx={{ fontWeight: 500, fontSize: "1.1rem" }}
              id={`faq-question-${index}`}
            >
              {row.Q}
            </Typography>
          </Box>
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
    category: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const FaqTable = ({ data }) => {
  const currentLang = getCurrentLanguage();

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const itemsPerPage = 10;

  // 카테고리별 필터링 (props 데이터 사용)
  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((faq) => faq.category === selectedCategory);

  // 현재 페이지에 표시할 데이터 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // 페이지 변경 핸들러
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // 언어/데이터 변경 시 초기화
  React.useEffect(() => {
    setCurrentPage(1);
    setSelectedCategory("all");
  }, [currentLang, data]);

  // 카테고리 목록 (props 데이터에서 추출)
  const categories = [
    ...new Set(data.map((faq) => faq.category).filter(Boolean)),
  ];

  return (
    <section aria-labelledby="faq-heading">
      {/* 카테고리 필터 */}
      {categories.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {getLanguageText("카테고리별 보기", "View by Category")}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip
              label={getLanguageText("전체", "All")}
              onClick={() => handleCategoryChange("all")}
              color={selectedCategory === "all" ? "primary" : "default"}
              variant={selectedCategory === "all" ? "filled" : "outlined"}
            />
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => handleCategoryChange(category)}
                color={selectedCategory === category ? "primary" : "default"}
                variant={selectedCategory === category ? "filled" : "outlined"}
              />
            ))}
          </Box>
        </Box>
      )}

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
                  {getLanguageText(
                    "자주 묻는 질문",
                    "Frequently Asked Questions"
                  )}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData.map((faq, index) => (
              <Row
                key={startIndex + index}
                row={faq}
                index={startIndex + index}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 페이지네이션 섹션 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          mb: 2,
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* 페이지 정보 */}
        <Typography variant="body2" color="text.secondary" aria-live="polite">
          {getLanguageText(
            `총 ${filteredData.length}개 질문 중 ${startIndex + 1}-${Math.min(
              endIndex,
              filteredData.length
            )}번째`,
            `Showing ${startIndex + 1}-${Math.min(
              endIndex,
              filteredData.length
            )} of ${filteredData.length} questions`
          )}
        </Typography>

        {/* 페이지네이션 컨트롤 */}
        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
            aria-label={getLanguageText(
              "FAQ 페이지 네비게이션",
              "FAQ page navigation"
            )}
            sx={{
              "& .MuiPaginationItem-root": {
                "&:focus": {
                  outline: "2px solid #1976d2",
                  outlineOffset: "2px",
                },
              },
            }}
          />
        )}
      </Box>
    </section>
  );
};

FaqTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Q: PropTypes.string.isRequired,
      A: PropTypes.string.isRequired,
      category: PropTypes.string,
    })
  ).isRequired,
};

export default FaqTable;
