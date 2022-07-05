import React, { Fragment } from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";

const Home = () => {
	const notes = [
		{title: 1},
		{title: 2},
		{title: 3}
	]
	return (
		<Fragment>
			<Form />

			<hr/>

			<Notes notes={notes} />
		</Fragment>
	)
}

export default Home;