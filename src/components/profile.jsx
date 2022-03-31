import React from 'react';
import {API, getNameProfile} from './variables';
import {loadErrorPage} from './errorPage'

const showProfile = async () =>{
    
    try{        
        const response = await fetch(API.concat(getNameProfile()));
        if(!response.ok){
            throw new Error(response.status);
        }
        const datos = await response.json();
        loadProfile(datos);
        
    }catch(e){
        loadErrorPage(e)
    }
}

const loadProfile = (data) => {
    const header = document.getElementById("header");
    
    header.classList.add('header--top');
    document.querySelector("main").style.display = "none";
    document.querySelector("main").style.display = "block";

    document.querySelector("main .content").style.display = "flex";
    document.querySelector("main .errorPage").style.display = "none";
    document.querySelector("main").classList.add("main--content");
    document.querySelector(".gitHubSearch").style.height = "auto";

    const   {name, login, avatar_url, followers, location, blog} = data;

    const   profileName         = document.getElementById("profileName"),
            imgAvatar           = document.getElementById("imgAvatar"),
            nickName            = document.getElementById("nickName"),
            followersProfile    = document.getElementById("followersProfile"),
            country             = document.getElementById("followersProfile"),
            webSite             = document.getElementById("webSite"),
            loader              = document.getElementById("loader");



    profileName.textContent = name;
    nickName.textContent = login;
    imgAvatar.src= avatar_url;
    followersProfile.textContent = followers;
    country.textContent = location;
    webSite.textContent = blog;
    webSite.href = blog

    loader.style.display = "none";


}



function Profile(){
    return (

        <div className="profile">
        <div className="profile__img">
            <img id="imgAvatar" src="" alt="" width="200" height="210" />
        </div>
        <div className="profile__name">
            <h2 id="profileName">Darth Vader</h2>
            <span id="nickName" className="profile__nickname">
                anakinskywalker
            </span>
        </div>
        <div className="profile__features">
            <div className="features__item">
                <i className="fas fa-globe features__icon"></i>
                <a href="/#" id="webSite" className="features__name" target="_blank">The Galactic Empire</a>
            </div>
            <div className="features__item">
                <i className="fas fa-map-marker-alt features__icon"></i>
                <span id="country" className="features__name">Tatooine</span>
            </div>


            <div className="features__item">
                <i className="far fa-star features__icon"></i>
                <span id="followersProfile" className="features__name">1.000.000</span>
            </div>


            <div className="features__item">
                <i className="fas fa-user-friends features__icon"></i>
                <span className="features__name">4</span>
            </div>

            <div className="features__item">
                <i className="far fa-circle features__icon"></i>
                <span className="features__name">9.999.999</span>
            </div>
        </div>




    </div>
    )
}

export default Profile;

export { showProfile, loadProfile };