import styled from '@emotion/styled';
import { root } from '../global-variables';
import { IcoHamburger } from '../assets/icons';
import Link from 'next/link';

const HeaderTag = styled.header`
    height: 80px;
    background-color: #eee;
    align-content: center;
    padding: 0 16px;
`;

const HeaderTit = styled.h2`
    font-size: 24px;
`;

const HeaderWrap = styled.div`
    ${root.flexSet('center`')}
    gap: 20px;
`;

const HeaderUtils = styled.div`
    ${root.flexSet('center', 'center')}
`;

export default function Header() {
    return (
        <HeaderTag>
            <HeaderWrap>
                <HeaderTit>ADMIN SYSTEM</HeaderTit>
                <HeaderUtils>
                    <Link href="#">
                        <IcoHamburger width="24" height="24"></IcoHamburger>
                    </Link>
                </HeaderUtils>
            </HeaderWrap>
        </HeaderTag>
    );
}
