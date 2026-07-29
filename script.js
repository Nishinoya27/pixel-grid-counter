const imageInput = document.getElementById("imageInput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const analyzeButton = document.getElementById("analyze");

let uploadedImage = null;

imageInput.addEventListener("change", function(e){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

        const img = new Image();

        img.onload = function(){

            uploadedImage = img;

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img,0,0);

        };

        img.src = event.target.result;

    };

    reader.readAsDataURL(file);

});

analyzeButton.addEventListener("click", analyzeImage);

function analyzeImage(){

    if(uploadedImage == null){

        alert("Upload an image first.");

        return;

    }

    alert("Image loaded successfully.\n\nGrid detection will be added in the next step.");

}
