/*=============================================
              MENU DESAYUNO
=============================================*/

        let esconderDesayunoboton = document.getElementById("esconderDesayunoboton");

        let esconderDesayunoid = document.getElementById("esconderDesayunoid");

        esconderDesayunoboton.addEventListener("click", toggleTextdesayuno);

                    function toggleTextdesayuno (){

                        esconderDesayunoid.classList.toggle("mostrardesayuno");

            }


/*=============================================
        MENU ROOM SERVICE
=============================================*/

/* let esconderRoombtn = document.getElementById("esconderRoombtn");

let esconderRoomid = document.getElementById("esconderRoomid");

        esconderRoombtn.addEventListener("click", toggleTextroom);

        function toggleTextroom (){

            esconderRoomid.classList.toggle("mostrarroom");

     } */

/*=============================================
        MENU QUINCHO
=============================================*/
     
let esconderQuinchobtn = document.getElementById("esconderQuinchobtn");

let esconderQuinchoid = document.getElementById("esconderQuinchoid");
     
esconderQuinchobtn.addEventListener("click", toggleTextquincho);
     
     function toggleTextquincho (){
     
        esconderQuinchoid.classList.toggle("mostrarquincho");
     
    }

/*=============================================
        MENU PANAMBI
=============================================*/

let esconderPanambibtn = document.getElementById("esconderPanambibtn");

let esconderPanambiid = document.getElementById("esconderPanambiid");

esconderPanambibtn.addEventListener("click", toggleTextpanambi);

function toggleTextpanambi (){

    esconderPanambiid.classList.toggle("mostrarpanambi");

    }

/*=============================================
        MENU BEBIDAS
=============================================*/    

let esconderBebidasbtn = document.getElementById("esconderBebidasbtn");

let esconderBebidasid = document.getElementById("esconderBebidasid");

esconderBebidasbtn.addEventListener("click", toggleTextbebidas);

function toggleTextbebidas (){

    esconderBebidasid.classList.toggle("mostrarbebidas");

    }


/*=============================================
        MENU BEBIDAS BOTANICA
=============================================*/    

let esconderbotanicabtn = document.getElementById("esconderbotanicabtn");

let esconderbotanicaid = document.getElementById("esconderbotanicaid");

esconderbotanicabtn.addEventListener("click", toggleTextbotanica);

function toggleTextbotanica (){

    esconderbotanicaid.classList.toggle("mostrarbotanica");

    }


