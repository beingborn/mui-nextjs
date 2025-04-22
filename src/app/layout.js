"use client"

import localFont from 'next/font/local'
import styled from '@emotion/styled'
import { useEffect, useState} from 'react'
import "./globals.css";

// Component
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Breadcrumb from './layouts/Breadcrumb';
import Title from './components/Title'

const pretendard = localFont({
    src: "./assets/fonts/PretendardVariable.woff2",
    display: "swao",
    weight: "45 920",
    variable: "--font-pretendard"
});

const Wrapper = styled.div`
    display: flex;
    min-height: ${props => (props.minH) ? props.minH : '100vh'};

    main {
        flex-grow: 1;
    }

    .inner {
        padding: 20px;
    }
`

export default function RootLayout({ children }) {
    const [minH, setminH] = useState(0);
    const [isReady, setisReady] = useState(false);

    useEffect(() => {
        const footerH = document.querySelector('footer')?.offsetHeight;
        const totalH = `calc(100vh - (${footerH}px))`
        
        setminH(totalH)
        setisReady(true)
    })

    return (
        <html lang="ko">
            <body className={pretendard.className}>
                {isReady &&
                    <Wrapper minH={minH}>
                        <Sidebar/>
                        <main>
                            <Header/>
                            <div className='inner'>
                                <Breadcrumb/>
                                <Title/>
                                {children}
                            </div>
                        </main>
                    </Wrapper>
                }
                <Footer/>
            </body>
        </html>
    );
}
