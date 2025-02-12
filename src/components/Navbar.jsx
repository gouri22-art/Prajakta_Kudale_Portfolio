import React from "react";
import { HStack, Link, Button, useColorMode, Box, Text } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position="fixed" width="100%" bg="white" zIndex={1000} boxShadow="md">
      <HStack p={4} justifyContent="space-between" maxW="1200px" mx="auto">
        <Text fontSize="xl" fontWeight="bold">Prajakta Kudale</Text>
        <HStack spacing={4}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.div whileHover={{ scale: 1.1 }} key={index}>
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/resume.pdf" download>Resume</Link>
          </motion.div>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
