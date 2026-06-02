const show_btn= document.querySelector("#next")
const image= document.querySelectorAll('#imagebox img')

let currentindex=0;

showslide()

    function showsilde(){
        for(i=0;1<image.length;i++){
            image[i].classList.add("hide" )
        }


    function onsilde(directions){
        currentindex= currentindex + directions


    if(image.length<=currentindex){
        currentindex=0
    }
    
    else if(currentindex<0){
        currentindex= image.length-1
    }
    showsilde(currentindex)
    }}