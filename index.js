var box = document.getElementById('box');

box.onmousedown = function(e){
   
    box.style.position = "absolute";
    box.style.cursor = "pointer";
    box.style.zIndex = 1000;
    console.log('click')

    function moveAt(event){
        let x = event.pageX - 50;
        let y = event.pageY - 50;
        box.style.left = x + 'px';
        box.style.top = y + 'px';
    }

    box.addEventListener('mousemove', moveAt);

    box.onmouseup = function(){
        box.removeEventListener('mousemove', moveAt);
    }

    box.ondragstart = function() {
        return false;
      };
}