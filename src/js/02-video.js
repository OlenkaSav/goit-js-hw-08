import throttle from "lodash.throttle";


   const iframe = document.querySelector('iframe');
   const player = new Vimeo.Player(iframe);

   
 let timeToContinue = localStorage.getItem("videoplayer-current-time")
    player.setCurrentTime(timeToContinue).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
   

   player.on('timeupdate', throttle(onCurrentTime, 1000));

  function onCurrentTime(event){
    localStorage.setItem("videoplayer-current-time", event.seconds);
    // player.getCurrentTime().then(function(seconds) {
    //     localStorage.setItem("videoplayer-current-time", seconds)
    // }).catch(function(error) {
    //    console.log(error);
    // });
 }

