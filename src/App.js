import { useState } from 'react';
import './App.css';
import NewProject from './components/NewProject';
import NoProjects from './components/NoProjects';
import SideBar from './components/SideBar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    projectSelectedId:undefined,
    projects:[],
    tasks:[],
  });

  const handleAddTask=(text)=>{
    const taskId=Math.random();
    setProjectState(prevState=>{
      const newTask = {
        text:text,
        projectId:prevState.projectSelectedId,
        id:taskId,
      }
      return{
        ...prevState,
        projectSelectedId:undefined,
        tasks:[...prevState.tasks, newTask],
      }
    })
  }

  const handleDeleteTask=()=>{

  }


  const handleStartAddProjects=()=>{
    setProjectState(prevState=>{
      return{
        ...prevState,
        projectSelectedId:null,
      }
    })
  }
  const handleCancelAddProject=()=>{
    setProjectState(prevState=>{
      return{
        ...prevState,
        projectSelectedId:undefined,
      }
    })
  }
  const handleSelectAddProject=(id)=>{
    setProjectState(prevState=>{
      return{
        ...prevState,
        projectSelectedId:id,
      }
    })
  }
  const handleAddProjects=(projectData)=>{
    const projectId=Math.random();
    setProjectState(prevState=>{
      const newProject = {
        ...projectData,
        id:projectId
      }
      return{
        ...prevState,
        projectSelectedId:undefined,
        projects:[...prevState.projects, newProject],
      }
    })
  }
  const handleDeleteProject=(id)=>{
    setProjectState(prevState=>{
      return{
        ...prevState,
        projectSelectedId:undefined,
        projects:prevState.projects.filter((project)=>project.id !== prevState.selectedProject)
      }
    })
  }
  const selectedProject = projectState.projects.find(project=>project.id === projectState.projectSelectedId)
  let content = <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask} 
  onAdd={handleAddProjects} 
  tasks={projectState.tasks} />;
  if(projectState.projectSelectedId===null){
    content = <NewProject onAdd={handleAddProjects} 
    projects={projectState.projects} 
    onCancel={handleCancelAddProject} />
  }else if(projectState.projectSelectedId === undefined){
    content = <NoProjects onStartAddProject={handleStartAddProjects} />
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBar onStartAddProject={handleStartAddProjects} 
      onSelect={handleSelectAddProject} />
      {content}
    </main>
  );
}

export default App;
