var counter =0;
var cat=[]
var interval=100;
function Moving(e){
    
    if (document.attachEvent != null) {
        var mouse_x =e.clientX  
        var mouse_y = e.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
      mouse_x = e.clientX;
      mouse_y = e.clientY;
    } 
    mous.style.top = mouse_y + 'px';
    mous.style.left = mouse_x + 'px';

    var cat_obj={x:mouse_x,y:mouse_y}
    cat.push(cat_obj);
    counter++;

    if (counter>interval)
        {
            kat.style.top=cat[counter-interval-1].y+"px"
            kat.style.left=cat[counter-interval-1].x+"px"
        }

 }

document.onmousemove = Moving