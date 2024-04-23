import { Badge, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const StoreBadge = () => {
  const { accessibility, selectedActivities, numberOfPeople } = useSelector(
    (state: RootState) => state
  );

  return (
    <Flex
      alignItems="center"
      gap={2}
      justifyContent={"center"}
      py={1}
      flexWrap={"wrap"}
    >
      <Badge colorScheme="teal" borderRadius="full" px={3} py={1}>
        Accessibility: {accessibility >= 0 ? accessibility : "Any"}
      </Badge>
      <Badge colorScheme="teal" borderRadius="full" px={3} py={1}>
        Activities: {selectedActivities || "Any"}
      </Badge>
      <Badge colorScheme="teal" borderRadius="full" px={3} py={1}>
        Number of People: {numberOfPeople > 0 ? numberOfPeople : "Any"}
      </Badge>
    </Flex>
  );
};

export default StoreBadge;
