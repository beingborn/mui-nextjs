'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Table } from '@/src/app/components/Table/Table';

const columns = [
    { id: 'name', label: 'Name', sortable: true },
    { id: 'username', label: 'Username', sortable: true },
    { id: 'email', label: 'email', sortable: false },
];

// const data = [
//     { name: 'John', age: 30, country: 'USA' },
//     { name: 'Alice', age: 25, country: 'Canada' },
//     { name: 'Bob', age: 35, country: 'UK' },
// ];

export default function Page() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function FetchUser() {
            try {
                setUser(null);
                setError(null);
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUser(response.data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        FetchUser();
    }, []);

    if (loading) return <div>Loading...</div>;

    return <Table columns={columns} data={user} />;
}
