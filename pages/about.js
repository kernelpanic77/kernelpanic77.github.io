import React, { useState } from "react";
import {
  useColorMode,
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  Wrap,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Container from "../components/Container";
import { linkColor, secondaryTextColor } from "../styles/darkMode";
import InterestTag from "../components/Interest";

const url = "https://kernelpanic77.github.io/about";
const title = "About - Ishan";
const description =
  "About me! My interests in software, computer science and different technologies";
const images = [
  {
    url: "https://avatars.githubusercontent.com/u/42925218?s=60&v=4",
    width: 800,
    height: 600,
    alt: "Og Image Alt",
  },
];

const Interests = {
  langs: ["Javascript", "C", "C++", "Python", "Java", "Matlab"],
  tech: [
    "Node.js (Express/Next)",
    "GraphQL",
    "Flask",
    "Spring Web",
    "NoSQL : DynamoDB, MongoDB",
    "SQL: PostgresSQL",
    "React",
    "Serverless",
    "AWS Api Gateway",
    "AWS Lambda, EC2",
    "Docker",
    "Kubernetes",
  ],
  interests: ["Distributed Systems", "Software Architectures", "Algorithms"],
  like: ["lorem", "ipsum"],

  dislike: ["lorem", "ipsum"],
};

export default function About() {
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
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="lg">
              About Me
            </Heading>
            <Text mb={12} color={secondaryTextColor[colorMode]} fontSize="20">
              Hey there! My name is <strong>Ishan Shanware</strong>. I&apos;m
              currently pursuing a dual degree in Computer Science, from{" "}
              <ChakraLink
                href="https://www.iiitb.ac.in"
                target="_blank"
                color={linkColor[colorMode]}
              >
                IIIT Bangalore
              </ChakraLink>
              , India.
            </Text>
            <Heading letterSpacing="tight" mb={2} as="h1" size="lg">
              My Skills and Interests
            </Heading>
            <Text mb={12} color={secondaryTextColor[colorMode]} fontSize={18}>
              I Love to follow my curosities in tech, and experiment with
              different technologies now and then. Currently, I have been
              exploring the world of{" "}
              <b>Distributed Systems, Software Architectures</b>. I &apos; m
              also intrigued by algorithms and enjoy looking for their
              implementations in various software applications. I enjoy
              participating in hackathons and attempting to create software
              solutions to real-world issues.
              {/* <ChakraLink
                href="https://arxiv.org/abs/1803.05069"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Hotstuff
              </ChakraLink>{" "}
              and{" "}
              <ChakraLink
                href="https://developers.diem.com/main/docs/state-machine-replication-paper"
                target="_blank"
                color={linkColor[colorMode]}
              >
                DiemBFT
              </ChakraLink>{" "} */}
              <br />
              <br />
              Open Source is also something I&apos;m passionate about. As part
              of the Programming Club{" "}
              <ChakraLink
                href="https://zense.co.in"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Zense
              </ChakraLink>{" "}
              , I take part in promoting the spirit of open source software
              development in my Institute. In the summer I was interning at{" "}
              <ChakraLink
                href="https://mosip.io"
                target="_blank"
                color={linkColor[colorMode]}
              >
                MOSIP (Modular Open Source Identity Platform)
              </ChakraLink>
              . MOSIP is a global project funded by the world bank which is a
              global effort to develop an open-source foundational ID system(eg:
              Aadhar) for governments to use. Working at MOSIP exposed me to the
              world of scalable arachitecture. Since, then I have been trying to
              dive deeper into this domain.
              {/* <ChakraLink
                href="https://www.linkedin.com/pulse/my-experience-hosting-ctf-sai-rithwik-m/"
                target="_blank"
                color={linkColor[colorMode]}
              >
                intra-college CTF
              </ChakraLink> */}
              <br></br>
            </Text>
            <Heading letterSpacing="tight" as="h1" size="md" mb={18} mt={-6}>
              Programming Languages
            </Heading>
            <Wrap mb={12}>
              {Interests.langs.map((likes) => (
                <InterestTag key={likes} name={likes} like />
              ))}
            </Wrap>
            <Heading letterSpacing="tight" as="h1" size="md" mb={18} mt={-6}>
              Technologies
            </Heading>
            <Wrap mb={12}>
              {Interests.tech.map((likes) => (
                <InterestTag key={likes} name={likes} like />
              ))}
            </Wrap>
            <Heading letterSpacing="tight" as="h1" size="md" mb={18} mt={-6}>
              Interests
            </Heading>
            <Wrap mb={12}>
              {Interests.interests.map((likes) => (
                <InterestTag key={likes} name={likes} like />
              ))}
            </Wrap>

            {/*  */}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
