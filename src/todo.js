// import "./style.css"

const addProject=document.querySelector("#addProject button");
let myProjects=[];
let project;

function projDialog(){
    let dialogProject=document.createElement("dialog");
    dialogProject.innerHTML=`
                        <form>
                            <label for="project">Project</label>
                            <input type="text" id="project" placeholder="Project's Name"/>
                            <div>
                                <button type="button" id="closeProj" class="button">Close</button>
                            </div>
                        </form>
    `;
    let projectName=dialogProject.querySelector("#project");
    let closeProjectButton=dialogProject.querySelector("#closeProj");
   return {dialogProject,projectName,closeProjectButton}
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
        myProjects.push(project.projectName.value);
        console.log(displayProject(myProjects))
        console.log(myProjects);
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
