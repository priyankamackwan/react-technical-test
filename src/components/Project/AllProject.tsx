import React, { FormEvent, useEffect, useState } from "react";
import {
  Container,
  Box,
  Paper,
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Autocomplete,
  TextField,
  Chip,
} from "@mui/material";
import { getAllSkills, getProjectsByFilters } from "../../../service/api";
//AllProject prop types
type ProjectWithSkills = {
  project_id: string;
  project_title: string;
  project_description: string;
  project_skill_level: string;
  project_skills: { skill_id: string; skill_title: string }[];
};

export type AllProjectPropsType = {
  data: ProjectWithSkills[];
};
export type SkillType = {
  id: string;
  title: string;
};
export default function AllProject({ data }: AllProjectPropsType) {
  //!states for selected skill level and skills
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [allSkills, setAllSkills] = useState<unknown[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  //!states for handling projects filtering states
  const [allProjects, setAllProjects] = useState<ProjectWithSkills[]>(data);
  const [projects, setProjects] = useState<ProjectWithSkills[]>(data);

  //!skill level handler
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLevel(value);
    } else {
      setSelectedLevel("");
    }
  };
  //!Effects **************
  useEffect(() => {
    //setting project data

    getAllSkills()
      .then((res) => {
        //  const skillData:SkillType[] | null= res.data;
        if (res.data) {
          setAllSkills(res.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  //!** filter effect block
  useEffect(() => {
    //!project filtering logic
    let filterResult: ProjectWithSkills[] = []; //*temp variable to store filtered result 
    //!if user has selected both skill level and skills
    if (selectedLevel && selectedSkills.length > 0) {
      filterResult = allProjects.filter((currentProject) => {
        return (
          currentProject.project_skill_level === selectedLevel &&
          currentProject.project_skills.some((skill) => {
            return selectedSkills.includes(skill.skill_id);
          })
        );
      });
      //  console.log('both filter result',filterResult);
      setProjects(filterResult);
      return;
    }
    //!if user has selected only skill level 
    if (selectedLevel) {
      filterResult = allProjects.filter(
        (currentProject) => currentProject.project_skill_level == selectedLevel
      );
      // console.log('filter result', filterResult);
      setProjects(filterResult);
      return;
    }
    //!if user has selected only skills
    if (selectedSkills.length > 0) {
      filterResult = allProjects.filter((currentProject) => {
        return currentProject.project_skills.some((skill) => {
          return selectedSkills.includes(skill.skill_id);
        });
      });
      setProjects(filterResult);
      return;
    }
    setProjects(allProjects);
  }, [selectedSkills, selectedLevel]);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: "7rem",
          height: "700px",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            p: 2,
          }}
        >
          {/* //*filter section */}
          <Stack
            direction={"column"}
            spacing={2}
            sx={{
              flex: 1 / 2,
              height: "100%",
              // border:'1px solid red'
            }}
          >
            {/* //filter title  block */}
            <Typography
              variant="h2"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Filter By
            </Typography>
            {/* //*skill level  block */}
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "grid",
                alignItems: "start",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "1rem",
                }}
              >
                Skill Level
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLevel === "basic" ? true : false}
                      onChange={handleCheckboxChange}
                      value="basic"
                    />
                  }
                  label="Basic"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLevel === "intermediate" ? true : false}
                      onChange={handleCheckboxChange}
                      value="intermediate"
                    />
                  }
                  label="Intermediate"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLevel === "expert" ? true : false}
                      onChange={handleCheckboxChange}
                      value="expert"
                    />
                  }
                  label="Expert"
                />
              </FormGroup>
            </Box>

            {/* //*skills  block */}
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "grid",
                alignItems: "start",
              }}
            >
              <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                Skills
              </Typography>
              <FormGroup>
                <Autocomplete
                  multiple
                  id="tags-standard123"
                  options={allSkills as SkillType[]}
                  getOptionLabel={(option) => option.title}
                  //   value={field.value || ""}
                  onChange={(event, newValue) => {
                    const selectedSkillIds = newValue.map((skill) => skill.id);
                    setSelectedSkills(selectedSkillIds);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="skills "
                      size="small"
                      sx={{ mt: 2, width: "70%" }}
                      //   error={Boolean(errors.job_role?.message)}
                      //   helperText={errors.job_role && errors.job_role?.message}
                    />
                  )}
                />
              </FormGroup>
            </Box>
          </Stack>

          {/* //*project list section */}
          <Box
            sx={{
              flex: 1,
              height: "100%",
              // border: "1px solid blue",
              overflow: "auto",
              p: 2,
            }}
          >
            {projects.length > 0 ? (
              projects.map((project) => {
                return (
                  <Paper
                    key={project.project_id}
                    elevation={2}
                    sx={{ width: "100%", height: "auto", p: 2, mb: 2 }}
                  >
                    <Stack direction={"column"} spacing={1}>
                      <Typography variant="h6">
                        {project.project_title}
                      </Typography>
                      <Typography>{project.project_description}</Typography>
                      <Stack direction="row" spacing={1}>
                        {project.project_skills &&
                          project.project_skills.map((skill) => {
                            return (
                              <Chip
                                key={skill.skill_id}
                                label={skill.skill_title}
                                color="primary"
                                variant="outlined"
                              />
                            );
                          })}
                      </Stack>
                    </Stack>
                  </Paper>
                );
              })
            ) : (
              <Typography>Records not found</Typography>
            )}
          </Box>
        </Paper>
      </Container>
    </>
  );
}
