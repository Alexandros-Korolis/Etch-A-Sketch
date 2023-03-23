const containers = document.querySelectorAll('.container');
containers.forEach((container) => {
    for(let i=1; i<=16; i++){
    const div = document.createElement('div');
    container.appendChild(div);

    div.addEventListener('mouseover', function(e){
        e.target.style.background="red";
    })
    
    }
})

