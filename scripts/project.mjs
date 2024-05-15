import projects from "./../helpers/projects-list.mjs";
const projectTitle = document.querySelector(".project__title");
const projectImg = document.querySelector(".project__img");
const projectDescription = document.querySelector(".project__description");
const projectGitHub = document.querySelector(".project__gitHub");


function initProject() {
    const projectId = Number(localStorage.getItem("projectId"));

    const project = getProject(projectId);
    changePage(project);
}

initProject();

function getProject(projectId) {
    let project = projects.find((item) => item.id === projectId);
    return project;
}

function changePage(project){
    projectTitle.innerHTML=`${project.title}`;
    projectImg.src= project.img;
    projectImg.alt= project.title;
    projectDescription.innerHTML=`${project.description}`;
    projectGitHub.href = project.gitHub;
}