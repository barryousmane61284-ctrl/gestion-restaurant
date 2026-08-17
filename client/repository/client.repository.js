import clientmodel from "../model/client.js";
import commandemodel from "../../commande/model/commande.js";

class clientrepository {
    // creation d'un client
    static creationclient = async(data)=>{
        return  await clientmodel.create(data)
    }
    // recuperation d'un client par id
    static recuperationId = async(id)=>{
        return  await clientmodel.findById(id)
    }
    // recuperation de tout les client
    static toutclient = async()=>{
        return await clientmodel.find()
    }
    // clients avec le plus de commandes, du plus grand au plus petit
    static meilleursClients = async()=>{
        return await commandemodel.aggregate([
            {
                $group: {
                    _id: '$id_client',
                    nombre_commandes: { $sum: 1 },
                    derniere_commande: { $max: '$date_commande' },
                    commandes: { $push: '$$ROOT' }
                }
            },
            {
                $sort: {
                    nombre_commandes: -1,
                    _id: 1
                }
            },
            {
                $lookup: {
                    from: 'clients',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'client'
                }
            },
            {
                $unwind: '$client'
            },
            {
                $project: {
                    _id: '$client._id',
                    matricule: '$client.matricule',
                    nom: '$client.nom',
                    prenom: '$client.prenom',
                    telephone: '$client.telephone',
                    adresse: '$client.adresse',
                    email: '$client.email',
                    nombre_commandes: 1,
                    derniere_commande: 1,
                    plats: {
                        $reduce: {
                            input: '$commandes',
                            initialValue: [],
                            in: { $concatArrays: ['$$value', '$$this.plat'] }
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: 'plats',
                    localField: 'plats.id_plat',
                    foreignField: '_id',
                    as: 'plats_detail'
                }
            },
            {
                $project: {
                    _id: 1,
                    matricule: 1,
                    nom: 1,
                    prenom: 1,
                    telephone: 1,
                    adresse: 1,
                    email: 1,
                    nombre_commandes: 1,
                    derniere_commande: 1,
                    plats: {
                        $map: {
                            input: '$plats',
                            as: 'ligne',
                            in: {
                                id_plat: '$$ligne.id_plat',
                                quantite: '$$ligne.quantite',
                                prixunitaire: '$$ligne.prixunitaire',
                                plat: {
                                    $let: {
                                        vars: {
                                            found: {
                                                $first: {
                                                    $filter: {
                                                        input: '$plats_detail',
                                                        as: 'p',
                                                        cond: { $eq: ['$$p._id', '$$ligne.id_plat'] }
                                                    }
                                                }
                                            }
                                        },
                                        in: '$$found'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ])
    }
    // mise a jour
    static update = async(id, data)=>{
        return await clientmodel.findByIdAndUpdate(id,data)
    }
    // suppresion
    static suppression = async(id)=>{
        return await clientmodel.findByIdAndDelete(id)
    }
}
export default clientrepository;