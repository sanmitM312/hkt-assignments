count = 0;

// program to increase counter every 1 second using setInterval -> repeated executions
function showTime() {

    count++;
    console.log("Counter value increased to " + count)
}

setInterval(showTime,1000);
