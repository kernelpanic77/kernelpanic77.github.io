import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  SimpleGrid,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import { NextSeo } from "next-seo";

import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

const url = "https://rithwiksai.tech/projects";
const title = "Projects - Rithwik";
const description = "A gallery of the projects I have worked on";
const images = [
  {
    url: "/images/r.png",
    width: 800,
    height: 600,
    alt: "Og Image Alt",
  },
];
// const companies = [
//   {
//     title: "Phaedra Solutions",
//     alt: "PS image",
//     role: "Senior Software Engineer",
//     skills: ["ruby", "rails", "typescript", "javascript", "react", "aws"],
//     period: "2019 - Present",
//     logo: PhaedraLogo,
//   },
//   {
//     title: "Brainx Technologies",
//     alt: "BT image",
//     role: "Software Engineer",
//     skills: ["ruby", "rails", "javascript", "python"],
//     period: "2018 - 2019",
//     logo: BrainxLogo,
//   },
//   {
//     title: "Codenya Studio",
//     alt: "CS image",
//     role: "Co-founder, CTO",
//     skills: ["ruby", "rails", "python", "typescript", "react", "aws"],
//     period: "2018 - Present",
//     logo: CodenyaLogo,
//   },
//   {
//     title: "Brainplow",
//     alt: "Brainplow image",
//     role: "Software Engineer",
//     skills: ["javascript", "python", "angular"],
//     period: "2017 - 2018",
//     logo: BrainplowLogo,
//   },
// ];

export default function Experience() {
  const portfolioColor = {
    light: "/images/portfolio.png",
    dark: "/images/portfolio-1.png",
  };
  const { colorMode } = useColorMode();
  return (
    <>
      {/* TODO add more SEO RELATED STUFF https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images,
        }}
      />
      <Head>
        <title>Experience</title>
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="800px"
          >
            <Heading letterSpacing="tight" mb={8} as="h1" size="2xl">
              Experience
            </Heading>
            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 6]}
              mt={12}
            >
              <ProjectCard
                title="CovIntel"
                href="https://github.com/DaKeiser/chaos"
                src="/images/chaos-td.png"
                alt="Chaos"
              >
                Laboris aliquip consectetur duis duis aute. Aliqua nulla
                excepteur ad aliquip ut adipisicing dolore duis sunt. Ut id
                voluptate aliquip incididunt cillum voluptate excepteur. Ipsum
                adipisicing eiusmod consectetur velit adipisicing elit esse ex
                elit. Sit irure labore nostrud laboris exercitation irure
                consequat consectetur laboris exercitation elit elit ipsum. Duis
                minim veniam aute irure ipsum magna duis cillum commodo eiusmod
                occaecat laborum enim voluptate. Labore elit sint incididunt ad
                id pariatur minim sint.
              </ProjectCard>

              {/* //{" "}
              <MotionBox whileHover={{ y: -5 }} key={index}>
                //{" "}
              </MotionBox>
              ))} */}
            </VStack>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
