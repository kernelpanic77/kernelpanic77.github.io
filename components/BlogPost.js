import React, { useState } from 'react'
import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Stack, Box, Link } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import { borderColor, secondaryTextColor, shadowColor } from '../styles/darkMode'

const BlogPost = ({ title, publishedAt, summary, slug }) => {
    const { colorMode } = useColorMode()
    const [opacity, setOpacity] = useState(0)

    return (
        <NextLink href={`blog/${slug}`} passHref>
            <Link 
                w="100%"
                _hover={{
                    boxShadow: shadowColor[colorMode],
                    textDecoration: 'none'
                }}
                mt={4}
                mb={6}
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
                    <Stack>
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection={['column', 'row']}
                    >
                        <Flex flexDirection="column" align="flex-start" justifyContent="start" width="100%">
                            <Heading size="md" as="h3" mb={2} fontWeight="medium">
                                {title}
                            </Heading>
                        </Flex>

                        <Text
                            color="gray.500"
                            minWidth="140px"
                            textAlign={['left', 'right']}
                            mt={[2, 0]}
                            mb={[4, 0]}
                        >
                            {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
                        </Text>
                    </Flex>
                    <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
                    </Stack>
                </Flex>
            </Link>
        </NextLink>
    )
}

export default BlogPost