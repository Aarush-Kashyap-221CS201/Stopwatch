const start = () => {
    if (pause){ running=false; pause=false; }
    if (running) return;
    begin=true;
    running=true;
    p.innerText=count+"";
    count++;
    setTimeout(function(){ update();},1000);
};

const update = () => {
    if (pause) return;
    p.innerText=count+"";
    count++;
    setTimeout(function(){ update();},1000);
}

const save = () => {
    if (!begin) return;
    x.innerText+=p.innerText+"\n";
}

const stop = () => {
    running=false;
    pause=true;
}

const reset = () => {
    pause=true;
    running=false;
    p.innerText="Click on Start";
    x.innerText="";
    begin=false;
    count=0;
}

let count=0;
let running=false;
let pause=false;
let begin=false;

let p=document.getElementById("time");
let x=document.getElementById("saved");