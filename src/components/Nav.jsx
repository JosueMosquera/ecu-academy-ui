import '../css/navBar.css';

function  Navegacion()  {
	return (
		<>
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
								<a class='nav-link active' aria-current='page' href='#'>
									Inicio
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Mis cursos
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Ayuda
								</a>
							</li>

							<li class='cerrar-sesion-btn nav-item'>
								<a class='nav-link' href='#'>
									Cerrar sesion
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navegacion;
