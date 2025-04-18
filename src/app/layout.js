import localFont from 'next/font/local'
import "./globals.css";

// Component
import Header from './layouts/Header'

const pretendard = localFont({
  src: "./assets/fonts/PretendardVariable.woff2",
  display: "swao",
  weight: "45 920",
  variable: "--font-pretendard"
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Header></Header>
        <div>
          <aside>
              LNB
          </aside>
          {children}
        </div>
        <footer>
            푸터
        </footer>
      </body>
    </html>
  );
}
