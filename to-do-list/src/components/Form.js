import React, {useState, useContext} from "react";
const initialState = ''
const Form = () => {
	const [] = useState(initialState)
	return (
		<form>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder="Введите название заметки"
				/>
			</div>
		</form>
	)
}

export default Form;