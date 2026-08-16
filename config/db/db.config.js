import { connect } from "mongoose";

const cnx = connect (process.env.DB_URL)
.then(()=>{
    console.log("connexion etablie avec mongodb")
})
.catch((erro)=>{
    console.error("erreur de connexion a la base de donnée : ", erro);
})

export default cnx;




