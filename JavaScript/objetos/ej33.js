let vinylCollection = [
  {
    "id": 1,
    "album_title": "El Fary es la Ley",
    "artist": "El Fary",
    "tracklist": [
      "El Toro Guapo",
      "La Mandanga",
      "Voy a Pintar La Carpa"
    ]
  },
  {
    "id": 2,
    "album_title": "Estopa",
    "artist": "Estopa",
    "tracklist": [
      "La Raja de Tu Falda",
      "Tu Calorro",
      "Vino Tinto"
    ]
  },
  {
    "id": 3,
    "album_title": "Mientras No Cueste Trabajo",
    "artist": "Melendi",
    "tracklist": [
      "Con La Luna Llena",
      "El Nano",
      "Por Amarte Tanto"
    ]
  },
  {
    "id": 4,
    "album_title": "No Pares de Soñar",
    "artist": "La Húngara",
    "tracklist": [
      "Vete De Mi Vida",
      "Borracho De Amor",
      "Maldita Suerte"
    ]
  },
  {
    "id": 5,
    "album_title": "Fiesta Española",
    "artist": "Manolo Escobar",
    "tracklist": [
      "El Porompompero",
      "Mi Carro",
      "Ay Jaleo"
    ]
  }
]

let fid = parseInt(prompt("Enter an Id: "));

let found = vinylCollection.find(item => item.id === fid);

if (found) {
  document.writeln("ID: " + found.id + "<br>");
  document.writeln("Album: " + found.album_title + "<br>");
  document.writeln("Artist: " + found.artist + "<br>");
  document.writeln("Tracklist:<br>");
  for (let t of found.tracklist) {
    document.writeln("- " + t + "<br>");
  }
}else {
  alert("Not valid ID");
}

let ok = confirm("Do you want sort the list?")
if (ok) {
  let crit = prompt("How do you want to sort? (id / album / artist): ").toLowerCase();
  switch (crit){
    case "id":
      vinylCollection.sort((a, b) => a.id - b.id);
      break;

    case "album":
      vinylCollection.sort((a, b) => a.album_title.localeCompare(b.album_title));
      break;

    case "artist":
      vinylCollection.sort((a, b) => a.artist.localeCompare(b.artist));
      break;

    default:
      alert("Error: invalid criteria");
      break;
  }
  document.writeln("<br><br><b>Sorted List:</b><br>");
  for (let v of vinylCollection) {
    document.writeln(`${v.id} - ${v.album_title} - ${v.artist}<br>`);
  }

} else {
  document.writeln("<br>Bye")
}