import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack id="about" spacing={4} p={10} align="center">
      <Heading size="lg">About Me</Heading>
      <Text textAlign="center" maxW="600px">
        I am a passionate Frontend Developer specializing in React.js and Chakra UI. I enjoy building scalable, user-friendly applications.
      </Text>
    </VStack>
  );
};

export default About;