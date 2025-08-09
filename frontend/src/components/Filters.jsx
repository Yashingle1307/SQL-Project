// eslint-disable-next-line react/prop-types
const Filters = ({ filter, setFilter }) => {
	return (
		<div className="flex gap-4 border-b pb-4">
			{["All", "Not Completed", "Completed"].map((filterType) => (
				<button
					key={filterType}
					onClick={() => setFilter(filterType)}
					className={`px-4 py-2 rounded-lg capitalize ${
						filter === filterType
							? "bg-blue-100 text-blue-600"
							: "text-gray-600 hover:bg-gray-100"
					}`}
				>
					{filterType}
				</button>
			))}
		</div>
	)
}

export default Filters
