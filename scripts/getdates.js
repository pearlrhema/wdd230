const date = new Date().getFullYear();
const dateElement = document.querySelector("#year");
const LastModif = new Date(document.lastModified);
const lastModifiedElement = document.querySelector("#lastmodified");

dateElement.innerHTML = date;
lastModifiedElement.innerHTML = LastModif;