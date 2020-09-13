
var animation = bodymovin.loadAnimation({
    container : document.getElementById('anim-home'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path: '17657-birthday-card.json'
    
  })
  function play(){
    document.getElementById("anim-home").innerHTML=this.animation;
  }