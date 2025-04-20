"use client"

import Link from 'next/link';
import {css} from '@emotion/css'
import styled from '@emotion/styled'
import ButtonUsage from '../components/Buttons';
import {SettingSvg} from '@/src/app/assets/icons/index'


const StyleSpan = styled.span`
    color: red;
    backgroundColor: blue;
`


export default function Header() {
    let gnbLinks = [
        { name: 'About', href : 'pages/about'},
        { name: 'Ui', href : 'pages/ui'},
        { name: 'Icons', href : 'pages/icons'},
        { name: 'Tables', href : 'pages/tables'},
    ]

    return (
        <header>
            <SettingSvg width="32" stroke="red" fill="yellow"/>
            <nav>
                <ul className='gnb'>
                    {  
                        gnbLinks.map((gnbLink, index) => {
                            return (
                                <li key={index} className="gnb-item">
                                    <Link href={gnbLink.href}
                                    className={css`
                                        background-color: hotpink;
                                        font-size: 24px;
                                        border-radius: 4px;
                                    `}
                                    >
                                            {gnbLink.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <ButtonUsage bg="yellow" color="brown"></ButtonUsage>
            <StyleSpan>
                안녕하세요.
            </StyleSpan>
        </header>
    );
}

