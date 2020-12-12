import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Container } from "shards-react";
import Team from "./Team";
import GameDate from "./GameDate";

const LiveGame = (props) => {
	const { id, date, name, shortName, competitions } = props.data;
	const { competitors, status, broadcasts, headlines } = competitions[0];

	const homeTeam = competitors.find((c) => {
		return c.homeAway === "home";
	});
	const awayTeam = competitors.find((c) => {
		return c.homeAway === "away";
	});

	return (
		<Row>
			<Col xs="6" className="odds">
				{awayTeam.score}
			</Col>
			<Col xs="6" className="odds">
				{homeTeam.score}
			</Col>
			<Col xs="12" className="odds">
				{status.type.detail}
			</Col>
		</Row>
	);
};

export default LiveGame;
