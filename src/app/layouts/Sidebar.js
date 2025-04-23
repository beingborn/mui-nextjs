import styled from '@emotion/styled'
import {root} from '../global-variables'
import {Logo} from '../assets/logo/index'
import { Typography } from '@mui/material'
import Link from 'next/link'
import {useState, useEffect} from 'react'

// Lnb 임시 데이터
import LnbContent from '../assets/data/LnbContent'

const LnbAside = styled.aside`
    flex-basis: 260px;
    background-color: #dbdfeb;
`
const LnbHeader = styled.div`
    padding: 24px;
    border-bottom: 1px solid #000;
    text-align: center;
`

const LogoWrap = styled.div`
    ${root.flexSet('center', 'start')}
    gap: 8px;

    > p {
        color: #000;
        font-weight: 700;
        font-size: 20px;
    }
`

const LnbBody = styled.div``
const LnbDepth1List = styled.ul``
const LnbDepth1 = styled.li`
    &:not(:first-child) > button {
        border-top: 1px solid #000;
    }

    &:last-child > button {
        border-bottom: 1px solid #000;
    }

    > button {
        width: 100%;
        line-height: 40px;
        padding: 0 16px;
        text-align: left;
        
    }
`
const LnbDepth2List = styled.ul`
    display: none;
    border: 1px solid red;

    &.is-active {
        display: block;
    }
`
const LnbDepth2 = styled.li``


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
                    <Logo width="80" height="auto" fill="yellow" stroke="#333"></Logo>
                    <Typography variant='body2'>리액트 관리자</Typography>
                </LogoWrap>
            </LnbHeader>
            <LnbBody>
                <nav>
                    <LnbDepth1List>
                        {
                            LnbContent.map((lnb1depth, index)=> {
                                return lnb1depth.list ? (
                                    <LnbDepth1 key={index}>
                                        <button onClick={() => toggleActive(index)}>
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
                                        <button>
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