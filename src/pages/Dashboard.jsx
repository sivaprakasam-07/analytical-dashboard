import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import ChartSection from '../components/ChartSection';
import ActivityTable from '../components/ActivityTable';

const Dashboard = () => {
    const [userData, setUserData] = useState([]);
    const [stats, setStats] = useState({
        users: 0,
        revenue: 0,
        orders: 0,
        bounceRate: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRes = await axios.get('https://dummyjson.com/users');
                const users = userRes.data.users;

                setUserData(users);

                // Generate random stats for demo
                setStats({
                    users: users.length,
                    revenue: (users.length * 120).toFixed(2),
                    orders: users.length * 2,
                    bounceRate: Math.floor(Math.random() * 20) + 10,
                });
            } catch (error) {
                console.error('Error fetching API data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="space-y-6">
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard title="Users" value={stats.users} />
                <StatsCard title="Revenue" value={`$${stats.revenue}`} />
                <StatsCard title="Orders" value={stats.orders} />
                <StatsCard title="Bounce Rate" value={`${stats.bounceRate}%`} />
            </div>
            <ChartSection users={userData} />
            <ActivityTable users={userData} />
        </div>
    );
};

export default Dashboard;
