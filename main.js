function draw(){
    strokeWeight(13);
    stroke(0);

    if(drawn_sketch==sketch){
        set("answer_holder")
        score= score+1;
          
    }
    function check_sketch(){
    timer_counter= timer_counter+1;
     span("timer")
     console.log(timer_counter);
     if(timer_counter>400){
         timer_counter=0;
         timer_check=completed;

     }
     if(timer_check==completed OR answer_holder==set);
     timer_check= " ";
     answer_holder= " ";
     updateCanvas();
    }
}


function updateCanvas(){
    background("white");
    Math.floor(quick_draw_data_set);
    console.log(results);
}

function setup(){
    canvas= createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth= window.speechSynthesis;
    }