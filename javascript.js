const box = document.querySelector('.box');
let btn = document.querySelector('.btn');
let btnClear = document.querySelector('.btnClear');

btn.addEventListener("click", () => {

    while(box.hasChildNodes()){
        box.removeChild(box.firstChild);
    }

    let StringNumberPerSide = prompt("Please enter the number of squares in one side ");
    let numberPerSide = parseInt(StringNumberPerSide);

    if(numberPerSide>64 || numberPerSide < 2 || typeof numberPerSide != "number")
    {
        numberPerSide = 0;
        alert("Wrong input !!");
    }

    for(let j = 1; j<=numberPerSide; j++){
        const container  = document.createElement('div');
        container.classList.add('container');
        box.appendChild(container);

        for(let i = 1; i<=numberPerSide; i++){
            const div = document.createElement('div');
            container.appendChild(div);
            div.addEventListener('mouseover',function(e){
                e.target.style.background="red";
            });
        }
    }
});
