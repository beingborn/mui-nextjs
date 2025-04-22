"use client"

import Link from 'next/link';
import {css} from '@emotion/css'
import styled from '@emotion/styled'
import ButtonUsage from '../components/Buttons';
import {SettingSvg} from '@/src/app/assets/icons/index'
import { root } from '../global-variables';

export default function Header() {
    let gnbLinks = [
        { name: 'About', href : '/pages/about'},
        { name: 'Ui', href : '/pages/ui'},
        { name: 'Icons', href : '/pages/icons'},
        { name: 'Tables', href : '/pages/tables'},
    ]

    return (
        <header className={
            css`
                .gnb {
                    display: flex;
                    align-items: center;

                    &-item {
                        ${root.flexSet('center', 'center')};
                        color: red!important;
                        background-color: ${root.colors.textSec};
                    }
                }
            `
        }>
            <div>
            <SettingSvg width="32" stroke="red" fill="yellow"/>
            <nav>
                <ul className='gnb'>
                    {  
                        gnbLinks.map((gnbLink, index) => {
                            return (
                                <li key={index} className="gnb-item">
                                    <Link href={gnbLink.href}
                                    className={css`
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
            <ButtonUsage bg="yellow" color="brown">공통 MUI 버튼</ButtonUsage>
            </div>
        </header>
    );
}

