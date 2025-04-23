import styled from '@emotion/styled'
import {root} from '../global-variables'
import {Logo} from '../assets/logo/index'
import { Typography } from '@mui/material'
import Link from 'next/link'

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




const lnbContent = [
    { 
        name: '콘텐츠',   
        href : '/pages/about',
        list : [
            {
                name: '콘텐츠관리',
                href: '/pages/content/'
            }
            ,
            {
                name: '설문관리',
                href: '/pages/content/'
            },
            {
                name: '과제관리',
                href: '/pages/content/'
                
            }
        ]
    },
    { 
        name: '강사 관리',
        href : '/pages/ui',
        list : [
            {
                name: '강사관리',
                href: '/pages/about/'
            }
            ,
            {
                name: '강사 Q&A',
                href: '/pages/about/'
            },
            {
                name: '강사 페이지 관리',
                href: '/pages/about/'
                
            }
        ]
    },
    { 
        name: 'Icons',
        href : '/pages/icons'
    },
    { name: 'Cetner', href : '/pages/icons'},
    { name: 'Cetner22', href : '/pages/icons'},
]


export default function Sidebar() {
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
                    <ul>
                        {
                            lnbContent.map((lnb1depth, index)=> {
                                return lnb1depth.list ? (
                                    <li key={index}>
                                        {lnb1depth.name}
                                        <ul>
                                            {
                                                lnb1depth.list.map((lnb2depth, index)=> {
                                                    return (
                                                        <li key={index}>
                                                            <Link>
                                                                {lnb2depth.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })   
                                            }
                                        </ul>
                                    </li>
                                ) : (
                                    <li key={index}>
                                        {lnb1depth.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </LnbBody>
        </LnbAside>
    )
}