import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "shards-react";

import useAxios from "axios-hooks";
import Game from "./Game";

const ListGames = () => {
	// const [{ data, loading, error }] = useAxios("/api/games/upcoming");
	const [games, setGames] = useState([]);
	const [{ data, loading, error }] = useAxios(
		"https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
	);
	useEffect(() => {
		if (data) {
			setGames(data.events);
		}
	}, [data]);

	if (loading) return <h2>Loading...</h2>;
	if (error) return <h3>Something went wrong!</h3>;
	return (
		<Row>
			{games && games.length > 0 ? (
				games.map((g) => {
					return (
						<Col md={6} key={g.id}>
							<Game className="gameCard" data={g} />
						</Col>
					);
				})
			) : (
				<li>No game(s) left</li>
			)}
		</Row>
	);
};

export default ListGames;
