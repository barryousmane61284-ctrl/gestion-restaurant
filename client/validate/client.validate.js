import yup from 'yup';

const clientschema = yup.object().shape({
    nom: yup.string().required("Le nom est requis"),
    prenom: yup.string().required("le prénom est requis"),
    matricule: yup.string().required("Le matricule est requis"),
    telephone: yup.number().required("Le numero de telephone est requis"),
    email: yup.string().required("l'email est requis"),
    adresse: yup.string().required("l'adresse est requis")
});
export default clientschema

