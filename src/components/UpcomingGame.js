import React, { useState, useEffect } from "react";
import { Row, Col } from "shards-react";

const UpcomingGame = (props) => {
	const [overUnder, setOverUnder] = useState(null);
	const [spread, setSpread] = useState(null);
	const { odds } = props;

	useEffect(() => {
		if (odds) {
			setOverUnder(
				odds.reduce((total, next) => total + next.overUnder, 0) / odds.length
			);
			setSpread(odds[0].details);
		}
	}, [odds]);

	return (
		<Row>
			{overUnder ? (
				<Col className="odds">
					O/U: {overUnder}
					<br />
					{spread}
				</Col>
			) : (
				<p>"No Odds"</p>
			)}
		</Row>
	);
};

export default UpcomingGame;
