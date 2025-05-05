
import "./globals.css";
import { RosterProvider } from "../context/RosterContext";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RosterProvider>
          {children}
        </RosterProvider>
      </body>
    </html>
  );
}
