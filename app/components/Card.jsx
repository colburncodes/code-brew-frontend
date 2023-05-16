import React from "react";
import { Stack, Box } from "@mui/material/Stack";
import { Link } from "next/link";
import Image from "next/legacy/image";
import { Typography } from "@mui/material";

const TextContainer = sytled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function Card({ edit, link, heading, image, height, width }) {
  return (
    <Stack>
      <Box>
        <Box>{edit}</Box>
        <Link href={link}>
          <Box height={height} width={width} sx={{ position: "relative" }}>
            <Image component="img" src={image} alt="Image Post" layout="fill" />
          </Box>
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextContainer>
            <Typography
              variant="h7"
              sx={{
                borderBottom: "2px solid",
                fontWeight: 900,
                textTransform: "uppercase",
                width: "fit-content",
                mb: "15px",
              }}
            >
              {heading}
            </Typography>
          </TextContainer>
        </Box>
      </Box>
    </Stack>
  );
}
