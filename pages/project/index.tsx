import { getAllProjects } from '@/service/api'
import AllProject from '@/src/components/Project/AllProject'
import React from 'react'

export default function ProjectPage({data}:any) {
  return (
  <>
  <AllProject data={data}/>
  </>
  )
}

export async function getServerSideProps(){
    try {
        const projects= await getAllProjects();
        if(projects.data){
            return {
                props:{
                    data: projects.data
                }
            }
        }
       return {props:{data:[]}}
        
    } catch (error) {
        
    }

}