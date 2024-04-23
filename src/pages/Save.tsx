import { SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSave } from "../store/store";
import { SaveCard } from "../components/SaveCard";
import { RootState } from "../store/store";

export const Save: React.FC = () => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state: RootState) => state.savedItems);

  const handleDelete = (key: string) => {
    dispatch(deleteSave(key));
  };

  return (
    <>
      <SimpleGrid
        spacing={4}
        p={10}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {savedItems.map((item) => (
          <SaveCard
            key={item.key}
            title={item.activity}
            type={item.type}
            onDelete={() => handleDelete(item.key)}
          />
        ))}
      </SimpleGrid>
    </>
  );
};
