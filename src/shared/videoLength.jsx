import React from 'react'
import moment from 'moment/moment';

const VideoLength = ({ time }) => {
    const VideoLengthInSeconds = time > 3599 ? moment().startOf("day").seconds(time).format("H:mm:ss") : moment().startOf("day").seconds(time).format("mm:ss");
    return (
        <div className='absolute bottom-2 right-2 bg-black/[0.7] py-1 px-2 text-white text-xs rounded-md'>
            {VideoLengthInSeconds}
        </div>
    )
}

export default VideoLength;