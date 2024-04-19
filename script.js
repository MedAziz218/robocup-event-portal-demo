// load sponsor images
document.addEventListener("DOMContentLoaded", function () {
    const sponsorsContainer = document.getElementById("marquee");

    const numSponsors = 5; // Change the number of sponsors as needed
    const sponsorsFolder = "img/sponsors/"; // Change the folder path as needed
    for (let k = 1; k <= 6; k++) {
        for (let i = 1; i <= numSponsors; i++) {
            const img = new Image();
            img.src = sponsorsFolder + i + ".png";
            img.alt = "sponsor-" + i;
            sponsorsContainer.appendChild(img);
        }
    }
});



var rightJS = {
    init: function(){
      rightJS.Tags = document.querySelectorAll('.rightJS');
      for(var i = 0; i < rightJS.Tags.length; i++){
        rightJS.Tags[i].style.overflow = 'hidden';
      }
      rightJS.Tags = document.querySelectorAll('.rightJS div');
      for(var i = 0; i < rightJS.Tags.length; i++){
        rightJS.Tags[i].style.position = 'relative';
        rightJS.Tags[i].style.right = '-'+rightJS.Tags[i].parentElement.offsetWidth+'px';
      }
      rightJS.Tags[0].style.right = '0px';
      rightJS.loop();
    },
    loop: function(){
      for(var i = 0; i < rightJS.Tags.length; i++){
        var x = parseFloat(rightJS.Tags[i].style.right);
        x += 1;
        var W = rightJS.Tags[i].parentElement.offsetWidth;
        var w = rightJS.Tags[i].offsetWidth;
        console.log(String(rightJS.Tags[i].offsetWidth )+ "<->"+String(x));

        if(x > rightJS.Tags[i].offsetWidth  ) x = -W;
        if (rightJS.Tags[i].parentElement.parentElement.querySelector(':hover') !== rightJS.Tags[i].parentElement) rightJS.Tags[i].style.right = x + 'px';
      } 
      requestAnimationFrame(this.loop.bind(this));
    }
  };
  window.addEventListener('load',rightJS.init);
  