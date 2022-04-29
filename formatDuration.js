function formatDuration (seconds) {
    // Complete this function
    let year = 0;
    let day = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;

    second = seconds % 60;
    minute = ((seconds - second) / 60) % 60;
    hour = ((seconds - minute*60 - second)/3600) % 3600;
    console.log(hour);


    console.log(hour + " hrs, " + minute + " min, " + second + "sec");

  }


  formatDuration(144000);