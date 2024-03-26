//console.log("test live");

// ***** cookies *****
document.cookie = "name=simi; ";
document.cookie = "age=30; expires=Fri, 31 Dec 2024 23:59:59 GMT;";

console.log(document.cookie);

// function getCookieKeys() {
//   const cookies = document.cookie.split(";");
//   const cookieNames = cookies.map((cookie) => cookie.trim().split("=")[0]);
//   return cookieNames;
// }

// console.log(getCookieKeys());

//document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//console.log(document.cookie);

// ***** localStorage *****
//                      key, value
localStorage.setItem("name", "Simo");
localStorage.setItem("name2", "kiki");
//localStorage.clear();

let getlocalSt = localStorage.getItem("name");
//console.log(getlocalSt);
//console.log(localStorage.length);

// const key = localStorage.key(0);
// console.log(key);

//getlocalSt = localStorage.removeItem("name");
//console.log(getlocalSt);

// ***** sessionStorage *****
sessionStorage.setItem("bank", "Monzo");

console.log("localSession  " + sessionStorage.getItem("bank"));
