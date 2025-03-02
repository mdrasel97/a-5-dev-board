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


// complete button alert function 

// const buttons = document.querySelectorAll('.btn-completed');
            
//         buttons.forEach(button =>{
//             button.addEventListener('click', function(){
//                 alert('board updated succesfull');
//             const taskNumber = document.getElementById('task assigned').innerText;
//             const convertedTaskNumber = parseInt(taskNumber);
//             const countPlus = document.getElementById('count').innerText;
//             const convertedCountPlus = parseInt(countPlus)

//             // console.log(convertedCountPlus, convertedTaskNumber)
//             if(convertedTaskNumber > 0){
//                 taskNumber.innerText = convertedTaskNumber-1;
//                 countPlus.innerText = convertedCountPlus +1;
//             }
//             })
//         });


        // kdjkdj
    // const completedButtons = document.querySelectorAll('.btn-completed'); 
    // const taskCountElement = document.getElementById('task-assigned'); 
    // const navbarCountElement = document.querySelector('.bg-blue-600'); 
    // const activityLogContainer = document.getElementById('activityLogContainer'); 
    // const clearHistoryButton = document.getElementById('clear-history-btn'); 

    // completedButtons.forEach(button => {
    //     button.addEventListener('click', function() {
            
    //         const taskName = button.parentElement.parentElement.querySelector('h2').textContent;
    // const confirmCompletion = confirm(`Are you sure you want to mark "${taskName}" as completed?`);

            
    //         if (confirmCompletion) {
                
    //             button.disabled = true;

                
    //             let taskCount = parseInt(taskCountElement.textContent);
    //             taskCountElement.textContent = taskCount - 1;

                
    //             let navbarCount = parseInt(navbarCountElement.textContent.trim());
    //             navbarCountElement.textContent = ` ${navbarCount + 1} `;

                
    //             const now = new Date();
    //             const timeString = now.toLocaleTimeString();
    //             const logEntry = document.createElement('p');
    //             logEntry.textContent = `You have completed the task "${taskName}" at ${timeString}`
                
                
    //             activityLogContainer.appendChild(logEntry);
    //         }
    //     });
    // });

    
    // clearHistoryButton.addEventListener('click', function() {
        
    //     activityLogContainer.innerHTML = '';
    // });
const completedButtons = document.querySelectorAll('.btn-completed'); 
const taskCountElement = document.getElementById('task assigned'); 
const navbarCountElement = document.querySelector('#count'); 
const activityLogContainer = document.getElementById('activityLogContainer'); 
const clearHistoryButton = document.querySelector('#clear-history-btn'); 

completedButtons.forEach(button => {
    button.addEventListener('click', function() {
        const taskTitleElement = button.closest('.task-item')?.querySelector('#task-title-name');
        const taskName = taskTitleElement ? taskTitleElement.textContent : 'this task';
        
        const confirmCompletion = confirm(`Board Updated succesfully "${taskName}" completed?`);

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
            logEntry.textContent = `You have completed the task "${taskName}" at ${timeString}
            `;
            activityLogContainer.appendChild(logEntry);
        }
    });
});

if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', function() {
        activityLogContainer.innerHTML = '';
    });
}
 


