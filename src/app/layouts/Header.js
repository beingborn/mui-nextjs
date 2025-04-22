"use client"

import Link from 'next/link';
import styled from '@emotion/styled'
import ButtonUsage from '../components/Buttons';
import {SettingSvg} from '@/src/app/assets/icons/index'
import { root } from '../global-variables';

const HeaderTag = styled.header`
`
const GnbList = styled.ul`
    display: flex;
    align-items: center;
`

const GnbItem = styled.li`
    ${root.flexSet('center', 'center')};
    color: red!important;
    background-color: ${root.colors.textSec};

    > a {
        font-size: 24px;
        border-radius: 4px;
    }
`

export default function Header() {
    let gnbLinks = [
        { name: 'About', href : '/pages/about'},
        { name: 'Ui', href : '/pages/ui'},
        { name: 'Icons', href : '/pages/icons'},
        { name: 'Tables', href : '/pages/tables'},
    ]

    return (
        <HeaderTag>
            <div>
                <nav>
                    <GnbList>
                        {  
                            gnbLinks.map((gnbLink, index) => {
                                return (
                                    <GnbItem key={index}>
                                        <Link href={gnbLink.href} >
                                            {gnbLink.name}
                                        </Link>
                                    </GnbItem>
                                )
                            })
                        }
                    </GnbList>
                </nav>
                <ButtonUsage bg="yellow" color="brown">공통 MUI 버튼</ButtonUsage>
                <SettingSvg width="32" />
            </div>
        </HeaderTag>
    );
}

