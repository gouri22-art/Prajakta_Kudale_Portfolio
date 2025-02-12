import React from "react";
import { VStack, HStack, Heading, Text, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <HStack id="home" spacing={10} p={10} align="center" justify="center" minH="100vh">
      <VStack align="start" spacing={4} maxW="50%">
        <Heading size="2xl" as={motion.div} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          Hi, I'm Prajakta Kudale
        </Heading>
        <Text fontSize="lg" as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          A passionate Frontend Developer specializing in React.js and Chakra UI. I love building scalable, user-friendly applications.
        </Text>
      </VStack>
      <Box as={motion.div} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
        <Image 
          borderRadius="full" 
          boxSize="300px" 
          src="https://avatars.githubusercontent.com/gouri22-art" 
          alt="Prajakta Kudale"
          boxShadow="lg"
        />
      </Box>
    </HStack>
  );
};

export default Home;
