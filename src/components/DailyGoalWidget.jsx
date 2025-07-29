const DailyGoalWidget = () => {
    const goal = 100;
    const completed = 65; // could also be state or API-based
    const percentage = (completed / goal) * 100;

    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border">
            <h4 className="text-gray-600 font-semibold mb-4">Daily User Target</h4>
            <div className="mb-2 text-sm text-gray-500">Users Acquired Today</div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                    className="bg-indigo-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="text-sm text-gray-600">
                {completed} / {goal} users ({percentage.toFixed(0)}%)
            </div>
        </div>
    );
};

export default DailyGoalWidget;
