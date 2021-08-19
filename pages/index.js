import React, { useState } from "react";
import NextLink from "next/link";
import {
  useColorMode,
  Image,
  Flex,
  Heading,
  chakra,
  Link as ChakraLink,
  Skeleton,
  Button,
  Divider,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaRegFileAlt } from "react-icons/fa";
import { NextSeo } from "next-seo";
import { linkColor } from "../styles/darkMode";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import BlogPost from "../components/BlogPost";

const url = "https://google.com";
const title = "Home - Ishan";
const description = "Developer and an undergraduate IIIT Bangalore, India.";
const images = [
  {
    url: "/images/r.png",
    width: 800,
    height: 600,
    alt: "Og Image Alt",
  },
];

export default function Home() {
  const [imageLoad, setImageLoad] = useState(false);
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
      <Container>
        <Flex
          direction={{ base: `column`, lg: `row` }}
          alignItems="center"
          mx="auto"
          my={{ xl: "16" }}
        >
          <Skeleton
            isLoaded={imageLoad}
            boxSize="250px"
            borderRadius="2xl"
            m="auto"
          >
            <Image
              borderRadius="2xl"
              boxSize="260px"
              src="pp.jpeg"
              objectFit="cover"
              alt="Rithwik"
              onLoad={() => setImageLoad(true)}
            />
          </Skeleton>
          <Flex
            alignSelf="center"
            direction="column"
            pl={{ base: 0, lg: 10 }}
            my={{ base: 10, lg: 0 }}
          >
            <Heading
              className="mov-heading"
              fontSize={{ base: `5xl`, lg: `7xl` }}
              textAlign={{ base: `center`, lg: `left` }}
            >
              Hey, I&apos;m Ishan!
            </Heading>
            <chakra.p
              maxW="650px"
              textAlign={{ base: `center`, lg: `left` }}
              fontSize="l"
              mt={2}
            >
              I&apos;m a Computer Science undergraduate at{" "}
              <ChakraLink
                href="https://www.iiitb.ac.in"
                target="_blank"
                color={linkColor[colorMode]}
              >
                IIIT Bangalore
              </ChakraLink>
              , Voluptate minim sint anim Lorem excepteur consequat aliqua
              ullamco elit voluptate ullamco. Et in cupidatat laboris nostrud
              tempor eiusmod aliqua velit. Elit aliquip esse in voluptate in
              proident fugiat duis. Id minim excepteur minim qui. Sunt ex esse
              voluptate exercitation laboris culpa eu.
              <ChakraLink href="/projects" color={linkColor[colorMode]}>
                projects
              </ChakraLink>
              ,{" "}
              <ChakraLink href="/blog" color={linkColor[colorMode]}>
                articles
              </ChakraLink>{" "}
              Pariatur tempor ea mollit eu consequat adipisicing cupidatat sunt
              ex.
              <ChakraLink
                href="mailto:sai.rithwik@iiitb.ac.in"
                color={linkColor[colorMode]}
              >
                email
              </ChakraLink>{" "}
              or any social media.
            </chakra.p>
            <br />
            <Flex justify={["center", "center", "left"]} width="100%">
              <a href="/files/resume.pdf" target="_blank">
                <ChakraLink _hover="none" mt={8}>
                  <Button
                    leftIcon={<FaRegFileAlt />}
                    colorScheme="gray"
                    variant="outline"
                    aria-label="view all projects"
                  >
                    My Resume
                  </Button>
                </ChakraLink>
              </a>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems={["center", "center", "flex-start"]}
          maxWidth="700px"
        >
          <Divider mb={12} mt={16} w="100%" alignSelf="center" />

          <Heading letterSpacing="tight" size="lg" fontWeight={700} mb={6}>
            Featured Projects
          </Heading>

          <ProjectCard
            title="CovIntel"
            href="https://github.com/DaKeiser/chaos"
            src="/images/chaos-td.png"
            alt="Chaos"
          >
            Qui ullamco culpa occaecat officia cupidatat laboris officia labore
            officia sunt. Deserunt anim voluptate aliqua enim ad nostrud
            aliquip. Veniam id eiusmod proident et excepteur eu enim duis
            aliquip ex fugiat quis dolor. Laborum dolor duis Lorem excepteur
            officia ullamco. Exercitation eiusmod non proident nulla nostrud.
            Cillum culpa qui reprehenderit id deserunt dolore veniam consequat
            cupidatat id pariatur veniam do. Dolore magna ea aliqua proident
            laborum irure nulla aliqua aute velit.
          </ProjectCard>

          <Flex justify="center" width="100%">
            <NextLink href="/projects" passHref>
              <ChakraLink _hover="none" mt={8}>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="gray"
                  variant="outline"
                  aria-label="view all projects"
                >
                  View All Projects
                </Button>
              </ChakraLink>
            </NextLink>
          </Flex>

          <Divider mb={12} mt={16} w="100%" alignSelf="center" />

          <Heading letterSpacing="tight" size="lg" fontWeight={700} mb={6}>
            Latest Blogs
          </Heading>
          {/* <BlogPost
            title="WhatsApp animated stickers and synchronisation"
            publishedAt="2021-07-15"
            summary="Have you ever observed your WhatsApp animated stickers in sync? I wanted to understand how it worked, and whether it was in sync for all users, and here's my observation."
            slug="whatsapp_stickers"
          /> */}
        </Flex>
        <Flex justify="center" width="100%">
          <NextLink href="/blog" passHref>
            <ChakraLink _hover="none" mt={3}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="gray"
                variant="outline"
                aria-label="view all blogs"
              >
                View All Blogs
              </Button>
            </ChakraLink>
          </NextLink>
        </Flex>
      </Container>
    </>
  );
}
