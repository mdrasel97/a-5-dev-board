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
const currentDate = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayName = days[currentDate.getDay()];
const monthName = months[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();
document.getElementById('new-date').innerText= 
`${dayName},
 ${monthName} ${date}, ${year}
`;


// completed button function 
const completedButtons = document.querySelectorAll('.btn-completed'); 
const taskCountElement = document.getElementById('task-assigned'); 
const navbarCountElement = document.querySelector('#count'); 
const activityLogContainer = document.getElementById('activityLogContainer'); 
const clearHistoryButton = document.querySelector('#clear-history-btn');
let completeTaskCount = 0;
const totalTask = completedButtons.length;

completedButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        
        const titleEliment = event.target.parentNode.parentNode.parentNode.querySelector('.title');
        const taskName = titleEliment.innerText;
        
        const confirmCompletion = confirm(`Board Updated Successfully`);

        if (confirmCompletion) {
            button.disabled = true;

            if (taskCountElement) {
                let taskCount = parseInt(taskCountElement.textContent) || 0;
                taskCountElement.textContent = taskCount > 0 ? taskCount - 1 : 0;
            }

            if (navbarCountElement) {
                let navbarCount = parseInt(navbarCountElement.textContent.trim()) || 0;
                navbarCountElement.textContent = ` ${navbarCount + 1} `;
            }

            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const logEntry = document.createElement('p');
            logEntry.classList.add('p-4', 'rounded-lg', 'border-green-500', 'shadow-lg', 'bg-blue-50', 'mb-2', 'text-md', 'font-semibold');
            logEntry.textContent = `You have completed the task "${taskName}" at ${timeString}
            `;
            activityLogContainer.appendChild(logEntry);
            completeTaskCount++;
            if(completeTaskCount === totalTask){
                alert('Congrats!!! You have completed all the current task!');
            }
        }
        
    });
});

if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', function() {
        activityLogContainer.innerHTML = '';
    });
}

