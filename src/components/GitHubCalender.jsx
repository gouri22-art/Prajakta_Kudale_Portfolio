import React from "react";
import { VStack, Heading, Box } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const GitHubSection = () => {
  return (
    <VStack spacing={4} p={5} align="center">
      <Heading size="lg">GitHub Activity</Heading>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Box boxShadow="md" p={5} borderRadius="lg" bg="gray.100">
          <GitHubCalendar username="gouri22-art" colorScheme="light" />
        </Box>
      </motion.div>
    </VStack>
  );
};

export default GitHubSection;