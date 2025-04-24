import styled from '@emotion/styled'
import {root} from '../global-variables'
import {Logo} from '../assets/logo/index'
import { Typography } from '@mui/material'
import Link from 'next/link'
import {useState} from 'react'

// Lnb 임시 데이터
import LnbContent from '../assets/data/LnbContent'

const LnbAside = styled.aside`
    flex-basis: 260px;
    background-color: #dbdfeb;
`
const LnbHeader = styled.div`
    padding: 24px;
    border-bottom: 1px solid ${root.colors.textPri};
    text-align: center;
`

const LogoWrap = styled.div`
    gap: 8px;

    > a {
        ${root.flexSet('center', 'start')}

        p {
            color: #000;
            font-weight: 700;
            font-size: 20px;
        }
    }
`

const LnbBody = styled.div``
const LnbDepth1List = styled.ul``
const LnbDepth1 = styled.li`
    &:not(:first-of-type) > button {
        border-top: 1px solid #000;
    }

    &:last-child > button {
        border-bottom: 1px solid #000;
    }

    > button {
        width: 100%;
        line-height: 44px;
        padding: 0 16px;
        text-align: left;
        font-weight: 700;
        font-size: 18px;

        &:not(.is-active):hover {
            background-color: ${root.colors.pri};
            color: #fff;
        }

        &.is-active {
            background-color: ${root.colors.pri};
            color: #fff;
        }
    }
`
const LnbDepth2List = styled.ul`
    display: none;
    background-color: #2e80eb20;

    &.is-active {
        display: block;
    }
`
const LnbDepth2 = styled.li`

    > a {
        display: block;
        line-height: 32px;
        padding: 0 16px;

        &:hover {
            background-color: #2e80eb40;
        }
    }
`


export default function Sidebar() {
    const [isActive, setisActive] = useState(null);
    const toggleActive = (index) => {
        // prev 이전 값
        setisActive(prev => (prev === index) ? null : index)
    }


    return (
        <LnbAside>
            <LnbHeader>
                <LogoWrap>
                    <Link href="/">
                        <Logo width="80" height="auto" fill="yellow" stroke="#333"></Logo>
                        <Typography variant='body2'>리액트 관리자</Typography>
                    </Link>
                </LogoWrap>
            </LnbHeader>
            <LnbBody>
                <nav>
                    <LnbDepth1List>
                        {
                            LnbContent.map((lnb1depth, index)=> {
                                return lnb1depth.list ? (
                                    <LnbDepth1 key={index}>
                                        <button 
                                        onClick={
                                            () => toggleActive(index)
                                        }
                                        className={index === isActive ? 'is-active' : ''}
                                        >
                                                {lnb1depth.name}
                                        </button>
                                            <LnbDepth2List className={index === isActive ? 'is-active' : ''}>
                                            {
                                                lnb1depth.list.map((lnb2depth, index)=> {
                                                    return (
                                                        <LnbDepth2 key={index}>
                                                            <Link href={lnb2depth.href}>
                                                                {lnb2depth.name}
                                                            </Link>
                                                        </LnbDepth2>
                                                    )
                                                })   
                                            }
                                        </LnbDepth2List>
                                    </LnbDepth1>
                                ) : (
                                    <LnbDepth1 key={index}>
                                        <button className={index === isActive ? 'is-active' : ''}>
                                            {lnb1depth.name}
                                        </button>
                                    </LnbDepth1>
                                )
                            })
                        }
                    </LnbDepth1List>
                </nav>
            </LnbBody>
        </LnbAside>
    )
}