import React, { useState } from 'react'
import {
    Flex,
    Link,
    Heading,
    Text,
    Stack,
    useColorMode,
    Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { borderColor, secondaryTextColor, shadowColor } from '../styles/darkMode'

const ProjectCard = ({ title, href, children, src, alt }) => {
    const { colorMode } = useColorMode()

    const [opacity, setOpacity] = useState(0)
    return (
        <Link
            href={href}
            title={title}
            isExternal
            _hover={{
                boxShadow: shadowColor[colorMode],
                textDecoration: 'none'
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
                        <Heading
                            as="h4"
                            size="md"
                            fontWeight="bold"
                            mb={2}
                        >
                            {title}
                        </Heading>
                        <ExternalLinkIcon opacity={opacity} fontSize="2xl" />
                    </Flex>
                    <Text color={secondaryTextColor[colorMode]}>{children}</Text>
                </Stack>
            </Flex>
        </Link>
    )
}

export default ProjectCard