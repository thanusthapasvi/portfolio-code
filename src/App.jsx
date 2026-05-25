import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header.jsx'

function App() {
	const [count, setCount] = useState(0);


	return (
		<div className='web-container'>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App
