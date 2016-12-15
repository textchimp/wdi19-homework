var ligne1 = ['La Défense', 'Esplanade de La Défense', 'Pont de Neuilly', 'Les Sablons', 'Porte Maillot', 'Argentine', 'Charles de Gaulle – Étoile', 'George V', 'Franklin D. Roosevelt', 'Champs-Élysées – Clemenceau', 'Concorde', 'Tuileries', 'Palais Royal – Musée du Louvre', 'Louvre – Rivoli', 'Châtelet', 'Hôtel de Ville', 'Saint-Paul', 'Bastille', 'Gare de Lyon', 'Reuilly – Diderot', 'Nation', 'Porte de Vincennes', 'Saint-Mandé', 'Bérault', 'Château de Vincennes'];
var ligne2 = ['Porte Dauphine', 'Victor Hugo', 'Charles de Gaulle - Étoile', 'Ternes', 'Courcelles', 'Monceau', 'Villiers', 'Rome', 'Place de Clichy', 'Blanche', 'Pigalle', 'Anvers', 'Barbès – Rochechouart', 'La Chapelle', 'Stalingrad', 'Jaurès', 'Colonel Fabien', 'Belleville', 'Couronnes', 'Ménilmontant', 'Père Lachaise', 'Philippe Auguste', 'Alexandre Dumas', 'Avron', 'Nation'];
var ligne3 = ['Pont de Levallois — Bécon', 'Anatole France', 'Louise Michel', 'Porte de Champerret', 'Pereire', 'Wagram', 'Malesherbes', 'Villiers', 'Europe', 'Saint-Lazare', 'Havre — Caumartin', 'Opéra', 'Quatre-Septembre', 'Bourse', 'Sentier', 'Réaumur — Sébastopol', 'Arts et Métiers', 'Temple', 'République', 'Parmentier', 'Rue Saint-Maur', 'Père Lachaise', 'Gambetta', 'Porte de Bagnolet', 'Gallieni'];
var ligne3bis = ['Porte des Lilas', 'Saint-Fargeau', 'Pelleport', 'Gambetta'];
var ligne4 = ['Porte de Clignancourt', 'Simplon', 'Marcadet – Poissonniers', 'Château Rouge', 'Barbès – Rochechouart', 'Gare du Nord', 'Gare de l\'Est', 'Château d\'Eau', 'Strasbourg – Saint-Denis', 'Réaumur – Sébastopol', 'Étienne Marcel', 'Les Halles', 'Châtelet', 'Cité', 'Saint-Michel', 'Odéon', 'Saint-Germain-des-Prés', 'Saint-Sulpice', 'Saint-Placide', 'Montparnasse – Bienvenüe', 'Vavin', 'Raspail', 'Denfert-Rochereau', 'Mouton-Duvernet', 'Alésia', 'Porte d\'Orléans', 'Mairie de Montrouge'];
var ligne5 = ['Bobigny – Pablo Picasso', 'Bobigny – Pantin – Raymond Queneau', 'Église de Pantin', 'Hoche', 'Porte de Pantin', 'Ourcq', 'Laumière', 'Jaurès', 'Stalingrad', 'Gare du Nord', 'Gare de l\'Est', 'Jacques Bonsergent', 'République', 'Oberkampf', 'Richard-Lenoir', 'Bréguet – Sabin', 'Bastille', 'Quai de la Rapée', 'Gare d\'Austerlitz', 'Saint-Marcel', 'Campo Formio', 'Place d\'Italie'];
var ligne6 = ['Charles de Gaulle — Étoile', 'Kléber', 'Boissière', 'Trocadéro', 'Passy', 'Bir-Hakeim', 'Dupleix', 'La Motte-Picquet — Grenelle', 'Cambronne', 'Sèvres — Lecourbe', 'Pasteur', 'Montparnasse — Bienvenüe', 'Edgar Quinet', 'Raspail', 'Denfert-Rochereau', 'Saint-Jacques', 'Glacière', 'Corvisart', 'Place d\'Italie', 'Nationale', 'Chevaleret', 'Quai de la Gare', 'Bercy', 'Dugommier', 'Daumesnil', 'Bel-Air', 'Picpus', 'Nation'];
var ligne7_Mairie = ['La Courneuve', 'Fort d\'Aubervilliers', 'Aubervilliers - Pantin - Quatre Chemins', 'Porte de la Villette', 'Corentin Cariou', 'Crimée', 'Riquet', 'Stalingrad', 'Louis Blanc', 'Château-Landon', 'Gare de l\'Est', 'Poissonnière', 'Cadet', 'Le Peletier', 'Chaussée d\'Antin - La Fayette', 'Opéra', 'Pyramides', 'Palais Royal - Musée du Louvre', 'Pont Neuf', 'Châtelet ', 'Pont Marie', 'Sully - Morland', 'Jussieu', 'Place Monge', 'Censier - Daubenton', 'Les Gobelins', 'Place d\'Italie', 'Tolbiac', 'Maison Blanche', 'Porte d\'Italie', 'Porte de Choisy', 'Porte d\'Ivry', 'Pierre et Marie Curie', 'Mairie d\'Ivry'];
var ligne7_Villejuif = ['La Courneuve', 'Fort d\'Aubervilliers', 'Aubervilliers - Pantin - Quatre Chemins', 'Porte de la Villette', 'Corentin Cariou', 'Crimée', 'Riquet', 'Stalingrad', 'Louis Blanc', 'Château-Landon', 'Gare de l\'Est', 'Poissonnière', 'Cadet', 'Le Peletier', 'Chaussée d\'Antin - La Fayette', 'Opéra', 'Pyramides', 'Palais Royal - Musée du Louvre', 'Pont Neuf', 'Châtelet ', 'Pont Marie', 'Sully - Morland', 'Jussieu', 'Place Monge', 'Censier - Daubenton', 'Les Gobelins', 'Place d\'Italie', 'Tolbiac', 'Maison Blanche', 'Le Kremlin-Bicêtre', 'Villejuif - Léo Lagrange', 'Villejuif - Paul Vaillant-Couturier', 'Villejuif - Louis Aragon'];
var ligne7bis = ['Louis Blanc', 'Jaurès', 'Bolivar', 'Buttes Chaumont', 'Botzaris', 'Danube', 'Pré Saint-Gervais'];
var ligne7bis_ = ['Louis Blanc', 'Jaurès', 'Bolivar', 'Buttes Chaumont', 'Botzaris', 'Place des Fêtes', 'Pré Saint-Gervais'];
var ligne8 = ['Balard', 'Lourmel', 'Boucicaut', 'Félix Faure', 'Commerce', 'La Motte-Picquet – Grenelle', 'École Militaire', 'La Tour-Maubourg', 'Invalides', 'Concorde', 'Madeleine', 'Opéra', 'Richelieu – Drouot', 'Grands Boulevards', 'Bonne Nouvelle', 'Strasbourg – Saint-Denis', 'République', 'Filles du Calvaire', 'Saint-Sébastien – Froissart', 'Chemin Vert', 'Bastille', 'Ledru-Rollin', 'Faidherbe – Chaligny', 'Reuilly – Diderot', 'Montgallet', 'Daumesnil', 'Michel Bizot', 'Porte Dorée', 'Porte de Charenton', 'Liberté', 'Charenton – Écoles', 'École Vétérinaire de Maisons-Alfort', 'Maisons-Alfort – Stade', 'Maisons-Alfort – Les Juilliottes', 'Créteil – L\'Échat', 'Créteil – Université', 'Créteil – Préfecture', 'Créteil – Pointe du Lac'];
var ligne9 = ['Pont de Sèvres', 'Billancourt', 'Marcel Sembat', 'Porte de Saint-Cloud', 'Exelmans', 'Michel-Ange - Molitor', 'Michel-Ange - Auteuil', 'Jasmin', 'Ranelagh', 'La Muette', 'Rue de la Pompe', 'Trocadéro', 'Iéna', 'Alma - Marceau', 'Franklin D. Roosevelt', 'Saint-Philippe du Roule', 'Miromesnil', 'Saint-Augustin', 'Havre - Caumartin', 'Chaussée d\'Antin - La Fayette', 'Richelieu - Drouot', 'Grands Boulevards', 'Bonne Nouvelle', 'Strasbourg - Saint-Denis', 'République', 'Oberkampf', 'Saint-Ambroise', 'Voltaire', 'Charonne', 'Rue des Boulets', 'Nation', 'Buzenval', 'Maraîchers', 'Porte de Montreuil', 'Robespierre', 'Croix de Chavaux', 'Mairie de Montreuil'];
var ligne10 = ['Boulogne – Pont de Saint-Cloud', 'Boulogne – Jean Jaurès', 'Porte d\'Auteuil', 'Michel-Ange – Auteuil', 'Église d\'Auteuil', 'Mirabeau', 'Javel – André Citroën', 'Charles Michels', 'Avenue Émile Zola', 'La Motte-Picquet – Grenelle', 'Ségur', 'Duroc', 'Vaneau', 'Sèvres – Babylone', 'Mabillon', 'Odéon', 'Cluny – La Sorbonne', 'Maubert – Mutualité', 'Cardinal Lemoine', 'Jussieu', 'Gare d\'Austerlitz'];
var ligne10_ = ['Boulogne – Pont de Saint-Cloud', 'Boulogne – Jean Jaurès', 'Michel-Ange – Molitor', 'Chardon Lagache', 'Mirabeau', 'Javel – André Citroën', 'Charles Michels', 'Avenue Émile Zola', 'La Motte-Picquet – Grenelle', 'Ségur', 'Duroc', 'Vaneau', 'Sèvres – Babylone', 'Mabillon', 'Odéon', 'Cluny – La Sorbonne', 'Maubert – Mutualité', 'Cardinal Lemoine', 'Jussieu', 'Gare d\'Austerlitz'];
var ligne11 = ['Mairie des Lilas', 'Porte des Lilas', 'Télégraphe', 'Place des Fêtes', 'Jourdain', 'Pyrénées', 'Belleville', 'Goncourt', 'République', 'Arts et Métiers', 'Rambuteau', 'Hôtel de Ville', 'Châtelet'];
var ligne12 = ['Front Populaire', 'Porte de la Chapelle', 'Marx Dormoy', 'Marcadet – Poissonniers', 'Jules Joffrin', 'Lamarck – Caulaincourt', 'Abbesses', 'Pigalle', 'Saint-Georges', 'Notre-Dame-de-Lorette', 'Trinité – d\'Estienne d\'Orves', 'Saint-Lazare', 'Madeleine', 'Concorde', 'Assemblée Nationale', 'Solférino', 'Rue du Bac', 'Sèvres – Babylone', 'Rennes', 'Notre-Dame-des-Champs', 'Montparnasse – Bienvenüe', 'Falguière', 'Pasteur', 'Volontaires', 'Vaugirard', 'Convention', 'Vaugirard Shops', 'Porte de Versailles', 'Corentin Celton', 'Mairie d\'Issy'];
var ligne13 = ['Saint-Denis - Université', 'Basilique de Saint-Denis', 'Saint-Denis - Porte de Paris', 'Carrefour Pleyel', 'Mairie de Saint-Ouen', 'Garibaldi', 'Porte de Saint-Ouen', 'Guy Môquet', 'La Fourche', 'Place de Clichy', 'Liège', 'Saint-Lazare', 'Miromesnil', 'Champs-Élysées – Clemenceau', 'Invalides', 'Varenne', 'Saint-François-Xavier', 'Duroc', 'Montparnasse - Bienvenüe', 'Gaîté', 'Pernety', 'Plaisance', 'Porte de Vanves', 'Malakoff - Plateau de Vanves', 'Malakoff - Rue Étienne Dolet', 'Châtillon - Montrouge'];
var ligne13_ = ['Asnières – Gennevilliers – Les Courtilles', 'Les Agnettes', 'Gabriel Péri', 'Mairie de Clichy', 'Porte de Clichy', 'Brochant', 'La Fourche', 'Place de Clichy', 'Liège', 'Saint-Lazare', 'Miromesnil', 'Champs-Élysées – Clemenceau', 'Invalides', 'Varenne', 'Saint-François-Xavier', 'Duroc', 'Montparnasse - Bienvenüe', 'Gaîté', 'Pernety', 'Plaisance', 'Porte de Vanves', 'Malakoff - Plateau de Vanves', 'Malakoff - Rue Étienne Dolet', 'Châtillon - Montrouge'];
var ligne14 = ['Saint-Lazare', 'Madeleine', 'Pyramides', 'Châtelet', 'Gare de Lyon', 'Bercy', 'Cour Saint-Émilion', 'Bibliothèque François Mitterrand', 'Olympiades'];

