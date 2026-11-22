# Virtual Pet

Feed a virtual dog and watch the food stock go down. The stock is saved online so it is the same for everyone.

## How to play
- Press the **Up arrow** to feed the dog.

## Run it locally
Browsers block games that load images and scripts straight from disk, so serve the folder with any small web server:

```bash
git clone https://github.com/Aakash12321/Virtual-Pet-I.git
cd Virtual-Pet-I
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser. (The VS Code **Live Server** extension works too.)

## Firebase
This game stores its data in a Firebase Realtime Database. The connection settings are in `index.html` (`firebaseConfig`). To use your own database, create a Firebase project, enable the Realtime Database and paste your project's config there.

## Built with
- p5.js
- p5.play
- Firebase Realtime Database

## Known gaps
The dog pictures (`images/dogImg.png`, `images/dogImg1.png`) still need to be added to this repo for the game to load.
