import 'dotenv/config';
import mongoose from 'mongoose';
import Categori from './categori/model/categori.js';
import Plat from './plat/model/plat.js';
import Client from './client/model/client.js';
import Commande from './commande/model/commande.js';

const MONGO_URI = process.env.DB_URL || 'mongodb://127.0.0.1:27017/gestion_restaurant';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connexion MongoDB OK');

    await Promise.all([
      Categori.deleteMany({}),
      Plat.deleteMany({}),
      Client.deleteMany({}),
      Commande.deleteMany({})
    ]);

    const categoriesData = [
      { nom: 'Entrées', description: 'Petits déjeuners et amuse-bouches' },
      { nom: 'Pizzas', description: 'Pizzas classiques et gourmandes' },
      { nom: 'Burgers', description: 'Sandwichs et burgers signature' },
      { nom: 'Salades', description: 'Salades fraîches et équilibrées' },
      { nom: 'Poissons', description: 'Plats de poisson et fruits de mer' },
      { nom: 'Viandes', description: 'Plats chauds à base de viande' },
      { nom: 'Desserts', description: 'Douceurs et desserts maison' },
      { nom: 'Boissons', description: 'Boissons fraîches et énergétiques' },
      { nom: 'Wraps', description: 'Wraps savoureux et pratiques' },
      { nom: 'Accompagnements', description: 'Frittes, sides et accompagnements' }
    ];

    const categories = await Categori.insertMany(categoriesData);

    const platNames = [
      'Poulet grillé', 'Tacos mexicain', 'Coca-Cola', 'Pain au chocolat', 'Salade César',
      'Pizza 4 fromages', 'Burger royal', 'Nuggets', 'Sushi saumon', 'Frites maison',
      'Wrap végétarien', 'Poulet épicé', 'Jus d’orange', 'Limonade', 'Lasagnes',
      'Riz cantonnais', 'Pasta alfredo', 'Crevettes grillées', 'Tiramisu', 'Mousse chocolat',
      'Burger double', 'Pizza margarita', 'Poulet roti', 'Salade niçoise', 'Filet poisson',
      'Burrito', 'Café filtre', 'Thé glacé', 'Maki avocat', 'Croque monsieur', 'Pizza pepperoni',
      'Sandwich club', 'Avocat toast', 'Gâteau au fromage', 'Panna cotta', 'Fajitas', 'Brochettes',
      'Canard confit', 'Spaghetti bolognaise', 'Falafel', 'Brownie', 'Smoothie', 'Eau minérale',
      'Panini fromage', 'Buffalo wings', 'Poke bowl', 'Quiche lorraine', 'Yakitori', 'Tartine thon',
      'Curry de légumes', 'Pâtes carbonara', 'Gnocchis', 'Duo burger', 'Soda citron'
    ];

    const platsData = Array.from({ length: 50 }, (_, index) => {
      const categorie = categories[index % categories.length];
      const basePrice = 1500 + ((index * 137) % 11000);

      return {
        nom: `${platNames[index % platNames.length]} ${index + 1}`,
        description: `Plat ${index + 1} préparé avec soin pour le restaurant`,
        prix: basePrice,
        disponible: index % 3 !== 0,
        categori: categorie._id
      };
    });

    const plats = await Plat.insertMany(platsData);

    const clientsData = Array.from({ length: 20 }, (_, index) => ({
      matricule: `CL-${String(index + 1).padStart(3, '0')}`,
      nom: ['Diop', 'Ndiaye', 'Sarr', 'Mane', 'Ba', 'Diallo', 'Faye', 'Fall', 'Lo', 'Sy', 'Gueye', 'Mbaye', 'Sow', 'Kane', 'Dieng', 'Camara', 'Seck', 'Ngom', 'Sané', 'Thiam'][index % 20],
      prenom: ['Moussa', 'Awa', 'Ibrahima', 'Sophie', 'Fatou', 'Ali', 'Mariama', 'Pape', 'Yacine', 'Ndeye', 'Amadou', 'Oumy', 'Serigne', 'Nafi', 'Salma', 'Cheikh', 'Dior', 'Rokhaya', 'Modou', 'Mamadou'][index % 20],
      telephone: 770000000 + index,
      adresse: ['Dakar', 'Hann', 'Yoff', 'Mermoz', 'Liberte', 'Plateau', 'Pikine', 'Guédiawaye', 'Biscuiterie', 'Grand Dakar'][index % 10],
      email: `client${index + 1}@example.com`
    }));

    const clients = await Client.insertMany(clientsData);

    const statuses = ['en_cours', 'terminée', 'annulée', 'en_attente'];

    const commandesData = Array.from({ length: 40 }, (_, index) => {
      const client = clients[index % clients.length];
      const selectedPlats = shuffle(plats).slice(0, randomInt(1, 4));

      let total = 0;
      const lignes = selectedPlats.map((plat) => {
        const quantite = randomInt(1, 3);
        const prixunitaire = plat.prix;
        total += prixunitaire * quantite;

        return {
          id_plat: plat._id,
          quantite,
          prixunitaire
        };
      });

      return {
        id_client: client._id,
        plat: lignes,
        date_commande: new Date(Date.now() - index * 3600000),
        total,
        status: statuses[index % statuses.length]
      };
    });

    await Commande.insertMany(commandesData);

    console.log('Données de test chargées avec succès');
    console.log({
      categories: categories.length,
      plats: plats.length,
      clients: clients.length,
      commandes: commandesData.length
    });
  } catch (error) {
    console.error('Erreur lors du chargement des données de test :', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('Déconnexion MongoDB');
  }
};

seedData();
