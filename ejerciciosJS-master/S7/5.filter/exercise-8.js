const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

function toFilterStreamers() {
  const filter = document.querySelector('[data-function="toFilterStreamers"]').value;
  const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(filter.toLowerCase()));
  return filteredStreamers;
}

function toShowFilterStreamers() {
  console.log(toFilterStreamers());
}

document.querySelector('[data-function="toShowFilterStreamers"]').addEventListener('click', toShowFilterStreamers);
 