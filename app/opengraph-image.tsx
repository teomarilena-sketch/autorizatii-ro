import { ImageResponse } from "next/og";

export const alt = "Autorizații.ro — Licențiere fără blocaje administrative";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0B192C 0%, #12294A 55%, #0B192C 100%)",
          color: "#E7EEF5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              marginRight: 18,
              background: "linear-gradient(140deg, #008DDA, #1E3E62)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 800, display: "flex" }}>
            Autorizații.ro
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 940,
              display: "flex",
            }}
          >
            Licențiere fără blocaje administrative.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#9FB4CB",
              maxWidth: 880,
              marginTop: 24,
              display: "flex",
            }}
          >
            Consultanță pentru obținerea autorizațiilor și licențelor în domenii
            reglementate.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#7E96B0",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex" }}>
            AFER · IGPR · ISU · ANRE · AGFR · ISO
          </div>
          <div style={{ display: "flex", color: "#2DA8EC", fontWeight: 700 }}>
            autorizații.ro
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
