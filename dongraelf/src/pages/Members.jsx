import { Typography, Box, Paper } from "@mui/material";
import CommonContainer from "../components/CommonContainer";
import { useTheme } from "@mui/material/styles";

const Members = () => {
  const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const members = [
    {
      name: "이태환 \n대표 변호사",
      img: "/lawyer_lee.png",
      description:
        "사법시험 35회, 연수원 25기, \n민사·형사·가사·건설·손해배상 분야 전문",
    },
    {
      name: "최현우 \n변호사",
      img: "/lawyer_choi.png",
      description: " 사법시험 37회, 연수원 27기",
    },
    {
      name: "김충희 \n변호사",
      img: "/lawyer_kim.png",
      description: " 사법시험 37회, 연수원 27기",
    },
    {
      name: "배경렬 \n변호사",
      img: "/noimage.png",
      description: " 사법시험 44회, 연수원 34기",
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
              //   gap: 6,
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
                // whiteSpace: "pre-line",
                // whiteSpace: isMobile ? "pre-line" : "normal",
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
