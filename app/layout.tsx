import "./globals.css";
import Navbar from "./components/Navbar"; // relative path = safest for now

export const metadata = {
  title: "Jeevan Deep | AI Product Manager | AI Delivery & Systems Thinking",
  description:
    "AI Product & Project Manager portfolio showcasing analytics delivery, stakeholder alignment, and real-world AI workflows.",
  keywords: [
    "AI Product Manager",
    "AI Project Manager",
    "Data Science Portfolio",
    "Analytics Delivery",
    "Jeevan Deep",
  ],
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
