/** 
 * 단일 책임 원칙
 * Styling 관리.
 */

import styled from '@emotion/styled'
import {root} from '../../global-variables'

export const SidebarContainer = styled.aside`
    flex-basis: 260px;
    background-color: #dbdfeb;
`

export const SidebarHeader = styled.div`
    padding: 24px;
    border-bottom: 1px solid ${root.colors.textPri};
    text-align: center;
`

export const SidebarBody = styled.div``
export const SidebarNav = styled.div``
export const SidebarDepth1List = styled.ul``
export const SidebarDepth1 = styled.li`
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

export const SidebarDepth2List = styled.ul`
    display: none;
    background-color: #2e80eb20;

    &.is-active {
        display: block;
    }
`

export const SidebarDepth2 = styled.li`
    > a {
        display: block;
        line-height: 32px;
        padding: 0 16px;

        &.is-active {
            background-color: #2e80eb40;
        }

        &:hover {
            background-color: #2e80eb40;
        }
    }
`

export const LogoWrap = styled.div`
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
