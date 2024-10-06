// pages/404.js

import React from "react";
import Container from "../components/Container";
import { NextSeo } from "next-seo";
import { Heading, Flex, Link as ChakraLink, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const url = "https://kernelpanic77.github.io/";
const title = "404";
const description = "Error: Page not found - Ishan";
const images = [
  {
    url: "https://avatars.githubusercontent.com/u/42925218?s=60&v=4",
    width: 800,
    height: 600,
    alt: "Og Image Alt",
  },
];

export default function Custom404() {
  return (
    <>
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
      <Container>
        <Heading>404 - Page Not Found!!!</Heading>
        <Flex justify="center" width="100%">
          <NextLink href="/" _hover="none" mt={8} passHref>
            {/* <span>
            <ChakraLink > */}
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="gray"
                variant="outline"
                aria-label="redirect"
              >
                TAKE ME HOME!!!
              </Button>
            {/* </ChakraLink>
            </span> */}
          </NextLink>
        </Flex>
      </Container>
    </>
  );
}
