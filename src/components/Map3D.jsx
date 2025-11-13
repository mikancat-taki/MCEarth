import React, { useEffect, useRef } from "react";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default function Map3D() {
  const viewerRef = useRef(null);

  useEffect(() => {
    Cesium.Ion.defaultAccessToken = import.meta.env.VITE_GOOGLE_API_KEY;
    viewerRef.current = new Cesium.Viewer("cesium3d", {
      terrainProvider: Cesium.createWorldTerrain(),
    });

    return () => viewerRef.current?.destroy();
  }, []);

  return <div id="cesium3d" style={{ width: "100%", height: "100%" }} />;
}
