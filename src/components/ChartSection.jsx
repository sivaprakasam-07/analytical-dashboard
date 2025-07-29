import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ChartSection = ({ users }) => {
    const chartData = users.slice(0, 10).map((user, index) => ({
        name: user.firstName,
        users: user.age + 10, // Dummy value for visual
    }));

    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border">
            <h4 className="text-gray-600 font-semibold mb-4">User Age Growth</h4>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartSection;