var lines = [ligne1, ligne2, ligne3, ligne3bis, ligne4, ligne5, ligne6, ligne7_Mairie, ligne7_Villejuif, ligne7bis, ligne7bis_, ligne8, ligne9, ligne10, ligne10_, ligne11, ligne12, ligne13, ligne13_, ligne14];
var lines_s = ['ligne 1', 'ligne 2', 'ligne 3', 'ligne 3 bis', 'ligne 4', 'ligne 5', 'ligne 6', 'ligne 7', 'ligne 7', 'ligne 7 bis', 'ligne 7 bis', 'ligne 8', 'ligne 9', 'ligne 10', 'ligne 10', 'ligne 11', 'ligne 12', 'ligne 13', 'ligne 13', 'ligne 14'];
var db = {};

var Station = function(name) {
  this.name = name
  this.adjacentStations = [];
  this.lines = [];
  this.distance = Infinity;
  this.parent = null;
}

var setUp = function() {
  for (var i = 0; i < lines.length; i++) {
    for (var j = 0; j < lines[i].length; j++) {
      if (!db[lines[i][j]]) {
        db[lines[i][j]] = new Station(lines[i][j]);
      }
      db[lines[i][j]].lines.push(lines_s[i]);
      if (j > 0) {
        if (db[lines[i][j]].adjacentStations.indexOf(lines[i][j-1]) === -1) {
          db[lines[i][j]].adjacentStations.push(lines[i][j-1]);
        }
      }
      if (j < lines[i].length - 1) {
        if (db[lines[i][j]].adjacentStations.indexOf(lines[i][j+1]) === -1) {
          db[lines[i][j]].adjacentStations.push(lines[i][j+1]);
        }
      }
    }
  }
}

