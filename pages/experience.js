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
import ExperienceCard from "../components/ExperienceCard";

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

const companies = [
  {
    companyName: "Phaedra Solutions",
    companyLink: "https://google.com",
    designation: "Software Engineer",
    about:
      "Eu irure cupidatat id qui non aute in excepteur adipisicing id magna consequat aliquip occaecat. Veniam enim nulla officia Lorem deserunt anim. Adipisicing enim id fugiat reprehenderit reprehenderit aute velit voluptate. Eu ullamco qui officia ullamco ex. Laboris voluptate adipisicing amet officia commodo eu et aliquip eiusmod et consequat do. Officia cillum cupidatat sunt officia ullamco cupidatat enim esse non duis nisi reprehenderit. Non excepteur elit aliqua non et sint esse amet velit anim.",
    src: "https://google.com",
    alt: "PS image",
  },
];

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
              marginTop={3}
              marginBottom={1}
              align="left"
              mx={[0, 0, 6]}
              mt={12}
            >
              <ExperienceCard
                companyName="MOSIP"
                companyLink="https://mosip.io"
                designation="Project Intern"
                about="CovIntel"
                src="/images/mosip.png"
                alt="Chaos"
                date="Jun 2021 — Aug 2021"
              >
                MOSIP is a global project funded by world bank which is a global
                effort to develop an open source foundational ID system(eg:
                Aadhar) for governments to use. Working on the project of
                writing the test rig of Packet Utility and Partner Management
                Services. Project involves writing backend using spring web, to
                automate the testing of every new service of which is deployed.
              </ExperienceCard>
              <ExperienceCard
                companyName="Indywise"
                companyLink="https://indywise.com"
                designation="SDE Intern"
                about="CovIntel"
                src="/images/indywise.png"
                alt="Chaos"
                date="May 2021 — July 2021"
              >
                Indywise is a platform, for providing mentoring-driven
                upskilling with AI insights. As an Intern, I primarily worked
                with the backend team for Delivery of microservices and lambda
                functions of the platform. I refactored 50 percent of the code
                to improve performance, of the microservices. Tech stack
                involved: Serverless, AWS Lambda, Node.js, DynamoDB, AWS.
              </ExperienceCard>

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
