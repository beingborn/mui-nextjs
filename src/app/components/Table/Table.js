import React from 'react';

export const TableHeader = ({ column }) => {
    return <th>{column.label}</th>;
};

export const Table = ({ columns, data }) => {
    return (
        <table>
            <caption>안녕</caption>
            <thead>
                <tr>
                    {columns.map((column) => {
                        return <TableHeader key={column.id} column={column} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td key={column.id}>{row[column.id]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
