
let getAllLoadsButton = document.createElement('button');

topBody.appendChild(getAllLoadsButton)
getAllLoadsButton.innerText = 'Get all loads';

getAllLoadsButton.addEventListener("click", () => {
    getLoads();
})

async function getLoads() {
    let data;
    try {
        const response = await fetch('https://relay.amazon.com/api/loadboard/search', {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                'Content-type': 'application/json',
                "X-CSRF-Token": 'g1E+w8CDMJBDQgVn1ciHs9kqzjmeCu3nXQeg3nNY7d6cAAAAAgAAAABkurAwcmF3AAAAAIIXF/5ED9rqj+J7i/USjw==',
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


        // get csrf token********************************

        //console.log(token)
        //try
        let dataKey = sessionStorage.getItem("token");
        console.log(dataKey)

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


