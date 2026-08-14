import { connect } from "mongoose";

const cnx = connect ("mongodb://localhost:27017/gestion-de-restaurant")
.then(()=>{
    console.log("connexion etablie avec mongodb")
})
.catch((erro)=>{
    console.error("erreur de connexion a la base de donnée : ", erro);
})

export default cnx;




