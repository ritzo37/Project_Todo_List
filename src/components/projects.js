
function Projects() {

    let projects = [];
    
    const getProjects = ()=> projects ;

    const addProjects = (project)=> {
          projects.push(project);
    }

    const deleteProjects = (projectIndx)=> {
         projects[projectIndx] = undefined ;
    }

    const addTask = (newTask , indx)=>{
          projects[indx].tasks.push(newTask);
    }

    const deleteTask = (projectIndx, taskIndx)=> {
          projects[projectIndx].tasks[taskIndx] = undefined ;
    }

    const toggleTaskDone = (projectIndx , taskIndx) => {
          projects[projectIndx].tasks[taskIndx].done = !projects[projectIndx].tasks[taskIndx].done ;
    }

    const checkTaskDone = (projectIndx , taskIndx) => {
          return projects[projectIndx].tasks[taskIndx].done ;
    }


    return {
         getProjects , 
         addProjects , 
         deleteProjects ,
         addTask ,
         deleteTask ,
         toggleTaskDone ,
         checkTaskDone,
    }
}

const { getProjects , addProjects , deleteProjects , addTask  , deleteTask , toggleTaskDone , checkTaskDone} = Projects();

export { getProjects , addProjects , deleteProjects , addTask , deleteTask , toggleTaskDone , checkTaskDone} ;