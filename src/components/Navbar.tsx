import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Bookmark, Settings } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
export const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
      <Box p="2">
        <Heading size="md">
          <Link to={"/"}>Getting Bored 🥱</Link>
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Link to="/settings">
          <Button colorScheme="teal" onClick={() => Navigate}>
            <Settings />
          </Button>
        </Link>
        <Link to="/save">
          <Button colorScheme="teal">
            <Bookmark />
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
};
