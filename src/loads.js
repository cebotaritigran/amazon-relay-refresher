

let getAllLoadsButton = document.createElement('button');

topBody.appendChild(getAllLoadsButton)
getAllLoadsButton.innerText = 'Get all loads';

getAllLoadsButton.addEventListener("click", () => {
    getLoads();
})

function workOpportunityFromJson(json) {
    var workOpportunity = new WorkOpportunity(
        json['id'],
        json['version'],
        json['entityType'],
        json['operatorIds'],
        json['startTime'],
        json['endTime'],
        json['expirationTime'],
        json['expectedArrivalForNextStop'],
        json['stopCount'],
        json['isRetendered'],
        json['isUnaccepted'],
        json['businessType'],
        json['contractId'],
        json['payout'],
        json['transitOperatorType'],
        json['totalDuration'],
        json['tourState'],
        json['firstPickupTime'],
        json['lastDeliveryTime'],
        json['totalDistance'],
        json['loads'],
        json['aggregatedCostItems'],
        json['workType'],
        json['workOpportunityOptionId'],
        json['workOpportunityType'],
        json['deadhead'],
        json['createdAtTime'],
        json['endPriorityTime'],
        json['relevanceScore'],
        json['carrierSpecificShipperAccounts'],
        json['startLocation'],
        json['endLocation'],
        json['powerType'],
        json['shouldShowPriorityBadge'],
        json['workOpportunityArrivalWindows'],
        json['matchDeviationDetails'],
        json['eligibleFeatures'],
        json['carrierIneligibleForWOReasonList'],
        json['carrierIneligibleForWOContextMap'],
        json['oneDayPaymentEligible'],
        json['laportLoad'],
        json['chassisDepotLoad'],
        json['adHocLoad']
    );

    return workOpportunity;
}

class Load {
    constructor(
        versionedLoadId,
        stops,
        loadType,
        equipmentType,
        weight,
        distance,
        payout,
        costItems,
        specialServices,
        loadShipperAccounts,
        shipperReferenceNumbers,
        purchaseOrders,
        isExternalLoad,
        workOpportunityId,
        loadfreightType,
        aggregatedFreightAttributes,
        woLoadCarrierSpecificShipperAccounts,
    ) {
        this.versionedLoadId = versionedLoadId;

        if (Array.isArray(stops)) {
            let _stops = [];
            stops.forEach((stop) => {
                let _stop = stopFromJson(stop);
                _stops.push(_stop);
            });
            this.stops = _stops;
        } else {
            this.stops = null;
        }

        this.loadType = loadType;
        this.equipmentType = equipmentType;
        this.weight = weight;
        this.distance = distance;
        this.payout = payout;
        this.costItems = costItems;
        this.specialServices = specialServices;
        this.loadShipperAccounts = loadShipperAccounts;
        this.shipperReferenceNumbers = shipperReferenceNumbers;
        this.purchaseOrders = purchaseOrders;
        this.isExternalLoad = isExternalLoad;
        this.workOpportunityId = workOpportunityId;
        this.loadfreightType = loadfreightType;
        this.aggregatedFreightAttributes = aggregatedFreightAttributes;
        this.woLoadCarrierSpecificShipperAccounts = woLoadCarrierSpecificShipperAccounts;
    }
}


/// ENUMS

const LoadType = Object.freeze({
    LOADED: Symbol("LOADED"),
    EMPTY: Symbol("EMPTY"),
});

const EquipmentType = Object.freeze({
    FIFTY_THREE_FOOT_TRUCK: Symbol("FIFTY_THREE_FOOT_TRUCK"),
});

const LoadfreightType = Object.freeze({
    TRUCKLOAD: Symbol("TRUCKLOAD"),
});

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


