import '../css/auth.css';

const VideoItem = ({ nombre, desc, img }) => {
	return (
		<div className='video-item-container'>
			<div className='video-item'>
				<div>
					<img src='../' alt='' />
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
