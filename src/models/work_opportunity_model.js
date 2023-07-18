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
