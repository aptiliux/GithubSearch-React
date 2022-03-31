export const API = 'https://api.github.com/users/';
let nameProfile;


export const getNameProfile = ()=>{
    return nameProfile;
}

export const setNameProfile = (name)=>{
    nameProfile = name;
}