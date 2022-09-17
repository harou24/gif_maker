import { createFFmpeg } from '@ffmpeg/ffmpeg'
import { Box } from 'grommet'
import React, { useEffect, useState } from 'react'
import InputFile from '../components/file_input'

const Home = () => {

    const [ready, setReady] = useState(false)

    const ffmpeg = createFFmpeg({log: true})

    const load = async () => {
        await ffmpeg.load()
        setReady(true)
    }

    useEffect(() => {
        load()        
    }, [])

    return (
        <Box
            border = {{color: 'brand', size: 'small'}}
            align='center'
            justify='center'
            responsive={true}
            pad='small'
        >
                <InputFile/>

        </Box>
    )
}

export default Home
