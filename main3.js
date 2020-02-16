function pedestrianFlowRate(cycleLength, trafficLength, turningLength) {
    let time = cycleLength / 2;
    let RealTime = time - trafficLength - turningLength;
    let str = String((100 - (RealTime / (time / 100))));
    console.log(str.split('.')[0] + "%");
}


pedestrianFlowRate(12, 3, 2);


