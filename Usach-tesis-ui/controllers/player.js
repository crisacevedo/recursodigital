
function loadSong(a){
    
    var player=document.getElementById('player');
    var sourceOgg=document.getElementById('player');
    var sourceMp3=document.getElementById('player');
    if (a==1)
    {
 sourceMp3.src="audios/Kalimba.mp3";
   localStorage.setItem("cancionid", JSON.stringify(a));
    }
    if (a==2)
 {
 sourceMp3.src="audios/Manu Chao - A Cosa (1).mp3";
localStorage.setItem("cancionid", JSON.stringify(a));
   
}
   player.load(); //just start buffering (preload)
   player.play(); //start playing
}