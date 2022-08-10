import '../css/navBar.css';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../LoginScreen';
import SignupScreen from '../SignupScreen';

const Navbar = () => {
	return (
		<BrowserRouter>
			<nav class='navbar navbar-expand-lg'>
				<div class='container-fluid'>
					<a class='navbar-brand' href='#'>
						<img width={70} src='./assets/img/logo.png' alt='' />
					</a>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarNav'>
						<ul class='navbar-nav ms-auto'>
							<li class='nav-item'>
								<Link class='nav-link active' aria-current='page' to='#'>
									Inicio
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' to='#'>
									Mis cursos
								</Link>
							</li>
							<li class='nav-item'>
								<Link class='nav-link' to='/singup'>
									Registrarme
								</Link>
							</li>

							<li class='cerrar-sesion-btn nav-item'>
								<Link class='nav-link' to='/login'>
									Login
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Routes>
				<Route exact path='/login' element={<LoginScreen />}></Route>
				<Route exact path='/singup' element={<SignupScreen />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Navbar;
