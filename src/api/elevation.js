import axios from "axios";

export async function getElevation(lat, lng) {
  const key = import.meta.env.VITE_GOOGLE_API_KEY;
  try {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/elevation/json?locations=${lat},${lng}&key=${key}`
    );
    return { elevation: res.data.results[0]?.elevation || "N/A" };
  } catch {
    return { elevation: "N/A" };
  }
}
