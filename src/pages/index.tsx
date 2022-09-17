import { createFFmpeg } from '@ffmpeg/ffmpeg'
import { Box, FileInput } from 'grommet'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fileManager } from '../store/slices'

const Home = () => {

    const [ready, setReady] = useState(false)
    const videoFile = useSelector(fileManager);
    const [video, setVideo] = useState(videoFile);
    const ffmpeg = createFFmpeg({log: true})

    const load = async () => {
        await ffmpeg.load()
        setReady(true)
    }

    useEffect(() => {
        load()        
    }, [])

    const convertToGif = async () => {

    }

    return (
        <Box>
            <Box
                border = {{color: 'brand', size: 'small'}}
                align='center'
                justify='center'
                responsive={true}
                pad='small'>
                
                <FileInput 
                    name="file"
                    onChange={event => {
                        const file = event.target.files[0]
                        setVideo(file)
                    }}
                />
            </Box>
                {video && <video
                    controls
                    width="250"
                    src={URL.createObjectURL(video)}>
                </video>}
        </Box>
        
    )
}

export default Home
