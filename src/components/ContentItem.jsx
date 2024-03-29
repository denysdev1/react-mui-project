/* eslint-disable react/prop-types */
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { CustomizedTypography } from "../styles/styles";

export const ContentItem = ({ title, description, img, swap }) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <Box
      bgcolor={!swap && "#fff"}
      display="flex"
      flexDirection={isMatch ? "column" : "flex"}
      padding={10}
      justifyContent="space-between"
      alignItems="center"
    >
      {swap ? (
        <>
          <Box>
            <CustomizedTypography
              fontWeight="bold"
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color="#734950"
              padding={3}
              variant="h3"
            >
              {title}
            </CustomizedTypography>
            <CustomizedTypography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
              color="#734950"
              padding={3}
            >
              {description}
            </CustomizedTypography>
          </Box>
          <img
            src={img}
            alt={title}
            width={isMatch ? "100%" : "50%"}
            height="300px"
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginLeft: "10%",
              borderRadius: 20,
            }}
          />
        </>
      ) : (
        <>
          <img
            src={img}
            alt={title}
            width={isMatch ? "100%" : "50%"}
            height="300px"
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginRight: isMatch ? 0 : "10%",
              marginLeft: isMatch ? "10%" : 0,
              borderRadius: 20,
            }}
          />
          <Box>
            <CustomizedTypography
              fontWeight="bold"
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color="#734950"
              padding={3}
              variant="h3"
            >
              {title}
            </CustomizedTypography>
            <CustomizedTypography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
              color="#734950"
              padding={3}
            >
              {description}
            </CustomizedTypography>
          </Box>
        </>
      )}
    </Box>
  );
};
