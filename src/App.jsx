import Form from './Form.jsx';
import ColorList from './ColorList.jsx';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
	const [colors, setColors] = useState([new Values('#f15025').all(10)]);
	return (
		<main>
			<Form />
			<ColorList colors={colors[0]} />
			<ToastContainer position="top-center" />
		</main>
	);
};
export default App;
