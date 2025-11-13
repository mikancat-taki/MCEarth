import axios from "axios";

export async function getCountryInfo(name) {
  try {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return res.data[0];
  } catch {
    return { error: "Country not found" };
  }
}
