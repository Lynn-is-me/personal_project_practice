//Variables
let index = 0;
const images = document.querySelectorAll(".descript");

//-------Menu bar--------//
function openOverlay(buttonId){
    var thisId = buttonId;
    var otherId = (buttonId === 'amen_block' ? 'room_block' : 'amen_block')
    var othersubElements = document.getElementById(otherId).querySelectorAll('div');
    var thissubElements = document.getElementById(thisId).querySelectorAll('div')
    
    //close other overlay
    document.getElementById(otherId).style.display = 'none';
    othersubElements.forEach(function(element) {
        element.style.display = 'none';
    });

    //open this overlay
    document.getElementById(thisId).style.display='flex';
    thissubElements.forEach(function(element){
        if (element.classList.contains('overlay_desc')){
            element.style.display='block'
        }
        else element.style.display = 'flex';
    });
}
openOverlay('amen_block')


//-------Amenities image changing--------//
function showImage(imageIndex){
    images.forEach((image, i) => {
        image.style.opacity = i === imageIndex ? 1 : 0;
    });
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
}
