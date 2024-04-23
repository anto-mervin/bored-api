import axios from "axios";
import store from "../store/store";

interface Activity {
  activity?: string;
  type?: string;
  participants?: number;
  accessibility?: number;
  key?: number;
}

export const fetchActivity = async (): Promise<Activity | null> => {
  try {
    const response = await axios.get<Activity>(
      "https://www.boredapi.com/api/activity/",
      {
        params: {
          accessibility:
            store.getState().accessibility > 0
              ? store.getState().accessibility
              : undefined,
          participants:
            store.getState().numberOfPeople > 0
              ? store.getState().numberOfPeople
              : undefined,
          type: store.getState().selectedActivities || undefined,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching activity:", error);
    return null;
  }
};
