import React from "react";
import { VStack, Heading, Wrap, WrapItem, Icon } from "@chakra-ui/react";
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt];
  return (
    <VStack id="skills" spacing={4} p={10} align="center">
      <Heading size="lg">Skills & Tools</Heading>
      <Wrap spacing={6} justify="center">
        {skills.map((SkillIcon, index) => (
          <WrapItem key={index}>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Icon as={SkillIcon} boxSize={12} />
            </motion.div>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default Skills;