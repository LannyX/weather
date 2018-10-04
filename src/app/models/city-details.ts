export class CityDetails {
    cityName: String;
    state: String;
    timeZone: String;

    constructor(cityName: String, state: string, timeZone: string) {
        this.cityName = cityName;
        this.state = state;
        this.timeZone = timeZone;
    }
}
