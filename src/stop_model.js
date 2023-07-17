class Stop {
    constructor(
        stopId,
        stopType,
        stopSequenceNumber,
        location,
        locationCode,
        weight,
        actions,
        trailerDetails,
        loadingType,
        unloadingType,
        pickupInstructions,
        deliveryInstructions,
        pickupNumbers,
        deliveryNumbers,
        contacts,
        stopRequirements,
        isVendorLocation,
        dropTrailerTime,
        calculatedEstimateArrivalTime,
    ) {
        this.stopId = stopId;
        this.stopType = stopType;
        this.stopSequenceNumber = stopSequenceNumber;
        this.location = location;
        this.locationCode = locationCode;
        this.weight = weight;
        this.actions = actions;
        this.trailerDetails = trailerDetails;
        this.loadingType = loadingType;
        this.unloadingType = unloadingType;
        this.pickupInstructions = pickupInstructions;
        this.deliveryInstructions = deliveryInstructions;
        this.pickupNumbers = pickupNumbers;
        this.deliveryNumbers = deliveryNumbers;
        this.contacts = contacts;
        this.stopRequirements = stopRequirements;
        this.isVendorLocation = isVendorLocation;
        this.dropTrailerTime = dropTrailerTime;
        this.calculatedEstimateArrivalTime = calculatedEstimateArrivalTime;
    }
}


/// ENUMS

const StopType = Object.freeze({
    PICKUP: Symbol("PICKUP"),
    DROPOFF: Symbol("DROPOFF"),
});

const LoadingType = Object.freeze({
    PRELOADED: Symbol("PRELOADED"),
});

const UnloadingType = Object.freeze({
    DROP: Symbol("DROP"),
});
