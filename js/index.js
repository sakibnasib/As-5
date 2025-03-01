document.getElementById("new-tab").addEventListener("click",function(){
    window.location.href="./blog.html"
});


function completeTask(taskname, button) {
    alert(taskname);

    let now = new Date();
    let timestring = now.toLocaleTimeString();

    let taskCount = document.getElementById("count-task");
    let numberCount = document.getElementById("number-count");
    let container = document.getElementById("container");
    

    let currentCount = parseInt(taskCount.textContent) || 0;
    taskCount.textContent = currentCount - 1;
    let currentNumber = parseInt(numberCount.textContent) || 0;
    numberCount.textContent = currentNumber + 1;

    let taskInfo = document.createElement("p");
    taskInfo.classList.add("bg-[#F4F7FF]")
    taskInfo.classList.add("mt-2");
    taskInfo.classList.add("font-semibold")
    taskInfo.textContent = `You have completed the Task ${taskname} at ${timestring}`;
    container.appendChild(taskInfo);

    button.disabled = true;
    button.style.backgroundColor = "gray";
}

 document.getElementById("clearBtn").addEventListener("click",function(){
    const hide=document.getElementById("container");
    hide.classList.add("hidden")
 })


// date
let today=new Date();
let formatteDate=today.toLocaleDateString();
document.getElementById("date").innerText=formatteDate;

const change = document.getElementById("color");
let randomNum = function () {
    return Math.floor(Math.random() * 256);
};
let changeColor = function () {
    let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
};
if (change) {
    change.addEventListener("click", changeColor);
}






