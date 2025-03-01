// Random bg color function 
document.getElementById('bg-color-btn')
.addEventListener('click', function(event){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    // console.log(bgColor)
    document.body.style.background = bgColor;
})


// new window page add 
document.getElementById('question-page')
       .addEventListener('click', function(){
        window.open("question.html", '_blank')
       });

// show date and time function 
function showDateTime(){
            const now = new Date();
            document.getElementById('new-date')
            .innerHTML = now.toLocaleString();
        }
        showDateTime();
        setInterval(showDateTime, 1000);