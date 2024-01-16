
setInterval(()=>{
    const time = new Date();
    console.log(time.toLocaleTimeString('en-GB').toLocaleUpperCase() + " " +time.toLocaleTimeString().toLocaleUpperCase());
},1000);