function ipsBetween(start, end){
    //TODO
    let result = 0;
    const first = start.split(".");
    const last = end.split(".");
    result += (last[0] - first[0])*256*256*256;
    result += (last[1] - first[1])*256*256;
    result += (last[2] - first[2])*256;
    result += (last[3] - first[3]);
    console.log(result);
    return result;

  }


  ipsBetween("150.0.0.0", "150.0.0.1");