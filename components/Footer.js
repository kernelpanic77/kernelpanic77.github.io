import {
  Box,
  Stack,
  chakra,
  useColorMode,
  ButtonGroup,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaRegEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import * as React from "react";
import { Text } from "@chakra-ui/layout";
import { linkColor } from "../styles/darkMode";
import NextLink from "next/link";

const Copyright = (props) => (
  <Text fontSize="sm" {...props} textAlign="center">
    &copy; {new Date().getFullYear()} Ishan Shanware. All rights reserved.{" "}
    <br></br>
    Inspired from{" "}
    <chakra.span fontWeight="semibold" color={linkColor[useColorMode()]}>
      <a href="https://github.com/dakeiser">@Dakeiser&apos;s portfolio</a>
    </chakra.span>
  </Text>
);

const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
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
);

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{
        base: "4",
        md: "8",
      }}
    >
      <Stack
        direction={{
          base: "column-reverse",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack alignItems="center">
          <SocialMediaLinks />
          <Text textAlign="center" fontSize="sm">
            Built with{" "}
            <chakra.span fontWeight="semibold" color={linkColor[colorMode]}>
              <a href="https://nextjs.org">Next.js</a>
            </chakra.span>{" "}
            &{" "}
            <chakra.span fontWeight="semibold" color={linkColor[colorMode]}>
              <a href="https://chakra-ui.com/">Chakra UI</a>
            </chakra.span>
          </Text>
          <Copyright />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
