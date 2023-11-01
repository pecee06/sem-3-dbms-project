let data = {
    "MP04AB9768":"10:30",
    "MP04AB4069":"10:00",
    "MP04AB7264":"16:45",
    "MP04AB9351":"12:30",
    "MP04AB7861":"11:00",
    "MP04AB7529":"17:00",
    "MP04AB1975":"15:30",
    "MP04AB7526":"7:30",
    "MP04AB9531":"9:00",
    "MP04AB7410":"18:15",
    "MP04AB0817":"12:15",
    "MP04AB8620":"13:00",
    "MP04AB1971":"14:15",
    "MP04AB3945":"20:40",
    "MP04AB7520":"21:00",
    "MP04AB4290":"11:45"
}

function randGenerator(){
    let n = Object.keys(data).length;
    let min = Math.ceil(1);
    let max = Math.floor(n);
    return Math.floor(Math.random() * (max - min) + min);
}

function diff(p,q){
    return Math.abs(p-q);
}

let counter = 0;
Object.keys(data).forEach(key=>{
    if (diff(counter,randGenerator()) < 3){
        let value = data[key];
        $(".container").append(`
        <div>
            <span>${key}</span>
            <span>${value}</span>
        </div>
        `);
        counter++;
    }
});

if (counter == 0){
    alert("No tickets available");
}

$(".container div").on("click",()=>{
    alert("Ticket booked");
})