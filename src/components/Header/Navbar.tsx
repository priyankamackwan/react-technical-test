import { AppBar, Toolbar, Typography, Box, Stack, Button } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <AppBar sx={{ overflow: "hidden", boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
        <Toolbar
          sx={{ backgroundColor: "white", color: "black", height: "100%" }}
        >
          {/* //*menu items block  */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* //?left side menu items block */}
            <Box
              sx={{
                flex: 1,
                height: "100%",
                display: "flex",
                columnGap:'5rem',
                alignContent: "center",
                alignItems: "center",
                paddingTop:'0.5rem'
              }}
              pl={12}
            >
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <Typography variant="h5" sx={{ textTransform: "uppercase", fontWeight:'900' }}>
                  <span style={{color:'#2e2e2e'}}>Up</span><span style={{color:'#fe5507'}}>hire</span>
                </Typography>
              </Link>
              <Stack direction={"row"} spacing={2} sx={{display:'flex', alignItems:'flex-end'}}>
                <Typography variant="subtitle1" sx={{ cursor: "pointer" }}>
                  About UPHIRE
                </Typography>
                <Typography
                  variant="subtitle1"
                  component={"div"}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "start",
                  }}
                >
                  How it works{" "}
                  
                </Typography>
                <Typography variant="subtitle1" sx={{ cursor: "pointer" }}>
                  Job
                </Typography>
                <Link href={"/project"} style={{ textDecoration: "none" }}>
                  <Typography variant="subtitle1" sx={{ cursor: "pointer", color:'black' }}>
                    Projects
                  </Typography>
                </Link>
              </Stack>
            </Box>
            {/* //?right side menu items block */}
            <Box
              mr={5}
              sx={{
                flex: 1 / 3,
                height: "100%",
                display: "flex",
                paddingRight: ".5rem",
                position: "relative",
              }}
            >
              <Stack
                direction={"row"}
                spacing={2}

                sx={{ marginLeft: "auto", position: "relative", display:'flex', alignItems:'center' }}
              >
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <Typography variant="h6" sx={{ color:'#2e2e2e', cursor: "pointer", fontSize:'15px' }}>
                    Login
                  </Typography>
                </Link>
                <Link href={"/signup"} style={{ textDecoration: "none" }}>
                  <Button variant="outlined" sx={{
                    width:'6rem',
                    color:'#ed6511',
                    borderColor:'#ed6511',
                    paddingTop:'0.4rem',
                    textTransform:'none',
                    "&:hover": {
                      color: "#ed6511",
                      borderColor:'#ed6511',
                    },
                  }}>
                    Sign up
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
