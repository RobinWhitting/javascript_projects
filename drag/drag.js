let dragndrop = function(elem, strictDrag, limitByParent){
  elem.addEventListener('mousedown', onMouseDown);
  //e.addEventListener('change', onChange);

  let startX, startY, startMouseX, startMouseY, parent, limited, bottomBar;

    function refresh(){
      //needs to be filled
    }

  function onMouseDown(e){
    if (strictDrag && e.target !== elem) {
      return;
    }
    e.stopPropagation();
    bottomBar = document.getElementById('bottomBar').offsetTop;
    console.log(bottomBar);

    refresh(); //call to function
    element = elem.getBoundingClientRect();
    startX = element.left;
    startY = elem.top;

    startMouseX = e.clientX - element.left;
    startMouseY = e.clientY - element.top;

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
  }

  function setFinalPos(e){
  //  console.log(elem);
    element = elem.getBoundingClientRect();

    let centerX = element.left + (element.width / 2);
    let centerY = element.top + (element.height / 2);
    let zone = dz.getBoundingClientRect();
    if (centerX > zone.left && centerX < zone.right) {
      if (centerY > zone.top && centerY < zone.bottom) {
        console.log('all in');
        x = zone.left + (zone.width - element.width) / 2;
        y = zone.top + (zone.height - element.height) / 2;
        startX = x;
        startY = y;
        setPos(x, y);
      }
    }
  }

  function onMouseUp(e){
    //onMouseMove(e);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    setFinalPos(e);
  }

  function setPos(x, y){
    elem.style.left = x + 'px';
    elem.style.top = y - bottomBar + 'px';
  }

  function onMouseMove(e){
    element = elem.getBoundingClientRect();
    x = e.clientX - startMouseX;
    y = e.clientY - startMouseY;
    setPos(x, y);
  }

  function onChange(e){
    refresh();
    setPos(elem.offsetLeft, elem.offsetTop);
  }
}


dragndrop.initOnDocumentReady = function() {
	document.addEventListener("DOMContentLoaded", dragndrop.init);
}


dragndrop.init = function(){
  let arr = document.querySelectorAll('.' + dragndrop.dragndropClass);
  console.log(arr);
  let i = -1;
  let limit = arr.length;

  while (++i < limit) {
    dragndrop(arr[i], true);
  }
}

dragndrop.dragndropClass = 'objects';
dragndrop.initOnDocumentReady();
let dz = document.getElementById('dropSpace');
let element;
