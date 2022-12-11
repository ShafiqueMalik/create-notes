import React from 'react'
import { Box, Typography, Container, Button,Stack } from "@mui/material";
import FullHeight from 'components/FullHeight/FullHeight';
const Home = () => {
    return (
        <FullHeight sx={{bgcolor:"#ffffff"}}>
             <Container maxWidth="lg">
                <Typography textAlign="center" variant="h1" color="initial">
                    Welcome to Note Cloud
                </Typography>
                <Typography textAlign="center" >
                    Very save place save memories.
                </Typography>
                
                <Stack  direction="row" gap={8} justifyContent="center" mt={4}>
                    <Button variant="contained" color="primary">
                      Login
                    </Button>
                    <Button variant="outlined" color="primary">
                      Signup
                    </Button>
                </Stack>
            </Container>
        </FullHeight>
        // <Box sx={{ bgcolor: "#b2f5a9",height:"calc(100vh - 64px)" }}>
        //     <Container maxWidth="lg">
        //         <Typography textAlign="center" variant="h1" color="initial">
        //             Welcome to Note Cloud
        //         </Typography>
        //         <Typography textAlign="center" >
        //             Very save place save memories.
        //         </Typography>
        //     </Container>
        // </Box>
    )
}

export default Home