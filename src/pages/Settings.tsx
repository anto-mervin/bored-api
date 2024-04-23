import { Heading, Button } from "@chakra-ui/react";
import { Activity } from "../components/Activity";
import Accessibility from "../components/Accessibility";
import { People } from "../components/People";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import StoreBadge from "../components/StoreBadge";
import {
  updateAccessibility,
  updateSelectedActivities,
  updateNumberOfPeople,
} from "../store/store";

export const Settings = () => {
  const dispatch = useDispatch();
  const handleResetToDefault = () => {
    dispatch(updateAccessibility(-1));
    dispatch(updateSelectedActivities(""));
    dispatch(updateNumberOfPeople(-1));
  };

  return (
    <>
      <Heading p={4} textAlign={"center"}>
        Settings
      </Heading>
      <StoreBadge />
      <Activity />
      <Accessibility />
      <People />
      <Button onClick={handleResetToDefault} colorScheme="teal" m={2}>
        Reset to Default
      </Button>
      <Link to={"/"}>
        <Button colorScheme="red" m={2}>
          Close
        </Button>
      </Link>
    </>
  );
};
