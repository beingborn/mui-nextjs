'use client';

import BasicTable from '@/src/app/components/Table/RowTable';
import { Thead, Tbody, Tcell, Thcell, Trow } from '@/src/app/components/Table/styles';

function createData(name, price, category, stock) {
    return { name, price, category, stock };
}

const rows = [
    createData('수박', '50000', '과일', 2),
    createData('참외', '30000', '과일', 2),
    createData('빗자루', '20000', '물건', 2),
    createData('감튀', '15000', '음식', 2),
];

export default function page() {
    return (
        <>
            <BasicTable type="col" caption="테이블 제목" otherClasses={['text-sm', 'clickable']}>
                <Thead>
                    <Trow>
                        <Thcell>제목1</Thcell>
                        <Thcell>제목2</Thcell>
                        <Thcell>제목3</Thcell>
                        <Thcell>제목4</Thcell>
                    </Trow>
                </Thead>
                <Tbody>
                    {rows.map((row) => {
                        return (
                            <Trow key={row.name}>
                                <Tcell>{row.name}</Tcell>
                                <Tcell>{row.price}</Tcell>
                                <Tcell>{row.category}</Tcell>
                                <Tcell>{row.stock}</Tcell>
                            </Trow>
                        );
                    })}
                </Tbody>
            </BasicTable>

            <BasicTable type="row" caption="테이블 제목">
                <colgroup>
                    <col style={{ width: '20%' }} />
                    <col />
                </colgroup>
                <Tbody>
                    <Trow>
                        <Thcell>제목1</Thcell>
                        <Tcell>내용1</Tcell>
                    </Trow>
                    <Trow>
                        <Thcell>제목2</Thcell>
                        <Tcell>내용2</Tcell>
                    </Trow>
                </Tbody>
            </BasicTable>
        </>
    );
}
