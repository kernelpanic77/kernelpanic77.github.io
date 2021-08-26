import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";

import { NextSeo } from "next-seo";

import ProjectCardBig from "../components/ProjectCardBig";
import Container from "../components/Container";

const url = "https://kernelpanic77.github.io/projects";
const title = "Projects - Ishan";
const description = "A gallery of the projects I have worked on";
const images = [
  {
    url: "https://avatars.githubusercontent.com/u/42925218?s=60&v=4",
    width: 800,
    height: 600,
    alt: "Og Image Alt",
  },
];

export default function Project() {
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
        <title>Projects - Ishan</title>
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
              Projects
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
              <ProjectCardBig
                key="lorem"
                imageURL="/images/mosip.png"
                title="lorem"
                desc="Aliqua laboris voluptate velit id non veniam proident laboris Lorem velit non eiusmod aliquip nostrud."
                githubLink="https://github.com/DaKeiser/chaos"
                deployLink="http://google.com/"
                tag={["Lorem", "Ipsum", "Lorem"]}
              />
              {/*  */}
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
