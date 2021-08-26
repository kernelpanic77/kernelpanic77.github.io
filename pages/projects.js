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
                key="safe-excursions"
                imageURL="/images/projects/safe.jpg"
                title="Safe Excursions"
                desc="This project aims to provide a crowd-sourced for crowded areas, thus making travel safer by allowing people to look up covid rating of an area.
                The application has a mapbox via which the user can select a location through the given marker. This gives a modal pop-up which gives the covid rating for the surrounding locations. The covid rating of a place is a parameter which represents how often do people follow covid safety protocols. This would help the user know whether it is safe to visit these places in this covid era."
                githubLink="https://github.com/kernelpanic77/calvin-client"
                deployLink="https://devpost.com/software/safeexcursions"
                tag={["Node.js", "React", "Docker"]}
              />
              <ProjectCardBig
                key="hola"
                imageURL="/images/projects/hola.jpeg"
                title="Hola"
                desc="Hola is a solution to find best tourist guides at reasonable prices. It provides a larger customer base for Guides and hassle free
                booking of guides by tourists. I built a scalable backend for the App, following a Microservice Architecture, with features such as
                proximity searches and payment gateways. Currently working on integrate websockets for the chat feature using aws lambda functions "
                githubLink="https://github.com/kernelpanic77/calvin-client"
                deployLink="https://devpost.com/software/safeexcursions"
                tag={["Serverless", "AWS", "Node.js"]}
              />

              <ProjectCardBig
                key="Package-Delivery-Algorithm-Visualiser"
                imageURL="/images/projects/nodelink.png"
                title="Routing Algo Visualiser"
                desc="Created a Visualiser/Simulation shows how multiple trucks will deliver packages for Logistics company that moves many packages
                from one place to another. With multiple stations distributed all over the map. Packages are shipped from any station to any other
                station. By allowing the user to set multiple constraints for the delivery, the simulation runs an algorithm to show which path a truck
                should take in order deliver all packages successfully."
                githubLink="https://github.com/kernelpanic77/calvin-client"
                deployLink="https://devpost.com/software/safeexcursions"
                tag={["Java Swing", "Graph Algorithms"]}
              />
              <ProjectCardBig
                key="manage-it"
                imageURL="/images/projects/manageit.jpg"
                title="Manage It"
                desc="A Complaint Portal for the college, allows users to register a complaint, users can vote for a Complaint. They can upload pictures add
                pictures of the issue, to notify appropriate authorities. My work was mostly designing the Backend of the project along with rectifying
                bugs"
                githubLink="https://github.com/zense/manageit"
                deployLink="https://devpost.com/software/safeexcursions"
                tag={["Express.js", "React", "Pusher"]}
              />

              {/*  */}
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
