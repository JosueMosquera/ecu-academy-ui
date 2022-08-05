import '../../css/auth.css';

const Signup = () => {
	// Aqui el proceso de escritura

	return (
		<>
			<div className='box-container-signup'>
				<div className='img-container-signup'>
					<img src='./assets/img/logo.png' alt='' />
				</div>

				<div className='box-container-error'>
					<p>Intenta de nuevo</p>
				</div>

				<form action='' className='container-form-signup'>
					<div className='txt'>
						<p>Registrarme</p>
					</div>
					<div>
						<input type='text' placeholder='Usuario' />
					</div>
					<div>
						<input type='text' placeholder='Email' />
					</div>
					<div>
						<input type='text' placeholder='Contraseña' />
					</div>
					<div>
						<input type='text' placeholder='Repetir contraseña' />
					</div>
					<div className='txt'>
						<a href='#'>Ya tengo cuenta</a>
					</div>
					<div className='btn-signup'>
						<button type='submit'>REGISTRARME</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default Signup;
