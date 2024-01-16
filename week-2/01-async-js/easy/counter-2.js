count = 0;

// program to increase counter every 1 second using setTimeout -> it is executed only once, hence we need recursion
function showTime() {

    count++;
    console.log("Counter value increased to " + count)

    setTimeout(showTime, 1000);
}

// calling the function
showTime();
