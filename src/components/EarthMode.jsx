import React, { useEffect, useRef } from "react";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default function EarthMode() {
  const viewerRef = useRef(null);

  useEffect(() => {
    Cesium.Ion.defaultAccessToken = import.meta.env.VITE_GOOGLE_API_KEY;
    viewerRef.current = new Cesium.Viewer("earth", {
      imageryProvider: new Cesium.IonImageryProvider({ assetId: 3 }),
      terrainProvider: Cesium.createWorldTerrain(),
      animation: false,
      timeline: false,
    });

    return () => viewerRef.current?.destroy();
  }, []);

  return <div id="earth" style={{ width: "100%", height: "100%" }} />;
}
