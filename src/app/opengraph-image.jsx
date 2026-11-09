import { ImageResponse } from "next/og";
export const alt = "VajraTech Labs — Ideas into impact";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#102b39",
        color: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 30, color: "#e6ad83" }}>VAJRATECH LABS</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 72,
          fontWeight: 800,
          lineHeight: 1.1,
        }}
      >
        <span>Big ideas.</span>
        <span>Intelligent solutions.</span>
        <span>Real impact.</span>
      </div>
      <div style={{ fontSize: 23, color: "#b8c8ce" }}>
        WEB · SOFTWARE · AI/ML · UI/UX · CLOUD
      </div>
    </div>,
    size,
  );
}
