import {
  AppBar,
  Box,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import { Drawer } from "./Drawer";
import { CustomizedTypography } from "../styles/styles";

const links = ["Products", "Solutions", "Pricing", "Enterprise"];

export const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <header>
      <AppBar sx={{ boxShadow: 0, position: "sticky" }} color="transparent">
        {isMatch ? (
          <Box display="flex">
            <ApiIcon sx={{ color: "black", padding: 1 }} />
            <CustomizedTypography
              sx={{ padding: 0.5, color: "black" }}
              variant="h6"
              fontFamily="fantasy"
            >
              CodeEnv
            </CustomizedTypography>
            <Drawer links={links} />
          </Box>
        ) : (
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              <ApiIcon sx={{ color: "black" }} />
              <Box>
                <Tabs component={Link} sx={{ textDecoration: "none" }}>
                  {links.map((link, i) => (
                    <Tab
                      sx={{
                        fontWeight: "bold",
                        textDecoration: "none",
                        ":hover": {
                          textDecoration: "underline",
                          textUnderlineOffset: "5px",
                        },
                      }}
                      key={i}
                      label={link}
                    />
                  ))}
                </Tabs>
              </Box>
              <Box display="flex" marginLeft="auto">
                <Button sx={{ mr: 2 }} variant="outlined">
                  Talk to us
                </Button>
                <Button sx={{ ml: 2 }} variant="contained">
                  Try for free
                </Button>
              </Box>
            </Box>
          </Toolbar>
        )}
        <Box width="100%" height="100vh">
          <video
            width="100%"
            height="70%"
            autoPlay
            loop
            muted
            playsInline
            src="/video.mp4"
          ></video>
          <Box display="flex" width="100%">
            <CustomizedTypography
              fontWeight="bold"
              fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
              margin="auto"
              variant="h4"
              color="black"
              textAlign="center"
            >
              Build your Softwares hassle free and with top notch quality
            </CustomizedTypography>
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            margin="auto"
            marginTop={5}
            marginBottom={15}
          >
            <Button endIcon={<EmailIcon />} variant="outlined" sx={{ mr: 3 }}>
              Signup
            </Button>
            <Button
              color="error"
              endIcon={<GoogleIcon />}
              variant="contained"
              sx={{ ml: 3 }}
            >
              Signup
            </Button>
          </Box>
        </Box>
      </AppBar>
    </header>
  );
};