class WorkOpportunity {
    constructor(
        id,
        version,
        entityType,
        operatorIds,
        startTime,
        endTime,
        expirationTime,
        expectedArrivalForNextStop,
        stopCount,
        isRetendered,
        isUnaccepted,
        businessType,
        contractId,
        payout,
        transitOperatorType,
        totalDuration,
        tourState,
        firstPickupTime,
        lastDeliveryTime,
        totalDistance,
        loads,
        aggregatedCostItems,
        workType,
        workOpportunityOptionId,
        workOpportunityType,
        deadhead,
        createdAtTime,
        endPriorityTime,
        relevanceScore,
        carrierSpecificShipperAccounts,
        startLocation,
        endLocation,
        powerType,
        shouldShowPriorityBadge,
        workOpportunityArrivalWindows,
        matchDeviationDetails,
        eligibleFeatures,
        carrierIneligibleForWOReasonList,
        carrierIneligibleForWOContextMap,
        oneDayPaymentEligible,
        laportLoad,
        chassisDepotLoad,
        adHocLoad,
    ) {
        this.id = id;
        this.version = version;
        this.entityType = entityType;
        this.operatorIds = operatorIds;
        this.startTime = startTime;
        this.endTime = endTime;
        this.expirationTime = expirationTime;
        this.expectedArrivalForNextStop = expectedArrivalForNextStop;
        this.stopCount = stopCount;
        this.isRetendered = isRetendered;
        this.isUnaccepted = isUnaccepted;
        this.businessType = businessType;
        this.contractId = contractId;
        this.payout = payout;
        this.transitOperatorType = transitOperatorType;
        this.totalDuration = totalDuration;
        this.tourState = tourState;
        this.firstPickupTime = firstPickupTime;
        this.lastDeliveryTime = lastDeliveryTime;
        this.totalDistance = totalDistance;

        if (Array.isArray(loads)) {
            let _loads = [];
            loads.forEach((load) => {
                let _load = loadFromJson(load);
                _loads.push(_load);
            });
            this.loads = _loads;
        } else {
            this.loads = null;
        }

        this.aggregatedCostItems = aggregatedCostItems;
        this.workType = workType;
        this.workOpportunityOptionId = workOpportunityOptionId;
        this.workOpportunityType = workOpportunityType;
        this.deadhead = deadhead;
        this.createdAtTime = createdAtTime;
        this.endPriorityTime = endPriorityTime;
        this.relevanceScore = relevanceScore;
        this.carrierSpecificShipperAccounts = carrierSpecificShipperAccounts;

        let _startLocation = locationFromJson(startLocation);
        this.startLocation = _startLocation;

        let _endLocation = locationFromJson(endLocation);
        this.endLocation = _endLocation;

        this.powerType = powerType;
        this.shouldShowPriorityBadge = shouldShowPriorityBadge;
        this.workOpportunityArrivalWindows = workOpportunityArrivalWindows;
        this.matchDeviationDetails = matchDeviationDetails;
        this.eligibleFeatures = eligibleFeatures;
        this.carrierIneligibleForWOReasonList = carrierIneligibleForWOReasonList;
        this.carrierIneligibleForWOContextMap = carrierIneligibleForWOContextMap;
        this.oneDayPaymentEligible = oneDayPaymentEligible;
        this.laportLoad = laportLoad;
        this.chassisDepotLoad = chassisDepotLoad;
        this.adHocLoad = adHocLoad;
    }
}


/// ENUMS

const WorkType = Object.freeze({
    SPOT: Symbol("SPOT")
});

const WorkOpportunityType = Object.freeze({
    ONE_WAY: Symbol("ONE_WAY"),
    ROUND_TRIP: Symbol("ROUND_TRIP")
});

const TourState = Object.freeze({
    work_opportunity: Symbol("work-opportunity")
});

const TransitOperatorType = Object.freeze({
    SINGLE_DRIVER: Symbol("SINGLE_DRIVER"),
    TEAM_DRIVER: Symbol("TEAM_DRIVER")
});