var planTrip = function(src, dst) {
  var queue = [db[src]];
  var explored = {};
  var current;
  var res = {stations: [], 'src': src, 'dst': dst};
  db[src].distance = 0;
  while (queue.length > 0) {
    queue = queue.sort(function(a, b) {
      return b.distance - a.distance;
    });
    current = queue.pop();
    if (current.name === dst) {
      res.distance = current.distance;
      while (current !== db[src]) {
        res.stations.push(current.name);
        current = current.parent;
      }
      return res;
    }
    explored[current] = true;
    for (var i = 0; i < current.adjacentStations.length; i++) {
      if ((!explored[current.adjacentStations[i]] && queue.indexOf[current.adjacentStations[i]] === -1) ||
         (db[current.adjacentStations[i]].distance > current.distance + 1)) {
        queue.push(db[current.adjacentStations[i]]);
        db[current.adjacentStations[i]].distance = current.distance + 1;
        db[current.adjacentStations[i]].parent = current;
      }
    }
  }
}

var msg = function(res) {
  var stations = res.stations.reverse();
  stations.unshift(res.src);
  var stationLines = {'Src': db[res.src].lines}
  for (var i = 0; i < res.stations.length; i++) {
    stationLines[res.stations[i]] = db[res.stations[i]].lines;
  }

  var lineChanges = [];

  var currentLine;
  for (var i = 0; i < stationLines['Src'].length; i++) {
    if (stationLines[stations[1]].indexOf(stationLines['Src'][i]) !== -1) {
      currentLine = stationLines['Src'][i];
    }
  }
  var tmpLine = [currentLine];
  for (var i = 0; i < res.stations.length; i++) {
    if (stations[i+1] && stationLines[stations[i+1]].indexOf(currentLine) !== -1) {
      tmpLine.push(stations[i+1]);
      //console.log("#1 current station: ", stations[i], "next station: ", stations[i+1], "current Line: ", currentLine);
    } else {
      lineChanges.push(tmpLine);
      if (stations[i+1]) {
        for (var j = 0; j < stationLines[stations[i+1]].length; j++) {
          if (stationLines[stations[i]].indexOf(stationLines[stations[i+1]][j]) !== -1) {
            currentLine = stationLines[stations[i+1]][j];
            //console.log("current line: ", currentLine);
          }
        }
        //console.log("#2 current station: ", stations[i], "next station: ", stations[i+1], "current Line: ", currentLine);
        tmpLine = [currentLine, stations[i]];
        tmpLine.push(stations[i+1]);
      }
    }
  }
  // msg
  var transfer;
  var output = "Your must travel through the following stops on " + lineChanges[0][0] + ": "
  for (var i = 1; i < lineChanges[0].length; i++) {
    if (i === lineChanges[0].length - 1) {
      output += lineChanges[0][i] + '.\n';
      transfer = lineChanges[0][i];
    } else {
    output += lineChanges[0][i] + ', ';
    }
  }
  for (var i = 1; i < lineChanges.length; i++) {
    output += "Change at " + transfer + " for " + lineChanges[i][0] + ".\nYour journey continues through the following stops: ";
    for (var j = 2; j < lineChanges[i].length; j++) {
      if (j === lineChanges[i].length - 1) {
        output += lineChanges[i][j] + '.\n'
        transfer = lineChanges[i][j];
      } else {
      output += lineChanges[i][j] + ', ';
      }
    }
  }
  output += (res.stations.length - 1) + " stops in total."
  console.log(lineChanges);
  console.log(output);
}

setUp();
msg(planTrip('Palais Royal – Musée du Louvre', 'Anvers'));
