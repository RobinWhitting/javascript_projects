var list = document.getElementById('list');
var moveDown = document.createElement('a');
var moveUp = document.createElement('a');
var selected;
var message = '';
moveUp.href = "#";
moveUp.innerHTML = 'Move Up';
moveUp.id = "moveUp";
moveDown.href = "#";
moveDown.innerHTML = 'Move Down';
moveDown.id = 'moveDown';

document.body.appendChild(moveUp);
document.body.appendChild(moveDown);



moveUp.addEventListener('click', function(){
  moveItemUp();
});

moveDown.addEventListener('click', function(){
  moveItemDown();
});

for (var i = 0; i < list.children.length; i++) {
  list.children[i].value = i;
  list.children[i].addEventListener('click', function(e){
    removeSelected();
    e.target.classList += 'selected';
    selected = e.target;
  });
}


function removeSelected(){
  for (var i = 0; i < list.children.length; i++) {
    list.children[i].classList = '';
  }
}


function moveItemUp(){
  var currentItem = '';
  currentItem = document.querySelector('li.selected');
  if (currentItem != null) {
    if (currentItem.value > 0) {
      message = '';
      var previousItem = currentItem.previousSibling.previousSibling;
      var swapSpace = previousItem.innerHTML;
      previousItem.innerHTML = currentItem.innerHTML;
      currentItem.innerHTML = swapSpace;
      currentItem.classList = '';
      previousItem.classList += 'selected';
    }
    else{
      message = 'Unable to Move Up any further';
    }
  }
  else{
    message = 'You must select an item first';
  }
  updateMessage(message);
}

function moveItemDown(){
  var currentItem = '';
  currentItem = document.querySelector('li.selected');
  if (currentItem != null) {
    if (currentItem.value < list.children.length - 1) {
      message = '';
      var nextItem = currentItem.nextSibling.nextSibling;
      var swapSpace = nextItem.innerHTML;
      nextItem.innerHTML = currentItem.innerHTML;
      currentItem.innerHTML = swapSpace;
      currentItem.classList = '';
      nextItem.classList += 'selected';
    }
    else{
      message = 'Unable to Move Down any further';
    }
  }
  else{
    message = 'You must select an item first';
  }
  updateMessage(message);
}

function updateMessage(message){
  if (message == '') {
    document.getElementById('messageBox').classList = 'hidden';
  }
  else{
    document.getElementById('messageBox').classList = '';
    document.getElementById('messageBox').innerHTML = message;
  }
}
