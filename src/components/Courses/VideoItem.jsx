import '../../css/auth.css';

const VideoItem = ({ nombre, desc, img, id }) => {
	return (
		<div className='video-item-container' style={{ margin: 15 }}>
			<div className='video-item'>

				<div>
					<a href={id}><img src={img} alt='course-img' style={{ width: '100%', height: '100%' }} /></a>

				</div>
			</div>
			<div className='video-h4'>
				<h4> {nombre} </h4>
			</div>
			<div className='video-i'>
				<i>{desc}</i>
			</div>
		</div>
	);
};
export default VideoItem;
