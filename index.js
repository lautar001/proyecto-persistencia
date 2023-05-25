localStorage.setItem("persona", JSON.stringify({nombre:"Lautaro", apellido:"Farias"}))
console.log(JSON.parse(localStorage.getItem("persona")))

// sessionStorage.setItem("Persona", JSON.stringify({nombre:"Lautaro", apellido:"Farias"}))
// console.log(JSON.parse(sessionStorage.getItem("Persona")))

localStorage.setItem("nombre","lautaro")
localStorage.setItem("apellido","Farias")
console.log(localStorage.getItem("nombre","apellido"))

// sessionStorage.setItem("nombre","Lautaro")
// sessionStorage.setItem("apellido", "Farias")
// console.log(sessionStorage.getItem("nombre","apellido"))

// document.cookie = "personaCookie=LautaroFariasCookie"
// document.cookie = "personaCaducidad=persona;expire=" + new Date(2023,24,4)