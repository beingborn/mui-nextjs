"use client"

import localFont from 'next/font/local'
import {css} from '@emotion/css'
import styled from '@emotion/styled'
import "./globals.css";

// Component
import Header from './layouts/Header'

const pretendard = localFont({
    src: "./assets/fonts/PretendardVariable.woff2",
    display: "swao",
    weight: "45 920",
    variable: "--font-pretendard"
});

const Wrapper = styled.div`
    display: flex;
    
    aside {
        color: blue;
    }
`
const Sidebar = styled.aside`
    flex-basis: 260px;
`

const Main = styled.main`
    flex-grow: 1;
`

const Footer = styled.footer`
    color: blue;
`

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className={pretendard.className}>
                <Header/>
                    <Wrapper>
                        <Sidebar>
                            LNB
                        </Sidebar>
                        <Main>
                            {children}
                        </Main>
                    </Wrapper>
                <Footer>
                    푸터
                </Footer>
            </body>
        </html>
    );
}
