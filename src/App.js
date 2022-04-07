import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import Profile, { getProfile, setNameProfile } from './components/profile';
import Repos, { getRepos } from './components/repos';
//import ErrorPage from './components/errorPage';
import Loader from './components/loader';
import './sass/index.scss';



const load = () => {

    const header = document.getElementById("header");

    header.classList.add('header--top');
    document.querySelector("main").style.display = "none";
    document.querySelector("main").style.display = "block";

    document.querySelector("main .content").style.display = "flex";
    //document.querySelector("main .errorPage").style.display = "none";
    document.querySelector("main").classList.add("main--content");
    document.querySelector(".gitHubSearch").style.height = "auto";
}


function App() {

    const [username, setUsername] = useState(null);
    const [dataProfile, setDataProfile] = useState(null);
    const [dataRepos, setDataRepos] = useState(null);
    const [loader, setLoader] = useState(false);



    const submitForm = async (event) => {

        event.preventDefault();

        try {
            

            setNameProfile(username);

            load();
            setLoader(true);
            setDataProfile(await getProfile());
            setDataRepos(await getRepos());
            setLoader(false);

        } catch (e) {

            console.log(new Error(e));

        };
    };


    return (
        <div className="gitHubSearch container">
            <header id="header" className="header">
                <div className="header__logo">
                    <h1>GitHub <span>Search</span></h1>
                </div>
                <div className="header__search">
                    <form className="search" id="searchForm" onSubmit={submitForm}>
                        <input className="search__input" id="searchInput" onChange={e => setUsername(e.target.value)} placeholder="Ingresa un usuario Github" />
                        <button className="search__button">
                            <i className="button__icon fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </header>
            <main id="main">
                <div className="content">
                    {loader && <Loader />}
                    {dataProfile && <Profile profile={dataProfile} />}
                    {dataRepos && <Repos repos={dataRepos} />}
                </div>

            </main>
        </div>
    );
}

export default App;
