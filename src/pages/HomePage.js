import React from "react";
import { Row, Col, Container } from "shards-react";

import ListGames from "../components/ListGames";
const HomePage = () => {
	return (
		<Container>
			<ListGames />
		</Container>
	);
};

export default HomePage;
