let getAllLoadsButton = document.createElement('button');

topBody.appendChild(getAllLoadsButton)
getAllLoadsButton.innerText = 'Get all loads';

getAllLoadsButton.addEventListener("click", () => {
    getLoads();
})

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

const jsonString = `{
	"searchAuditId": "2919ba09-3f2a-457e-9cf9-9a51da8277bc",
	"workOpportunities": [
		{
			"id": "115d4211-5942-4691-bdf7-8255d94bfa2a",
			"version": 26,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 3,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 880.7664145675166,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 36120000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T15:45:00Z",
			"lastDeliveryTime": "2023-07-17T01:47:00Z",
			"totalDistance": {
				"value": 376.91940283193173,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-26c49435-e1c8-dafb-a107-bd339ca41e7c",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "MCE1",
								"stopCode": "MCE1",
								"line1": "3200 Fulkerth Road",
								"line2": null,
								"line3": null,
								"city": "TURLOCK",
								"state": "California",
								"country": "US",
								"postalCode": "95380-9684",
								"latitude": 37.5026581,
								"longitude": -120.889368,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "MCE1",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T15:45:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LAX5-TWI",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "LAX5",
								"stopCode": "LAX5",
								"line1": "6400 Valley View Street",
								"line2": null,
								"line3": null,
								"city": "BUENA PARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "90620",
								"latitude": 33.8671,
								"longitude": -118.028173,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LAX5",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T23:24:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T23:25:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LAX5-TWI",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 323.9307314060302,
						"unit": "miles"
					},
					"payout": {
						"value": 756.9451366130411,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 136.0509071905327,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 620.8942294225084,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"OutboundAmazonManaged"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "115d4211-5942-4691-bdf7-8255d94bfa2a",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				},
				{
					"versionedLoadId": {
						"id": "tr-08c4ad53-091b-8c19-9e31-76c555cb8789",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 2,
							"location": {
								"label": "LAX5",
								"stopCode": "LAX5",
								"line1": "6400 Valley View Street",
								"line2": null,
								"line3": null,
								"city": "BUENA PARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "90620",
								"latitude": 33.8671,
								"longitude": -118.028173,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LAX5",
							"weight": {
								"value": 0,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T23:24:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T23:25:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SBD2",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 3,
							"location": {
								"label": "SBD2",
								"stopCode": "SBD2",
								"line1": "1494 S WATERMAN AVE",
								"line2": null,
								"line3": null,
								"city": "SAN BERNARDINO",
								"state": "California",
								"country": "US",
								"postalCode": "92408-2805",
								"latitude": 34.072801,
								"longitude": -117.281212,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SBD2",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:17:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:47:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SBD2",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 52.98867142590154,
						"unit": "miles"
					},
					"payout": {
						"value": 123.8212779544754,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 22.25524199887865,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 101.5660359555968,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"FleetManagementEquipmentRepositioning"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "115d4211-5942-4691-bdf7-8255d94bfa2a",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 158.3061491894114,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 722.4602653781052,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.03139974434009,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T17:58:36.018Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "MCE1",
				"stopCode": "MCE1",
				"line1": "3200 Fulkerth Road",
				"line2": null,
				"line3": null,
				"city": "TURLOCK",
				"state": "California",
				"country": "US",
				"postalCode": "95380-9684",
				"latitude": 37.5026581,
				"longitude": -120.889368,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SBD2",
				"stopCode": "SBD2",
				"line1": "1494 S WATERMAN AVE",
				"line2": null,
				"line3": null,
				"city": "SAN BERNARDINO",
				"state": "California",
				"country": "US",
				"postalCode": "92408-2805",
				"latitude": 34.072801,
				"longitude": -117.281212,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "c526d1ef-e93e-4b47-ac49-b1587fbbf25f",
			"version": 3,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 4,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 668.1930575419996,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 29040000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T15:47:00Z",
			"lastDeliveryTime": "2023-07-16T23:51:00Z",
			"totalDistance": {
				"value": 183.9606647966282,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-08c4af92-6eae-56f4-9b88-8eb9f87affd0",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SMF3",
								"stopCode": "SMF3",
								"line1": "3923 B Street",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "CA",
								"country": "US",
								"postalCode": "95206",
								"latitude": 37.913946,
								"longitude": -121.251707,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SMF3",
							"weight": {
								"value": 0,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T15:47:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:17:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "KSMF",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "KSMF",
								"stopCode": "KSMF",
								"line1": "6651 Lindbergh Drive",
								"line2": null,
								"line3": null,
								"city": "SACRAMENTO",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "95837",
								"latitude": 38.686983,
								"longitude": -121.595926,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "KSMF",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T18:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T19:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "KSMF",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 62.986531633470975,
						"unit": "miles"
					},
					"payout": {
						"value": 219.5389261431467,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 26.45434328605781,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 193.0845828570889,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"FleetManagementEquipmentRepositioning"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "c526d1ef-e93e-4b47-ac49-b1587fbbf25f",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				},
				{
					"versionedLoadId": {
						"id": "tr-90c4943e-58da-374d-0430-525695e04e97",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 2,
							"location": {
								"label": "KSMF",
								"stopCode": "KSMF",
								"line1": "6651 Lindbergh Drive",
								"line2": null,
								"line3": null,
								"city": "SACRAMENTO",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "95837",
								"latitude": 38.686983,
								"longitude": -121.595926,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "KSMF",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T18:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T19:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "TCY9",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 3,
							"location": {
								"label": "TCY9",
								"stopCode": "TCY9",
								"line1": "4500 Wilbur Ave",
								"line2": null,
								"line3": null,
								"city": "OAKLEY",
								"state": "California",
								"country": "US",
								"postalCode": "94561",
								"latitude": 38.0117003,
								"longitude": -121.745242,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "TCY9",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T21:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T21:31:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "TCY9",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 70.9848226439381,
						"unit": "miles"
					},
					"payout": {
						"value": 247.4168894772198,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 29.813625510454,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 217.6032639667658,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"OutboundAirShuttle"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "c526d1ef-e93e-4b47-ac49-b1587fbbf25f",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				},
				{
					"versionedLoadId": {
						"id": "tr-b0c4af92-6ef4-7c46-e88e-297654c63b5d",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 3,
							"location": {
								"label": "TCY9",
								"stopCode": "TCY9",
								"line1": "4500 Wilbur Ave",
								"line2": null,
								"line3": null,
								"city": "OAKLEY",
								"state": "California",
								"country": "US",
								"postalCode": "94561",
								"latitude": 38.0117003,
								"longitude": -121.745242,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "TCY9",
							"weight": {
								"value": 0,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T21:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T21:31:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SMF3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 4,
							"location": {
								"label": "SMF3",
								"stopCode": "SMF3",
								"line1": "3923 B Street",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "CA",
								"country": "US",
								"postalCode": "95206",
								"latitude": 37.913946,
								"longitude": -121.251707,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SMF3",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T23:21:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T23:51:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SMF3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 49.989310519219124,
						"unit": "miles"
					},
					"payout": {
						"value": 201.237241921633,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Toll Charge",
							"monetaryAmount": {
								"value": 27,
								"unit": "USD"
							}
						},
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 20.99551041807203,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 153.241731503561,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"FleetManagementEquipmentRepositioning"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "c526d1ef-e93e-4b47-ac49-b1587fbbf25f",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 77.26347921458384,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 563.9295783274157,
						"unit": "USD"
					}
				},
				{
					"name": "Toll Charge",
					"monetaryAmount": {
						"value": 27,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ROUND_TRIP",
			"deadhead": {
				"value": 16.80811603296804,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T14:55:35.970Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SMF3",
				"stopCode": "SMF3",
				"line1": "3923 B Street",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "CA",
				"country": "US",
				"postalCode": "95206",
				"latitude": 37.913946,
				"longitude": -121.251707,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SMF3",
				"stopCode": "SMF3",
				"line1": "3923 B Street",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "CA",
				"country": "US",
				"postalCode": "95206",
				"latitude": 37.913946,
				"longitude": -121.251707,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "6812e16b-dafc-486d-be21-6f4558b53474",
			"version": 56,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 3877.720897677291,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 130860000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T15:50:00Z",
			"lastDeliveryTime": "2023-07-18T04:11:00Z",
			"totalDistance": {
				"value": 1689.6387353713687,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-8ec493cb-77d0-e3cb-b97c-b18adb86eb31",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DCK1",
								"stopCode": "DCK1",
								"line1": "2403 West Louise Ave",
								"line2": null,
								"line3": null,
								"city": "MANTECA",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "95337",
								"latitude": 37.812575,
								"longitude": -121.260709,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DCK1",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T15:50:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:20:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAT9-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "SAT9",
								"stopCode": "SAT9",
								"line1": "1214 N FOSTER ROAD",
								"line2": null,
								"line3": null,
								"city": "SAN ANTONIO",
								"state": "Texas",
								"country": "US",
								"postalCode": "78219-4735",
								"latitude": 29.440309,
								"longitude": -98.35992,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "SAT9",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T03:56:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T04:11:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAT9-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1689.6387353713687,
						"unit": "miles"
					},
					"payout": {
						"value": 3877.720897677291,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 709.6482688559747,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3168.072628821316,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "6812e16b-dafc-486d-be21-6f4558b53474",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 709.6482688559747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3168.072628821316,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 11.750631178913155,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-13T18:50:26.578Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DCK1",
				"stopCode": "DCK1",
				"line1": "2403 West Louise Ave",
				"line2": null,
				"line3": null,
				"city": "MANTECA",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "95337",
				"latitude": 37.812575,
				"longitude": -121.260709,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SAT9",
				"stopCode": "SAT9",
				"line1": "1214 N FOSTER ROAD",
				"line2": null,
				"line3": null,
				"city": "SAN ANTONIO",
				"state": "Texas",
				"country": "US",
				"postalCode": "78219-4735",
				"latitude": 29.440309,
				"longitude": -98.35992,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "1dbdd7b7-a7e6-47ac-a0d9-d424826b6a63",
			"version": 98,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 4495.318760254082,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 134040000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T15:51:00Z",
			"lastDeliveryTime": "2023-07-18T05:05:00Z",
			"totalDistance": {
				"value": 1683.6399851138879,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-1ec493cb-757e-2795-b063-9f97bd521231",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DXC5",
								"stopCode": "DXC5",
								"line1": "44308 Pacific Commons Blvd",
								"line2": null,
								"line3": null,
								"city": "FREMONT",
								"state": "California",
								"country": "US",
								"postalCode": "94538",
								"latitude": 37.4979547,
								"longitude": -121.967415,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DXC5",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T15:51:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:21:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "DFW7-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "DFW7",
								"stopCode": "DFW7",
								"line1": "700 Westport Parkway",
								"line2": null,
								"line3": null,
								"city": "FORT WORTH",
								"state": "TEXAS",
								"country": "US",
								"postalCode": "76177",
								"latitude": 32.9699091,
								"longitude": -97.3366898,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "DFW7",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T04:50:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T05:05:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "DFW7-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1683.6399851138879,
						"unit": "miles"
					},
					"payout": {
						"value": 4495.318760254082,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 707.1287937478329,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3788.189966506248,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "1dbdd7b7-a7e6-47ac-a0d9-d424826b6a63",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 707.1287937478329,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3788.189966506248,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 32.6101160971862,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T01:51:24.124Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DXC5",
				"stopCode": "DXC5",
				"line1": "44308 Pacific Commons Blvd",
				"line2": null,
				"line3": null,
				"city": "FREMONT",
				"state": "California",
				"country": "US",
				"postalCode": "94538",
				"latitude": 37.4979547,
				"longitude": -121.967415,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "DFW7",
				"stopCode": "DFW7",
				"line1": "700 Westport Parkway",
				"line2": null,
				"line3": null,
				"city": "FORT WORTH",
				"state": "TEXAS",
				"country": "US",
				"postalCode": "76177",
				"latitude": 32.9699091,
				"longitude": -97.3366898,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "55ae6466-b209-47d0-8547-15d003d525a0",
			"version": 29,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 3903.065478707862,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 211020000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T15:56:00Z",
			"lastDeliveryTime": "2023-07-19T02:33:00Z",
			"totalDistance": {
				"value": 1689.6387353713687,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-28c4ad8e-4be0-9bd0-2828-86c11ba14db0",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SCK4",
								"stopCode": "SCK4",
								"line1": "6001 S AUSTIN RD",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "California",
								"country": "US",
								"postalCode": "95215",
								"latitude": 37.910758,
								"longitude": -121.190165,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T15:56:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:26:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "FSD1",
								"stopCode": "FSD1",
								"line1": "6700 N Marion Rd",
								"line2": null,
								"line3": null,
								"city": "SIOUX FALLS",
								"state": "South Dakota",
								"country": "US",
								"postalCode": "57107",
								"latitude": 43.62143,
								"longitude": -96.78962,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "FSD1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-19T02:32:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-19T02:33:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1689.6387353713687,
						"unit": "miles"
					},
					"payout": {
						"value": 3903.065478707862,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 709.6482688559747,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3193.417209851887,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInitialPlacement"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "55ae6466-b209-47d0-8547-15d003d525a0",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 709.6482688559747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3193.417209851887,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 18.942450972813983,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T20:53:21.074Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SCK4",
				"stopCode": "SCK4",
				"line1": "6001 S AUSTIN RD",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "California",
				"country": "US",
				"postalCode": "95215",
				"latitude": 37.910758,
				"longitude": -121.190165,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "FSD1",
				"stopCode": "FSD1",
				"line1": "6700 N Marion Rd",
				"line2": null,
				"line3": null,
				"city": "SIOUX FALLS",
				"state": "South Dakota",
				"country": "US",
				"postalCode": "57107",
				"latitude": 43.62143,
				"longitude": -96.78962,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "12093caa-15d4-4479-b0ee-e38016fe8001",
			"version": 16,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 4286.275543890088,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 211020000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T15:56:00Z",
			"lastDeliveryTime": "2023-07-19T02:33:00Z",
			"totalDistance": {
				"value": 1689.6387353713687,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-08c4ad8e-4c62-ad62-e595-5ea3f5a4e209",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SCK4",
								"stopCode": "SCK4",
								"line1": "6001 S AUSTIN RD",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "California",
								"country": "US",
								"postalCode": "95215",
								"latitude": 37.910758,
								"longitude": -121.190165,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T15:56:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:26:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "FSD1",
								"stopCode": "FSD1",
								"line1": "6700 N Marion Rd",
								"line2": null,
								"line3": null,
								"city": "SIOUX FALLS",
								"state": "South Dakota",
								"country": "US",
								"postalCode": "57107",
								"latitude": 43.62143,
								"longitude": -96.78962,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "FSD1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-19T02:32:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-19T02:33:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1689.6387353713687,
						"unit": "miles"
					},
					"payout": {
						"value": 4286.275543890088,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 709.6482688559747,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3576.627275034113,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInitialPlacement"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "12093caa-15d4-4479-b0ee-e38016fe8001",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 709.6482688559747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3576.627275034113,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 18.942450972813983,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T20:53:21.053Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SCK4",
				"stopCode": "SCK4",
				"line1": "6001 S AUSTIN RD",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "California",
				"country": "US",
				"postalCode": "95215",
				"latitude": 37.910758,
				"longitude": -121.190165,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "FSD1",
				"stopCode": "FSD1",
				"line1": "6700 N Marion Rd",
				"line2": null,
				"line3": null,
				"city": "SIOUX FALLS",
				"state": "South Dakota",
				"country": "US",
				"postalCode": "57107",
				"latitude": 43.62143,
				"longitude": -96.78962,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "91fd967c-0aff-4367-9c20-d8eee84587d6",
			"version": 104,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 3839.90678277968,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 130860000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T15:58:00Z",
			"lastDeliveryTime": "2023-07-18T04:19:00Z",
			"totalDistance": {
				"value": 1689.6387353713687,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-f2c493cb-77d0-b563-6bb5-f89840ad268d",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DCK1",
								"stopCode": "DCK1",
								"line1": "2403 West Louise Ave",
								"line2": null,
								"line3": null,
								"city": "MANTECA",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "95337",
								"latitude": 37.812575,
								"longitude": -121.260709,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DCK1",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T15:58:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:28:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAT9-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "SAT9",
								"stopCode": "SAT9",
								"line1": "1214 N FOSTER ROAD",
								"line2": null,
								"line3": null,
								"city": "SAN ANTONIO",
								"state": "Texas",
								"country": "US",
								"postalCode": "78219-4735",
								"latitude": 29.440309,
								"longitude": -98.35992,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "SAT9",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T04:04:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T04:19:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAT9-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1689.6387353713687,
						"unit": "miles"
					},
					"payout": {
						"value": 3839.90678277968,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 709.6482688559747,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3130.258513923705,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "91fd967c-0aff-4367-9c20-d8eee84587d6",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 709.6482688559747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3130.258513923705,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 11.750631178913155,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-13T23:58:45.238Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DCK1",
				"stopCode": "DCK1",
				"line1": "2403 West Louise Ave",
				"line2": null,
				"line3": null,
				"city": "MANTECA",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "95337",
				"latitude": 37.812575,
				"longitude": -121.260709,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SAT9",
				"stopCode": "SAT9",
				"line1": "1214 N FOSTER ROAD",
				"line2": null,
				"line3": null,
				"city": "SAN ANTONIO",
				"state": "Texas",
				"country": "US",
				"postalCode": "78219-4735",
				"latitude": 29.440309,
				"longitude": -98.35992,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "2927c641-e15a-485c-97ca-e6706e2aff04",
			"version": 154,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 3877.720897677291,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 130860000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T15:58:00Z",
			"lastDeliveryTime": "2023-07-18T04:19:00Z",
			"totalDistance": {
				"value": 1689.6387353713687,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-f2c493cb-78c2-8508-9ddf-69b0a40602dd",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DCK1",
								"stopCode": "DCK1",
								"line1": "2403 West Louise Ave",
								"line2": null,
								"line3": null,
								"city": "MANTECA",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "95337",
								"latitude": 37.812575,
								"longitude": -121.260709,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DCK1",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T15:58:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:28:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAT9-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "SAT9",
								"stopCode": "SAT9",
								"line1": "1214 N FOSTER ROAD",
								"line2": null,
								"line3": null,
								"city": "SAN ANTONIO",
								"state": "Texas",
								"country": "US",
								"postalCode": "78219-4735",
								"latitude": 29.440309,
								"longitude": -98.35992,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "SAT9",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T04:04:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T04:19:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAT9-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1689.6387353713687,
						"unit": "miles"
					},
					"payout": {
						"value": 3877.720897677291,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 709.6482688559747,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3168.072628821316,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "2927c641-e15a-485c-97ca-e6706e2aff04",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 709.6482688559747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3168.072628821316,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 11.750631178913155,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-11T23:58:48.205Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DCK1",
				"stopCode": "DCK1",
				"line1": "2403 West Louise Ave",
				"line2": null,
				"line3": null,
				"city": "MANTECA",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "95337",
				"latitude": 37.812575,
				"longitude": -121.260709,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SAT9",
				"stopCode": "SAT9",
				"line1": "1214 N FOSTER ROAD",
				"line2": null,
				"line3": null,
				"city": "SAN ANTONIO",
				"state": "Texas",
				"country": "US",
				"postalCode": "78219-4735",
				"latitude": 29.440309,
				"longitude": -98.35992,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "639ab432-aae6-4436-acf7-6035900dbcd3",
			"version": 12,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1143.721761815751,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 15300000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-16T20:15:00Z",
			"totalDistance": {
				"value": 474.89848311738353,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-fec494b3-83e2-6f76-67c5-dfb4a1a8826d",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SMF3",
								"stopCode": "SMF3",
								"line1": "3923 B Street",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "CA",
								"country": "US",
								"postalCode": "95206",
								"latitude": 37.913946,
								"longitude": -121.251707,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SMF3",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAN3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "SAN3",
								"stopCode": "SAN3",
								"line1": "6971 OTAY MESA RD",
								"line2": null,
								"line3": null,
								"city": "SAN DIEGO",
								"state": "California",
								"country": "US",
								"postalCode": "92154-5722",
								"latitude": 32.565096,
								"longitude": -116.933453,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SAN3",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T20:14:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T20:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAN3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 474.89848311738353,
						"unit": "miles"
					},
					"payout": {
						"value": 1143.721761815751,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 199.4573629093011,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 944.2643989064495,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInitialPlacement"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "639ab432-aae6-4436-acf7-6035900dbcd3",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 199.4573629093011,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 944.2643989064495,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 16.80811603296804,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T05:17:52.251Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SMF3",
				"stopCode": "SMF3",
				"line1": "3923 B Street",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "CA",
				"country": "US",
				"postalCode": "95206",
				"latitude": 37.913946,
				"longitude": -121.251707,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SAN3",
				"stopCode": "SAN3",
				"line1": "6971 OTAY MESA RD",
				"line2": null,
				"line3": null,
				"city": "SAN DIEGO",
				"state": "California",
				"country": "US",
				"postalCode": "92154-5722",
				"latitude": 32.565096,
				"longitude": -116.933453,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "5a765f50-f538-4b71-b55e-e24ca993ea3c",
			"version": 35,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1020.556840219257,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 15300000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-16T20:15:00Z",
			"totalDistance": {
				"value": 474.89848311738353,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-f6c494b3-83e2-5751-e36e-251d15923685",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SMF3",
								"stopCode": "SMF3",
								"line1": "3923 B Street",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "CA",
								"country": "US",
								"postalCode": "95206",
								"latitude": 37.913946,
								"longitude": -121.251707,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SMF3",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAN3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "SAN3",
								"stopCode": "SAN3",
								"line1": "6971 OTAY MESA RD",
								"line2": null,
								"line3": null,
								"city": "SAN DIEGO",
								"state": "California",
								"country": "US",
								"postalCode": "92154-5722",
								"latitude": 32.565096,
								"longitude": -116.933453,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SAN3",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T20:14:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T20:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAN3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 474.89848311738353,
						"unit": "miles"
					},
					"payout": {
						"value": 1020.556840219257,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 199.4573629093011,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 821.0994773099561,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInitialPlacement"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "5a765f50-f538-4b71-b55e-e24ca993ea3c",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 199.4573629093011,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 821.0994773099561,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 16.80811603296804,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T05:18:09.360Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SMF3",
				"stopCode": "SMF3",
				"line1": "3923 B Street",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "CA",
				"country": "US",
				"postalCode": "95206",
				"latitude": 37.913946,
				"longitude": -121.251707,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SAN3",
				"stopCode": "SAN3",
				"line1": "6971 OTAY MESA RD",
				"line2": null,
				"line3": null,
				"city": "SAN DIEGO",
				"state": "California",
				"country": "US",
				"postalCode": "92154-5722",
				"latitude": 32.565096,
				"longitude": -116.933453,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "a1b57cc5-34bc-4fff-82d1-c6ca7672a6db",
			"version": 12,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1143.721761815751,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 15300000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-16T20:15:00Z",
			"totalDistance": {
				"value": 474.89848311738353,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-fcc4aa17-1736-d4d7-1b83-f2dc038e20e5",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SMF3",
								"stopCode": "SMF3",
								"line1": "3923 B Street",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "CA",
								"country": "US",
								"postalCode": "95206",
								"latitude": 37.913946,
								"longitude": -121.251707,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SMF3",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAN3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "SAN3",
								"stopCode": "SAN3",
								"line1": "6971 OTAY MESA RD",
								"line2": null,
								"line3": null,
								"city": "SAN DIEGO",
								"state": "California",
								"country": "US",
								"postalCode": "92154-5722",
								"latitude": 32.565096,
								"longitude": -116.933453,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SAN3",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T20:14:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T20:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAN3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 474.89848311738353,
						"unit": "miles"
					},
					"payout": {
						"value": 1143.721761815751,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 199.4573629093011,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 944.2643989064495,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInitialPlacement"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "a1b57cc5-34bc-4fff-82d1-c6ca7672a6db",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 199.4573629093011,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 944.2643989064495,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 16.80811603296804,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T05:17:49.121Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SMF3",
				"stopCode": "SMF3",
				"line1": "3923 B Street",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "CA",
				"country": "US",
				"postalCode": "95206",
				"latitude": 37.913946,
				"longitude": -121.251707,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SAN3",
				"stopCode": "SAN3",
				"line1": "6971 OTAY MESA RD",
				"line2": null,
				"line3": null,
				"city": "SAN DIEGO",
				"state": "California",
				"country": "US",
				"postalCode": "92154-5722",
				"latitude": 32.565096,
				"longitude": -116.933453,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "61595715-afe9-49ea-89ea-b3655ef2db28",
			"version": 8,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 3,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 811.4149554721092,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 37800000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-17T02:30:00Z",
			"totalDistance": {
				"value": 370.92068161115265,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-7ec4ae9c-5dfb-5b5e-cab2-c6449393921f",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "CNO5-CART-A",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "CNO5",
								"stopCode": "CNO5",
								"line1": "8601 MERRILL AVE",
								"line2": null,
								"line3": null,
								"city": "CHINO",
								"state": "California",
								"country": "US",
								"postalCode": "91710-8508",
								"latitude": 33.9828432,
								"longitude": -117.616464,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "CNO5",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:09:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:10:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "CNO5-CART-A",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 364.921963945888,
						"unit": "miles"
					},
					"payout": {
						"value": 798.2923406691064,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 153.267224857273,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 645.0251158118333,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"OutboundAmazonManaged"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "61595715-afe9-49ea-89ea-b3655ef2db28",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				},
				{
					"versionedLoadId": {
						"id": "tr-28c4aec2-de90-d662-f9b9-c0e21db4ebf5",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 2,
							"location": {
								"label": "CNO5",
								"stopCode": "CNO5",
								"line1": "8601 MERRILL AVE",
								"line2": null,
								"line3": null,
								"city": "CHINO",
								"state": "California",
								"country": "US",
								"postalCode": "91710-8508",
								"latitude": 33.9828432,
								"longitude": -117.616464,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "CNO5",
							"weight": {
								"value": 0,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:09:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:10:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SLA6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 3,
							"location": {
								"label": "SLA6",
								"stopCode": "SLA6",
								"line1": "5250 GOODMAN WAY",
								"line2": null,
								"line3": null,
								"city": "EASTVALE",
								"state": "CA",
								"country": "US",
								"postalCode": "91752-5088",
								"latitude": 33.99399,
								"longitude": -117.553941,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SLA6",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T02:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T02:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SLA6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 5.9987176652646035,
						"unit": "miles"
					},
					"payout": {
						"value": 13.12261480300288,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 2.519461419411133,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 10.60315338359175,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"FleetManagementEquipmentRepositioning"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "61595715-afe9-49ea-89ea-b3655ef2db28",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 155.7866862766841,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 655.6282691954251,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T07:21:49.499Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SLA6",
				"stopCode": "SLA6",
				"line1": "5250 GOODMAN WAY",
				"line2": null,
				"line3": null,
				"city": "EASTVALE",
				"state": "CA",
				"country": "US",
				"postalCode": "91752-5088",
				"latitude": 33.99399,
				"longitude": -117.553941,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "d9fe5bd9-7daa-4736-8f54-1300aabba767",
			"version": 165,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 858.4244970128841,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 33300000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-17T01:15:00Z",
			"totalDistance": {
				"value": 411.91194674322657,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-e0c4a7f8-6d7d-36c5-e38b-4c1110d2d904",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK5",
								"stopCode": "OAK5",
								"line1": "38811 Cherry St",
								"line2": null,
								"line3": null,
								"city": "NEWARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "94560-4939",
								"latitude": 37.520342,
								"longitude": -122.013685,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK5",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "LGB3",
								"stopCode": "LGB3",
								"line1": "4950 Goodman Way",
								"line2": null,
								"line3": null,
								"city": "EASTVALE",
								"state": "CA",
								"country": "US",
								"postalCode": "91752",
								"latitude": 33.997184,
								"longitude": -117.553359,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LGB3",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:14:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 411.91194674322657,
						"unit": "miles"
					},
					"payout": {
						"value": 858.4244970128841,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 173.0030176321551,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 685.421479380729,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "d9fe5bd9-7daa-4736-8f54-1300aabba767",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 173.0030176321551,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 685.421479380729,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.183040146281826,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-13T18:54:46.696Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK5",
				"stopCode": "OAK5",
				"line1": "38811 Cherry St",
				"line2": null,
				"line3": null,
				"city": "NEWARK",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "94560-4939",
				"latitude": 37.520342,
				"longitude": -122.013685,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "LGB3",
				"stopCode": "LGB3",
				"line1": "4950 Goodman Way",
				"line2": null,
				"line3": null,
				"city": "EASTVALE",
				"state": "CA",
				"country": "US",
				"postalCode": "91752",
				"latitude": 33.997184,
				"longitude": -117.553359,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "a52d1087-d2c4-45b3-be8a-dd90b096d2c8",
			"version": 31,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 660.9806475847555,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 30660000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-17T00:31:00Z",
			"totalDistance": {
				"value": 329.92944373802305,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-82c4ae3c-e0ff-a8f4-5242-045b2803100e",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "OXR1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "OXR1",
								"stopCode": "OXR1",
								"line1": "3100 Sakioka Drive",
								"line2": null,
								"line3": null,
								"city": "OXNARD",
								"state": "California",
								"country": "US",
								"postalCode": "93030",
								"latitude": 34.2145523,
								"longitude": -119.131196,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OXR1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T00:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T00:31:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "OXR1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 329.92944373802305,
						"unit": "miles"
					},
					"payout": {
						"value": 660.9806475847555,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 138.5703663699697,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 522.4102812147856,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersWarehouseConsumables"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "a52d1087-d2c4-45b3-be8a-dd90b096d2c8",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 138.5703663699697,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 522.4102812147856,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T02:29:32.948Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "OXR1",
				"stopCode": "OXR1",
				"line1": "3100 Sakioka Drive",
				"line2": null,
				"line3": null,
				"city": "OXNARD",
				"state": "California",
				"country": "US",
				"postalCode": "93030",
				"latitude": 34.2145523,
				"longitude": -119.131196,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "a6eb21c6-0bc3-4e2e-a676-cc17a0f94f2c",
			"version": 158,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 858.4244970128841,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 33300000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-17T01:15:00Z",
			"totalDistance": {
				"value": 411.91194674322657,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-8ac4a7f6-24f2-545e-2b03-507cebb06a44",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK5",
								"stopCode": "OAK5",
								"line1": "38811 Cherry St",
								"line2": null,
								"line3": null,
								"city": "NEWARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "94560-4939",
								"latitude": 37.520342,
								"longitude": -122.013685,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK5",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "LGB3",
								"stopCode": "LGB3",
								"line1": "4950 Goodman Way",
								"line2": null,
								"line3": null,
								"city": "EASTVALE",
								"state": "CA",
								"country": "US",
								"postalCode": "91752",
								"latitude": 33.997184,
								"longitude": -117.553359,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LGB3",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:14:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 411.91194674322657,
						"unit": "miles"
					},
					"payout": {
						"value": 858.4244970128841,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 173.0030176321551,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 685.421479380729,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "a6eb21c6-0bc3-4e2e-a676-cc17a0f94f2c",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 173.0030176321551,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 685.421479380729,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.183040146281826,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-13T22:00:19.276Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK5",
				"stopCode": "OAK5",
				"line1": "38811 Cherry St",
				"line2": null,
				"line3": null,
				"city": "NEWARK",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "94560-4939",
				"latitude": 37.520342,
				"longitude": -122.013685,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "LGB3",
				"stopCode": "LGB3",
				"line1": "4950 Goodman Way",
				"line2": null,
				"line3": null,
				"city": "EASTVALE",
				"state": "CA",
				"country": "US",
				"postalCode": "91752",
				"latitude": 33.997184,
				"longitude": -117.553359,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "d83e96f8-7e97-48b4-bc13-3eb396a44a32",
			"version": 175,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 858.4244970128841,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 33300000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-17T01:15:00Z",
			"totalDistance": {
				"value": 411.91194674322657,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-2cc4a7f9-c825-2f67-dd17-834b2353c68a",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK5",
								"stopCode": "OAK5",
								"line1": "38811 Cherry St",
								"line2": null,
								"line3": null,
								"city": "NEWARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "94560-4939",
								"latitude": 37.520342,
								"longitude": -122.013685,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK5",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "LGB3",
								"stopCode": "LGB3",
								"line1": "4950 Goodman Way",
								"line2": null,
								"line3": null,
								"city": "EASTVALE",
								"state": "CA",
								"country": "US",
								"postalCode": "91752",
								"latitude": 33.997184,
								"longitude": -117.553359,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LGB3",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:14:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 411.91194674322657,
						"unit": "miles"
					},
					"payout": {
						"value": 858.4244970128841,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 173.0030176321551,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 685.421479380729,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "d83e96f8-7e97-48b4-bc13-3eb396a44a32",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 173.0030176321551,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 685.421479380729,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.183040146281826,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-13T20:48:44.400Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK5",
				"stopCode": "OAK5",
				"line1": "38811 Cherry St",
				"line2": null,
				"line3": null,
				"city": "NEWARK",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "94560-4939",
				"latitude": 37.520342,
				"longitude": -122.013685,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "LGB3",
				"stopCode": "LGB3",
				"line1": "4950 Goodman Way",
				"line2": null,
				"line3": null,
				"city": "EASTVALE",
				"state": "CA",
				"country": "US",
				"postalCode": "91752",
				"latitude": 33.997184,
				"longitude": -117.553359,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "c18f1861-7785-4961-9c0c-56bdef0c8816",
			"version": 71,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 440.6245634237812,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 34260000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-17T01:31:00Z",
			"totalDistance": {
				"value": 316.9322463272011,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-78c4aab7-6c2e-d8a0-20f4-59c3d15c0e86",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK3",
								"stopCode": "OAK3",
								"line1": "255 Park Center Dr",
								"line2": null,
								"line3": null,
								"city": "PATTERSON",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "95363-8876",
								"latitude": 37.470764,
								"longitude": -121.167523,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK3",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "IUSA",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "IUSA",
								"stopCode": "IUSA",
								"line1": "1015 E 236th St",
								"line2": null,
								"line3": null,
								"city": "CARSON",
								"state": "CA",
								"country": "US",
								"postalCode": "90745-6236",
								"latitude": 33.81122,
								"longitude": -118.255152,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "IUSA",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:31:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "IUSA",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 316.9322463272011,
						"unit": "miles"
					},
					"payout": {
						"value": 440.6245634237812,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 133.1115434574245,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 307.5130199663567,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInventoryCorrection"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "c18f1861-7785-4961-9c0c-56bdef0c8816",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 133.1115434574245,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 307.5130199663567,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 23.17428657425594,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T21:52:28.120Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK3",
				"stopCode": "OAK3",
				"line1": "255 Park Center Dr",
				"line2": null,
				"line3": null,
				"city": "PATTERSON",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "95363-8876",
				"latitude": 37.470764,
				"longitude": -121.167523,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "IUSA",
				"stopCode": "IUSA",
				"line1": "1015 E 236th St",
				"line2": null,
				"line3": null,
				"city": "CARSON",
				"state": "CA",
				"country": "US",
				"postalCode": "90745-6236",
				"latitude": 33.81122,
				"longitude": -118.255152,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "cd784037-0694-4920-929c-9551d564f623",
			"version": 82,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 505.4849007510251,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 36060000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-17T02:01:00Z",
			"totalDistance": {
				"value": 329.92944373802305,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-6cc4ad71-f5e2-4cbc-0a23-5e219be85148",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "OXR1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "OXR1",
								"stopCode": "OXR1",
								"line1": "3100 Sakioka Drive",
								"line2": null,
								"line3": null,
								"city": "OXNARD",
								"state": "California",
								"country": "US",
								"postalCode": "93030",
								"latitude": 34.2145523,
								"longitude": -119.131196,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OXR1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T02:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T02:01:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "OXR1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 329.92944373802305,
						"unit": "miles"
					},
					"payout": {
						"value": 505.4849007510251,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 138.5703663699697,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 366.9145343810554,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersWarehouseConsumables"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "cd784037-0694-4920-929c-9551d564f623",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 138.5703663699697,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 366.9145343810554,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T19:06:31.772Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "OXR1",
				"stopCode": "OXR1",
				"line1": "3100 Sakioka Drive",
				"line2": null,
				"line3": null,
				"city": "OXNARD",
				"state": "California",
				"country": "US",
				"postalCode": "93030",
				"latitude": 34.2145523,
				"longitude": -119.131196,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "1a0086d4-7b47-4465-8f05-38a95b1ed8ea",
			"version": 133,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 5256.493636003629,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 129660000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:00:00Z",
			"lastDeliveryTime": "2023-07-18T04:01:00Z",
			"totalDistance": {
				"value": 2085.910173017313,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-f0c4a634-62a2-c76c-c9d1-ef9b0b422f34",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SJC7",
								"stopCode": "SJC7",
								"line1": "188 Mountain House Parkway",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95377",
								"latitude": 37.7071466,
								"longitude": -121.5809152,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SJC7",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LFT1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "LFT1",
								"stopCode": "LFT1",
								"line1": "3550 NE EVANGELINE TRWY",
								"line2": null,
								"line3": null,
								"city": "CARENCRO",
								"state": "Louisiana",
								"country": "US",
								"postalCode": "70520",
								"latitude": 30.3323188,
								"longitude": -92.0371129,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "LFT1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T04:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T04:01:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LFT1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 2085.910173017313,
						"unit": "miles"
					},
					"payout": {
						"value": 5256.493636003629,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 876.0822726672714,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 4380.411363336358,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInventoryCorrection"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "1a0086d4-7b47-4465-8f05-38a95b1ed8ea",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 876.0822726672714,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 4380.411363336358,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 7.5433398950006545,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-13T00:21:37.032Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SJC7",
				"stopCode": "SJC7",
				"line1": "188 Mountain House Parkway",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95377",
				"latitude": 37.7071466,
				"longitude": -121.5809152,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "LFT1",
				"stopCode": "LFT1",
				"line1": "3550 NE EVANGELINE TRWY",
				"line2": null,
				"line3": null,
				"city": "CARENCRO",
				"state": "Louisiana",
				"country": "US",
				"postalCode": "70520",
				"latitude": 30.3323188,
				"longitude": -92.0371129,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "2d63da1d-e0a2-4125-ae4d-4ee5c6f1fe4f",
			"version": 4,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 899.4467669349481,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 17160000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:01:21Z",
			"lastDeliveryTime": "2023-07-16T20:47:21Z",
			"totalDistance": {
				"value": 191.9589652884673,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-5cc4af75-abb6-1f06-1684-7325700b9b25",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DCX5",
								"stopCode": "DCX5",
								"line1": "970 Mclaughlin Avenue",
								"line2": null,
								"line3": null,
								"city": "SAN JOSE",
								"state": "California",
								"country": "US",
								"postalCode": "95122",
								"latitude": 37.335762,
								"longitude": -121.854003,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DCX5",
							"weight": {
								"value": 1,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:01:21Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:16:21Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "FAT2",
								"stopCode": "FAT2",
								"line1": "3315 N KELSEY ST",
								"line2": null,
								"line3": null,
								"city": "VISALIA",
								"state": "CA",
								"country": "US",
								"postalCode": "93291-1882",
								"latitude": 36.361234,
								"longitude": -119.386437,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "FAT2",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T20:46:21Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T20:47:21Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 191.9589652884673,
						"unit": "miles"
					},
					"payout": {
						"value": 899.4467669349481,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 80.62276542115626,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 818.8240015137918,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TrailerPoolAdjustmentDrop"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "2d63da1d-e0a2-4125-ae4d-4ee5c6f1fe4f",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 80.62276542115626,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 818.8240015137918,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.98487614762002,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T13:52:50.035Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DCX5",
				"stopCode": "DCX5",
				"line1": "970 Mclaughlin Avenue",
				"line2": null,
				"line3": null,
				"city": "SAN JOSE",
				"state": "California",
				"country": "US",
				"postalCode": "95122",
				"latitude": 37.335762,
				"longitude": -121.854003,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "FAT2",
				"stopCode": "FAT2",
				"line1": "3315 N KELSEY ST",
				"line2": null,
				"line3": null,
				"city": "VISALIA",
				"state": "CA",
				"country": "US",
				"postalCode": "93291-1882",
				"latitude": 36.361234,
				"longitude": -119.386437,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "848c8078-f68b-4243-9c56-72c77d1cc3fb",
			"version": 55,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 4495.318760254082,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 134040000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:10:00Z",
			"lastDeliveryTime": "2023-07-18T05:24:00Z",
			"totalDistance": {
				"value": 1683.6399851138879,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-60c493cb-757b-9f28-1c39-57a62fa03e23",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DXC5",
								"stopCode": "DXC5",
								"line1": "44308 Pacific Commons Blvd",
								"line2": null,
								"line3": null,
								"city": "FREMONT",
								"state": "California",
								"country": "US",
								"postalCode": "94538",
								"latitude": 37.4979547,
								"longitude": -121.967415,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DXC5",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:10:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:40:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "DFW7-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "DFW7",
								"stopCode": "DFW7",
								"line1": "700 Westport Parkway",
								"line2": null,
								"line3": null,
								"city": "FORT WORTH",
								"state": "TEXAS",
								"country": "US",
								"postalCode": "76177",
								"latitude": 32.9699091,
								"longitude": -97.3366898,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "DFW7",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T05:09:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T05:24:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "DFW7-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1683.6399851138879,
						"unit": "miles"
					},
					"payout": {
						"value": 4495.318760254082,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 707.1287937478329,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3788.189966506248,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "848c8078-f68b-4243-9c56-72c77d1cc3fb",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 707.1287937478329,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3788.189966506248,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 32.6101160971862,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-14T06:36:36.803Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DXC5",
				"stopCode": "DXC5",
				"line1": "44308 Pacific Commons Blvd",
				"line2": null,
				"line3": null,
				"city": "FREMONT",
				"state": "California",
				"country": "US",
				"postalCode": "94538",
				"latitude": 37.4979547,
				"longitude": -121.967415,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "DFW7",
				"stopCode": "DFW7",
				"line1": "700 Westport Parkway",
				"line2": null,
				"line3": null,
				"city": "FORT WORTH",
				"state": "TEXAS",
				"country": "US",
				"postalCode": "76177",
				"latitude": 32.9699091,
				"longitude": -97.3366898,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "fc0c83d7-2dcb-47ca-a668-e6d9228e2215",
			"version": 103,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 3877.720897677291,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 130860000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:10:00Z",
			"lastDeliveryTime": "2023-07-18T04:31:00Z",
			"totalDistance": {
				"value": 1689.6387353713687,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-4ac493cb-77d0-9bef-8da7-a67096fe35a2",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DCK1",
								"stopCode": "DCK1",
								"line1": "2403 West Louise Ave",
								"line2": null,
								"line3": null,
								"city": "MANTECA",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "95337",
								"latitude": 37.812575,
								"longitude": -121.260709,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DCK1",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:10:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:40:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAT9-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "SAT9",
								"stopCode": "SAT9",
								"line1": "1214 N FOSTER ROAD",
								"line2": null,
								"line3": null,
								"city": "SAN ANTONIO",
								"state": "Texas",
								"country": "US",
								"postalCode": "78219-4735",
								"latitude": 29.440309,
								"longitude": -98.35992,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "SAT9",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T04:16:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T04:31:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SAT9-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1689.6387353713687,
						"unit": "miles"
					},
					"payout": {
						"value": 3877.720897677291,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 709.6482688559747,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3168.072628821316,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "fc0c83d7-2dcb-47ca-a668-e6d9228e2215",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 709.6482688559747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3168.072628821316,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 11.750631178913155,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-14T04:10:35.910Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DCK1",
				"stopCode": "DCK1",
				"line1": "2403 West Louise Ave",
				"line2": null,
				"line3": null,
				"city": "MANTECA",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "95337",
				"latitude": 37.812575,
				"longitude": -121.260709,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SAT9",
				"stopCode": "SAT9",
				"line1": "1214 N FOSTER ROAD",
				"line2": null,
				"line3": null,
				"city": "SAN ANTONIO",
				"state": "Texas",
				"country": "US",
				"postalCode": "78219-4735",
				"latitude": 29.440309,
				"longitude": -98.35992,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "b0b1145f-7a0f-4b0c-8d74-be9533afd6ec",
			"version": 11,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1016.820135704801,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 30780000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:15:00Z",
			"lastDeliveryTime": "2023-07-17T00:48:00Z",
			"totalDistance": {
				"value": 369.9209224937885,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-e4c4ad7d-1b9d-f66c-12ca-9431b96f68a6",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "ONT1-CART-A",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "ONT1",
								"stopCode": "ONT1",
								"line1": "11200 Iberia Street",
								"line2": null,
								"line3": null,
								"city": "MIRA LOMA",
								"state": "CA",
								"country": "US",
								"postalCode": "91752",
								"latitude": 34.020389,
								"longitude": -117.527823,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "ONT1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T00:47:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T00:48:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "ONT1-CART-A",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 369.9209224937885,
						"unit": "miles"
					},
					"payout": {
						"value": 1016.820135704801,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 155.3667874473912,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 861.4533482574101,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"OutboundAmazonManaged"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "b0b1145f-7a0f-4b0c-8d74-be9533afd6ec",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 155.3667874473912,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 861.4533482574101,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T08:36:51.290Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "ONT1",
				"stopCode": "ONT1",
				"line1": "11200 Iberia Street",
				"line2": null,
				"line3": null,
				"city": "MIRA LOMA",
				"state": "CA",
				"country": "US",
				"postalCode": "91752",
				"latitude": 34.020389,
				"longitude": -117.527823,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [
				{
					"start": "2023-07-16T16:15:00Z",
					"end": "2023-07-16T20:00:00Z"
				}
			],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "19656a69-b27e-410f-ba3a-6e28bc6f32f4",
			"version": 140,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 2386.526895673408,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 63720000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:19:00Z",
			"lastDeliveryTime": "2023-07-17T10:01:00Z",
			"totalDistance": {
				"value": 814.8257681002319,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-4ac4a587-6c7b-5289-6c98-0c9559b9ccc2",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:19:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:19:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "RLB1",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "HUBG_MARSDEN",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "HUBG_MARSDEN",
								"stopCode": "HUBG_MARSDEN",
								"line1": "7000 East Century Park Drive",
								"line2": null,
								"line3": null,
								"city": "TUCSON",
								"state": "AZ",
								"country": "US",
								"postalCode": "85756",
								"latitude": 32.125467,
								"longitude": -110.842784,
								"timeZone": "America/Phoenix",
								"vendorCodes": null
							},
							"locationCode": "HUBG_MARSDEN",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T10:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T10:01:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "HUBG_MARSDEN",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 814.8257681002319,
						"unit": "miles"
					},
					"payout": {
						"value": 2386.526895673408,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 342.2268226020975,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 2044.30007307131,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersBrokenCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "19656a69-b27e-410f-ba3a-6e28bc6f32f4",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 342.2268226020975,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 2044.30007307131,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-14T20:23:54.901Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "HUBG_MARSDEN",
				"stopCode": "HUBG_MARSDEN",
				"line1": "7000 East Century Park Drive",
				"line2": null,
				"line3": null,
				"city": "TUCSON",
				"state": "AZ",
				"country": "US",
				"postalCode": "85756",
				"latitude": 32.125467,
				"longitude": -110.842784,
				"timeZone": "America/Phoenix",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "eb33c99d-389a-4f30-85c3-06465c0d29c6",
			"version": 105,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 4495.318760254082,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 134040000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:20:00Z",
			"lastDeliveryTime": "2023-07-18T05:34:00Z",
			"totalDistance": {
				"value": 1683.6399851138879,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-70c493cb-757b-fa26-5fb5-bc331db9c398",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DXC5",
								"stopCode": "DXC5",
								"line1": "44308 Pacific Commons Blvd",
								"line2": null,
								"line3": null,
								"city": "FREMONT",
								"state": "California",
								"country": "US",
								"postalCode": "94538",
								"latitude": 37.4979547,
								"longitude": -121.967415,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DXC5",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:20:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:50:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "DFW7-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "DFW7",
								"stopCode": "DFW7",
								"line1": "700 Westport Parkway",
								"line2": null,
								"line3": null,
								"city": "FORT WORTH",
								"state": "TEXAS",
								"country": "US",
								"postalCode": "76177",
								"latitude": 32.9699091,
								"longitude": -97.3366898,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "DFW7",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T05:19:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T05:34:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "DFW7-CART",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1683.6399851138879,
						"unit": "miles"
					},
					"payout": {
						"value": 4495.318760254082,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 707.1287937478329,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3788.189966506248,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "eb33c99d-389a-4f30-85c3-06465c0d29c6",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 707.1287937478329,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3788.189966506248,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 32.6101160971862,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-14T12:15:37.433Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DXC5",
				"stopCode": "DXC5",
				"line1": "44308 Pacific Commons Blvd",
				"line2": null,
				"line3": null,
				"city": "FREMONT",
				"state": "California",
				"country": "US",
				"postalCode": "94538",
				"latitude": 37.4979547,
				"longitude": -121.967415,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "DFW7",
				"stopCode": "DFW7",
				"line1": "700 Westport Parkway",
				"line2": null,
				"line3": null,
				"city": "FORT WORTH",
				"state": "TEXAS",
				"country": "US",
				"postalCode": "76177",
				"latitude": 32.9699091,
				"longitude": -97.3366898,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "7998615e-2dda-40d1-ab99-d895f12e3843",
			"version": 22,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 396.5337203556471,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 11760000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:28:54Z",
			"lastDeliveryTime": "2023-07-16T19:44:54Z",
			"totalDistance": {
				"value": 84.9818307270841,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-3ac4af09-a9c4-2a0d-ca8a-fc79b59687c8",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "HSF9",
								"stopCode": "HSF9",
								"line1": "44051 OSGOOD RD",
								"line2": null,
								"line3": null,
								"city": "FREMONT",
								"state": "California",
								"country": "US",
								"postalCode": "94539",
								"latitude": 37.509425,
								"longitude": -121.94046,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "HSF9",
							"weight": {
								"value": 1,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:28:54Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:43:54Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "MCE1",
								"stopCode": "MCE1",
								"line1": "3200 Fulkerth Road",
								"line2": null,
								"line3": null,
								"city": "TURLOCK",
								"state": "California",
								"country": "US",
								"postalCode": "95380-9684",
								"latitude": 37.5026581,
								"longitude": -120.889368,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "MCE1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T19:43:54Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T19:44:54Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 84.9818307270841,
						"unit": "miles"
					},
					"payout": {
						"value": 396.5337203556471,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 35.69236890537532,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 360.8413514502718,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TrailerPoolAdjustment"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "7998615e-2dda-40d1-ab99-d895f12e3843",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 35.69236890537532,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 360.8413514502718,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 30.93359877936179,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T09:58:10.691Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "HSF9",
				"stopCode": "HSF9",
				"line1": "44051 OSGOOD RD",
				"line2": null,
				"line3": null,
				"city": "FREMONT",
				"state": "California",
				"country": "US",
				"postalCode": "94539",
				"latitude": 37.509425,
				"longitude": -121.94046,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "MCE1",
				"stopCode": "MCE1",
				"line1": "3200 Fulkerth Road",
				"line2": null,
				"line3": null,
				"city": "TURLOCK",
				"state": "California",
				"country": "US",
				"postalCode": "95380-9684",
				"latitude": 37.5026581,
				"longitude": -120.889368,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "860e3315-3be3-4064-a4fa-ff166a9ed112",
			"version": 9,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 227.5449468978007,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 8160000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:28:54Z",
			"lastDeliveryTime": "2023-07-16T18:44:54Z",
			"totalDistance": {
				"value": 63.98631860236511,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-5cc4af5c-5a10-48f7-bacf-9a672902ed0a",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DXC8",
								"stopCode": "DXC8",
								"line1": "1710 Little Orchard St",
								"line2": null,
								"line3": null,
								"city": "SAN JOSE",
								"state": "California",
								"country": "US",
								"postalCode": "95125",
								"latitude": 37.307233,
								"longitude": -121.873063,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DXC8",
							"weight": {
								"value": 1,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:28:54Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:43:54Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "SCK6",
								"stopCode": "SCK6",
								"line1": "1500 East Grant Line Rd",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "California",
								"country": "US",
								"postalCode": "95304",
								"latitude": 37.752234,
								"longitude": -121.403175,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK6",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T18:43:54Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T18:44:54Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 63.98631860236511,
						"unit": "miles"
					},
					"payout": {
						"value": 227.5449468978007,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 26.87425381299335,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 200.6706930848073,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TrailerPoolAdjustment"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "860e3315-3be3-4064-a4fa-ff166a9ed112",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 26.87425381299335,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 200.6706930848073,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 37.17285764976669,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T12:58:14.140Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DXC8",
				"stopCode": "DXC8",
				"line1": "1710 Little Orchard St",
				"line2": null,
				"line3": null,
				"city": "SAN JOSE",
				"state": "California",
				"country": "US",
				"postalCode": "95125",
				"latitude": 37.307233,
				"longitude": -121.873063,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SCK6",
				"stopCode": "SCK6",
				"line1": "1500 East Grant Line Rd",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "California",
				"country": "US",
				"postalCode": "95304",
				"latitude": 37.752234,
				"longitude": -121.403175,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "b65582f1-7381-43b5-8ef4-9d26287f471c",
			"version": 25,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 3,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 966.4506279662752,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 75900000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:30:00Z",
			"lastDeliveryTime": "2023-07-17T13:35:00Z",
			"totalDistance": {
				"value": 401.9140770542852,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-1cc4ad9e-7bcd-0c6f-b1aa-0206104524a6",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SMF3",
								"stopCode": "SMF3",
								"line1": "3923 B Street",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "CA",
								"country": "US",
								"postalCode": "95206",
								"latitude": 37.913946,
								"longitude": -121.251707,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SMF3",
							"weight": {
								"value": 0,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:31:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "OAK3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "OAK3",
								"stopCode": "OAK3",
								"line1": "255 Park Center Dr",
								"line2": null,
								"line3": null,
								"city": "PATTERSON",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "95363-8876",
								"latitude": 37.470764,
								"longitude": -121.167523,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK3",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T18:05:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T05:45:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "OAK3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_CONTAINER",
					"weight": null,
					"distance": {
						"value": 46.989954353222686,
						"unit": "miles"
					},
					"payout": {
						"value": 112.9929840368463,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 19.73578082835353,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 93.25720320849281,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"FleetManagementEquipmentRepositioning"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "b65582f1-7381-43b5-8ef4-9d26287f471c",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				},
				{
					"versionedLoadId": {
						"id": "tr-60c4a643-fcc7-26e9-d6a4-988bb0197f98",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 2,
							"location": {
								"label": "OAK3",
								"stopCode": "OAK3",
								"line1": "255 Park Center Dr",
								"line2": null,
								"line3": null,
								"city": "PATTERSON",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "95363-8876",
								"latitude": 37.470764,
								"longitude": -121.167523,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK3",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T18:05:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T05:45:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB5-TWI",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 3,
							"location": {
								"label": "LGB5",
								"stopCode": "LGB5",
								"line1": "555 E ORANGE SHOW RD",
								"line2": null,
								"line3": null,
								"city": "SAN BERNARDINO",
								"state": "California",
								"country": "US",
								"postalCode": "92408-2453",
								"latitude": 34.077284,
								"longitude": -117.275668,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LGB5",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T13:34:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T13:35:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB5-TWI",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 354.9241227010625,
						"unit": "miles"
					},
					"payout": {
						"value": 853.457643929429,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 149.0681315344463,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 704.3895123949826,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"OutboundAmazonManaged"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "b65582f1-7381-43b5-8ef4-9d26287f471c",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 168.8039123627998,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 797.6467156034754,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 16.80811603296804,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T20:43:11.792Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SMF3",
				"stopCode": "SMF3",
				"line1": "3923 B Street",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "CA",
				"country": "US",
				"postalCode": "95206",
				"latitude": 37.913946,
				"longitude": -121.251707,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "LGB5",
				"stopCode": "LGB5",
				"line1": "555 E ORANGE SHOW RD",
				"line2": null,
				"line3": null,
				"city": "SAN BERNARDINO",
				"state": "California",
				"country": "US",
				"postalCode": "92408-2453",
				"latitude": 34.077284,
				"longitude": -117.275668,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "bfe34dd8-4cf4-4b43-8f0a-684b646b1c51",
			"version": 226,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 2244.866014515634,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 71220000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:30:00Z",
			"lastDeliveryTime": "2023-07-17T12:17:00Z",
			"totalDistance": {
				"value": 863.8153343167309,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-7cc4a88b-0c21-5167-2c6b-0d47b5b19906",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SMF3",
								"stopCode": "SMF3",
								"line1": "3923 B Street",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "CA",
								"country": "US",
								"postalCode": "95206",
								"latitude": 37.913946,
								"longitude": -121.251707,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SMF3",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AYCWC",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "GEG1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "GEG1",
								"stopCode": "GEG1",
								"line1": "10010 West Geiger Boulevard",
								"line2": null,
								"line3": null,
								"city": "SPOKANE",
								"state": "Washington",
								"country": "US",
								"postalCode": "99224",
								"latitude": 47.600706,
								"longitude": -117.553315,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "GEG1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T12:16:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T12:17:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "GEG1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 863.8153343167309,
						"unit": "miles"
					},
					"payout": {
						"value": 2244.866014515634,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 362.8024404130269,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 1882.063574102607,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersUniversalPallet"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "bfe34dd8-4cf4-4b43-8f0a-684b646b1c51",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 362.8024404130269,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 1882.063574102607,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 16.80811603296804,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-14T06:30:43.236Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SMF3",
				"stopCode": "SMF3",
				"line1": "3923 B Street",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "CA",
				"country": "US",
				"postalCode": "95206",
				"latitude": 37.913946,
				"longitude": -121.251707,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "GEG1",
				"stopCode": "GEG1",
				"line1": "10010 West Geiger Boulevard",
				"line2": null,
				"line3": null,
				"city": "SPOKANE",
				"state": "Washington",
				"country": "US",
				"postalCode": "99224",
				"latitude": 47.600706,
				"longitude": -117.553315,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "4778cb51-4d7b-47b3-94c3-c51b0dd56fbf",
			"version": 44,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1427.69413552648,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 46860000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:30:00Z",
			"lastDeliveryTime": "2023-07-17T05:31:00Z",
			"totalDistance": {
				"value": 603.4210209325779,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-3cc4acbc-318e-be1d-f4d2-cb3b5ad4736a",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SCK6",
								"stopCode": "SCK6",
								"line1": "1500 East Grant Line Rd",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "California",
								"country": "US",
								"postalCode": "95304",
								"latitude": 37.752234,
								"longitude": -121.403175,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK6",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "BOI2",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "BOI2",
								"stopCode": "BOI2",
								"line1": "5295 E. Franklin Road",
								"line2": null,
								"line3": null,
								"city": "NAMPA",
								"state": "Idaho",
								"country": "US",
								"postalCode": "83687",
								"latitude": 43.6082922,
								"longitude": -116.5287839,
								"timeZone": "America/Boise",
								"vendorCodes": null
							},
							"locationCode": "BOI2",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T05:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T05:31:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "BOI2",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 603.4210209325779,
						"unit": "miles"
					},
					"payout": {
						"value": 1427.69413552648,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 253.4368287916827,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 1174.257306734797,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersUniversalPallet"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "4778cb51-4d7b-47b3-94c3-c51b0dd56fbf",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 253.4368287916827,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 1174.257306734797,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.9742821081728006,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T13:13:54.727Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SCK6",
				"stopCode": "SCK6",
				"line1": "1500 East Grant Line Rd",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "California",
				"country": "US",
				"postalCode": "95304",
				"latitude": 37.752234,
				"longitude": -121.403175,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "BOI2",
				"stopCode": "BOI2",
				"line1": "5295 E. Franklin Road",
				"line2": null,
				"line3": null,
				"city": "NAMPA",
				"state": "Idaho",
				"country": "US",
				"postalCode": "83687",
				"latitude": 43.6082922,
				"longitude": -116.5287839,
				"timeZone": "America/Boise",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "b91a62ad-da08-4869-a1cb-930ad8c57679",
			"version": 62,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1745.455645149575,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 46860000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:30:00Z",
			"lastDeliveryTime": "2023-07-17T05:31:00Z",
			"totalDistance": {
				"value": 603.4210209325779,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-1ac4acbc-19c9-5b69-07a1-59446a0e6eb9",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SCK6",
								"stopCode": "SCK6",
								"line1": "1500 East Grant Line Rd",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "California",
								"country": "US",
								"postalCode": "95304",
								"latitude": 37.752234,
								"longitude": -121.403175,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK6",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "BOI2",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "BOI2",
								"stopCode": "BOI2",
								"line1": "5295 E. Franklin Road",
								"line2": null,
								"line3": null,
								"city": "NAMPA",
								"state": "Idaho",
								"country": "US",
								"postalCode": "83687",
								"latitude": 43.6082922,
								"longitude": -116.5287839,
								"timeZone": "America/Boise",
								"vendorCodes": null
							},
							"locationCode": "BOI2",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T05:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T05:31:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "BOI2",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 603.4210209325779,
						"unit": "miles"
					},
					"payout": {
						"value": 1745.455645149575,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 253.4368287916827,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 1492.018816357892,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersUniversalPallet"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "b91a62ad-da08-4869-a1cb-930ad8c57679",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 253.4368287916827,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 1492.018816357892,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.9742821081728006,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T13:13:37.303Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SCK6",
				"stopCode": "SCK6",
				"line1": "1500 East Grant Line Rd",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "California",
				"country": "US",
				"postalCode": "95304",
				"latitude": 37.752234,
				"longitude": -121.403175,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "BOI2",
				"stopCode": "BOI2",
				"line1": "5295 E. Franklin Road",
				"line2": null,
				"line3": null,
				"city": "NAMPA",
				"state": "Idaho",
				"country": "US",
				"postalCode": "83687",
				"latitude": 43.6082922,
				"longitude": -116.5287839,
				"timeZone": "America/Boise",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "f51d1289-ad37-45e4-a62e-08e1126fb01b",
			"version": 121,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 636.1039675269084,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 30660000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:30:00Z",
			"lastDeliveryTime": "2023-07-17T01:01:00Z",
			"totalDistance": {
				"value": 329.92944373802305,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-16c4ac42-bbd9-6b2a-f450-b0e9db543602",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "OXR1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "OXR1",
								"stopCode": "OXR1",
								"line1": "3100 Sakioka Drive",
								"line2": null,
								"line3": null,
								"city": "OXNARD",
								"state": "California",
								"country": "US",
								"postalCode": "93030",
								"latitude": 34.2145523,
								"longitude": -119.131196,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OXR1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:01:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "OXR1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 329.92944373802305,
						"unit": "miles"
					},
					"payout": {
						"value": 636.1039675269084,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 138.5703663699697,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 497.5336011569387,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersWarehouseConsumables"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "f51d1289-ad37-45e4-a62e-08e1126fb01b",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 138.5703663699697,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 497.5336011569387,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T08:03:22.711Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "OXR1",
				"stopCode": "OXR1",
				"line1": "3100 Sakioka Drive",
				"line2": null,
				"line3": null,
				"city": "OXNARD",
				"state": "California",
				"country": "US",
				"postalCode": "93030",
				"latitude": 34.2145523,
				"longitude": -119.131196,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "9bd86f54-6b3e-4814-9618-70b2c304dae5",
			"version": 132,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1781.57078334751,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 91860000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:30:00Z",
			"lastDeliveryTime": "2023-07-17T18:01:00Z",
			"totalDistance": {
				"value": 735.8426781492567,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-b8c4a613-e5e2-2bab-2e9a-57cbab1c868d",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK7",
								"stopCode": "OAK7",
								"line1": "38811 Cherry St.",
								"line2": null,
								"line3": null,
								"city": "NEWARK",
								"state": "CA",
								"country": "US",
								"postalCode": "94560-4939",
								"latitude": 37.520342,
								"longitude": -122.013685,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK7",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "PHX6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "PHX6",
								"stopCode": "PHX6",
								"line1": "4750 W MOHAVE ST",
								"line2": null,
								"line3": null,
								"city": "PHOENIX",
								"state": "AZ",
								"country": "US",
								"postalCode": "85043-8305",
								"latitude": 33.432066,
								"longitude": -112.164786,
								"timeZone": "America/Phoenix",
								"vendorCodes": null
							},
							"locationCode": "PHX6",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T18:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T18:01:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "PHX6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 735.8426781492567,
						"unit": "miles"
					},
					"payout": {
						"value": 1781.57078334751,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 309.0539248226878,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 1472.516858524822,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransferUnsellableInventory"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "9bd86f54-6b3e-4814-9618-70b2c304dae5",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 309.0539248226878,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 1472.516858524822,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.183040146281826,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-14T10:31:56.457Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK7",
				"stopCode": "OAK7",
				"line1": "38811 Cherry St.",
				"line2": null,
				"line3": null,
				"city": "NEWARK",
				"state": "CA",
				"country": "US",
				"postalCode": "94560-4939",
				"latitude": 37.520342,
				"longitude": -122.013685,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "PHX6",
				"stopCode": "PHX6",
				"line1": "4750 W MOHAVE ST",
				"line2": null,
				"line3": null,
				"city": "PHOENIX",
				"state": "AZ",
				"country": "US",
				"postalCode": "85043-8305",
				"latitude": 33.432066,
				"longitude": -112.164786,
				"timeZone": "America/Phoenix",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "3bc793cf-0fa3-4df5-86c9-5ee0fc3b4d74",
			"version": 12,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 3,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 779.9357562072696,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 37080000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:30:00Z",
			"lastDeliveryTime": "2023-07-17T02:48:00Z",
			"totalDistance": {
				"value": 366.9215364022119,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-38c4ae9c-5dfb-2882-834f-3cf46ba23c18",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:45:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "CNO5-CART-A",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "CNO5",
								"stopCode": "CNO5",
								"line1": "8601 MERRILL AVE",
								"line2": null,
								"line3": null,
								"city": "CHINO",
								"state": "California",
								"country": "US",
								"postalCode": "91710-8508",
								"latitude": 33.9828432,
								"longitude": -117.616464,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "CNO5",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:39:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:40:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "CNO5-CART-A",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 364.921963945888,
						"unit": "miles"
					},
					"payout": {
						"value": 775.6854250026586,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 153.267224857273,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 622.4182001453855,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"OutboundAmazonManaged"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "3bc793cf-0fa3-4df5-86c9-5ee0fc3b4d74",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				},
				{
					"versionedLoadId": {
						"id": "tr-90c4aeae-2eaa-730c-bc1f-c1f04fa5218c",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 2,
							"location": {
								"label": "CNO5",
								"stopCode": "CNO5",
								"line1": "8601 MERRILL AVE",
								"line2": null,
								"line3": null,
								"city": "CHINO",
								"state": "California",
								"country": "US",
								"postalCode": "91710-8508",
								"latitude": 33.9828432,
								"longitude": -117.616464,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "CNO5",
							"weight": {
								"value": 0,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:39:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:40:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "VUI6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 3,
							"location": {
								"label": "VUI6",
								"stopCode": "VUI6",
								"line1": "15835 San Antonio Ave.",
								"line2": null,
								"line3": null,
								"city": "CHINO",
								"state": "California",
								"country": "US",
								"postalCode": "91708",
								"latitude": 33.9652346,
								"longitude": -117.65645,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "VUI6",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T02:18:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T02:48:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "VUI6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1.9995724563239097,
						"unit": "miles"
					},
					"payout": {
						"value": 4.250331204611228,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 0.839820431656042,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3.410510772955187,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"FleetManagementEquipmentRepositioning"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "3bc793cf-0fa3-4df5-86c9-5ee0fc3b4d74",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 154.107045288929,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 625.8287109183407,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T06:36:42.963Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "VUI6",
				"stopCode": "VUI6",
				"line1": "15835 San Antonio Ave.",
				"line2": null,
				"line3": null,
				"city": "CHINO",
				"state": "California",
				"country": "US",
				"postalCode": "91708",
				"latitude": 33.9652346,
				"longitude": -117.65645,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "ed527e60-5eaa-4c53-8c14-4e93fccd383e",
			"version": 110,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1905.132740615119,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 52260000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:30:00Z",
			"lastDeliveryTime": "2023-07-17T07:01:00Z",
			"totalDistance": {
				"value": 697.8508207381392,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-00c4a94e-e24d-fb94-b725-44833374bb30",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "PHX6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "PHX6",
								"stopCode": "PHX6",
								"line1": "4750 W MOHAVE ST",
								"line2": null,
								"line3": null,
								"city": "PHOENIX",
								"state": "AZ",
								"country": "US",
								"postalCode": "85043-8305",
								"latitude": 33.432066,
								"longitude": -112.164786,
								"timeZone": "America/Phoenix",
								"vendorCodes": null
							},
							"locationCode": "PHX6",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T07:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T07:01:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "PHX6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 697.8508207381392,
						"unit": "miles"
					},
					"payout": {
						"value": 1905.132740615119,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 293.0973447100184,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 1612.035395905101,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersUniversalPallet"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "ed527e60-5eaa-4c53-8c14-4e93fccd383e",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 293.0973447100184,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 1612.035395905101,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-14T05:17:39.535Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "PHX6",
				"stopCode": "PHX6",
				"line1": "4750 W MOHAVE ST",
				"line2": null,
				"line3": null,
				"city": "PHOENIX",
				"state": "AZ",
				"country": "US",
				"postalCode": "85043-8305",
				"latitude": 33.432066,
				"longitude": -112.164786,
				"timeZone": "America/Phoenix",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "36aa37f4-2562-4e63-94b7-28d1397aa7fa",
			"version": 175,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 858.4244970128841,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 33300000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:30:00Z",
			"lastDeliveryTime": "2023-07-17T01:45:00Z",
			"totalDistance": {
				"value": 411.91194674322657,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-6ec4a7f9-6f2f-c730-7f3f-29098e6d4a78",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK5",
								"stopCode": "OAK5",
								"line1": "38811 Cherry St",
								"line2": null,
								"line3": null,
								"city": "NEWARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "94560-4939",
								"latitude": 37.520342,
								"longitude": -122.013685,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK5",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "LGB3",
								"stopCode": "LGB3",
								"line1": "4950 Goodman Way",
								"line2": null,
								"line3": null,
								"city": "EASTVALE",
								"state": "CA",
								"country": "US",
								"postalCode": "91752",
								"latitude": 33.997184,
								"longitude": -117.553359,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LGB3",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T01:44:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T01:45:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB3",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 411.91194674322657,
						"unit": "miles"
					},
					"payout": {
						"value": 858.4244970128841,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 173.0030176321551,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 685.421479380729,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "36aa37f4-2562-4e63-94b7-28d1397aa7fa",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 173.0030176321551,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 685.421479380729,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.183040146281826,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-13T18:54:06.384Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK5",
				"stopCode": "OAK5",
				"line1": "38811 Cherry St",
				"line2": null,
				"line3": null,
				"city": "NEWARK",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "94560-4939",
				"latitude": 37.520342,
				"longitude": -122.013685,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "LGB3",
				"stopCode": "LGB3",
				"line1": "4950 Goodman Way",
				"line2": null,
				"line3": null,
				"city": "EASTVALE",
				"state": "CA",
				"country": "US",
				"postalCode": "91752",
				"latitude": 33.997184,
				"longitude": -117.553359,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "175a25c9-44e6-47c0-9bbc-34cd7b2c0712",
			"version": 5,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 899.4467669349481,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 17160000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:31:20Z",
			"lastDeliveryTime": "2023-07-16T21:17:20Z",
			"totalDistance": {
				"value": 191.9589652884673,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-9ac4af67-3646-6c5e-364d-2559e7de3c10",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DCX5",
								"stopCode": "DCX5",
								"line1": "970 Mclaughlin Avenue",
								"line2": null,
								"line3": null,
								"city": "SAN JOSE",
								"state": "California",
								"country": "US",
								"postalCode": "95122",
								"latitude": 37.335762,
								"longitude": -121.854003,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DCX5",
							"weight": {
								"value": 1,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:31:20Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:46:20Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "FAT2",
								"stopCode": "FAT2",
								"line1": "3315 N KELSEY ST",
								"line2": null,
								"line3": null,
								"city": "VISALIA",
								"state": "CA",
								"country": "US",
								"postalCode": "93291-1882",
								"latitude": 36.361234,
								"longitude": -119.386437,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "FAT2",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T21:16:20Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T21:17:20Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 191.9589652884673,
						"unit": "miles"
					},
					"payout": {
						"value": 899.4467669349481,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 80.62276542115626,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 818.8240015137918,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TrailerPoolAdjustmentDrop"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "175a25c9-44e6-47c0-9bbc-34cd7b2c0712",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 80.62276542115626,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 818.8240015137918,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.98487614762002,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T13:21:24.797Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DCX5",
				"stopCode": "DCX5",
				"line1": "970 Mclaughlin Avenue",
				"line2": null,
				"line3": null,
				"city": "SAN JOSE",
				"state": "California",
				"country": "US",
				"postalCode": "95122",
				"latitude": 37.335762,
				"longitude": -121.854003,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "FAT2",
				"stopCode": "FAT2",
				"line1": "3315 N KELSEY ST",
				"line2": null,
				"line3": null,
				"city": "VISALIA",
				"state": "CA",
				"country": "US",
				"postalCode": "93291-1882",
				"latitude": 36.361234,
				"longitude": -119.386437,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "4334e165-ae9e-4267-ac8b-d206b0163de8",
			"version": 5,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 899.4467669349481,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 17160000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:31:20Z",
			"lastDeliveryTime": "2023-07-16T21:17:20Z",
			"totalDistance": {
				"value": 191.9589652884673,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-e4c4af67-3678-5f9b-99e4-4b31a2c5ac80",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DCX5",
								"stopCode": "DCX5",
								"line1": "970 Mclaughlin Avenue",
								"line2": null,
								"line3": null,
								"city": "SAN JOSE",
								"state": "California",
								"country": "US",
								"postalCode": "95122",
								"latitude": 37.335762,
								"longitude": -121.854003,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DCX5",
							"weight": {
								"value": 1,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:31:20Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:46:20Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "FAT2",
								"stopCode": "FAT2",
								"line1": "3315 N KELSEY ST",
								"line2": null,
								"line3": null,
								"city": "VISALIA",
								"state": "CA",
								"country": "US",
								"postalCode": "93291-1882",
								"latitude": 36.361234,
								"longitude": -119.386437,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "FAT2",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T21:16:20Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T21:17:20Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 191.9589652884673,
						"unit": "miles"
					},
					"payout": {
						"value": 899.4467669349481,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 80.62276542115626,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 818.8240015137918,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TrailerPoolAdjustmentDrop"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "4334e165-ae9e-4267-ac8b-d206b0163de8",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 80.62276542115626,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 818.8240015137918,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.98487614762002,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T13:20:58.785Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DCX5",
				"stopCode": "DCX5",
				"line1": "970 Mclaughlin Avenue",
				"line2": null,
				"line3": null,
				"city": "SAN JOSE",
				"state": "California",
				"country": "US",
				"postalCode": "95122",
				"latitude": 37.335762,
				"longitude": -121.854003,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "FAT2",
				"stopCode": "FAT2",
				"line1": "3315 N KELSEY ST",
				"line2": null,
				"line3": null,
				"city": "VISALIA",
				"state": "CA",
				"country": "US",
				"postalCode": "93291-1882",
				"latitude": 36.361234,
				"longitude": -119.386437,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "d7441d7d-3428-40ab-a597-c06b624da98d",
			"version": 33,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 447.1053920231732,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 29760000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:39:27Z",
			"lastDeliveryTime": "2023-07-17T00:55:27Z",
			"totalDistance": {
				"value": 323.9307314060302,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-86c4aeb6-77f7-cd6a-c645-3f5bf0724c78",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "DCX5",
								"stopCode": "DCX5",
								"line1": "970 Mclaughlin Avenue",
								"line2": null,
								"line3": null,
								"city": "SAN JOSE",
								"state": "California",
								"country": "US",
								"postalCode": "95122",
								"latitude": 37.335762,
								"longitude": -121.854003,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "DCX5",
							"weight": {
								"value": 1,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:39:27Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:54:27Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "OXR1",
								"stopCode": "OXR1",
								"line1": "3100 Sakioka Drive",
								"line2": null,
								"line3": null,
								"city": "OXNARD",
								"state": "California",
								"country": "US",
								"postalCode": "93030",
								"latitude": 34.2145523,
								"longitude": -119.131196,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OXR1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T00:54:27Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T00:55:27Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 323.9307314060302,
						"unit": "miles"
					},
					"payout": {
						"value": 447.1053920231732,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 136.0509071905327,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 311.0544848326405,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TrailerPoolAdjustment"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "d7441d7d-3428-40ab-a597-c06b624da98d",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 136.0509071905327,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 311.0544848326405,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.98487614762002,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T06:56:08.017Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "DCX5",
				"stopCode": "DCX5",
				"line1": "970 Mclaughlin Avenue",
				"line2": null,
				"line3": null,
				"city": "SAN JOSE",
				"state": "California",
				"country": "US",
				"postalCode": "95122",
				"latitude": 37.335762,
				"longitude": -121.854003,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "OXR1",
				"stopCode": "OXR1",
				"line1": "3100 Sakioka Drive",
				"line2": null,
				"line3": null,
				"city": "OXNARD",
				"state": "California",
				"country": "US",
				"postalCode": "93030",
				"latitude": 34.2145523,
				"longitude": -119.131196,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "81974f7d-513d-4e34-b333-94e29a5e0597",
			"version": 22,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 409.3124382420787,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 11760000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:41:12Z",
			"lastDeliveryTime": "2023-07-16T19:57:12Z",
			"totalDistance": {
				"value": 84.9818307270841,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-68c4af09-aa79-7fa6-fac6-e38c3dc49a25",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "HSF9",
								"stopCode": "HSF9",
								"line1": "44051 OSGOOD RD",
								"line2": null,
								"line3": null,
								"city": "FREMONT",
								"state": "California",
								"country": "US",
								"postalCode": "94539",
								"latitude": 37.509425,
								"longitude": -121.94046,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "HSF9",
							"weight": {
								"value": 1,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:41:12Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T16:56:12Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "MCE1",
								"stopCode": "MCE1",
								"line1": "3200 Fulkerth Road",
								"line2": null,
								"line3": null,
								"city": "TURLOCK",
								"state": "California",
								"country": "US",
								"postalCode": "95380-9684",
								"latitude": 37.5026581,
								"longitude": -120.889368,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "MCE1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T19:56:12Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T19:57:12Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "EMPTY_CONTAINER_ID",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 84.9818307270841,
						"unit": "miles"
					},
					"payout": {
						"value": 409.3124382420787,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 35.69236890537532,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 373.6200693367034,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TrailerPoolAdjustment"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "81974f7d-513d-4e34-b333-94e29a5e0597",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 35.69236890537532,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 373.6200693367034,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 30.93359877936179,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T09:57:41.942Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "HSF9",
				"stopCode": "HSF9",
				"line1": "44051 OSGOOD RD",
				"line2": null,
				"line3": null,
				"city": "FREMONT",
				"state": "California",
				"country": "US",
				"postalCode": "94539",
				"latitude": 37.509425,
				"longitude": -121.94046,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "MCE1",
				"stopCode": "MCE1",
				"line1": "3200 Fulkerth Road",
				"line2": null,
				"line3": null,
				"city": "TURLOCK",
				"state": "California",
				"country": "US",
				"postalCode": "95380-9684",
				"latitude": 37.5026581,
				"longitude": -120.889368,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "bb3f539e-0603-44b0-b19f-edd877e51ab5",
			"version": 13,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 4286.275543890088,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 211020000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:56:00Z",
			"lastDeliveryTime": "2023-07-19T03:33:00Z",
			"totalDistance": {
				"value": 1689.6387353713687,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-a2c4ad8e-4c84-4173-7511-b412b9874eba",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SCK4",
								"stopCode": "SCK4",
								"line1": "6001 S AUSTIN RD",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "California",
								"country": "US",
								"postalCode": "95215",
								"latitude": 37.910758,
								"longitude": -121.190165,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:56:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:26:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "FSD1",
								"stopCode": "FSD1",
								"line1": "6700 N Marion Rd",
								"line2": null,
								"line3": null,
								"city": "SIOUX FALLS",
								"state": "South Dakota",
								"country": "US",
								"postalCode": "57107",
								"latitude": 43.62143,
								"longitude": -96.78962,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "FSD1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-19T03:32:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-19T03:33:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1689.6387353713687,
						"unit": "miles"
					},
					"payout": {
						"value": 4286.275543890088,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 709.6482688559747,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3576.627275034113,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInitialPlacement"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "bb3f539e-0603-44b0-b19f-edd877e51ab5",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 709.6482688559747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3576.627275034113,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 18.942450972813983,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T20:53:07.289Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SCK4",
				"stopCode": "SCK4",
				"line1": "6001 S AUSTIN RD",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "California",
				"country": "US",
				"postalCode": "95215",
				"latitude": 37.910758,
				"longitude": -121.190165,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "FSD1",
				"stopCode": "FSD1",
				"line1": "6700 N Marion Rd",
				"line2": null,
				"line3": null,
				"city": "SIOUX FALLS",
				"state": "South Dakota",
				"country": "US",
				"postalCode": "57107",
				"latitude": 43.62143,
				"longitude": -96.78962,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [
				{
					"start": "2023-07-16T16:56:00Z",
					"end": "2023-07-16T17:56:00Z"
				}
			],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "ea7a9c68-aaf0-4ae3-a59b-74a858fc17dc",
			"version": 26,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 3903.065478707862,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 211020000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T16:56:00Z",
			"lastDeliveryTime": "2023-07-19T03:33:00Z",
			"totalDistance": {
				"value": 1689.6387353713687,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-6cc4ad8e-4c72-0a50-b20e-89b3e143d037",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SCK4",
								"stopCode": "SCK4",
								"line1": "6001 S AUSTIN RD",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "California",
								"country": "US",
								"postalCode": "95215",
								"latitude": 37.910758,
								"longitude": -121.190165,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T16:56:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T17:26:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "FSD1",
								"stopCode": "FSD1",
								"line1": "6700 N Marion Rd",
								"line2": null,
								"line3": null,
								"city": "SIOUX FALLS",
								"state": "South Dakota",
								"country": "US",
								"postalCode": "57107",
								"latitude": 43.62143,
								"longitude": -96.78962,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "FSD1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-19T03:32:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-19T03:33:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1689.6387353713687,
						"unit": "miles"
					},
					"payout": {
						"value": 3903.065478707862,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 709.6482688559747,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 3193.417209851887,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInitialPlacement"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "ea7a9c68-aaf0-4ae3-a59b-74a858fc17dc",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 709.6482688559747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 3193.417209851887,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 18.942450972813983,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T20:53:08.745Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SCK4",
				"stopCode": "SCK4",
				"line1": "6001 S AUSTIN RD",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "California",
				"country": "US",
				"postalCode": "95215",
				"latitude": 37.910758,
				"longitude": -121.190165,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "FSD1",
				"stopCode": "FSD1",
				"line1": "6700 N Marion Rd",
				"line2": null,
				"line3": null,
				"city": "SIOUX FALLS",
				"state": "South Dakota",
				"country": "US",
				"postalCode": "57107",
				"latitude": 43.62143,
				"longitude": -96.78962,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [
				{
					"start": "2023-07-16T16:56:00Z",
					"end": "2023-07-16T17:56:00Z"
				}
			],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "9e8e1524-4d0a-42e6-8ffb-c1d6ffd06ed4",
			"version": 17,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1859.558629295587,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 52980000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T17:30:00Z",
			"lastDeliveryTime": "2023-07-17T08:13:00Z",
			"totalDistance": {
				"value": 681.1570070679808,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-90c4a5c8-01f9-9c95-34f2-b75ffd279c83",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SCK6",
								"stopCode": "SCK6",
								"line1": "1500 East Grant Line Rd",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "California",
								"country": "US",
								"postalCode": "95304",
								"latitude": 37.752234,
								"longitude": -121.403175,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK6",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T17:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T18:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "GYR1-POD",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "GYR1",
								"stopCode": "GYR1",
								"line1": "605 143rd Ave",
								"line2": null,
								"line3": null,
								"city": "GOODYEAR",
								"state": "Arizona",
								"country": "US",
								"postalCode": "85338",
								"latitude": 33.3753075,
								"longitude": -112.4085261,
								"timeZone": "America/Phoenix",
								"vendorCodes": null
							},
							"locationCode": "GYR1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T08:12:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T08:13:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "GYR1-POD",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 681.1570070679808,
						"unit": "miles"
					},
					"payout": {
						"value": 1859.558629295587,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 286.0859429685519,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 1573.472686327036,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersEmptyPod"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "9e8e1524-4d0a-42e6-8ffb-c1d6ffd06ed4",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 286.0859429685519,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 1573.472686327036,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.9742821081728006,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T08:30:42.552Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SCK6",
				"stopCode": "SCK6",
				"line1": "1500 East Grant Line Rd",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "California",
				"country": "US",
				"postalCode": "95304",
				"latitude": 37.752234,
				"longitude": -121.403175,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "GYR1",
				"stopCode": "GYR1",
				"line1": "605 143rd Ave",
				"line2": null,
				"line3": null,
				"city": "GOODYEAR",
				"state": "Arizona",
				"country": "US",
				"postalCode": "85338",
				"latitude": 33.3753075,
				"longitude": -112.4085261,
				"timeZone": "America/Phoenix",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [
				{
					"start": "2023-07-16T17:30:00Z",
					"end": "2023-07-17T17:30:00Z"
				}
			],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "8e017699-9f49-4db6-9959-819f70221911",
			"version": 4,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 3,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 873.9622783410126,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 34140000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T19:00:00Z",
			"lastDeliveryTime": "2023-07-17T04:29:00Z",
			"totalDistance": {
				"value": 382.91875477727643,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-0ac4af6a-1a0f-d56f-a1b8-d078ce63841b",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T19:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T19:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB5-MOR",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "LGB5",
								"stopCode": "LGB5",
								"line1": "555 E ORANGE SHOW RD",
								"line2": null,
								"line3": null,
								"city": "SAN BERNARDINO",
								"state": "California",
								"country": "US",
								"postalCode": "92408-2453",
								"latitude": 34.077284,
								"longitude": -117.275668,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LGB5",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T03:17:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T03:18:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB5-MOR",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 381.91834715777435,
						"unit": "miles"
					},
					"payout": {
						"value": 871.6789780024895,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 160.4057058062652,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 711.2732721962242,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"OutboundAmazonManaged"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "8e017699-9f49-4db6-9959-819f70221911",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				},
				{
					"versionedLoadId": {
						"id": "tr-84c4af7b-f77e-a773-eaa4-e3bd750a1d82",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 2,
							"location": {
								"label": "LGB5",
								"stopCode": "LGB5",
								"line1": "555 E ORANGE SHOW RD",
								"line2": null,
								"line3": null,
								"city": "SAN BERNARDINO",
								"state": "California",
								"country": "US",
								"postalCode": "92408-2453",
								"latitude": 34.077284,
								"longitude": -117.275668,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LGB5",
							"weight": {
								"value": 0,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T03:17:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T03:18:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SBD2",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 3,
							"location": {
								"label": "SBD2",
								"stopCode": "SBD2",
								"line1": "1494 S WATERMAN AVE",
								"line2": null,
								"line3": null,
								"city": "SAN BERNARDINO",
								"state": "California",
								"country": "US",
								"postalCode": "92408-2805",
								"latitude": 34.072801,
								"longitude": -117.281212,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SBD2",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T03:59:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T04:29:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "SBD2",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1.0004076195021077,
						"unit": "miles"
					},
					"payout": {
						"value": 2.283300338523025,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 0.4201712001908852,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 1.86312913833214,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"FleetManagementEquipmentRepositioning"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "8e017699-9f49-4db6-9959-819f70221911",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 160.8258770064561,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 713.1364013345564,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T14:06:25.085Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "SBD2",
				"stopCode": "SBD2",
				"line1": "1494 S WATERMAN AVE",
				"line2": null,
				"line3": null,
				"city": "SAN BERNARDINO",
				"state": "California",
				"country": "US",
				"postalCode": "92408-2805",
				"latitude": 34.072801,
				"longitude": -117.281212,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "6a0f13e6-f44f-4ed2-9ef6-da16545b06c0",
			"version": 1,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 3364.580883596826,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 172680000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T19:15:00Z",
			"lastDeliveryTime": "2023-07-18T19:13:00Z",
			"totalDistance": {
				"value": 2283.511825120981,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-94c4aba7-9607-47b8-3ce2-adebf695341d",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK5",
								"stopCode": "OAK5",
								"line1": "38811 Cherry St",
								"line2": null,
								"line3": null,
								"city": "NEWARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "94560-4939",
								"latitude": 37.520342,
								"longitude": -122.013685,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK5",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T19:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T19:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "MQJ5",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "MQJ5",
								"stopCode": "MQJ5",
								"line1": "1750 Smith Road",
								"line2": null,
								"line3": null,
								"city": "PLAINFIELD",
								"state": "Indiana",
								"country": "US",
								"postalCode": "46168",
								"latitude": 39.735866,
								"longitude": -86.363378,
								"timeZone": "America/New_York",
								"vendorCodes": null
							},
							"locationCode": "MQJ5",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T19:12:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T19:13:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "MQJ5",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 2283.511825120981,
						"unit": "miles"
					},
					"payout": {
						"value": 3364.580883596826,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Toll Charge",
							"monetaryAmount": {
								"value": 27,
								"unit": "USD"
							}
						},
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 959.074966550812,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 2378.505917046014,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"OutboundAmazonManaged"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "6a0f13e6-f44f-4ed2-9ef6-da16545b06c0",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 959.074966550812,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 2378.505917046014,
						"unit": "USD"
					}
				},
				{
					"name": "Toll Charge",
					"monetaryAmount": {
						"value": 27,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.183040146281826,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T18:54:18.259Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK5",
				"stopCode": "OAK5",
				"line1": "38811 Cherry St",
				"line2": null,
				"line3": null,
				"city": "NEWARK",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "94560-4939",
				"latitude": 37.520342,
				"longitude": -122.013685,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "MQJ5",
				"stopCode": "MQJ5",
				"line1": "1750 Smith Road",
				"line2": null,
				"line3": null,
				"city": "PLAINFIELD",
				"state": "Indiana",
				"country": "US",
				"postalCode": "46168",
				"latitude": 39.735866,
				"longitude": -86.363378,
				"timeZone": "America/New_York",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [
				{
					"start": "2023-07-16T19:15:00Z",
					"end": "2023-07-16T20:15:00Z"
				}
			],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "ff61ac9c-8e3c-43b4-b552-80f5210fe856",
			"version": 16,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1270.374478722665,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 106260000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T20:00:00Z",
			"lastDeliveryTime": "2023-07-18T01:31:00Z",
			"totalDistance": {
				"value": 730.8437196013562,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-42c4a323-15d1-c9a8-8fe2-b85f837a2940",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK5",
								"stopCode": "OAK5",
								"line1": "38811 Cherry St",
								"line2": null,
								"line3": null,
								"city": "NEWARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "94560-4939",
								"latitude": 37.520342,
								"longitude": -122.013685,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK5",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T20:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T21:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "TUS1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "TUS1",
								"stopCode": "TUS1",
								"line1": "5333 W. Lower Buckeye Rd.",
								"line2": null,
								"line3": null,
								"city": "PHOENIX",
								"state": "ARIZONA",
								"country": "US",
								"postalCode": "85043",
								"latitude": 33.421663,
								"longitude": -112.177462,
								"timeZone": "America/Phoenix",
								"vendorCodes": null
							},
							"locationCode": "TUS1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-18T01:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-18T01:31:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "TUS1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 730.8437196013562,
						"unit": "miles"
					},
					"payout": {
						"value": 1270.374478722665,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 306.9543622325696,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 963.4201164900958,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersReturns"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "ff61ac9c-8e3c-43b4-b552-80f5210fe856",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 306.9543622325696,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 963.4201164900958,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 34.183040146281826,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T11:30:41.930Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK5",
				"stopCode": "OAK5",
				"line1": "38811 Cherry St",
				"line2": null,
				"line3": null,
				"city": "NEWARK",
				"state": "CALIFORNIA",
				"country": "US",
				"postalCode": "94560-4939",
				"latitude": 37.520342,
				"longitude": -122.013685,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "TUS1",
				"stopCode": "TUS1",
				"line1": "5333 W. Lower Buckeye Rd.",
				"line2": null,
				"line3": null,
				"city": "PHOENIX",
				"state": "ARIZONA",
				"country": "US",
				"postalCode": "85043",
				"latitude": 33.421663,
				"longitude": -112.177462,
				"timeZone": "America/Phoenix",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [
				{
					"start": "2023-07-16T20:00:00Z",
					"end": "2023-07-17T20:00:00Z"
				}
			],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "f921b056-2b84-434f-be9c-b3c41c596a18",
			"version": 11,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1870.327163389244,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 63660000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T21:20:00Z",
			"lastDeliveryTime": "2023-07-17T15:01:00Z",
			"totalDistance": {
				"value": 818.8249349385526,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-2ac4ad0f-0382-b3d4-f7ad-f7978a28b5d9",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SJC7",
								"stopCode": "SJC7",
								"line1": "188 Mountain House Parkway",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95377",
								"latitude": 37.7071466,
								"longitude": -121.5809152,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SJC7",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T21:20:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T22:20:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "RLB1",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "HUBG_MARSDEN",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "HUBG_MARSDEN",
								"stopCode": "HUBG_MARSDEN",
								"line1": "7000 East Century Park Drive",
								"line2": null,
								"line3": null,
								"city": "TUCSON",
								"state": "AZ",
								"country": "US",
								"postalCode": "85756",
								"latitude": 32.125467,
								"longitude": -110.842784,
								"timeZone": "America/Phoenix",
								"vendorCodes": null
							},
							"locationCode": "HUBG_MARSDEN",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T15:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T15:01:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "HUBG_MARSDEN",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 818.8249349385526,
						"unit": "miles"
					},
					"payout": {
						"value": 1870.327163389244,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 343.9064726741921,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 1526.420690715052,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersBrokenCarts"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "f921b056-2b84-434f-be9c-b3c41c596a18",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 343.9064726741921,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 1526.420690715052,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 7.5433398950006545,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T12:50:35.556Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SJC7",
				"stopCode": "SJC7",
				"line1": "188 Mountain House Parkway",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95377",
				"latitude": 37.7071466,
				"longitude": -121.5809152,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "HUBG_MARSDEN",
				"stopCode": "HUBG_MARSDEN",
				"line1": "7000 East Century Park Drive",
				"line2": null,
				"line3": null,
				"city": "TUCSON",
				"state": "AZ",
				"country": "US",
				"postalCode": "85756",
				"latitude": 32.125467,
				"longitude": -110.842784,
				"timeZone": "America/Phoenix",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "3823dccd-44ff-4ee9-831f-e0de33dcc374",
			"version": 20,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 1797.024326282745,
				"unit": "USD"
			},
			"transitOperatorType": "TEAM_DRIVER",
			"totalDuration": 54780000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T21:30:00Z",
			"lastDeliveryTime": "2023-07-17T12:43:00Z",
			"totalDistance": {
				"value": 664.8578460239466,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-5ec4addb-abb6-299f-5ad4-d0d3b03e1169",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "OAK4",
								"stopCode": "OAK4",
								"line1": "1555 North Chrisman Road",
								"line2": null,
								"line3": null,
								"city": "TRACY",
								"state": "CA",
								"country": "US",
								"postalCode": "95304-9370",
								"latitude": 37.745889,
								"longitude": -121.404929,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "OAK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T21:30:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T22:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "PDX9",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "PDX9",
								"stopCode": "PDX9",
								"line1": "1250 NW Swigert Way",
								"line2": null,
								"line3": null,
								"city": "TROUTDALE",
								"state": "Oregon",
								"country": "US",
								"postalCode": "97060",
								"latitude": 45.554181,
								"longitude": -122.400337,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "PDX9",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T12:42:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T12:43:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "PDX9",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 664.8578460239466,
						"unit": "miles"
					},
					"payout": {
						"value": 1797.024326282745,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 279.2402953300576,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 1517.784030952687,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersUniversalPallet"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "3823dccd-44ff-4ee9-831f-e0de33dcc374",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 279.2402953300576,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 1517.784030952687,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 2.6312505362193015,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T23:42:25.304Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "OAK4",
				"stopCode": "OAK4",
				"line1": "1555 North Chrisman Road",
				"line2": null,
				"line3": null,
				"city": "TRACY",
				"state": "CA",
				"country": "US",
				"postalCode": "95304-9370",
				"latitude": 37.745889,
				"longitude": -121.404929,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "PDX9",
				"stopCode": "PDX9",
				"line1": "1250 NW Swigert Way",
				"line2": null,
				"line3": null,
				"city": "TROUTDALE",
				"state": "Oregon",
				"country": "US",
				"postalCode": "97060",
				"latitude": 45.554181,
				"longitude": -122.400337,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "857c26b0-94eb-4070-92d1-c531494e3441",
			"version": 10,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 3,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 836.3236881179455,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 36360000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T22:00:00Z",
			"lastDeliveryTime": "2023-07-17T08:06:00Z",
			"totalDistance": {
				"value": 395.91535998160634,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-12c4ade9-923f-ce83-9a77-d6b627061c01",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SCK3",
								"stopCode": "SCK3",
								"line1": "3565 N AIRPORT WAY",
								"line2": null,
								"line3": null,
								"city": "MANTECA",
								"state": "California",
								"country": "US",
								"postalCode": "95336-8696",
								"latitude": 37.847447,
								"longitude": -121.258018,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK3",
							"weight": {
								"value": 1,
								"unit": "grams"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T22:00:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T22:15:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "HLA1-A",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "HLA1",
								"stopCode": "HLA1",
								"line1": "5650 Dolly Ave",
								"line2": null,
								"line3": null,
								"city": "BUENA PARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "90621",
								"latitude": 33.8806037,
								"longitude": -118.005327,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "HLA1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T05:54:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T05:55:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "HLA1-A",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 347.9256186594895,
						"unit": "miles"
					},
					"payout": {
						"value": 734.9511183439324,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 146.1287598369856,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 588.8223585069468,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"OutboundAMZLHeavyBulky"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "857c26b0-94eb-4070-92d1-c531494e3441",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				},
				{
					"versionedLoadId": {
						"id": "tr-4ac4ae0b-7040-6bdd-f95a-12bf5262b67c",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 2,
							"location": {
								"label": "HLA1",
								"stopCode": "HLA1",
								"line1": "5650 Dolly Ave",
								"line2": null,
								"line3": null,
								"city": "BUENA PARK",
								"state": "CALIFORNIA",
								"country": "US",
								"postalCode": "90621",
								"latitude": 33.8806037,
								"longitude": -118.005327,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "HLA1",
							"weight": {
								"value": 0,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T05:54:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T05:55:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "NCSL",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 3,
							"location": {
								"label": "LGB6",
								"stopCode": "LGB6",
								"line1": "20901 Krameria Ave",
								"line2": null,
								"line3": null,
								"city": "RIVERSIDE",
								"state": "CA",
								"country": "US",
								"postalCode": "92518",
								"latitude": 33.8801071,
								"longitude": -117.298625,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "LGB6",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-17T07:36:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-17T08:06:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "LGB6",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "EMPTY",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 47.98974132211683,
						"unit": "miles"
					},
					"payout": {
						"value": 101.3725697740131,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 20.15569135528906,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 81.21687841872406,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"FleetManagementEquipmentRepositioning"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "857c26b0-94eb-4070-92d1-c531494e3441",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 166.2844511922747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 670.0392369256708,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 13.273653183913453,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-16T00:41:09.118Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SCK3",
				"stopCode": "SCK3",
				"line1": "3565 N AIRPORT WAY",
				"line2": null,
				"line3": null,
				"city": "MANTECA",
				"state": "California",
				"country": "US",
				"postalCode": "95336-8696",
				"latitude": 37.847447,
				"longitude": -121.258018,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "LGB6",
				"stopCode": "LGB6",
				"line1": "20901 Krameria Ave",
				"line2": null,
				"line3": null,
				"city": "RIVERSIDE",
				"state": "CA",
				"country": "US",
				"postalCode": "92518",
				"latitude": 33.8801071,
				"longitude": -117.298625,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		},
		{
			"id": "dbc4f031-4ca2-464a-b365-4815a637551a",
			"version": 27,
			"entityType": null,
			"operatorIds": null,
			"startTime": null,
			"endTime": null,
			"expirationTime": null,
			"expectedArrivalForNextStop": null,
			"stopCount": 2,
			"isRetendered": null,
			"isUnaccepted": null,
			"businessType": null,
			"contractId": null,
			"payout": {
				"value": 3396.613164167647,
				"unit": "USD"
			},
			"transitOperatorType": "SINGLE_DRIVER",
			"totalDuration": 235620000,
			"tourState": "work-opportunity",
			"firstPickupTime": "2023-07-16T22:06:00Z",
			"lastDeliveryTime": "2023-07-19T15:33:00Z",
			"totalDistance": {
				"value": 1689.6387353713687,
				"unit": "miles"
			},
			"loads": [
				{
					"versionedLoadId": {
						"id": "tr-cac4ad8e-4c72-2870-5a29-ce71145f7595",
						"version": null
					},
					"stops": [
						{
							"stopId": null,
							"stopType": "PICKUP",
							"stopSequenceNumber": 1,
							"location": {
								"label": "SCK4",
								"stopCode": "SCK4",
								"line1": "6001 S AUSTIN RD",
								"line2": null,
								"line3": null,
								"city": "STOCKTON",
								"state": "California",
								"country": "US",
								"postalCode": "95215",
								"latitude": 37.910758,
								"longitude": -121.190165,
								"timeZone": "America/Los_Angeles",
								"vendorCodes": null
							},
							"locationCode": "SCK4",
							"weight": {
								"value": 10000,
								"unit": "pounds"
							},
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-16T22:06:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-16T22:36:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [
								{
									"assetId": null,
									"assetSource": null,
									"assetOwner": "AZNG",
									"assetType": null,
									"trailerLoadingStatus": null,
									"dropTrailerETA": null
								}
							],
							"loadingType": "PRELOADED",
							"unloadingType": null,
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						},
						{
							"stopId": null,
							"stopType": "DROPOFF",
							"stopSequenceNumber": 2,
							"location": {
								"label": "FSD1",
								"stopCode": "FSD1",
								"line1": "6700 N Marion Rd",
								"line2": null,
								"line3": null,
								"city": "SIOUX FALLS",
								"state": "South Dakota",
								"country": "US",
								"postalCode": "57107",
								"latitude": 43.62143,
								"longitude": -96.78962,
								"timeZone": "America/Chicago",
								"vendorCodes": null
							},
							"locationCode": "FSD1",
							"weight": null,
							"actions": [
								{
									"type": "CHECKIN",
									"plannedTime": "2023-07-19T15:32:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								},
								{
									"type": "CHECKOUT",
									"plannedTime": "2023-07-19T15:33:00Z",
									"actualTime": null,
									"actualTimeSource": null,
									"delayReport": null,
									"yardEvents": null
								}
							],
							"trailerDetails": [],
							"loadingType": null,
							"unloadingType": "DROP",
							"pickupInstructions": null,
							"deliveryInstructions": null,
							"pickupNumbers": null,
							"deliveryNumbers": null,
							"contacts": null,
							"stopRequirements": [
								{
									"requirement": null,
									"stopRequirementType": "CONTAINER",
									"containerOwner": "FSD1",
									"oceanCarrierSCAC": null
								}
							],
							"isVendorLocation": null,
							"dropTrailerTime": null,
							"calculatedEstimateArrivalTime": null
						}
					],
					"loadType": "LOADED",
					"equipmentType": "FIFTY_THREE_FOOT_TRUCK",
					"weight": null,
					"distance": {
						"value": 1689.6387353713687,
						"unit": "miles"
					},
					"payout": {
						"value": 3396.613164167647,
						"unit": "USD"
					},
					"costItems": [
						{
							"name": "Fuel Surcharge",
							"monetaryAmount": {
								"value": 709.6482688559747,
								"unit": "USD"
							}
						},
						{
							"name": "Base Rate",
							"monetaryAmount": {
								"value": 2686.964895311673,
								"unit": "USD"
							}
						}
					],
					"specialServices": [],
					"loadShipperAccounts": [
						"TransfersInitialPlacement"
					],
					"shipperReferenceNumbers": [],
					"purchaseOrders": [],
					"isExternalLoad": false,
					"workOpportunityId": "dbc4f031-4ca2-464a-b365-4815a637551a",
					"loadfreightType": "TRUCKLOAD",
					"aggregatedFreightAttributes": {
						"freightCommodities": [
							"UNKNOWN"
						],
						"temperature": null
					},
					"woLoadCarrierSpecificShipperAccounts": {
						"VAS": false,
						"GLOBAL_MILE": false
					}
				}
			],
			"aggregatedCostItems": [
				{
					"name": "Fuel Surcharge",
					"monetaryAmount": {
						"value": 709.6482688559747,
						"unit": "USD"
					}
				},
				{
					"name": "Base Rate",
					"monetaryAmount": {
						"value": 2686.964895311673,
						"unit": "USD"
					}
				}
			],
			"workType": "SPOT",
			"workOpportunityOptionId": "1",
			"workOpportunityType": "ONE_WAY",
			"deadhead": {
				"value": 18.942450972813983,
				"unit": "miles"
			},
			"createdAtTime": "2023-07-15T20:53:02.340Z",
			"endPriorityTime": null,
			"relevanceScore": 0,
			"carrierSpecificShipperAccounts": {
				"AF_Or_IB": false,
				"VAS": false,
				"DELAYED_DELIVERY": false
			},
			"startLocation": {
				"label": "SCK4",
				"stopCode": "SCK4",
				"line1": "6001 S AUSTIN RD",
				"line2": null,
				"line3": null,
				"city": "STOCKTON",
				"state": "California",
				"country": "US",
				"postalCode": "95215",
				"latitude": 37.910758,
				"longitude": -121.190165,
				"timeZone": "America/Los_Angeles",
				"vendorCodes": null
			},
			"endLocation": {
				"label": "FSD1",
				"stopCode": "FSD1",
				"line1": "6700 N Marion Rd",
				"line2": null,
				"line3": null,
				"city": "SIOUX FALLS",
				"state": "South Dakota",
				"country": "US",
				"postalCode": "57107",
				"latitude": 43.62143,
				"longitude": -96.78962,
				"timeZone": "America/Chicago",
				"vendorCodes": null
			},
			"powerType": null,
			"shouldShowPriorityBadge": false,
			"workOpportunityArrivalWindows": [
				{
					"start": "2023-07-16T22:06:00Z",
					"end": "2023-07-16T23:06:00Z"
				}
			],
			"matchDeviationDetails": null,
			"eligibleFeatures": [],
			"carrierIneligibleForWOReasonList": [],
			"carrierIneligibleForWOContextMap": {},
			"oneDayPaymentEligible": false,
			"laportLoad": false,
			"chassisDepotLoad": false,
			"adHocLoad": false
		}
	],
	"carrierDetails": {
		"carrierPerformanceScore": 0,
		"carrierEngagementScore": 0,
		"carrierPerformanceCategory": "A",
		"carrierEngagementCategory": "UNKNOWN",
		"priorityAccessVersion": "priorityAccessVersion2",
		"isCarrierEligibleForOneDayPayment": false,
		"isCarrierAllowedForOneDayPayment": false,
		"isCarrierEligibleForOptInOneDayPayment": false,
		"isCarrierWhiteListedForOneDayPayment": false
	},
	"nextItemToken": 50,
	"totalResultsSize": 518,
	"isBotRequest": null
}`;




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


