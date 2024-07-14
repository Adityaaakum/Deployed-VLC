const videoIpt=document.querySelector("#videobtn");
const videoInput=document.querySelector("#videoInput");
const speedUp=document.querySelector("#speedUp");
const speedDown=document.querySelector("#speedDown");
const volumeUp=document.querySelector("#volumeUp");
const volumeDown=document.querySelector("#volumeDown");
const videoPlayer=document.querySelector(".main");
const toast=document.querySelector(".toast");
const vlc_play=document.querySelector("#vlc_play");
const vlc_pause=document.querySelector("#vlc_pause");
const vlc_fullscreen=document.querySelector("#vlc_fullscreen");
const seekBar=document.querySelector("#seekBar");
const timeRemSpan=document.querySelector(".duration_rem_span");

const fileIp=()=>{
    videoInput.click();
}

const acceptInputHandler=(obj)=>{
   
    if(videoPlayer.querySelectorAll(".video").length>0){
       
        videoPlayer.querySelector(".video").remove();
    }
    console.log(obj);
    const video=obj.target.files[0];
    const videoIp=URL.createObjectURL(video);    
    const videoElement=document.createElement("video");
    videoElement.src=videoIp;
    videoElement.setAttribute("class","video");
    videoPlayer.appendChild(videoElement);  
    
    videoElement.controls=false;  
    videoElement.play();
    videoElement.defaultPlaybackRate=1;
    videoElement.addEventListener("timeupdate",function(){
      
        seekBar.value=videoElement.currentTime*(100/videoElement.duration);
        let durationLeft=Math.round(videoElement.duration-videoElement.currentTime);
        timeRemSpan.textContent=durationLeft;             

    });

    videoElement.addEventListener("loadedmetadata",function(){
        console.log(videoElement.duration-videoElement.currentTime+"test duration");
       timeRemSpan.textContent=videoElement.duration-videoElement.currentTime;
    })
   
    
}

videoIpt.addEventListener("click",fileIp);
videoInput.addEventListener("change",acceptInputHandler);
speedUp.addEventListener("click", function() {
    const videoPlaback = document.querySelector(".main .video");
    if(!speedUp.classList.contains("lightup")){
    speedUp.classList.add("lightup");}
else{
    speedUp.classList.remove("lightup");
}
    if (videoPlaback != null) {//to check if video element is not null if null then 
        //no need for buttons to lock
        console.log("Hi");
        console.log(videoPlaback.playbackRate); // Corrected to playbackRate
        videoPlaback.playbackRate += 0.5;
        showToast(videoPlaback.playbackRate+"X"); // Corrected to playbackRate
    }
});

speedDown.addEventListener("click",function(){
    const videoPlaback = document.querySelector(".main .video");
    speedDown.classList.add("lightup");
    if (videoPlaback != null) {//to check if video element is not null if null then 
        //no need for buttons to lock
        const videoSpeed=videoPlaback.playbackRate;
        if(videoSpeed>0){
         // Corrected to playbackRate
        videoPlaback.playbackRate -= 0.5; // Corrected to playbackRate
        console.log(videoPlaback.playbackRate);
        showToast(videoPlaback.playbackRate+"X");
        }
    }
});

volumeUp.addEventListener("click",function(){
    const videoPlaback = document.querySelector(".main .video");
    volumeUp.classList.add("lightup");
    if (videoPlaback != null) {//to check if video element is not null if null then 
        //no need for buttons to lock
        const videoSound=videoPlaback.volume;
        if(videoSound>1.0){
         // Corrected to playbackRate
        videoPlaback.video += 0.2; // Corrected to playbackRate
        console.log(videoPlaback.video);
        showToast(videoPlaback.volume+"X");
        }
    }
})

volumeDown.addEventListener("click",function(){
    const videoPlaback = document.querySelector(".main .video");
    volumeDown.classList.add("lightup");
    if (videoPlaback != null) {//to check if video element is not null if null then 
        //no need for buttons to lock
        const videoSound=videoPlaback.volume;
        if(videoSpeed>0){
         // Corrected to playbackRate
        videoPlaback.volume -= 0.2; // Corrected to playbackRate
        console.log(videoPlaback.volume);
        showToast(videoPlaback.volume+"X");
        }
    }
})

vlc_pause.addEventListener("click",function(){

    const videoObject=document.querySelector(".main .video");
    vlc_pause.classList.add("lightup");
    if(videoObject!=null){

       
        console.log(vlc_pause.getAttribute("class"));
        if(vlc_pause.getAttribute("class")==="fa-solid fa-pause lightup"){
            videoObject.pause();
            vlc_pause.setAttribute("class","fa-solid fa-play");
        }
        else{
            videoObject.play();
            vlc_pause.setAttribute("class","fa-solid fa-pause");
        }   
         
       
    }
});
    
    vlc_fullscreen.addEventListener("click",function(){
        
     vlc_fullscreen.classList.add("lightup")   
    const videoObject=document.querySelector(".main .video");

    if(videoObject!=null){
        
        if(!videoObject.fullscreenElement){
         
         videoObject.requestFullscreen();
         return;
        }
        videoObject.exitFullscreen();
        }
          
                
    });


    seekBar.addEventListener("change",function(){
        
    const videoObject=document.querySelector(".main .video");

    if(videoObject!=null){
        let value=seekBar.value;
        videoObject.currentTime=(value/100)*videoObject.duration;
    }
    });

  document.addEventListener("keydown",function(e){
    console.log(e);
    e.preventDefault();
    if(e.ctrlKey && e.key==='A'){
      
        showToast("Any issues?");
    }
    
  });
    



function showToast(param){
  console.log(param);
  console.log(toast);
    if(param!=null){
    toast.textContent=param;

    toast.style.display="block";

    setTimeout(function(){
        toast.style.display="none"; 
    },2000);
}
}
