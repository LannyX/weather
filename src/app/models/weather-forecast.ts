export class WeatherForecast {
    date: string;
    temp: number;
    min: number;
    max: number;

    constructor(data: Object) {
        this.date = data['datetime'];
        this.temp = data['temp'];
        this.min = data['min_temp'];
        this.max = data['max_temp'];
    }
}
