import '../../css/auth.css';
import { useAuthReducer } from './reducer'
const Signup = () => {
	// Aqui el proceso de escritura
	const { changeFormValues, sendUserData } = useAuthReducer()
	const handleSubmitData = (e) => {
		e.preventDefault()
		sendUserData()
	}
	return (
		<>
			<div className='box-container-signup'>
				<div className='img-container-signup'>
					<img src='./assets/img/logo.png' alt='' />
				</div>

				{/* <div className='box-container-error'>
					<p>Intenta de nuevo</p>
				</div> */}

				<form className='container-form-signup' onSubmit={(e) => handleSubmitData(e)}>
					<div className='txt'>
						<p>Registrarme</p>
					</div>
					<div>
						<input type='text' placeholder='Usuario' name='username' onChange={(e) => changeFormValues(e.target.name, e.target.value)} />
					</div>
					<div>
						<input type='text' placeholder='Email' name='email' onChange={(e) => changeFormValues(e.target.name, e.target.value)} />
					</div>
					<div>
						<input type='password' placeholder='Contraseña' name='password' onChange={(e) => changeFormValues(e.target.name, e.target.value)} />
					</div>
					<div>
						<input type='password' placeholder='Repetir contraseña' />
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
