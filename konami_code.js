const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0

function init() {}
  
function onKeyDown(event) {
    if (event.keyCode === code[tracker]){
      tracker++
    }  else {
      tracker = 0 
    }
    if (tracker === 9) {
      alert('nice jerb')
    }
  }

document.addEventListener('keydown', onKeyDown)

init() 