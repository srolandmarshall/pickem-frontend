import React from "react";
import useAxios from "axios-hooks";

import { Card, CardHeader, CardTitle, CardImg, CardBody } from "shards-react";

const Team = (props) => {
	const { abr } = props;
	const [{ data, loading, error }] = useAxios(`/api/teams/by_abr/${abr}`);
	const team = data;
	if (loading) return <span>Loading...</span>;
	if (error) return <span>Something went wrong!</span>;

	return (
		<Card id={team._id}>
			<CardHeader className="teamcard">
				{team.city} {team.name}
			</CardHeader>
			<CardBody>
				<CardImg
					className="teamlogo"
					src={process.env.PUBLIC_URL + `/logos/${team.abr}.png`}
				/>
			</CardBody>
		</Card>
	);
};

export default Team;
