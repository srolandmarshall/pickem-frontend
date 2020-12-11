import React from "react";

const GameDate = ({ date }) => {
	const date_options = { weekday: "long", month: "short", day: "numeric" };
	const time_options = { hour: "numeric", minute: "2-digit" };
	const displayDate = new Date(date).toLocaleDateString("en-US", date_options);
	const displayTime = new Date(date).toLocaleTimeString("en-US", time_options);
	const display = displayDate + " - " + displayTime;

	return <span className="gamecard-subtitle">{display}</span>;
};

export default GameDate;
