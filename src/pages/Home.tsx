import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Tag,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createSave } from "../store/store";
import store from "../store/store";
import { fetchActivity } from "../api/api";

export const Home: React.FC = () => {
  const [activity, setActivity] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const toast = useToast(); // Initialize the toast hook

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchActivity();
    setActivity(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveClick = () => {
    if (activity) {
      dispatch(createSave(activity));
      console.log(store.getState());
      // Display a toast notification
      toast({
        title: "Activity saved!",
        description: "You have successfully saved the activity.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Card boxShadow="2xl" maxWidth="400px" mx="auto" my={8}>
      <CardHeader>
        <Heading size="md">Random Activity</Heading>
      </CardHeader>
      <CardBody>
        {loading ? (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : (
          <>
            <Heading size="sm">{activity?.activity || "No Data Found"}</Heading>
            <Tag size="md" variant="solid" colorScheme="teal" mt={2} mb={5}>
              {activity?.type || "No Type"}
            </Tag>
            <Text fontWeight={"bold"}>
              Accessibility: {activity?.accessibility || ""}
            </Text>
            <Text fontWeight={"bold"}>Key: {activity?.key || ""}</Text>
            <Text fontWeight={"bold"}>
              No.Of.Participants: {activity?.participants || ""}
            </Text>
          </>
        )}
      </CardBody>
      <CardFooter>
        <Button colorScheme="teal" onClick={fetchData} isLoading={loading}>
          {loading ? "Loading" : "Get Another Activity"}
        </Button>
        <Button colorScheme="teal" ml={2} onClick={handleSaveClick}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};
