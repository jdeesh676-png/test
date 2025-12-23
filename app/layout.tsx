export const metadata = {
  title: "Jagadeesh Kusupati",
  description: "Daily AI, Coding, Productivity, Life Hacks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#0a0a0a",
          color: "#00d4ff",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
