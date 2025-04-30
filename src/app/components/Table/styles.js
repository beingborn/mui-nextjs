import { root } from '@/src/app/global-variables';
import styled from '@emotion/styled';

export const TableWrapper = styled.div`
    & + & {
        margin-top: 40px;
    }

    &.col.clickable tbody tr {
        cursor: pointer;

        &.is-active {
            background-color: ${root.colors.textSec};
        }
    }
`;
export const Table = styled.table`
    table-layout: fixed;
    border-collapse: collapse;
    width: 100%;

    th,
    td {
        height: 44px;
        vertical-align: middle;
    }
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Trow = styled.tr``;
export const Tcell = styled.td`
    text-align: center;
    border: 1px solid #eee;
`;
export const Thcell = styled.th`
    background-color: aliceblue;
    color: #000;
`;
