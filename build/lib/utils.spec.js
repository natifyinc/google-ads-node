"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
test("proto object result is parsed from field mask", () => {
    const fakeResponse = [
        {
            campaign: {
                resourceName: "customers/123/campaigns/123",
                id: { value: 123 },
                targetCpa: undefined,
                name: { value: "2019" },
                status: 0,
                urlCustomParametersList: [],
                manualCpc: undefined,
                manualCpv: undefined,
            },
            metrics: {
                cost: { value: 100 },
                clicks: undefined,
            },
        },
    ];
    const fieldMask = {
        pathsList: ["campaign.id", "campaign.name", "campaign.url_custom_parameters", "metrics.cost"],
    };
    const parsedResults = utils_1.formatCallResults(fakeResponse, fieldMask);
    expect(parsedResults).toStrictEqual([
        {
            campaign: {
                resourceName: "customers/123/campaigns/123",
                id: 123,
                name: "2019",
                urlCustomParameters: [],
            },
            metrics: {
                cost: 100,
            },
        },
    ]);
    expect(Object.keys(parsedResults[0].campaign)[0]).toEqual("resourceName");
});
test("proto object result can be parsed for deeply nested entities", () => {
    const fieldMask = {
        pathsList: [
            "campaign.id",
            "campaign.name",
            "ad_group.id",
            "ad_group.name",
            "ad_group_criterion.criterion_id",
            "ad_group_criterion.keyword.text",
            "ad_group_criterion.keyword.match_type",
            "metrics.impressions",
            "metrics.clicks",
            "metrics.cost_micros",
        ],
    };
    const parsedResults = utils_1.formatCallResults(JSON.parse(fakeKeywordResponse), fieldMask);
    expect(parsedResults).toEqual([
        {
            campaign: {
                resourceName: "customers/9262111890/campaigns/1473765780",
                id: 1473765780,
                name: "test-campaign-2 (created during library test)",
            },
            adGroup: {
                resourceName: "customers/9262111890/adGroups/59960230227",
                id: 59960230227,
                name: "new name",
            },
            adGroupCriterion: {
                resourceName: "customers/9262111890/adGroupCriteria/59960230227_10234981",
                criterionId: 10234981,
                keyword: {
                    text: "hello",
                    matchType: 4,
                },
            },
            metrics: {
                clicks: 0,
                costMicros: 0,
                impressions: 0,
            },
        },
        {
            campaign: {
                resourceName: "customers/9262111890/campaigns/1485014801",
                id: 1485014801,
                name: "Test Campaign - DO NOT REMOVE",
            },
            adGroup: {
                resourceName: "customers/9262111890/adGroups/60170225920",
                id: 60170225920,
                name: "Test AdGroup (Keywords) - DO NOT REMOVE",
            },
            adGroupCriterion: {
                resourceName: "customers/9262111890/adGroupCriteria/60170225920_480628692166",
                criterionId: 480628692166,
                keyword: {
                    text: "test-keyword-4",
                    matchType: 4,
                },
            },
            metrics: {
                clicks: 0,
                costMicros: 0,
                impressions: 0,
            },
        },
    ]);
});
test("proto object result can be parsed for nested entities with arrays", async () => {
    const fieldMask = {
        pathsList: [
            "ad_group_ad.ad.final_urls",
            "ad_group.targeting_setting.target_restrictions",
            "ad_group.name",
            "ad_group.url_custom_parameters",
        ],
    };
    const parsedResultsWithFieldMask = utils_1.formatCallResults(fakeAdGroupResponse, fieldMask);
    const parsedResultsWithoutFieldMask = utils_1.formatCallResults(fakeAdGroupResponse, undefined);
    const expected_with_field_mask = [
        {
            adGroupAd: {
                resourceName: "customers/3827277046/adGroupAds/37706041185~170102539400",
                ad: {
                    finalUrls: ["http://opteo.co/lp/ad-words-tool"],
                },
            },
            adGroup: {
                resourceName: "customers/3827277046/adGroups/37706041185",
                urlCustomParameters: [{ key: "yy", value: "1" }],
                targetingSetting: {
                    targetRestrictions: [
                        { targetingDimension: 3, bidOnly: false },
                        { targetingDimension: 4, bidOnly: false },
                        { targetingDimension: 5, bidOnly: true },
                        { targetingDimension: 6, bidOnly: true },
                        { targetingDimension: 7, bidOnly: false },
                        { targetingDimension: 8, bidOnly: false },
                    ],
                },
                name: "ad words tool [MB]",
            },
        },
    ];
    const expected_without_field_mask = [
        {
            adGroupAd: {
                resourceName: "customers/3827277046/adGroupAds/37706041185~170102539400",
                ad: {
                    finalUrls: ["http://opteo.co/lp/ad-words-tool"],
                    someDirectArray: [3, 4, 5],
                    // Note that have been returned even through it is empty.
                    finalAppUrls: [],
                },
            },
            adGroup: {
                resourceName: "customers/3827277046/adGroups/37706041185",
                urlCustomParameters: [{ key: "yy", value: "1" }],
                targetingSetting: {
                    targetRestrictions: [
                        { targetingDimension: 3, bidOnly: false },
                        { targetingDimension: 4, bidOnly: false },
                        { targetingDimension: 5, bidOnly: true },
                        { targetingDimension: 6, bidOnly: true },
                        { targetingDimension: 7, bidOnly: false },
                        { targetingDimension: 8, bidOnly: false },
                    ],
                },
                name: "ad words tool [MB]",
                // Note that `status` will be returned by the parsing function even through it is of the "UNSPECIFIED" enum type.
                status: 0,
            },
        },
    ];
    expect(parsedResultsWithFieldMask).toEqual(expected_with_field_mask);
    expect(parsedResultsWithoutFieldMask).toEqual(expected_without_field_mask);
});
test("proto object result can be parsed when fieldmask ends in unspecified object", () => {
    // This can happen for fields such as ad_group_ad.policy_summary, which returns an object.
    // It is not possible to select individual fields of this object -- the whole object is always returned.
    const fieldMask = {
        pathsList: ["ad_group_ad.policy_summary"],
    };
    const parsedResultsWithFieldMask = utils_1.formatCallResults(fakeAdGroupAdResponse, fieldMask);
    const parsedResultsWithoutFieldMask = utils_1.formatCallResults(fakeAdGroupAdResponse, undefined);
    const expected = [
        {
            adGroupAd: {
                resourceName: "customers/3827277046/adGroupAds/37706041185~170102539400",
                policySummary: {
                    approvalStatus: 0,
                    policyTopicEntries: [],
                    reviewStatus: 2,
                },
            },
        },
    ];
    expect(parsedResultsWithFieldMask).toEqual(expected);
    expect(parsedResultsWithoutFieldMask).toEqual(expected);
});
test("proto object result can be parsed when field mask is not present", () => {
    const parsedResults = utils_1.formatCallResults([JSON.parse(fakeCampaignResponse)], undefined);
    expect(parsedResults).toEqual([
        {
            resourceName: "customers/9262111890/campaigns/1485014801",
            id: 1485014801,
            name: "Test Campaign - DO NOT REMOVE",
            status: 2,
            servingStatus: 2,
            adServingOptimizationStatus: 2,
            advertisingChannelType: 2,
            advertisingChannelSubType: 0,
            urlCustomParameters: [],
            networkSettings: {
                targetGoogleSearch: true,
                targetSearchNetwork: true,
                targetContentNetwork: true,
                targetPartnerSearchNetwork: false,
            },
            geoTargetTypeSetting: {
                positiveGeoTargetType: 2,
                negativeGeoTargetType: 2,
            },
            campaignBudget: "customers/9262111890/campaignBudgets/1548344372",
            biddingStrategyType: 9,
            startDate: "2018-07-24",
            endDate: "2037-12-30",
            frequencyCaps: [],
            videoBrandSafetySuitability: 0,
            selectiveOptimization: {
                conversionActions: [],
            },
            targetSpend: {
                cpcBidCeilingMicros: 1000000,
            },
        },
    ]);
});
test("parsing results with field mask correctly removes undefined properties", () => {
    // Sometimes, the api will not return a field at all if it is unset on the google servers.
    // We need to make sure we follow that behavior by not returning that field.
    const fieldMask = {
        // Asking for a name that will not be returned in API response
        pathsList: ["ad_group_ad.name", "ad_group_ad.policy_summary"],
    };
    const parsedResultsWithFieldMask = utils_1.formatCallResults(fakeAdGroupAdResponse, fieldMask);
    // We should not have 'name' in the parsed result
    expect(Object.keys(parsedResultsWithFieldMask[0].adGroupAd).includes("name")).toBeFalsy();
});
test("parsing results fields ending in 'List' works correctly", () => {
    const fieldMask = {
        pathsList: [
            "ad_group_simulation.ad_group_id",
            "ad_group_simulation.cpc_bid_point_list.points",
            "ad_group.url_custom_parameters",
        ],
    };
    const parsedResultsWithFieldMask = utils_1.formatCallResults(fakeSimulationResponse, fieldMask);
    expect(parsedResultsWithFieldMask).toEqual([
        {
            adGroupSimulation: {
                resourceName: "customers/2867339011/adGroupSimulations/58185498151~CPC_BID~DEFAULT~20190910~20190916",
                adGroupId: 58185498151,
                // This should end in "List" because that's how it is defined in the docs
                cpcBidPointList: {
                    // This should NOT end in "List" (even though it comes in as pointsList)
                    points: [
                        {
                            cpcBidMicros: 6520000,
                            biddableConversions: 5.348322868347168,
                            biddableConversionsValue: 374.3826599121094,
                            clicks: 41,
                            costMicros: 149090000,
                            impressions: 696,
                            topSlotImpressions: 542,
                        },
                    ],
                },
            },
            adGroup: {
                resourceName: "customers/2867339011/adGroups/58185498151",
                urlCustomParameters: [],
            },
        },
    ]);
});
test("parsing results with no field mask correctly removes undefined properties", () => {
    const result = [
        {
            resourceName: "customers/9262111890/campaigns/1485014801",
            id: {
                value: 1485014801,
            },
            name: {
                value: "Test Campaign - DO NOT REMOVE",
            },
            trackingUrlTemplate: undefined,
            status: 2,
        },
    ];
    const parsedResult = utils_1.formatCallResults(result, undefined);
    expect(parsedResult[0]).toEqual({
        resourceName: "customers/9262111890/campaigns/1485014801",
        id: 1485014801,
        name: "Test Campaign - DO NOT REMOVE",
        status: 2,
    });
});
test("parsing removes the append list postfix to array types", () => {
    const result = [
        {
            resourceName: "customers/9262111890/campaigns/1485014801",
            urlCustomParametersList: [],
            frequencyCapsList: [],
        },
    ];
    const parsedResult = utils_1.formatCallResults(result, undefined);
    expect(parsedResult[0]).toEqual({
        resourceName: "customers/9262111890/campaigns/1485014801",
        urlCustomParameters: [],
        frequencyCaps: [],
    });
});
test("parsing removes undefined properties even if they're defined in the field mask", () => {
    const result = [
        {
            campaign: {
                resourceName: "customers/9262111890/campaigns/1485014801",
                id: 123,
                finalUrlSuffix: undefined,
                dynamicSearchSettings: undefined,
                searchSettings: {
                    one: "one",
                    two: undefined,
                },
            },
        },
    ];
    const parsedResult = utils_1.formatCallResults(result, {
        pathsList: [
            "campaign.resource_name",
            "campaign.id",
            "campaign.final_url_suffix",
            "campaign.dynamic_search_settings",
            "campaign.search_settings.one",
            "campaign.search_settings.two",
        ],
    });
    expect(parsedResult[0]).toEqual({
        campaign: {
            resourceName: "customers/9262111890/campaigns/1485014801",
            id: 123,
            searchSettings: {
                one: "one",
            },
        },
    });
});
test("update mask can be generated from a resource object", () => {
    const resource = {
        resource_name: "customers/123/campaignBudgets/321",
        amount_micros: 20000,
        status: 2,
        settings: {
            another_setting: {
                something: "value",
            },
        },
        some_list: ["foo", "bar", "baz"],
    };
    const mask = utils_1.getFieldMask(resource);
    expect(mask.toObject().pathsList).toEqual([
        "amount_micros",
        "status",
        "settings.another_setting.something",
        "some_list",
    ]);
});
test("field location error can be generated from errors list object", () => {
    const fieldError = {
        fieldPathElementsList: [
            { fieldName: "operations", index: { value: 0 } },
            { fieldName: "create" },
            { fieldName: "ad" },
            { fieldName: "display_url" },
        ],
    };
    const badFieldError = { fieldPathBad: "invalid" };
    const emptyFieldError = { fieldPathElementsList: [] };
    const path = utils_1.getErrorLocationPath(fieldError);
    const badPath = utils_1.getErrorLocationPath(badFieldError);
    const emptyPath = utils_1.getErrorLocationPath(emptyFieldError);
    expect(path).toEqual("operations[0].create.ad.display_url");
    expect(badPath).toEqual("");
    expect(emptyPath).toEqual("");
    expect(utils_1.getErrorLocationPath(undefined)).toEqual("");
});
const fakeCampaignResponse = `
  {
   "resourceName": "customers/9262111890/campaigns/1485014801",
   "id": {
     "value": 1485014801
   },
   "name": {
     "value": "Test Campaign - DO NOT REMOVE"
   },
   "status": 2,
   "servingStatus": 2,
   "adServingOptimizationStatus": 2,
   "advertisingChannelType": 2,
   "advertisingChannelSubType": 0,
   "urlCustomParametersList": [],
   "networkSettings": {
     "targetGoogleSearch": {
       "value": true
     },
     "targetSearchNetwork": {
       "value": true
     },
     "targetContentNetwork": {
       "value": true
     },
     "targetPartnerSearchNetwork": {
       "value": false
     }
   },
   "geoTargetTypeSetting": {
     "positiveGeoTargetType": 2,
     "negativeGeoTargetType": 2
   },
   "campaignBudget": {
     "value": "customers/9262111890/campaignBudgets/1548344372"
   },
   "biddingStrategyType": 9,
   "startDate": {
     "value": "2018-07-24"
   },
   "endDate": {
     "value": "2037-12-30"
   },
   "frequencyCapsList": [],
   "videoBrandSafetySuitability": 0,
   "selectiveOptimization": {
     "conversionActionsList": []
   },
   "targetSpend": {
     "cpcBidCeilingMicros": {
       "value": 1000000
     }
   }
  }
`;
const fakeKeywordResponse = `
  [
    {
      "adGroup": {
        "resourceName": "customers/9262111890/adGroups/59960230227",
        "id": {
          "value": 59960230227
        },
        "name": {
          "value": "new name"
        },
        "status": 0,
        "type": 0,
        "adRotationMode": 0,
        "urlCustomParametersList": [],
        "displayCustomBidDimension": 0,
        "effectiveTargetCpaSource": 0,
        "effectiveTargetRoasSource": 0
      },
      "adGroupCriterion": {
        "resourceName": "customers/9262111890/adGroupCriteria/59960230227_10234981",
        "criterionId": {
          "value": 10234981
        },
        "status": 0,
        "type": 0,
        "effectiveCpcBidSource": 0,
        "effectiveCpmBidSource": 0,
        "effectiveCpvBidSource": 0,
        "effectivePercentCpcBidSource": 0,
        "finalUrlsList": [],
        "urlCustomParametersList": [],
        "keyword": {
          "text": {
            "value": "hello"
          },
          "matchType": 4
        }
      },
      "campaign": {
        "resourceName": "customers/9262111890/campaigns/1473765780",
        "id": {
          "value": 1473765780
        },
        "name": {
          "value": "test-campaign-2 (created during library test)"
        },
        "status": 0,
        "servingStatus": 0,
        "adServingOptimizationStatus": 0,
        "advertisingChannelType": 0,
        "advertisingChannelSubType": 0,
        "urlCustomParametersList": [],
        "biddingStrategyType": 0,
        "frequencyCapsList": [],
        "videoBrandSafetySuitability": 0
      },
      "keywordView": {
        "resourceName": "customers/9262111890/keywordViews/59960230227_10234981"
      },
      "metrics": {
        "clicks": {
          "value": 0
        },
        "costMicros": {
          "value": 0
        },
        "historicalCreativeQualityScore": 0,
        "historicalLandingPageQualityScore": 0,
        "historicalSearchPredictedCtr": 0,
        "impressions": {
          "value": 0
        },
        "interactionEventTypesList": []
      }
    },
    {
      "adGroup": {
        "resourceName": "customers/9262111890/adGroups/60170225920",
        "id": {
          "value": 60170225920
        },
        "name": {
          "value": "Test AdGroup (Keywords) - DO NOT REMOVE"
        },
        "status": 0,
        "type": 0,
        "adRotationMode": 0,
        "urlCustomParametersList": [],
        "displayCustomBidDimension": 0,
        "effectiveTargetCpaSource": 0,
        "effectiveTargetRoasSource": 0
      },
      "adGroupCriterion": {
        "resourceName": "customers/9262111890/adGroupCriteria/60170225920_480628692166",
        "criterionId": {
          "value": 480628692166
        },
        "status": 0,
        "type": 0,
        "effectiveCpcBidSource": 0,
        "effectiveCpmBidSource": 0,
        "effectiveCpvBidSource": 0,
        "effectivePercentCpcBidSource": 0,
        "finalUrlsList": [],
        "urlCustomParametersList": [],
        "keyword": {
          "text": {
            "value": "test-keyword-4"
          },
          "matchType": 4
        }
      },
      "campaign": {
        "resourceName": "customers/9262111890/campaigns/1485014801",
        "id": {
          "value": 1485014801
        },
        "name": {
          "value": "Test Campaign - DO NOT REMOVE"
        },
        "status": 0,
        "servingStatus": 0,
        "adServingOptimizationStatus": 0,
        "advertisingChannelType": 0,
        "advertisingChannelSubType": 0,
        "urlCustomParametersList": [],
        "biddingStrategyType": 0,
        "frequencyCapsList": [],
        "videoBrandSafetySuitability": 0
      },
      "keywordView": {
        "resourceName": "customers/9262111890/keywordViews/60170225920_480628692166"
      },
      "metrics": {
        "clicks": {
          "value": 0
        },
        "costMicros": {
          "value": 0
        },
        "historicalCreativeQualityScore": 0,
        "historicalLandingPageQualityScore": 0,
        "historicalSearchPredictedCtr": 0,
        "impressions": {
          "value": 0
        },
        "interactionEventTypesList": []
      }
    }
  ]`;
