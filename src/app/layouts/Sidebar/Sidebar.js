/**
 * (Import 순서)
 * 1. 서드 파티
 * 2. 하위 컴포넌트 ex) Styles Component
 * 3. 에셋
 */

import Link from 'next/link';
import { Typography } from '@mui/material';

import { SidebarContainer, SidebarHeader, SidebarBody, LogoWrap } from './styles';

import SidebarSection from './SidebarSection';
import { Logo } from '../../assets/logo/index';

export default function Sidebar({ sidebarData }) {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <LogoWrap>
                    <Link href="/">
                        <Logo width="80" height="auto" fill="yellow" stroke="#333"></Logo>
                        <Typography variant="body2">리액트 관리자</Typography>
                    </Link>
                </LogoWrap>
            </SidebarHeader>
            <SidebarBody>
                <SidebarSection sidebarData={sidebarData} />
            </SidebarBody>
        </SidebarContainer>
    );
}
