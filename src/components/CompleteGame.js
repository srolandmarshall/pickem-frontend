import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Container } from "shards-react";
import Team from "./Team";
import GameDate from "./GameDate";

const CompleteGame = (props) => {
	const { homeTeam, awayTeam } = props;
	return (
		<Row>
			<Col xs="6" className="odds">
				{awayTeam.team.abbreviation}
				<br />
				{awayTeam.score}
			</Col>
			<Col xs="6" className="odds">
				{homeTeam.team.abbreviation}
				<br />
				{homeTeam.score}
			</Col>
			<Col xs="12" className="odds">
				Final
			</Col>
		</Row>
	);
};

export default CompleteGame;
