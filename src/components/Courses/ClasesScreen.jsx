import '../../css/auth.css';
import 'react-dom';
import VideoItem from './VideoItem';
import { useCoursesReducer } from './reducer';

const ClasesScreen = () => {
	// Aqui el proceso de escritura
	const { courses } = useCoursesReducer()

	return (
		<div className='videosScreen' style={{ margin: 10 }
		}>
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
							{courses.length > 0 && (
								courses.map((course) => (
									<VideoItem nombre={course.name} desc={course.description} img={course.course_image} key={course.id} />
								))
							)}

						</div>
					</div>
				</div>
				<div className='columna-video'>
					<div className='title-video'>
						<h5>Explorar</h5>
					</div>
					<div className='video-item-container-grid'>
						{courses.length > 0 && (
							courses.map((course) => (
								<VideoItem nombre={course.name} desc={course.description} img={course.course_image} id={course.id} key={course.id} />
							))
						)}

					</div>
				</div>
			</div>
		</div >
	);
};
export default ClasesScreen;
