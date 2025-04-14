const fs = require('fs');
const path = require('path');

console.log("Hello");

const filePath = path.resolve(__dirname, "./database.json");
const file = fs.readFileSync(filePath, 'utf-8');
const json = JSON.parse(file);

const songs = []; 
json.forEach(element => {
    const songLevels = {};
    Object.entries(element.courses).forEach(entry => {
        songLevels[entry[0]] = entry[1]
    });

    const songInfo = {
        title: element.title,
        genre: element.genre,
        level: songLevels
    }

    songs.push(songInfo);
});

const targetSongs = songs.filter(song => song.level.oni.level === 10);
console.log(targetSongs);