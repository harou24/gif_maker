import React, { useContext } from 'react'
import { Box, Heading, Card, Grid, ResponsiveContext, Text } from 'grommet'

const cards = Array(20).fill(null).map((_, i) => {
    return <Text key={i}>{`Card ${i}`}</Text>
})

const Home = () => {
    const size = useContext(ResponsiveContext)

    return (
        <Box pad="large">
            <Heading level='1' alignSelf="center">Let's Go!</Heading>
            <Grid gap="small" columns={size !== 'small' ? 'small' : '100%'}>
                {cards.map((card, index) => (
                    <Card pad="large" key={index}>
                        {card}
                    </Card>
                ))}
            </Grid>
        </Box>
    )
}

export default Home
