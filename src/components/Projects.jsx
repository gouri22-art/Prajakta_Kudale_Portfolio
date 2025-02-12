import React from "react";
import { VStack, Heading, Box, Text, HStack, Link, Button } from "@chakra-ui/react";

const Projects = () => {
  const projects = [
    {
      title: "OptiLink – Connecting You to Clarity",
      link: "https://gouri22-art.github.io/OptiLink-EYE-VISION-App/",
      repo: "https://github.com/gouri22-art/OptiLink-EYE-VISION-App",
      description: "A responsive e-commerce platform inspired by Lenskart with secure authentication."
    },
    {
      title: "Mini Book Management App",
      link: "https://github.com/gouri22-art/book-management-app",
      repo: "https://github.com/gouri22-art/book-management-app",
      description: "A full-stack application for managing books with CRUD operations and user authentication."
    }
  ];
  
  return (
    <VStack id="projects" spacing={5} p={5} align="center">
      <Heading size="lg">Projects</Heading>
      {projects.map((project, index) => (
        <Box key={index} p={5} borderWidth={1} borderRadius="lg" width="80%">
          <Heading size="md">{project.title}</Heading>
          <Text>{project.description}</Text>
          <HStack spacing={3} mt={2}>
            <Link href={project.link} isExternal><Button colorScheme="blue">Live Demo</Button></Link>
            <Link href={project.repo} isExternal><Button colorScheme="gray">GitHub</Button></Link>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default Projects;
