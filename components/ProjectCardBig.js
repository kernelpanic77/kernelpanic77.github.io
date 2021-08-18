import {
    TagLeftIcon,
    Tag,
    Text,
    Stack,
    Divider,
    TagLabel,
    Link,
    Image,
    Skeleton,
    useColorMode,
    ScaleFade
} from '@chakra-ui/react'

import {
    FaGithub,
    FaPython,
    FaDocker,
    FaDatabase,
    FaJs,
    FaReact,
    FaCode,
    FaWhmcs,
    FaExternalLinkAlt,
    FaEthernet,
    FaWaveSquare
} from 'react-icons/fa'

import { SiNextDotJs } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";

import { useMediaQuery } from 'react-responsive';
import ReactGA from 'react-ga'
import React, { useState } from 'react'
import { bgColor, primaryTextColor, iconColor, borderColor, secondaryTextColor, shadowColor } from '../styles/darkMode'

export default function ProjectCardBig({
    imageURL,
    title,
    desc,
    githubLink,
    deployLink,
    tag,
}) {
    const getTag = (tag) => {
        let values = []
        if (tag == 'React') {
            values[0] = 'blue'  
            values[1] = FaReact 
        } 
        else if (tag == 'Python') {
            values[0] = 'orange'    
            values[1] = FaPython    
        }
        else if (tag == 'Javascript') {
            values[0] = 'yellow'
            values[1] = FaJs
        } 
        else if (tag == 'Flask') {
            values[0] = 'green'
            values[1] = FaPepperHot
        }
        else if (tag == 'Docker') {
            values[0] = 'blue'
            values[1] = FaDocker
        }
        else if (tag == 'SQL') {
            values[0] = 'blue'
            values[1] = FaDatabase
        }
        else if(tag == 'ML' ) {
            values[0] = 'pink'
            values[1] = FaWhmcs
        }
        else if(tag == 'Verilog' ) {
            values[0] = 'purple'
            values[1] = FaEthernet
        }
        else if(tag == 'GTKWave' ) {
            values[0] = 'red'
            values[1] = FaWaveSquare
        }
        else if(tag == 'Next.js' ) {
            values[0] = 'gray'
            values[1] = SiNextDotJs
        }
        else if(tag == 'Chakra UI' ) {
            values[0] = 'teal'
            values[1] = AiFillThunderbolt
        }
        else {
            values[0] = 'gray'
            values[1] = FaCode
        }        
        return values
    }

    const { colorMode } = useColorMode()
    const [opacity, setOpacity] = useState(0)

    const isBigScreen = useMediaQuery({ minWidth: 600 });

    const Tags = tag.map((item) => (
        <Tag
            key={item}
            colorScheme={getTag(item)[0]}
            size={isBigScreen     ? 'md' : 'sm'}
        >
            <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
            <TagLabel>{item}</TagLabel>
        </Tag>
    ))

    const handleClick = (event) => {
        ReactGA.event({
            category: 'click',
            action: event,
        })
    }

    const [imageLoad, setImageLoad] = useState(false);

    return (
        <Stack
            bg="secondary"
            borderRadius="10px"
            minH="320px"
            maxH="500px"
            border="1px"
            borderColor={{ base: '#333', md: borderColor[colorMode] }}
            _hover={{
                boxShadow: shadowColor[colorMode],
                textDecoration: 'none'
            }}
            mt={4}
            onMouseOver={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
        >
        <ScaleFade in={true} transition={{ duration: 1 }}>
            <Skeleton isLoaded={imageLoad} height='auto' m='auto' borderRadius="10px 10px 0px 0px">
                <Image
                    width={1250}
                    height={600}
                    w="auto"
                    h="auto"
                    src={imageURL}
                    transition="0.3s"
                    borderRadius="10px 10px 0px 0px"
                    alt="project image"
                    onLoad={() => setImageLoad(true)}
                ></Image>
            </Skeleton>
            <Stack px={4} py={2}>
                <Stack isInline justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" color={primaryTextColor[colorMode]}>
                    <strong>{title}</strong>
                </Text>
                <Stack
                    isInline
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={4}
                >
                    {githubLink && (
                    <Link
                        href={githubLink}
                        color={iconColor[colorMode]}
                        onClick={() =>
                        handleClick(`githublink_${title.replace('@', '-at-')}`)
                        }
                    >
                        <FaGithub size={23} />
                    </Link>
                    )}
                    {deployLink && (
                    <Link
                        href={deployLink}
                        color={iconColor[colorMode]}
                        onClick={() =>
                        handleClick(`deploylink_${title.replace('@', '-at')}`)
                        }
                    >
                        <FaExternalLinkAlt size={20} />
                    </Link>
                    )}
                </Stack>
            </Stack>
            <Stack isInline>{Tags}</Stack>
            <Divider />
            <Text color={secondaryTextColor[colorMode]} fontSize={['sm', 'sm']}>
                {desc}
            </Text>
            </Stack>
        </ScaleFade>
        </Stack>
    )
}