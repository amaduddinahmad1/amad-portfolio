import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

// The image shown when a link to the site is shared.
export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 96px",
        background: "#0a0a0f",
        color: "#ececf1",
      }}
    >
      <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
        {profile.logo.text}
        <span style={{ color: "#22d3ee" }}>{profile.logo.accent}</span>
      </div>
      <div style={{ display: "flex", marginTop: 56, fontSize: 80, fontWeight: 700, lineHeight: 1.1 }}>
        {profile.name}
      </div>
      <div
        style={{
          width: 160,
          height: 8,
          marginTop: 36,
          borderRadius: 4,
          background: "linear-gradient(90deg, #22d3ee, #8b5cf6)",
        }}
      />
      <div style={{ display: "flex", marginTop: 36, fontSize: 38, color: "#a1a1b0" }}>{profile.title}</div>
    </div>,
    size,
  );
}
