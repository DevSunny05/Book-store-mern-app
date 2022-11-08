import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const About = () => {
  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems='center'>
            <Typography variant='h2'>This is CRUD operation</Typography>
            <Typography variant='h3'>By MERN Stack</Typography>
        </Box>
    </div>
  )
}

export default About