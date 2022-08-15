import '../../css/auth.css';
import { useAuthReducer } from './reducer';

const Login = () => {
	// Aqui el proceso de escritura
	const { login, changeFormValues } = useAuthReducer()
	const handleSubmitData = (e) => {
		e.preventDefault()
		login()
	}
	return (
		<>
			<div className='box-container-login'>
				<div className='img-container-login'>
					<img src='./assets/img/logo.png' alt='' />
				</div>

				{/* <div className='box-container-error'>
					<p>Usuario o contraseña incorrecta</p>
				</div> */}

				<form action='' className='container-form-login' onSubmit={(e) => handleSubmitData(e)}>
					<div className='txt'>
						<p>Entrar</p>
					</div>
					<div>
						<input type='text' placeholder='Email' name='email' onChange={(e) => changeFormValues(e.target.name, e.target.value)} />
					</div>
					<div>
						<input type='text' placeholder='Pass' name='password' onChange={(e) => changeFormValues(e.target.name, e.target.value)} />
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
