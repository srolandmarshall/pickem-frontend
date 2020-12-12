import React from "react";
import { Card, CardHeader, CardBody, Row, Col, Container } from "shards-react";
import LiveGame from "./LiveGame";
import CompleteGame from "./CompleteGame";
import UpcomingGame from "./UpcomingGame";
import Team from "./Team";
import GameDate from "./GameDate";

const Game = (props) => {
	const { id, date, name, shortName, competitions } = props.data;
	const { competitors, status, broadcasts, headlines, odds } = competitions[0];

	const homeTeam = competitors.find((c) => {
		return c.homeAway === "home";
	});
	const awayTeam = competitors.find((c) => {
		return c.homeAway === "away";
	});

	let bottom = null;
	switch (status.type.name) {
		case "STATUS_FINAL": {
			bottom = <CompleteGame homeTeam={homeTeam} awayTeam={awayTeam} />;
			break;
		}
		case "STATUS_SCHEDULED": {
			bottom = <UpcomingGame odds={odds} />;
			break;
		}
		case "STATUS_ACTIVE": {
			bottom = <LiveGame />;
			break;
		}
		default: {
			bottom = <UpcomingGame key={id} data={props.data} />;
		}
	}

	return (
		<Card sm={4} className="gamecard" id={id}>
			<CardHeader className="gamecard-title">
				{name}
				<br />
				<GameDate date={date} />
			</CardHeader>
			<CardBody>
				<Row>
					<Col xs="6">
						<Team abr={awayTeam.team.abbreviation} />
					</Col>
					<Col xs="6">
						<Team abr={homeTeam.team.abbreviation} />
					</Col>
				</Row>
				{bottom}
			</CardBody>
		</Card>
	);
};

export default Game;
