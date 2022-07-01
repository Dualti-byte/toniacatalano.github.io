
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

//display random image

function display_random_image(){
     var theImages = [{
        src: "https://i.imgur.com/J4pLmXl.png",
        width: "500",
        height: "500"
    }, {
        src: "https://i.imgur.com/1S3tYrA.png",
        width: "300",
        height: "300"
    }, {
        src: "https://i.imgur.com/LiG59FU.jpg",
        width: "300",
        height: "300"
    },
  
  {
        src: "https://i.imgur.com/VDdn0Hh.png",
        width: "300",
        height: "300"
    },
                      
                      {
        src: "https://i.imgur.com/AGhfQ0H.png",
        width: "300",
        height: "300"
    },{
        src: "https://i.imgur.com/4rFThbv.png",
        width: "300",
        height: "300"
    },{
        src: "https://i.imgur.com/MAnQMTm.jpg",
        width: "300",
        height: "300"
    },{
        src: "https://i.imgur.com/UAhj8Tc.png",
        width: "300",
        height: "300"
    }];
    
  //random_img
  
var preBuffer = [];
for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   

  function getRandomInt(min,max) 
    {
  
imn = Math.floor(Math.random() * (max - min + 1)) + min;
  return preBuffer[imn];
    }  


var newImage = getRandomInt(0, preBuffer.length - 1);
 

var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}

document.body.appendChild(newImage);
}

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


display_random_image()