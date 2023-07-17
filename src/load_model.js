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
