class Location {
    constructor(
        label,
        stopCode,
        line1,
        line2,
        line3,
        city,
        state,
        country,
        postalCode,
        latitude,
        longitude,
        timeZone,
        vendorCodes,
    ) {
        this.label = label;
        this.stopCode = stopCode;
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
        this.latitude = latitude;
        this.longitude = longitude;
        this.timeZone = timeZone;
        this.vendorCodes = vendorCodes;
    }
}