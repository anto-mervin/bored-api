import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define initial state type
interface InitialState {
  accessibility: number;
  selectedActivities: string;
  numberOfPeople: number;
  savedItems: SavedItem[];
}

interface SavedItem {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
}

// Define initial state
const initialState: InitialState = {
  accessibility: -1,
  selectedActivities: "",
  numberOfPeople: -1,
  savedItems: [],
};

// Define reducers
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateAccessibility(state, action: PayloadAction<number>) {
      state.accessibility = action.payload;
    },
    updateSelectedActivities(state, action: PayloadAction<string>) {
      state.selectedActivities = action.payload;
    },
    updateNumberOfPeople(state, action: PayloadAction<number>) {
      state.numberOfPeople = action.payload;
    },
    createSave(state, action: PayloadAction<SavedItem>) {
      state.savedItems.push(action.payload);
    },
    deleteSave(state, action: PayloadAction<string>) {
      state.savedItems = state.savedItems.filter(
        (item) => item.key !== action.payload
      );
    },
  },
});

// Export actions
export const {
  updateAccessibility,
  updateSelectedActivities,
  updateNumberOfPeople,
  createSave,
  deleteSave,
} = appSlice.actions;

// Create store
const store = configureStore({
  reducer: appSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type

export default store;
