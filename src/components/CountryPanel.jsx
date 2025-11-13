import React, { useState } from "react";
import { getCountryInfo } from "../api/country";
import { getTimezone } from "../api/timezone";
import { getElevation } from "../api/elevation";

export default function CountryPanel() {
  const [query, setQuery] = useState("");
  const [info, setInfo] = useState(null);

  const handleSearch = async () => {
    if (!query) return;
    const country = await getCountryInfo(query);
    if (country && !country.error) {
      const [lat, lng] = country.capitalInfo?.latlng || [0, 0];
      const tz = await getTimezone(lat, lng);
      const el = await getElevation(lat, lng);
      setInfo({ ...country, timezone: tz.zoneName, elevation: el.elevation });
    }
  };

  return (
    <div className="absolute top-3 left-3 bg-white p-3 rounded shadow-md w-64">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="国名を入力..."
        className="border p-1 w-full mb-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="w-full bg-gray-800 text-white py-1 rounded"
      >
        検索
      </button>
      {info && (
        <div className="mt-3 text-sm text-gray-700">
          <p><b>国名:</b> {info.name.common}</p>
          <p><b>首都:</b> {info.capital}</p>
          <p><b>タイムゾーン:</b> {info.timezone}</p>
          <p><b>標高:</b> {info.elevation} m</p>
        </div>
      )}
    </div>
  );
}
