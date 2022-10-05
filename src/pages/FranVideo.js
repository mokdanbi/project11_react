import ReactPlayer from 'react-player/lazy';

const Video = () => {
    return (
        <>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={'https://youtu.be/0qCf8CoBOMc'}
                    width='825px'
                    height='464px'
                    playing={false}
                    muted={true}
                    controls={true}
                    light={false}
                />
            </div>
        </>
    )
}

export default Video;