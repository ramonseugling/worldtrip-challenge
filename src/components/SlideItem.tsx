import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideItemPropsInterface {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export function SlideItem({
  title,
  description,
  link,
  imageUrl,
}: SlideItemPropsInterface) {
  return (
    <Link href={`/continents/${link}`}>
      <a>
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
          bgImage={`url(${imageUrl})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          textAlign="center"
        >
          <Heading fontSize="48px" fontWeight="700" mb="1rem" color="gray.200">
            {title}
          </Heading>
          <Text fontSize="24px" fontWeight="700" color="gray.200">
            {description}
          </Text>
        </Flex>
      </a>
    </Link>
  );
}
