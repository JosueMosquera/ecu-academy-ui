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

	return (
		<div className='signupScreen'>
			<div className='explorar-video'>
				<h5>Explorar</h5>
			</div>
			<div className='video-item-container-grid'>
				{videos.map(({ nombre, desc, img }) => (
					<VideoItem nombre={nombre} desc={desc} img={img} />
				))}
			</div>
		</div>
	);
};
export default ClasesScreen;
