import '../../css/auth.css';
import 'react-dom';
import VideoItem from '../VideoItem';
import { useCoursesReducer } from './reducer';

const ClasesScreen = () => {
	// Aqui el proceso de escritura
	const { courses } = useCoursesReducer()

	return (
		<div className='signupScreen'>
			<div className='explorar-video'>
				<h5>Explorar</h5>
			</div>
			<div className='video-item-container-grid'>
				{courses.length > 0 ? (

					courses.map(course => (
						<VideoItem nombre={course.name} desc={course.description} img={course.course_image} key={course.id} id={course.id} />
					))

				)
					: (
						<h2>No tienes cursos disponibles.</h2>
					)
				}

			</div>
		</div>
	);
};
export default ClasesScreen;
