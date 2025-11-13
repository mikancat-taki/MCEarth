import axios from "axios";

export async function getTimezone(lat, lng) {
  const key = import.meta.env.VITE_GOOGLE_API_KEY;
  try {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Math.floor(Date.now() / 1000)}&key=${key}`
    );
    return res.data;
  } catch {
    return { zoneName: "N/A" };
  }
}
