/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/** @jsx */
import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode,
  UnorderedList,
  OrderedList,
  ListItem,
  chakra,
} from "@chakra-ui/react";
import { jsx } from "@emotion/react";
import Image from "./ChakraNextImage";
import { secondaryTextColor } from "../styles/darkMode";
import NextLink from "next/link";

// Custom Link component to handle both internal and external links
const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "hsl(208, 99%, 44%)",
    dark: "hsl(208, 95%, 68%)",
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props}></Link>
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

// Custom Quote component with alert styling based on color mode
const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

// DocsHeading component with anchor link functionality
const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: "100px",
      scrollSnapMargin: "100px", // Safari support
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: "outline",
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

// Custom Text component to handle secondary text color based on the theme
const CustomText = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Text
      color={secondaryTextColor[colorMode]}
      as="p"
      mt={0}
      lineHeight="tall"
      {...props}
    />
  );
};

// Horizontal Rule (Divider) component with dynamic border color based on theme
const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

// Unordered List (UL) component
const CUl = ({ children }) => (
  <UnorderedList pl={4} ml={2} fontSize="md" spacing={"4px"} mt={3}>
    {children}
  </UnorderedList>
);

// Ordered List (OL) component
const COl = ({ children }) => (
  <OrderedList pl={4} ml={2} fontSize="md" spacing={"4px"} mt={3}>
    {children}
  </OrderedList>
);

// List Item (LI) component
const CLi = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <ListItem pb={1} color={secondaryTextColor[colorMode]}>
      <chakra.span color={secondaryTextColor[colorMode]}>
        {children}
      </chakra.span>
    </ListItem>
  );
};

// MDXComponents mapping for customizing elements
const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
  h3: (props) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  h4: (props) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  h5: (props) => <DocsHeading as="h5" size="sm" fontWeight="bold" {...props} />,
  h6: (props) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  inlineCode: (props) => (
    <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  ),
  img: (props) => (
    <>
      <Image
        width={750}
        height={300}
        align="center"
        w="auto"
        h="auto"
        mx="auto"
        layout="responsive"
        objectFit="contain"
        {...props}
      />
      <Text textAlign="center" mt={2} fontSize="xs">
        {props["alt"]}
      </Text>
    </>
  ),
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props) => <CustomText {...props} />,
  ul: (props) => <CUl {...props} />,
  ol: (props) => <COl {...props} />,
  li: (props) => <CLi {...props} />,
  blockquote: Quote,
};

export default MDXComponents;
