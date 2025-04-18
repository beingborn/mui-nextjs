"use client"

import Link from 'next/link';
import styled from 'styled-components';

const StyledSpan = styled.span` // Styled 컴포넌트 : a태그를 스타일링한 컴포넌트
    font-size: 20px;           // 원하는 CSS 속성들을 작성. ,가 아닌 ;로 여러 속성 지정 가능
    color: red;                // CSS 속성명은 kebab-case 로 작성
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
            <nav>
                <ul className='gnb'>
                    {
                        gnbLinks.map((gnbLink, index) => {
                            return (
                                <li key={index} className="gnb-item">
                                    <Link href={gnbLink.href}>
                                        <StyledSpan>
                                            {gnbLink.name}
                                        </StyledSpan>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}