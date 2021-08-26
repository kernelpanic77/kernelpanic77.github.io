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
  IconButton,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaRegFileAlt } from "react-icons/fa";
import { NextSeo } from "next-seo";
import { linkColor } from "../styles/darkMode";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import BlogPost from "../components/BlogPost";
import { FaRegEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const url = "https://google.com";
const title = "Home - Ishan";
const description = "Developer and an undergraduate IIIT Bangalore, India.";
const images = [
  {
    url: "https://avatars.githubusercontent.com/u/42925218?s=60&v=4",
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
              alt="Ishan"
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
                fontWeight="bold"
              >
                IIIT Bangalore
              </ChakraLink>
              , India. I am passionate about building software. My interests are
              in{" "}
              <b>Distributed Systems, Software Architectures, and Algorithms</b>{" "}
              . You can find my{" "}
              <ChakraLink
                href="/projects"
                color={linkColor[colorMode]}
                fontWeight="bold"
              >
                projects
              </ChakraLink>
              ,{" "}
              <ChakraLink
                href="/blog"
                color={linkColor[colorMode]}
                fontWeight="bold"
              >
                articles
              </ChakraLink>{" "}
              on this website. Headover to my{" "}
              <ChakraLink
                href="/about"
                color={linkColor[colorMode]}
                fontWeight="bold"
              >
                about
              </ChakraLink>{" "}
              page to know more about skills and interests. Feel free to get in
              touch with me through{" "}
              <ChakraLink
                href="mailto:ishan.shanware@iiitb.ac.in"
                color={linkColor[colorMode]}
                fontWeight="bold"
              >
                email
              </ChakraLink>{" "}
              or any social media.
              <br></br>
              <b>
                I am currently looking for Software Developer Internship
                Opportunities
              </b>
            </chakra.p>
            <br />
            <Flex justify={["center", "center", "left"]} width="100%">
              <a href="/files/resume.pdf" target="_blank">
                <ChakraLink _hover="none" mt={8} fontWeight="bold">
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

              <ButtonGroup variant="ghost" color="gray.600">
                <IconButton
                  borderRadius="10px"
                  as="a"
                  href="mailto:ishan.shanware@iiitb.ac.in"
                  aria-label="eMail"
                  icon={<FaRegEnvelope fontSize="20px" />}
                />
                <IconButton
                  borderRadius="10px"
                  as="a"
                  href="https://www.linkedin.com/in/ishan-shanware/"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="20px" />}
                />
                <IconButton
                  borderRadius="10px"
                  as="a"
                  href="https://github.com/kernelpanic77"
                  aria-label="GitHub"
                  icon={<FaGithub fontSize="20px" />}
                />
                <IconButton
                  borderRadius="10px"
                  as="a"
                  href="https://twitter.com/ishanshanware"
                  aria-label="Twitter"
                  icon={<FaTwitter fontSize="20px" />}
                />
              </ButtonGroup>
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
            title="Hola"
            href="https://github.com/hola-cisco"
            src="/images/projects/holaplane.png"
            alt="Chaos"
          >
            Hola is a solution to find best tourist guides at reasonable prices.
            It provides a larger customer base for Guides and hassle free
            booking of guides by tourists. Hola has been selected into the
            project track of Cisco Thingqbator Programme conducted by Cisco, and
            is currently in the rapid prototyping phase. I am building a
            scalable backend for the App, using Serverless Framework following a
            Microservice Architecture, with features such as user locations
            routing and payment features, etc.
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
