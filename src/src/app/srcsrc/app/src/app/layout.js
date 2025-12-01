export const metadata = {
  title: "Farcaster Daily Quiz",
  description: "Daily blockchain & TA questions with scoring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        background: "#0d0d0d",
        color: "#fff"
      }}>
        {children}
      </body>
    </html>
  );
}
