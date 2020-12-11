import React from "react";
import useAxios from "axios-hooks";
import Game from "./Game";

const ListGames = () => {
	const [{ data, loading, error }] = useAxios("/api/games");
	const games = data;

	if (loading) return <h2>Loading...</h2>;
	if (error) return <h3>Something went wrong!</h3>;
	return (
		<div>
			{games && games.length > 0 ? (
				games.map((g) => {
					return (
						<li key={g._id}>
							<Game data={g} />
						</li>
					);
				})
			) : (
				<li>No game(s) left</li>
			)}
		</div>
	);
};

export default ListGames;
