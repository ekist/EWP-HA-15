let bef = [
    [
      "1",
      "git clone",
      "kopiere den Inhalt von der GitHub zum Computer, dupliziere den Projekt"
    ],
    [
      "2",
      "git add",
      "vormerke von allen Änderungen im Projekt, um sie danach auf die Seite hochlzuladen"
    ],
    [
      "3",
      "git commit",
      "die Änderungen werden lokal auf dem PC abgespeichert"
    ],
    [
      "3",
      "git push",
      "lade die Änderungen hoch"
    ],
    [
      "3",
      "git pull",
      "lade die Änderungen herunter"
    ]
  ]
  
 
$("#Befehl").DataTable({
    "aaData":bef
});
