import React, { useEffect, useState } from "react";
import { HStack, Link, Button, Box, Text } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
            <Link href="/PrajaktaKudale-FrontendDeveloper(React)-MGdH" download>Resume</Link>
          </motion.div>
          <Button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
