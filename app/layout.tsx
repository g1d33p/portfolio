import "./globals.css";
import Navbar from "./components/Navbar"; // relative path = safest for now

export const metadata = {
  title: "Jeevan Deep | AI Product & Project Manager",
  description:
    "Portfolio showcasing AI delivery, stakeholder alignment, and systems thinking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