const fakeAdGroupResponse = [
    {
        accountBudget: undefined,
        accountBudgetProposal: undefined,
        adGroup: {
            resourceName: "customers/3827277046/adGroups/37706041185",
            id: undefined,
            name: { value: "ad words tool [MB]" },
            status: 0,
            finalUrlSuffix: undefined,
            targetingSetting: {
                targetRestrictionsList: [
                    { targetingDimension: 3, bidOnly: { value: false } },
                    { targetingDimension: 4, bidOnly: { value: false } },
                    { targetingDimension: 5, bidOnly: { value: true } },
                    { targetingDimension: 6, bidOnly: { value: true } },
                    { targetingDimension: 7, bidOnly: { value: false } },
                    { targetingDimension: 8, bidOnly: { value: false } },
                ],
            },
            effectiveTargetCpaMicros: undefined,
            effectiveTargetRoas: undefined,
            urlCustomParametersList: [{ key: { value: "yy" }, value: { value: "1" } }],
        },
        adGroupAd: {
            resourceName: "customers/3827277046/adGroupAds/37706041185~170102539400",
            adGroup: undefined,
            ad: {
                id: undefined,
                someDirectArray: [3, 4, 5],
                finalUrlsList: [{ value: "http://opteo.co/lp/ad-words-tool" }],
                finalAppUrlsList: [],
            },
        },
        adGroupAdLabel: undefined,
        adGroupAudienceView: undefined,
        adGroupBidModifier: undefined,
    },
];
const fakeAdGroupAdResponse = [
    {
        adGroupAd: {
            resourceName: "customers/3827277046/adGroupAds/37706041185~170102539400",
            adGroup: undefined,
            policySummary: { policyTopicEntriesList: [], reviewStatus: 2, approvalStatus: 0 },
        },
        adGroupAdLabel: undefined,
        adGroupAudienceView: undefined,
        adGroupBidModifier: undefined,
    },
];
const fakeSimulationResponse = [
    {
        adGroup: {
            resourceName: "customers/2867339011/adGroups/58185498151",
            urlCustomParametersList: [],
        },
        adGroupSimulation: {
            resourceName: "customers/2867339011/adGroupSimulations/58185498151~CPC_BID~DEFAULT~20190910~20190916",
            adGroupId: { value: 58185498151 },
            cpcBidPointList: {
                pointsList: [
                    {
                        cpcBidMicros: { value: 6520000 },
                        biddableConversions: { value: 5.348322868347168 },
                        biddableConversionsValue: { value: 374.3826599121094 },
                        clicks: { value: 41 },
                        costMicros: { value: 149090000 },
                        impressions: { value: 696 },
                        topSlotImpressions: { value: 542 },
                    },
                ],
            },
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdXRpbHMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFnRjtBQUVoRixJQUFJLENBQUMsK0NBQStDLEVBQUUsR0FBRyxFQUFFO0lBQ3pELE1BQU0sWUFBWSxHQUFHO1FBQ25CO1lBQ0UsUUFBUSxFQUFFO2dCQUNSLFlBQVksRUFBRSw2QkFBNkI7Z0JBQzNDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7Z0JBQ2xCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO2dCQUN2QixNQUFNLEVBQUUsQ0FBQztnQkFDVCx1QkFBdUIsRUFBRSxFQUFFO2dCQUMzQixTQUFTLEVBQUUsU0FBUztnQkFDcEIsU0FBUyxFQUFFLFNBQVM7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsTUFBTSxFQUFFLFNBQVM7YUFDbEI7U0FDRjtLQUNGLENBQUM7SUFDRixNQUFNLFNBQVMsR0FBRztRQUNoQixTQUFTLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGdDQUFnQyxFQUFFLGNBQWMsQ0FBQztLQUM5RixDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUcseUJBQWlCLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDbEM7WUFDRSxRQUFRLEVBQUU7Z0JBQ1IsWUFBWSxFQUFFLDZCQUE2QjtnQkFDM0MsRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsSUFBSSxFQUFFLE1BQU07Z0JBQ1osbUJBQW1CLEVBQUUsRUFBRTthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsR0FBRzthQUNWO1NBQ0Y7S0FDRixDQUFDLENB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