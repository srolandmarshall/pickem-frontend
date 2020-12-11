import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardImg,
	Row,
	Col,
	Container,
} from "shards-react";
import Team from "./Team";
import GameDate from "./GameDate";

const Game = (props) => {
	const { _id, date, away, home, name, shortName } = props.data;

	return (
		<Container>
			<Card sm={8} className="gamecard" id={_id}>
				<CardHeader className="gamecard-title">
					{name}
					<br />
					<GameDate date={date} />
				</CardHeader>
				<CardBody>
					<Row>
						<Col xs="6">
							<Team abr={away} />
						</Col>

						<Col xs="6">
							<Team abr={home} />
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Container>
	);
};

export default Game;
