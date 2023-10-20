import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import My from "../assests/My.jpeg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"} 
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trade learning app in India, look out for any crypto coin you really wanna know about!
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"36"} mt={["4", "4"]} src={My} />
          <Text>Our Founder</Text>
          <Text> Aryan Ramteke</Text>
          
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;