import React from "react";
import { VStack, Heading, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <VStack spacing={4} p={5} align="center" id="contact">
      <Heading size="lg">Contact Me</Heading>
      <Input placeholder="Your Name" width="80%" />
      <Input placeholder="Your Email" width="80%" />
      <Textarea placeholder="Your Message" width="80%" />
      <Button colorScheme="blue">Send</Button>
    </VStack>
  );
};

export default Contact;