function loadFromJson(json) {
    var load = new Load(
        json['versionedLoadId'],
        json['stops'],
        json['loadType'],
        json['equipmentType'],
        json['weight'],
        json['distance'],
        json['payout'],
        json['costItems'],
        json['specialServices'],
        json['loadShipperAccounts'],
        json['shipperReferenceNumbers'],
        json['purchaseOrders'],
        json['isExternalLoad'],
        json['workOpportunityId'],
        json['loadfreightType'],
        json['aggregatedFreightAttributes'],
        json['woLoadCarrierSpecificShipperAccounts']
    );

    return load;
}

function stopFromJson(json) {
    var stop = new Stop(
        json['stopId'],
        json['stopType'],
        json['stopSequenceNumber'],
        json['location'],
        json['locationCode'],
        json['weight'],
        json['actions'],
        json['trailerDetails'],
        json['loadingType'],
        json['unloadingType'],
        json['pickupInstructions'],
        json['deliveryInstructions'],
        json['pickupNumbers'],
        json['deliveryNumbers'],
        json['contacts'],
        json['stopRequirements'],
        json['isVendorLocation'],
        json['dropTrailerTime'],
        json['calculatedEstimateArrivalTime']
    );

    return stop;
}

function locationFromJson(json) {
    var location = new Location(
        json['label'],
        json['stopCode'],
        json['line1'],
        json['line2'],
        json['line3'],
        json['city'],
        json['state'],
        json['country'],
        json['postalCode'],
        json['latitude'],
        json['longitude'],
        json['timeZone'],
        json['vendorCodes']
    );

    return location;
}


