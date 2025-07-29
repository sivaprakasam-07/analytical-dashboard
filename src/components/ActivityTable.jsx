const ActivityTable = ({ users }) => {
    const recent = users.slice(0, 5);

    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border">
            <h4 className="text-gray-600 font-semibold mb-4">Recent Activities</h4>
            <table className="w-full text-left text-sm">
                <thead className="text-gray-500 border-b">
                    <tr>
                        <th className="py-2">User</th>
                        <th className="py-2">Activity</th>
                        <th className="py-2">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {recent.map((user, index) => (
                        <tr key={user.id} className="border-b last:border-0">
                            <td className="py-2">{user.firstName} {user.lastName}</td>
                            <td className="py-2">Logged in</td>
                            <td className="py-2 text-gray-400">{index * 5 + 2} mins ago</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ActivityTable;
