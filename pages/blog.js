import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Center,
} from "@chakra-ui/react";
import { serialize } from 'next-mdx-remote/serialize'

import Container from "../components/Container";
import { getAllFilesFrontMatter } from "../lib/mdx";
import BlogPost from "../components/BlogPost";

import { SearchIcon } from "@chakra-ui/icons";
import { NextSeo } from "next-seo";

const url = "https://kernelpanic77.github.io/blog";
const title = "Blog - Ishan";
const description =
  "My blogs! I write about DFIR, blockchains, platforms and probably anything interesting about tech or some small feature that gets my attention.";
const images = [
  {
    url: "https://avatars.githubusercontent.com/u/42925218?s=60&v=4",
    width: 800,
    height: 600,
    alt: "Og Image Alt",
  },
];

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

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
        <title>Blog - Ishan</title>
      </Head>
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
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Blog ({posts.length} posts)
            </Heading>
            <InputGroup mb={12} mr={4} w="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement>
                <SearchIcon color="gray.500" />
              </InputRightElement>
            </InputGroup>
            {!filteredBlogPosts.length && <Center>Coming Soon!</Center>}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  // const mdxSource = await serialize(posts)
  return { props: { posts } };
}
