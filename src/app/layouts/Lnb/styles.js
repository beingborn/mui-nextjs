/** 
 * 단일 책임 원칙
 * Styling 관리.
 */

import styled from '@emotion/styled'
import {root} from '../../global-variables'

export const LnbAside = styled.aside`
    flex-basis: 260px;
    background-color: #dbdfeb;
`

export const LnbHeader = styled.div`
    padding: 24px;
    border-bottom: 1px solid ${root.colors.textPri};
    text-align: center;
`
