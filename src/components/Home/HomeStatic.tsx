import React from "react";
import { Box, Stack, Typography, Button, Container } from "@mui/material";
import SearchWidget from "../Search/SearchWidget";
import SwiperSlider from "@/src/Slider/SwiperSlider";
export default function HomeStatic() {
  return (
    <>
      {/* //?container block */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70%",
            minHeight:{xs:'900px', md:'0px'},
            position: "relative",
            backgroundColor: "whitesmoke",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              // width: "100%",
              height: "70%",
              //   border: "1px solid blue",
              position: "relative",
              mt: "4rem",
              p: "1rem",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "whitesmoke",
            }}
          >
            {/* //*cta block */}
            <Box
              sx={{
                flex: 1,
              }}
              mt={{xs: 5, md: 10}}
            >
              <Stack
                sx={{
                  //border: "1px solid blue",
                  p: 2,
                }}
                direction={"column"}
                spacing={3}
              >
                <Typography variant="h3" sx={{fontWeight:'800'}}>
                  Find Your Dream Job With Us
                </Typography>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                  unde obcaecati exercitationem vel perferendis, soluta modi
                  maiores nostrum deserunt neque ab error velit quos. Iure
                  dolorum quis impedit. Corporis, atque?
                </Typography>
                <Stack direction={"row"} spacing={2}>
                  <Button
                    variant="outlined"
                    color="warning"
                    sx={{
                      textTransform:'none',
                      "&:hover": {
                        backgroundColor: "#ed6511",
                        color: "white",
                      },
                    }}
                  >
                    Find your Developer
                  </Button>
                  <Button
                    variant="outlined"
                    color="warning"
                    sx={{
                      backgroundColor: "#ed6511",
                      color: "white",
                      display:'flex',
                      textTransform:'none',
                      "&:hover": {
                        backgroundColor: "#ed6511",
                      }
                    }}
                  >
                    Join the pool
                  </Button>
                </Stack>
              </Stack>
            </Box>
            {/* //*image block */}
            <Box
              sx={{
                flex: 1,
              }}
            ></Box>
          </Container>
        </Box>

        <SearchWidget />
        {/* //* Trusted by block */}
        <Container
          maxWidth="md"
          sx={{
            // border: "1px solid blue",
            display: "grid",
            placeContent: "center",
            mt: "3rem",
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "light",
              textAlign: "center",
              mb: 1,
            }}
          >
            Trusted By
          </Typography>
          <Stack direction={"row"} spacing={3}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "light",
              }}
            >
              Google
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "light",
              }}
            >
              Facebook
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "light",
              }}
            >
              Paypal
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "light",
              }}
            >
              Apple
            </Typography>
          </Stack>
        </Container>

        {/* //*Popular serives block */}

        <Box
          sx={{
            width: "100%",
            height: "300px",
            backgroundColor: "whitesmoke",
            minHeight:{xs:'40rem', md:'0rem'},
          }}
        >
          {/* //*cta block */}
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              alignContent: "center",
              p: 2,
              gap:'10px',
              position:'relative'
              
            }}
          >
            <Stack direction={"column"} spacing={2} 
            sx={{ 
              flex: 1/2 ,
              height: "100%",
              // border:'1px solid blue',
              p:2
            
            }}>
              <Typography variant="h5">Popular services on UPHire</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam, voluptatem eaque explicabo nam dolorem dolor asperiores repellat, pariatur modi accusamus quis natus consequuntur harum et? Iure quam magnam nihil!
              </Typography>
              <Button
           
              sx={{
                backgroundColor: "#ed6511",
                width:'6rem',
                color: "white",
                "&:hover": {
                  backgroundColor: "#ed6511",
                  color: "white",
                },
              }}
            >
              Explore
            </Button>
            </Stack>
            {/* //*slider block */}
            <Box
              sx={{
                flex: 1,
                height:'100%',
                // border:'1px solid black',
                position:'relative',
              }}
            >
              <SwiperSlider items={['Slide 1', 'Slide 2', 'Slide 3']}/>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
