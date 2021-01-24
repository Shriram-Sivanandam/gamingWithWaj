import './Checkbox.css';

// (function() {
//   var cbstate;
  
//   window.addEventListener('load', function() {
//     cbstate = JSON.parse(localStorage['CBState'] || '{}');

//     var box = document.querySelector('#checkbox');
//     if (box) box.checked = true;
  
//     var cb = document.getElementsByClassName('checkbox');
  
//     cb[0].addEventListener('click', function(e) {
//       if (this.checked) {
//         cbstate[0] = true;
//       } else if (cbstate[0]) {
//          delete cbstate[0];
//       }
    
//       localStorage.CBState = JSON.stringify(cbstate);
//     });
//   });
// }) ();

(function() { 
  var cbstate; 
    
  window.addEventListener('load', function() { 
    cbstate = JSON.parse(localStorage['CBState'] || '{}'); 
   
    for(var i in cbstate) { 
      var el = document.querySelector('#checkbox'); 
      if (el) el.checked = true; 
    } 
   
    var cb = document.getElementsByClassName('checkbox'); 
   
    for(var i = 0; i < cb.length; i++) { 
   
      cb[i].addEventListener('click', function(evt) { 
        if (this.checked) { 
          cbstate[this.name] = true; 
        } 
     
        else if (cbstate[this.name]) { 
          cbstate[this.name] = false;
          delete cbstate[this.name]; 
        } 
     
        localStorage.CBState = JSON.stringify(cbstate); 
      }); 
    } 
  }); 
})(); 


// (function() {
//   var cbstate;
  
//   window.addEventListener('load', function() {
//     cbstate = JSON.parse(localStorage['CBState'] || '{}');

//     var box = document.querySelector('#checkbox');
//     if (box) box.checked = true;
  
//     var cb = document.getElementsByClassName('checkbox');
  
//     cb[0].addEventListener('click', function(e) {
//       if (this.checked) {
//         cbstate[this.name] = true;
//       } else if (cbstate[this.name]) {
//          delete cbstate[this.name];
//       }
    
//       localStorage.CBState = JSON.stringify(cbstate);
//     });
//   });
// }) ();