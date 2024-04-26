const projects = document.querySelector(".projects");


projects.addEventListener("click",(event)=>{
    event.preventDefault();
    let projectId =event.target.closest(".projects__link").href;
    projectId = projectId[projectId.length-1];
    localStorage.setItem("projectId", projectId);
    window.location.href = "./project.html";
})

