

$(document).ready(function(){
      hBar = $('.health-bar'),
      bar = hBar.find('.bar'),
      hit = hBar.find('.hit');
  

    var total = hBar.data('total'),
        value = hBar.data('value');
    
    // max damage is essentially quarter of max life
    var damage = Math.floor(Math.random()*total);
    // damage = 100;
    var newValue = value - damage;
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";
    
    // show hit bar and set the width
    hit.css('width', hitWidth);
    hBar.data('value', newValue);
    
    setTimeout(function(){
      hit.css({'width': '0'});
      bar.css('width', barWidth + "%");
    }, 500);
    //bar.css('width', total - value);
});
