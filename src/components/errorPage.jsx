import React from 'react';


export const loadErrorPage = (e) => {

    document.getElementById("header").classList.add('header--top');
    document.querySelector("main").style.display = "block";
    document.querySelector("main .content").style.display = "none";
    document.querySelector("main .errorPage").style.display = "flex";
    document.querySelector("main").classList.add("main--content");
    document.querySelector(".gitHubSearch").style.height = "auto";

    document.querySelector("main .errorPage").innerHTML = `
        <h2>User not found :(</h2>
        <p>${e}</p>`;       
}


function ErrorPage(){
    return(
        <div className="errorPage" style={{display: "none"}}></div>
    )
}

export default ErrorPage ;


