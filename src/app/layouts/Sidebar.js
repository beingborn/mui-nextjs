import {Logo} from '../assets/logo/index'
import styled from '@emotion/styled'
import {root} from '../global-variables'
import { Typography } from '@mui/material'

const LnbAside = styled.aside`
    flex-basis: 260px;
    background-color: #dbdfeb;
`
const LnbHeader = styled.div`
    padding: 24px;
    border-bottom: 1px solid #000;
    text-align: center;
`

const LnbBody = styled.div``

const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > p {
        color: #000;
        font-weight: 700;
        font-size: 20px;
    }
`

const lnbContent = [
    { 
        name: 'About',   
        href : '/pages/about',
        list : [
            {
                name: '뎁스2',
                href: '/pages/about/'
            }
            ,
            {
                name: '뎁스2임',
                href: '/pages/about/'
            },
            {
                name: '뎁스2 출력완료',
                href: '/pages/about/'
            }
        ]
    },
    { name: 'Ui', href : '/pages/ui'},
    { name: 'Icons', href : '/pages/icons'},
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
                                                        <li>
                                                            {lnb2depth.name}
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