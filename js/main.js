var music = [
]
music.unshift("Jazz", "Blues");
music.push("Rock-n-roll");
music.splice(1, 1, "Classic");
music.shift();
music.unshift("Rap", "Reggae");

console.log(music);


// --------------------

var salaries = {
    akmal: 1200,
    karima: 1800,
    salim: 5200
}

var sum = 0;
for (var exchange in salaries) {
    sum = sum + salaries[exchange];

}

console.log(sum);

