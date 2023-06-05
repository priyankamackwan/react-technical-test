import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Stack, Grid, Typography, Paper, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Footer = () => {
  return (
    <div style={{marginTop:'20rem', padding:'3rem 8rem 0rem 8rem', borderTop:'1px solid rgb(221, 214, 214)'}}>
        <Grid container spacing={2} sx={{display:'flex', alignItems:'flex-start'}}>
        {/* First Row */}
        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', padding:'5rem 2rem' }}>
          {/* Column 1 */}
          {/* Content for column 1 */}
          <Typography variant="h5" sx={{ textTransform: "uppercase", fontWeight:'900' }}>
            <span style={{color:'#2e2e2e'}}>Up</span><span style={{color:'#fe5507'}}>hire</span>
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection:'column', rowGap:'0.5rem' }}>
          {/* Column 2 */}
          {/* Content for column 2 */}
          <Typography variant="subtitle1" sx={{ color:'#282828', fontWeight:'600' }}>
            First Column
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            First Page
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            Second Page
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            Third Page
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            Fourth Page
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            Fifth Page
          </Typography>
          
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection:'column', rowGap:'0.5rem' }}>
          {/* Column 3 */}
          {/* Content for column 3 */}
          <Typography variant="subtitle1" sx={{ color:'#282828', fontWeight:'600' }}>
            Second Column
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            First Page
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            Second Page
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            Third Page
          </Typography>

        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection:'column', rowGap:'0.5rem' }}>
          {/* Column 4 */}
          {/* Content for column 4 */}
          <Typography variant="subtitle1" sx={{ color:'#282828', fontWeight:'600' }}>
            Third Column
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            First Page
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            Second Page
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            Third Page
          </Typography>

          <Typography variant="subtitle2" sx={{ color:'#7b7b7b' }}>
            Fourth Page
          </Typography>

        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', flexDirection:'column', rowGap:'0.5rem' }}>
          {/* Column 5 */}
          {/* Content for column 5 */}
          <Typography variant="subtitle1" sx={{ color:'#282828', fontWeight:'600' }}>
            Subscribe
          </Typography>
          
          <Stack spacing={2}>
            <Item sx={{boxShadow:'none', display:'flex', justifyContent:'flex-start', padding:'0px'}}>
                <TextField id="outlined-basic" label="Enter email" size='small' variant="outlined" sx={{flex:'1'}} />
            </Item>
            <Item sx={{boxShadow:'none', display:'flex', justifyContent:'flex-start', padding:'0px'}}>
            <Button
                sx={{
                    backgroundColor: "#ed6511",
                    width:'6rem',
                    flex:'1',
                    color: "white",
                    textTransform:'none',
                    paddingTop:'0.4rem',
                    "&:hover": {
                    backgroundColor: "#ed6511",
                    color: "white",
                    },
                }}
                >
                Send
                </Button>
            </Item>
          </Stack>
        </Grid>

        <Grid container sx={{display:'flex', alignItems:'flex-start', margin:'1.5rem 0rem', padding:'2rem 0rem', borderTop:'1px solid rgb(221, 214, 214)'}}>

            <Grid item xs={6}>
                {/* Column 1 */}
                {/* Content for column 1 */}
                <Typography variant="subtitle2" sx={{ color:'#282828'}}>
                    © UPHIRE 2023
                </Typography>
                
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems:'center', columnGap:'1rem' }}>
                {/* Column 2 */}
                {/* Content for column 2 */}
            <Typography variant="subtitle1" sx={{ color:'#282828', fontWeight:'500' }}>
                Follow Us
            </Typography>
                <div>
                    <FacebookIcon sx={{height:'30px', width:'30px'}} />
                    <LinkedInIcon sx={{height:'30px', width:'30px'}} />
                    <TwitterIcon sx={{height:'30px', width:'30px'}} />
                    <PinterestIcon sx={{height:'30px', width:'30px'}} />
                </div>
            </Grid>
        </Grid>

      </Grid>
    </div>
  )
}

export default Footer