async function getLoads() {
    let data;
    try {
        const response = await fetch('https://relay.amazon.com/api/loadboard/search', {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                'Content-type': 'application/json',
                "X-CSRF-Token": 'gwRGVrQv/qISaGXLOMBT00wAvb6w3O+JKErwizHahRsVAAAAAgAAAABktWfxcmF3AAAAAIIXF/5ED9rqj+J7i/USjw==',
                //'Cookie': 'sess-id-owpus=131-7803448-8091924; sess-time-owpus=2082787201l; ubid-owpus=134-5147837-6075628; session-id=142-8586591-8533917; session-id-time=2320328630l; session-token=p3Wt5SIrsV+geO4DFf9rG5WMUltXrDe0uXyLZV/pQNfEKNaSUyLUpRcLnhfqB9+phppsIridRf42lJr7VLViDZxUZFEFFN5c4FWMryIQf/n1IdqjVcK6nT+w5wrTBm67u3EOLKm6v8G6x1nZpBCTmKfBvcfvz2j3722ECK589ncDJ3nQklON3C+DdUnTzGdxwFwm0EQ7HdfMrXfnWzcngypNNeQnaDc09iH1nNpCzuOcSkNXsDP4nperd5aa7pS2; x-owpus="3MKe?AhXZJn0wg5VZIU1@bJWE7mhCWrRWw8mg9AB8Tkzp0sD70Vp0fhLjSxy0sXi"; at-owpus=Atza|IwEBIIVbhks-VP2LeyN-GESADF5Y3VE8HxV78-NOSMHJH6BD2qscGPXiSYO0X8pd14X9i7a6XetV1V6o6Cm-8Y5QIDzJOhF6pDQXNdyBCzwqX7cNgDr1GhjiQG95nOy7kPmaOoUM9ScQW-ICuYbaTuh_6vLb6NX7kLL4gtXcR2Grizl8hiJ12iVCmTE8LNJj-GlEWsBrDtJ645yEaktNFyj4h5jewB1kKDVySgaK8QnSIT8DRQ; sess-at-owpus="t4NlmegB7Isca0itj4CEH/MePWE47jZNXAIuYGvImns="; sess-token-owpus=kEMgmCxQNEa2HmCehfARveF9XzAzlcxEIPjvm/4jlqiK8Zw1qCC+AxGDriBxp+j5K8NIDXtRyNcggJPGdJZXyzLmGyaixWP9r5CYQHODV8FBcy3Lh9693HV/HORibmNQRIMG85sRBDfMsUY3xRwnVDvDgS1sRU709Mm+5MGRGg0X/f0TJ/+W4SsaMiXcaIEnbzeix5YaSDcwB9OdMwvMAKC0QLIFpP3pfadNkDoET4p72AeZKFOqXe1W8cI0xQvqvLEhcM7y6cc=; csm-hit=tb:1KRC2S5JTA2660T41QBS+s-7THYCVD4K28M00NGMTSM|1689609956446&t:1689609956446&adb:adblk_no'
            },
            body: JSON.stringify({
                "workOpportunityTypeList": [
                    "BLOCK",
                    "ONE_WAY",
                    "ROUND_TRIP"
                ],
                "originCity": {
                    "name": "TRACY",
                    "stateCode": "CA",
                    "country": "US",
                    "latitude": 37.724328,
                    "longitude": -121.444622,
                    "displayValue": "TRACY, CA",
                    "isCityLive": false,
                    "isAnywhere": false,
                    "uniqueKey": 37.724328
                },
                "startCityName": "TRACY",
                "startCityStateCode": "CA",
                "startCityLatitude": 37.724328,
                "startCityLongitude": -121.444622,
                "startCityDisplayValue": "TRACY, CA",
                "isOriginCityLive": false,
                "startCityRadius": 50,
                "destinationCity": null,
                "multiselectDestinationCitiesRadiusFilters": null,
                "exclusionCitiesFilter": null,
                "endCityName": null,
                "endCityStateCode": null,
                "endCityDisplayValue": null,
                "endCityLatitude": null,
                "endCityLongitude": null,
                "isDestinationCityLive": null,
                "endCityRadius": null,
                "startDate": null,
                "endDate": null,
                "minDistance": null,
                "maxDistance": null,
                "minimumDurationInMillis": null,
                "maximumDurationInMillis": null,
                "minPayout": null,
                "minPricePerDistance": null,
                "trailerStatusFilters": [
                    "PROVIDED"
                ],
                "equipmentTypeFilters": [
                    "FIFTY_THREE_FOOT_TRUCK",
                    "SKIRTED_FIFTY_THREE_FOOT_TRUCK",
                    "FIFTY_THREE_FOOT_DRY_VAN",
                    "FIFTY_THREE_FOOT_A5_AIR_TRAILER",
                    "FORTY_FIVE_FOOT_TRUCK"
                ],
                "equipmentTypeFiltersForTags": [
                    "FIFTY_THREE_FOOT_TRUCK"
                ],
                "driverTypeFilters": [],
                "uiiaCertificationsFilter": [],
                "workOpportunityOperatingRegionFilter": [],
                "loadingTypeFilters": [],
                "maximumNumberOfStops": null,
                "workOpportunityAccessType": null,
                "sortByField": "startTime",
                "sortOrder": "asc",
                "visibilityStatusType": "VISIBLE",
                "nextItemToken": 0,
                "resultSize": 50,
                "searchURL": "",
                "isAutoRefreshCall": false,
                "notificationId": "",
                "auditContextMap": "{\"rlbChannel\":\"EXACT_MATCH\",\"isOriginCityLive\":\"false\",\"isDestinationCityLive\":\"false\",\"source\":\"AVAILABLE_WORK\"}"
            })
        })
        data = await response.json();


        // get csrf token


        //let json = JSON.parse(data);
        let json = data;
        let workOpportunities = json['workOpportunities'];

        let _workOpportunities = [];
        if (Array.isArray(workOpportunities)) {
            workOpportunities.forEach((workOpportunity) => {
                let _workOpportunity = workOpportunityFromJson(workOpportunity);
                _workOpportunities.push(_workOpportunity);
            });
        }
        console.log(_workOpportunities);

        console.log(data)
        console.log("hey")
    } catch (error) {
        console.log(error)
    }
    return data; // parses JSON response into native JavaScript objects
}


