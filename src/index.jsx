import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AcademyApp';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navbar from './components/Nav';
import './css/general.css';

//Punto de entrada de la app
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<>
			<Navbar />
			<Signup />
			<Login />
		</>
	</React.StrictMode>
);
