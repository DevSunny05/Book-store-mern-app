import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems='center'>
            <Button LinkComponent={Link} to="/books" sx={{marginTop:15}} variant="contained">
                <Typography variant='h2'>View all Products</Typography>
            </Button>
        </Box>
    </div>
  )
}

export default Home