import React from "react";
import {
  Container,
  Paper,
  Stack,
  TextField,
  Divider,
  FormControl,
  InputLabel,
  Select,
  Button,
  InputAdornment,
  Autocomplete,
  Checkbox,
  ListItemText,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
export default function SearchWidget() {
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
  ];
  return (
    <div style={{position:'relative'}}>
      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
            position: "relative",
            gap: "10px",
            p: 2,
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
          }}
        >
          <FormControl sx={{ height: "100%", flex: 1}}>
            <Autocomplete
              multiple
              id="tags-standard"
              sx={{
                '& .MuiInputBase-root::before': {
                  content: "''", 
                  border:'none'
                },
                '&:hover .MuiInputBase-root::before': {
                  content: "''", 
                  border:'none'
                },
                
              }}
              options={[
                { title: "option 1" },
                { title: "option 2" },
                { title: "option 3" },
              ]}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Favorites"
                />
              )}
            />
          </FormControl>
          {/* <Divider orientation="vertical" sx={{ flex: 1 / 4 }} flexItem /> */}
          <Stack
            direction={"row"}
            spacing={1}
            sx={{
              flex: 1,
              // border: "1px solid red",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems:'center'
            }}
          >
            <FormControl sx={{ flex: 1 }}>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              {/* <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
                sx={{ height: "100%", flex: 1 }}
                MenuProps={{ disableScrollLock: true }}
                variant="standard"
                startAdornment={<PlaceIcon />}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select> */}
              <Autocomplete
                id="tags-standard2"
                options={[
                  { title: "place 1" },
                  { title: "place 2" },
                  { title: "place 3" },
                ]}
                sx={{
                  '& .MuiInputBase-root::before': {
                    content: "''", 
                    border:'none'
                  },
                  '&:hover .MuiInputBase-root::before': {
                    content: "''", 
                    border:'none'
                  },                  
                }}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    // label="choose places..."
                    placeholder="place "
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: <InputAdornment position="start"><PlaceIcon/></InputAdornment>,
                    }}
                  />
                )}
              />
            </FormControl>
            <Button variant="text" sx={{color:'#acacac'}}>Clear</Button>
            <Button
              sx={{
                padding:'1rem 2rem',
                backgroundColor: "#ed6511",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ed6511",
                  color: "white",
                },
              }}
            >
              Search
            </Button>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}
