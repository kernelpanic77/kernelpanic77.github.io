import React, { useState } from "react";
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  useColorMode,
  Image,
  Box,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  borderColor,
  secondaryTextColor,
  shadowColor,
} from "../styles/darkMode";

const ExperienceCard = ({
  companyName,
  companyLink,
  designation,
  about,
  src,
  alt,
  date,
  children,
}) => {
  const { colorMode } = useColorMode();

  const [opacity, setOpacity] = useState(0);
  return (
    <Link
      href={companyLink}
      title={companyName}
      isExternal
      _hover={{
        boxShadow: shadowColor[colorMode],
        textDecoration: "none",
      }}
      mt={4}
      onMouseOver={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={10}
        p={4}
      >
        <Image
          src={src}
          alt={alt}
          width={["40px", "50px", "90px"]}
          ml={3}
          mr={6}
        ></Image>
        <Stack>
          <Flex justify="space-between">
            <Heading as="h4" size="md" fontWeight="bold" mb={2}>
              {designation}
            </Heading>
            <ExternalLinkIcon opacity={opacity} fontSize="2xl" />
          </Flex>
          <Flex justify="space-between">
            <Heading as="h4" size="sm" fontWeight="bold" mb={2}>
              {companyName}
            </Heading>
            <Heading as="h4" size="sm" fontWeight="semibold" mb={2}>
              {date}
            </Heading>
          </Flex>
          {/* <Flex justify="space-between">
            <Box>{about}</Box>
          </Flex> */}
          <Text color={secondaryTextColor[colorMode]}>{children}</Text>
        </Stack>
      </Flex>
    </Link>
  );
};

export default ExperienceCard;
