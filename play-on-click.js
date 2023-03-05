AFRAME.registerComponent("play-on-click", {
 //Add code here
  schema:{
    isplaying:{type:"boolean",default:false}
  },
  init:function(){
    this.videoE1=this.el.getAttribute("material").src;
    this.onClick=this.onClick.bind(this);
  },
  play:function(){
    window.addEventListener("click",this.onClick);
  },
  onClick:function(evt){
    if(!this.videoE1){
        return;
    }
    var isplaying=this.el.getAttribute("play-on-click").isplaying;
    this.el.object3D.visible=true;
    if(!isplaying){
        this.el.setAttribute("play-on-click",{isplaying:true});
        this.videoE1.play();
    }
    else{
        this.el.setAttribute("play-on-click",{isplaying:false});
        this.videoE1.pause();
    }
  }
});
