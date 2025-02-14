import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Jamiu's Portfolio",
  description:
    "Showcasing my expertise in backend development, cloud computing, and cybersecurity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer>
          <div className="container">
            <p>
              &copy; 2024 Jamiu Shomoye. | Connect with me on
              <a href="https://github.com/jomojay">GitHub</a>,
              <a href="https://linkedin.com/in/jamiu-shomoye">LinkedIn</a>,
              <a href="https://x.com/jassmenn16">X</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
