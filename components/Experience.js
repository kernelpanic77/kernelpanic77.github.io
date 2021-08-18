import * as React from "react";
import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import placeholder from "assets/images/placeholder.png";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import ProjectCard from "../components/ProjectCard";
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition,
} from "./page-transitions";
import { MotionBox } from "./motion";
import { companies, institutes } from "data/data";
import Header from "./header";

// interface CardProps {
//   title: string;
//   role: string;
//   skills: string[];
//   period: string;
//   logo: string;
//   colorMode: string;
//   alt: string;
// }

const TURQUOISE = "#06b6d4";

const Card = (props) => {
  const { title, role, skills, period, logo, colorMode, alt } = props;
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: "lg" }}
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={placeholder}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Heading
                align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={["none", "none", "flex", "flex"]}
              >
                {skills.map((skill) => (
                  <Tag size="sm" padding="0 3px" key={skill}>
                    {skill}
                  </Tag>
                ))}
              </Stack>
            </Stack>
          </Flex>
          <Stack display={["none", "none", "flex", "flex"]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          display={["flex", "flex", "none", "none"]}
        >
          {skills.map((skill) => (
            <Tag size="sm" padding="0 3px" key={skill}>
              {skill}
            </Tag>
          ))}
        </Stack>
      </Box>
    </CardTransition>
  );
};

const Experience = () => {
  const { colorMode } = useColorMode();

  return (
    <PageSlideFade>
      <StaggerChildren>
        <MotionBox>
          <Heading>
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Career
              </Header>
              <Stack pl={3}>
                <Box as={BsFillBriefcaseFill} size="25px" />
              </Stack>
            </Flex>
          </Heading>
        </MotionBox>
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
            CovIntel is a one stop AI solution for vaccine surveillance and
            monitoring. New cases are predicted over a duration, for a given
            geography and given vaccine and generates visualisations.
          </ProjectCard>
        </VStack>
        <Heading>
          <Flex alignItems="center">
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Education
            </Header>
            <Stack pl={3}>
              <Box as={FaGraduationCap} size="25px" />
            </Stack>
          </Flex>
        </Heading>
        <VStack
          spacing={4}
          marginBottom={6}
          align="left"
          mx={[0, 0, 6]}
          mt={12}
        >
          {institutes.map((institute, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <Card
                key={index}
                title={institute.title}
                role={institute.role}
                skills={institute.skills}
                period={institute.period}
                logo={institute.logo}
                colorMode={colorMode}
              />
            </MotionBox>
          ))}
        </VStack>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default Experience;
