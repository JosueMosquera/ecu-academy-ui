import './css/auth.css';
import 'react-dom';
import VideoItem from './components/VideoItem';

const ClasesScreen = () => {
	// Aqui el proceso de escritura

	var videos = [
		{
			nombre: 'Js',
			desc: 'El mejor curso de js',
			img: 'https//www.google.com',
		},
		{
			nombre: 'C++',
			desc: 'El mejor curso de js',
			img: 'https//www.google.com',
		},
		{
			nombre: 'Ruby',
			desc: 'El mejor curso de js',
			img: 'https//www.google.com',
		},
		{
			nombre: 'Ruby',
			desc: 'El mejor curso de js',
			img: 'https//www.google.com',
		},
	];

	var continuarViendo = [
		{
			nombre: 'Js',
			desc: 'El mejor curso de js',
			img: 'https//www.google.com',
		},
	];

	return (
		<div className='videosScreen'>
			<div>
				<div className='columna-video'>
					<div>
						<h1>Hola, User</h1>
					</div>
				</div>
				<div className='data-user'>
					<table>
						<thead>
							<tr>
								<th>TIEMPO DE ESTUDIO</th>
								<th>CURSOS APROBADOS</th>
								<th>CURSOS SUCRITOS</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>2 cursos</td>
								<td>0 curso</td>
								<td>1 curso</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='columna-video'>
					<div className='title-video'>
						<h5>Continuar viendo</h5>
					</div>
					<div>
						<div className='video-item-container-grid'>
							{continuarViendo.map(({ nombre, desc, img }) => (
								<VideoItem nombre={nombre} desc={desc} img={img} />
							))}
						</div>
					</div>
				</div>
				<div className='columna-video'>
					<div className='title-video'>
						<h5>Explorar</h5>
					</div>
					<div className='video-item-container-grid'>
						{videos.map(({ nombre, desc, img }) => (
							<VideoItem nombre={nombre} desc={desc} img={img} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ClasesScreen;
