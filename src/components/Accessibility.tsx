import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateAccessibility } from "../store/store";

const Accessibility = () => {
  const dispatch = useDispatch();

  const handleAccessibilityChange = (value: number) => {
    dispatch(updateAccessibility(value));
    console.log(`Accessibility: ${value}`);
  };
  return (
    <>
      <Flex justifyContent={"start"} alignItems={"center"} ml={4}>
        <Text p={4} fontWeight={"bold"}>
          Accessibility:
        </Text>
        <Slider
          min={0}
          max={1}
          step={0.1}
          colorScheme="teal"
          mr={20}
          onChange={handleAccessibilityChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Flex>
    </>
  );
};

export default Accessibility;
