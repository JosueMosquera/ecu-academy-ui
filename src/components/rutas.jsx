import '../css/navBar.css';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../LoginScreen';
import SignupScreen from '../SignupScreen';
import ClasesScreen from 'src/ClasesScreen';

const Navbar = () => {
	return (
		<BrowserRouter>
			<nav className='navbar navbar-expand-lg'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='#'>
						<img width={70} src='./assets/img/logo.png' alt='' />
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<Link className='nav-link active' aria-current='page' to='#'>
									Inicio
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/cursos'>
									Cursos
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/singup'>
									Registrarme
								</Link>
							</li>

							<li className='cerrar-sesion-btn nav-item'>
								<Link className='nav-link' to='/login'>
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
				<Route exact path='/cursos' element={<ClasesScreen />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Navbar;
