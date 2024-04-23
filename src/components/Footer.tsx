import { Heading } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Heading
        size="md"
        textAlign="center"
        p={4}
        bgColor={"gray.400"}
        pos="fixed"
        bottom={0}
      >
        {" "}
        Made With ❤️ By Anto Mervin{" "}
      </Heading>
    </>
  );
};
