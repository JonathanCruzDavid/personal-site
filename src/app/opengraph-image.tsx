import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#171717",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#a1a1aa",
            fontSize: 28,
            marginBottom: 24,
          }}
        >
          Queens, NY
        </div>
        <div
          style={{
            display: "flex",
            color: "#fafafa",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          Jonathan Cruz
        </div>
        <div
          style={{
            display: "flex",
            color: "#d4d4d8",
            fontSize: 36,
            marginTop: 24,
          }}
        >
          2.5+ years of experience building full-stack apps and automation tools
        </div>
      </div>
    ),
    { ...size }
  );
}
