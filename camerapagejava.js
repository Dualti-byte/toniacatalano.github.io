
//info button

let mouseMoved = false;
const button = document.querySelector('.infoButton');

const mouseMoveHandler = event => {
    clearInterval(loop);
    document.onmousemove = null;
    button.classList.remove('infoButton_isActive');
};

const toggleHandler = event => {    
const classes = button.classList;
if (classes.contains('infoButton_isActive')) {
    classes.remove('infoButton_isActive');
    }
else {
     classes.add('infoButton_isActive');
    }
};

//commentbox

src= 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js'
src= 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'

$(document).ready(function(){ 
 
    $(".primaryContained").on('click', function(){
    $(".comment").addClass("commentClicked");
  });//end click
  $("textarea").on('keyup.enter', function(){
    $(".comment").addClass("commentClicked");
  });//end keyup
  });//End Function
 
new Vue({
    el: "#app",
    data:{
       title: 'Add a comment',
      newItem: '',
      item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem);
        this.newItem = "";
      }
  }
 
  });


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


