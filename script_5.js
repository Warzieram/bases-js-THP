const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  const rentedAtLeastOnce = (b) => b.rented > 0
  let sorted_by_rent = books.sort((a, b) => a.rented - b.rented)
  let most_rented_book = sorted_by_rent.at(-1)
  let least_rented_book = sorted_by_rent.at(0)
  let book_by_id = books.find((b) => b.id == 873495)
  let new_books = books.filter(b => b.id != 133712)
  let sorted_by_name = new_books.sort((a, b) => a.title.localeCompare(b.title))

  console.log("Tous les livres ont été empruntés au moins une fois ? : " + books.every(rentedAtLeastOnce))
  console.log("Livre le plus emprunté: " + most_rented_book.title)
  console.log("Livre le moins emprunté: " + least_rented_book.title)
  console.log("Livre à l'ID 873495: " + book_by_id.title)
  console.log("Livre supprimé: ")
  console.log("Livre rangés par ordre alphabétique: ")
  console.log(sorted_by_name)