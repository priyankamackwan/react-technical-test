import { supabase } from '../lib/supabaseClient';

export const getAllProjects= async ()=>{
    const res= await supabase.from('project_with_skills_view2').select();
   return res
}
export const getAllSkills= async ()=>{
    const res= await supabase.from('Skill').select();
   return res
}
export async function getProjectsByFilters(skillLevel: string, skills: string[]) {
    try {
      // Construct the Supabase query
      let query = supabase
        .from('project_with_skills_view3')
        .select('*')
        .eq('project_skill_level', skillLevel);
  
      if (skills.length > 0) {
        query = query.match({
          'project_skills.skill_id': { in: skills }
        });
      }
  
      // Execute the query
      const { data, error } = await query;
  
      if (error) {
        throw new Error(error.message);
      }
  
      return data;
    } catch (error) {
      // Handle error
      throw error;
    }
  }
  
  