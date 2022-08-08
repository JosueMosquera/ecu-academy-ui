import '../../css/auth.css';

const Login = () => {
	// Aqui el proceso de escritura

	return (
		<>
			<div className='box-container-login'>
				<div className='img-container-login'>
					<img src='./assets/img/logo.png' alt='' />
				</div>

				<div className='box-container-error'>
					<p>usuario o contraseña incorrecta</p>
				</div>

				<form action='' className='container-form-login'>
					<div className='txt'>
						<p>Entrar</p>
					</div>
					<div>
						<input type='text' placeholder='Email' />
					</div>
					<div>
						<input type='text' placeholder='Pass' />
					</div>
					<div className='txt'>
						<a href='#'>Olvide la contraseñaa</a>
					</div>
					<div className='btn-login'>
						<button type='submit'>ENTRAR</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default Login;
