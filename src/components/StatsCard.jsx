const StatsCard = ({ title, value }) => {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border">
            <h4 className="text-gray-500 text-sm">{title}</h4>
            <p className="text-xl font-bold text-gray-800 mt-2">{value}</p>
        </div>
    );
};

export default StatsCard;
