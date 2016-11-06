const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };
function getNextEpisodeInPlaylist(){
  return episodes[0];
}
function addToPlaylist(episodes, finaleEpisode){
  return [...episodes, finaleEpisode]
}
function removeFromPlaylist(episodes, episodeToRemove){
  let index = episodes.indexOf(episodeToRemove);
  let rtrnArr = episodes.slice(0, index).concat(episodes.slice(index + 1));
  return rtrnArr;
}
function bingeWatch(playlist){
  if(playlist.length > 0){
    console.log(playlist.pop())
    bingeWatch(playlist)
  }
  return 'Please let there be more!';
}
