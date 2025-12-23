export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0a0a", color: "#00d4ff" }}>
        {children}
      </body>
    </html>
  );
}
