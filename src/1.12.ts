//Nullable type | unknown type
{

    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching........');
        } else {
            console.log('There is nothing to search');
        }
    }
    searchName(null);


    //Unknown Type
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed.toFixed(2)} m/s`);
        } else if (typeof value === "string") {
            const [speed, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed.toFixed(2)} m/s`);
        } else {
            console.log('wrong input value');
        }

    }
    getSpeedInMeterPerSecond(`100 km/h`);



    //never is used when a function never returns any type
    const throwError = (message: string): never => {
        throw new Error(message);
    }
    throwError('Error Occurred successfully 🙂');
}