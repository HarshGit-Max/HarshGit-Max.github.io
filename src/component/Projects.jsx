import image from "../images/projextbg.webp";
import { Box, Link } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import portfolio from "../images/project_portfolio.png";

function Projects() {
  return (
    <>
      <div data-aos="fade-up-left">
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "flex-end" },
            paddingLeft: { sm: "20px", md: "40px" },
            position: "relative",
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Link href="https://github.com/HarshGit-Max/HarshGit-Max.github.io">
              <Box
                sx={{
                  marginTop: { xs: -28, lg: -30 },
                  marginRight: { lg: 123 },
                }}
              >
                <Card sx={{ width: 320 }}>
                  <CardActionArea>
                    <CardMedia component="img" height="140" image={portfolio} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Portfolio
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        A sleek, responsive portfolio built with ReactJS and MUI
                        for a modern and user-friendly design.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Link>
          </div>
        </Box>
      </div>
    </>
  );
}

export default Projects;
