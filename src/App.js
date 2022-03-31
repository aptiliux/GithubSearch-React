import React from 'react';
//import ReactDOM from 'react-dom';
import {setNameProfile} from './components/variables';
import Profile, {showProfile} from './components/profile';
import Repos, {showRepos} from './components/repos';
import ErrorPage from './components/errorPage';
import './sass/index.scss';


const submitForm = async (event) => {
    event.preventDefault();
    
    try{
        const searchInput = document.getElementById("searchInput");

        setNameProfile(searchInput.value);

        await showProfile();
        await showRepos();
    }catch(e){
        console.log(new Error(e));
    };
};


function App() {
  return (
    <div className="gitHubSearch container">
        <header id="header" className="header">
            <div className="header__logo">
                <h1>GitHub <span>Search</span></h1>
            </div>
            <div className="header__search">
                <form className="search" id="searchForm" onSubmit={submitForm}>
                    <input className="search__input" id="searchInput" placeholder="Ingresa un usuario Github"  />
                    <button className="search__button">
                        <i className="button__icon fas fa-search"></i>
                    </button>
                </form>
            </div>
        </header>
        <main id="main" style={{display: "none"}}>
            <div className="content" style={{display: "none"}}>
                <div id="loader" className="loader">
                    <div className="dots">
                        <span id="dot--1"></span>
                        <span id="dot--2"></span>
                        <span id="dot--3"></span>
                    </div>
                    <div className="loader__overlay"></div>
                </div>
                <Profile />
                <Repos />
            </div>
            <ErrorPage />
        </main>
    </div>
  );
}

export default App;
