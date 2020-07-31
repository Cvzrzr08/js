
function cCH(){
    console.log('has dado click');
    /*
    if (btn.style.background=="green" ) {
    btn.style.background="red";
    */
    const bg = btn.style.background;

    if (bg =="green" ) {
    btn.style.background = "red";
    }else{
    
    btn.style.background = "green";
    }
    //btn.style.padding = "10px";
    //btn.style.border = "1px solic #ccc";
    return true;


}

window.onload = () => {

    const btn = document.querySelector('#btn');
    //const btn = document.getElementById('btn')


    //Event 'click'
    btn.addEventListener('click', () => {
        cCH();
    
    })


    //Event mauseOver
    btn.addEventListener('mouseover', () => {
        btn.style.background = "yellow";
    })

    //Event mauseout
    btn.addEventListener('mouseout', () => {
        btn.style.background = "black";
    })

}
