import { ButtonGroup, Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateSelectedActivities } from "../store/store";
export const Activity = () => {
  const activities = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const dispatch = useDispatch();

  const handleActivityUpdate = (activity: string) => {
    dispatch(updateSelectedActivities(activity));
    console.log(activity);
  };

  return (
    <>
      <Flex justifyContent={"start"} alignItems={"center"} ml={4}>
        <Text p={4} fontWeight={"bold"} alignSelf={"start"}>
          Select Activities:
        </Text>
        <ButtonGroup flexWrap={"wrap"}>
          {activities.map((activity) => (
            <Button
              key={activity}
              variant="outline"
              colorScheme="teal"
              m={2}
              size={"sm"}
              onClick={() => handleActivityUpdate(activity)}
            >
              {activity}
            </Button>
          ))}
        </ButtonGroup>
      </Flex>
    </>
  );
};
