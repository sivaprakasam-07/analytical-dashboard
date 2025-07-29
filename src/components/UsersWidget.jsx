import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersWidget = () => {
    const [userCount, setUserCount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/users');
                setUserCount(res.data.total); // total number of users from API
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="bg-white shadow-md rounded-2xl p-4">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                    <svg width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Total Users</p>
                    <h2 className="text-2xl font-semibold">
                        {loading ? 'Loading...' : userCount}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default UsersWidget;
