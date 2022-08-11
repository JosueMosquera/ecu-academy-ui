import '../../css/auth.css';
import { useAuthReducer } from './reducer'

const Signup = () => {
	// Aqui el proceso de escritura
	const { changeFormValues } = useAuthReducer()
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
						<input type='text' placeholder='Usuario' name='userName' onChange={(e) => changeFormValues(e.target.name, e.target.value)} />
					</div>
					<div>
						<input type='text' placeholder='Email' name='email' onChange={(e) => changeFormValues(e.target.name, e.target.value)} />
					</div>
					<div>
						<input type='text' placeholder='Contraseña' name='password' onChange={(e) => changeFormValues(e.target.name, e.target.value)} />
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
