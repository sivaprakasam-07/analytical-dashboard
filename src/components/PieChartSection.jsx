import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#6366F1', '#10B981', '#F59E0B']; // purple, green, yellow

const PieChartSection = ({ users }) => {
    const genderCount = users.reduce(
        (acc, user) => {
            acc[user.gender] = (acc[user.gender] || 0) + 1;
            return acc;
        },
        { male: 0, female: 0 }
    );

    const data = [
        { name: 'Male', value: genderCount.male },
        { name: 'Female', value: genderCount.female },
    ];

    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border">
            <h4 className="text-gray-600 font-semibold mb-4">User Gender Distribution</h4>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartSection;
