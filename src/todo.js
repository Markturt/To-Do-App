// import "./style.css"

const addProject=document.querySelector("#addProject button");
let myProjects=[];
let myTasks=[];
let project;

function projDialog(){
    let dialogProject=document.createElement("dialog");
    dialogProject.innerHTML=`
                        <form>
                            <label for="project">Project</label>
                            <input type="text" id="project" placeholder="Project's Name"/>
                            <div>
                                <button type="button" id="closeProj" class="button">Close</button>
                                <button type="button" id="cancel" class=button>Cancel</button>
                            </div>
                        </form>
    `;
    let projectName=dialogProject.querySelector("#project");
    let closeProjectButton=dialogProject.querySelector("#closeProj");
    let cancelButton=dialogProject.querySelector("#cancel");
    return {dialogProject,projectName,closeProjectButton,cancelButton}
}
addProject.addEventListener("click",()=>{
    project=projDialog();
    document.body.appendChild(project.dialogProject);
    project.dialogProject.setAttribute("class","project")
    project.dialogProject.showModal();
    
    project.closeProjectButton.addEventListener("click",()=>{
        project.dialogProject.close()
        document.body.removeChild(project.dialogProject)
    })
    project.dialogProject.addEventListener("close",()=>{
        if(project.projectName.value==true){
            myProjects.push(project.projectName.value);
            console.log(displayProject(myProjects))
            console.log(myProjects);
        }
    })
    project.cancelButton.addEventListener("click",()=>{
        project.projectName.value="";
        project.dialogProject.close();
        document.body.removeChild(project.dialogProject);
    })
})

function displayProject(works=[]){
    let projects=document.querySelector("#projectsContainer ")
    projects.innerHTML+=`<div>
            <button class="buttonProjects">${myProjects[works.length-1]}</button>
                        </div>`
    let x=projects.getElementsByClassName("buttonProjects");
    return x
}

function createTaskDialog(){
    const dialogTask=document.createElement("dialog");
    
    dialogTask.innerHTML=`<form>
                            <div>
                                <input type="text" id="title" placeholder="Title"/>
                            </div>
                            <div>
                                <textarea type="text" id="description" placeholder="description"/>
                            </div>
                            <div>
                                <label for="date">Due Date</label>
                                <input type="date" id="date"/>
                            </div>
                            <div>
                                <label for="priority">Priority</label>
                                <select id="priority">
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                            <div>
                                <button>Add</button>
                                <button>Cancel</button>

                          </form>`
    return dialogTask
}
