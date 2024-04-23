// people.tsx

import { Flex, Text, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store"; // Import the RootState type
import { updateNumberOfPeople } from "../store/store"; // Import the action

export const People: React.FC = () => {
  const dispatch = useDispatch();
  const numberOfPeople = useSelector(
    (state: RootState) => state.numberOfPeople
  );

  const handlePeopleChange = (value: string) => {
    dispatch(updateNumberOfPeople(parseInt(value)));
    console.log(`Number of People: ${value}`);
  };

  return (
    <>
      <Flex justifyContent={"start"} alignItems={"center"} ml={4}>
        <Text p={4} fontWeight={"bold"}>
          Number of People:
        </Text>
        <RadioGroup
          colorScheme="teal"
          value={numberOfPeople.toString()}
          onChange={handlePeopleChange}
        >
          <Stack direction="row">
            {[1, 2, 3, 4].map((value) => (
              <Radio key={value} value={value.toString()}>
                {value}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Flex>
    </>
  );
};
