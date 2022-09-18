import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import { Box, FileInput, Video } from 'grommet'
import React, { useEffect, useState } from 'react'

const ffmpeg = createFFmpeg({log: true})

const Home = () => {

    const [ready, setReady] = useState(false)
    const [video, setVideo] = useState(null)
    const [gif, setGif] = useState()

    const load = async () => {
        await ffmpeg.load()
        setReady(true)
    }

    useEffect(() => {
        load()        
    }, [])

    const convertToGif = async () => {
        ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video))
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
            <Box
                align='center'
                pad='large'
                responsive={true}
            >
                {video && <Video
                    src={URL.createObjectURL(video)}>
                </Video>}
            </Box>
        </Box>
        
    )
}

export default Home
