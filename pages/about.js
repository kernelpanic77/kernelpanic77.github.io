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
              Me
            </Heading>
            <Text mb={12} color={secondaryTextColor[colorMode]}>
              Hey there! I&apos;m <strong>Ishan Shanware</strong>, a Computer
              Science undergraduate from{" "}
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
              Nostrud tempor pariatur in sint id nostrud ullamco nostrud velit
              ex.
            </Heading>
            <Text mb={12} color={secondaryTextColor[colorMode]}>
              Ipsum non laborum id sunt occaecat. Nisi Lorem veniam amet eu.
              Cupidatat qui anim dolor voluptate officia occaecat incididunt
              laborum incididunt sint occaecat nulla qui. Cupidatat ullamco
              tempor cillum excepteur quis consequat cillum aliquip cupidatat
              anim dolore ipsum anim. Deserunt sit nisi nulla nisi. Commodo
              cillum sint Lorem esse officia amet Lorem labore anim consequat ad
              ea.
              <ChakraLink
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
              </ChakraLink>{" "}
              Occaecat ut aliqua cillum dolor Lorem magna. Lorem veniam sunt
              nisi in reprehenderit mollit eu voluptate tempor velit
              exercitation commodo. Consectetur commodo mollit elit culpa mollit
              laboris ut aliqua Lorem mollit ea in est. Excepteur irure
              consectetur magna proident tempor. Aliqua proident laboris tempor
              occaecat velit ea deserunt nostrud laborum in amet eiusmod ipsum
              commodo.
              <ChakraLink
                href="https://ctftime.org/team/109908"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Zense
              </ChakraLink>{" "}
              where we had participated in various CTFs and even had the
              opportunity to have an{" "}
              <ChakraLink
                href="https://www.linkedin.com/pulse/my-experience-hosting-ctf-sai-rithwik-m/"
                target="_blank"
                color={linkColor[colorMode]}
              >
                intra-college CTF
              </ChakraLink>
              !
            </Text>

            <Wrap mb={12}>
              {Interests.like.map((likes) => (
                <InterestTag key={likes} name={likes} like />
              ))}
            </Wrap>
            <Wrap mb={12}>
              {Interests.dislike.map((dislikes) => (
                <InterestTag key={dislikes} name={dislikes} />
              ))}
            </Wrap>
            <Heading letterSpacing="tight" mb={2} as="h1" size="lg">
              Where I&apos;ve lived?
            </Heading>
            <Text mb={12} color={secondaryTextColor[colorMode]}>
              Duis excepteur quis occaecat consequat adipisicing velit pariatur.
              Labore minim excepteur voluptate dolore amet Lorem labore non.
              Nisi veniam nulla eu Lorem pariatur exercitation. Fugiat ullamco
              aute amet minim dolor mollit veniam ipsum velit aliquip ex mollit.
            </Text>
            <Heading letterSpacing="tight" mb={2} as="h1" size="lg">
              Interests
            </Heading>
            <Text mb={6} color={secondaryTextColor[colorMode]}>
              Laborum consectetur nulla exercitation id. Elit qui mollit irure
              consequat esse ipsum proident in mollit sunt voluptate adipisicing
              cillum veniam. Esse enim eiusmod incididunt culpa consectetur ut
              id nulla mollit qui cillum incididunt. Sint aute excepteur ut in.
              Quis duis labore ad culpa consectetur enim Lorem Lorem esse elit
              proident ut. Magna officia consectetur et labore id sint nisi
              culpa anim tempor labore ea.
              <ChakraLink
                href="https://open.spotify.com/artist/2oBG74gAocPMFv6Ij9ykdo?si=oJaImoiLTAO5s1-ILb8uaw&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                lorem
              </ChakraLink>
              ,{" "}
              <ChakraLink
                href="https://open.spotify.com/artist/7suHsCqUEifucqVyWaljgC?si=1gPKhrJ6TKm7qvDA1vbFkA&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Prabh Deep
              </ChakraLink>
              ,{" "}
              <ChakraLink
                href="https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5?si=vbWa9R1oRQSREI-A4w80OQ&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                J. Cole
              </ChakraLink>
              ,{" "}
              <ChakraLink
                href="https://open.spotify.com/artist/4r63FhuTkUYltbVAg5TQnk?si=i_0CEt_8R6KaeTlcNMj75Q&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                DaBaby
              </ChakraLink>
              ,{" "}
              <ChakraLink
                href="https://open.spotify.com/artist/5tusfwYTSzhe2meWRNp9tj?si=9ErnB3kpQoyc7Qd4Gqypcg&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                EPR Iyer
              </ChakraLink>
              ,{" "}
              <ChakraLink
                href="https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY?si=m8PKnFuMSbSJ0inpxs9SNA&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Travis Scott
              </ChakraLink>
              ,{" "}
              <ChakraLink
                href="https://open.spotify.com/artist/1yCVvGnMTuLeNzbXtgAytL?si=yy1ULJHmTXGZZQ0dzIwiGg&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Rebel-7
              </ChakraLink>
              ,{" "}
              <ChakraLink
                href="https://open.spotify.com/artist/0EAfS9gQe5SCtQp1R6hJqG?si=eoh7oRjKQBuyxbD9Ck6LIg&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Ahmer
              </ChakraLink>{" "}
              and{" "}
              <ChakraLink
                href="https://open.spotify.com/artist/6JvFJaw7uRQFBUzSlv28Gw?si=udOeinvpSWqE5bhMwCUWgQ&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Tienas&apos;
              </ChakraLink>{" "}
              Fugiat nisi anim ullamco veniam cupidatat ullamco veniam non
              commodo occaecat nisi. Qui enim reprehenderit eiusmod et culpa
              nisi cupidatat dolore. Ipsum sunt ex voluptate non adipisicing in
              non irure ullamco. Proident incididunt nulla aliquip dolore ex
              consectetur culpa laboris occaecat. Non consectetur incididunt sit
              proident aliquip nisi cillum Lorem culpa commodo tempor cillum ut.
              <ChakraLink
                href="https://open.spotify.com/artist/5pWWDUGa89yZyjOGqgSKWB?si=t5Ts3p0ARoCj3nX3hFqHEg&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                MB-14
              </ChakraLink>{" "}
              and{" "}
              <ChakraLink
                href="https://open.spotify.com/artist/7hI0IRD66iykVpXiieNRbe?si=DvthMAeLQwyWZ42htAhQMw&dl_branch=1"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Ea mollit mollit Lorem cupidatat anim ad enim. Occaecat dolor
                minim sint aliquip deserunt ut ad sit ut voluptate occaecat.
                Velit reprehenderit elit mollit laborum duis esse anim nostrud
                sint id quis commodo id. Culpa tempor Lorem mollit ipsum mollit
                occaecat nostrud. In aliquip et cillum dolor do.
              </ChakraLink>
              !
            </Text>

            <Text mb={6} color={secondaryTextColor[colorMode]}>
              Nisi dolor sunt elit labore est aute sit est incididunt voluptate.
              Proident qui mollit aliqua ullamco elit ad mollit qui commodo duis
              consectetur. Do aliquip cupidatat sunt amet. Consectetur laboris
              anim mollit dolor proident id ea irure dolore eiusmod minim do.
            </Text>

            <Text mb={6} color={secondaryTextColor[colorMode]}>
              I&apos;m not that interested in sports. I have tried many of them
              from Archery to Swimming, but was never interested in almost any
              of them. However, I do play a decent amount of badminton and of
              late I have taken some interest in chess for the last year and
              I&apos;m a 1200 rated rapid player on chesscom.
            </Text>

            <Text mb={12} color={secondaryTextColor[colorMode]}>
              Exercitation excepteur irure est eiusmod culpa ea irure deserunt
              culpa cupidatat.
              <ChakraLink
                href="https://mojopizza.in/"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Ullamco tempor labore culpa nulla culpa mollit qui duis minim
                aliqua eiusmod.
              </ChakraLink>{" "}
              Quis elit consectetur ad id quis voluptate mollit sint excepteur
              enim tempor commodo. Esse laborum magna incididunt officia dolor.
              Id irure irure proident enim sit laboris dolore et ad culpa dolor.
              Nisi officia eu deserunt ut. Laboris exercitation quis nulla
              labore minim nostrud esse eiusmod.
              <ChakraLink
                href="https://twitter.com/DaKeiser"
                target="_blank"
                color={linkColor[colorMode]}
              >
                Twitter
              </ChakraLink>
              !!!
            </Text>

            <Wrap mb={12}>
              {Interests.like.map((likes) => (
                <InterestTag key={likes} name={likes} like />
              ))}
            </Wrap>

            <Wrap mb={12}>
              {Interests.dislike.map((dislikes) => (
                <InterestTag key={dislikes} name={dislikes} />
              ))}
            </Wrap>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
