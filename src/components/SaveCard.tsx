import {
  Heading,
  Card,
  CardBody,
  Button,
  CardFooter,
  Tag,
  CardHeader,
} from "@chakra-ui/react";
import { useState } from "react";

interface SaveCardProps {
  title: string;
  type: string;
  onDelete?: () => void; // Optional onDelete callback function
}

export const SaveCard: React.FC<SaveCardProps> = (props) => {
  const [deleting, setDeleting] = useState<boolean>(false);

  const handleDelete = () => {
    setDeleting(true); // Set deleting state to true to indicate deletion in progress
    // Execute onDelete callback function if provided
    if (props.onDelete) {
      props.onDelete();
    }
  };

  const handleGoogleSearch = () => {
    const searchQuery = `https://www.google.com/search?q=${encodeURIComponent(
      props.title
    )}`;
    window.open(searchQuery, "_blank");
  };

  return (
    <>
      <Card boxShadow="2xl">
        <CardHeader>
          <Tag size="md" variant="solid" colorScheme="gray">
            {props.type}
          </Tag>
        </CardHeader>
        <CardBody>
          <Heading size="md">{props.title}</Heading>
        </CardBody>
        <CardFooter>
          <Button colorScheme="red" onClick={handleDelete} isLoading={deleting}>
            Delete
          </Button>
          <Button colorScheme="teal" ml={2} onClick={handleGoogleSearch}>
            Google Search
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
