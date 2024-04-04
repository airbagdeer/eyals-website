import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const theme = createTheme({
  palette: {
    social: {
      main: "#E7E0D3",
    },
  },
});

export function Buttons() {
  return (
    <>
      <div className="buttons">
        <ThemeProvider theme={theme}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="social"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/eyal-stolov-263b63273/"
            >
              Eyal Stolov
            </Button>
            <Button
              variant="outlined"
              color="social"
              startIcon={<EmailIcon />}
              href="mailto:eyal.stolov@gmail.com"
            >
              Eyal.Stolov
            </Button>
            <Button
              variant="outlined"
              color="social"
              startIcon={<GitHubIcon />}
              href="https://github.com/airbagdeer"
            >
              AiRBaGDeeR
            </Button>
          </Stack>
        </ThemeProvider>
        {/*<AwesomeButtonSocial*/}
        {/*  type="linkedin"*/}
        {/*  href="https://www.linkedin.com/in/eyal-stolov-263b63273/"*/}
        {/*>*/}
        {/*  Eyal Stolov*/}
        {/*</AwesomeButtonSocial>*/}
        {/*<AwesomeButtonSocial type="mail" href="mailto:eyal.stolov@gmail.com">*/}
        {/*  Eyal.Stolov*/}
        {/*</AwesomeButtonSocial>*/}
        {/*<AwesomeButtonSocial type="github" href="https://github.com/airbagdeer">*/}
        {/*  airbagdeer*/}
        {/*</AwesomeButtonSocial>*/}
      </div>
    </>
  );
}
