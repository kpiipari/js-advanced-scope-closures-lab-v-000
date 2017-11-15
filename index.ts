function produceDrivingRange(blockRange: number) {
    return function(begin: string, end: string): string {
        const distance = Math.abs(parseInt(begin) - parseInt(end));
        if (distance > blockRange) {
            return `${distance - blockRange} blocks out of range`;
        } else {
            return `within range by ${blockRange - distance}`;
        }
    };
}

function produceTipCalculator(tip: number) {
    return function(fare: number) {
        return tip * fare;
    };
}

function createDriver() {
    let DriverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
    };
}
