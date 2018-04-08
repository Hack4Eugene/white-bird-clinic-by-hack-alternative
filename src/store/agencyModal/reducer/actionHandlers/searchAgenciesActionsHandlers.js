import {Map, Set, List, OrderedSet} from 'immutable';
let handleSearchAgencies = (state, payload) => {
    let newState = state.setIn(["HomeViewData", "agenciesIsLoading"], true);
    return newState;
};
let handleSearchAgenciesSuccess = (state, payload) => {
    let Agencies = List([]);
    console.log("about to open payload:\n", payload);
    payload.agencies.forEach((agency) => {
       Agencies = Agencies.push(Map({
        "Service_Name": agency["Service_Name"],
        "Other_Names": agency["Other_Names"],
        "Main_Phone": agency["Main_Phone"],
        "Physical_Site_Address": agency["Physical_Site_Address"],
        "Physical_Site_City": agency["Physical_Site_City"],
        "Physical_Site_State": agency["Physical_Site_State"],
        "Physical_Site_Zip": agency["Physical_Site_Zip"],
        "Web_Address": agency["Web_Address"],
        "Hours_Of_Operation": agency["Hours_of_Operation"],
        "Description_Of_Service": agency["Description_of_Service"],
        "Tag": agency["Tag"],
        "Sub_Tag": agency["Sub_Tag"],
        "_id": agency["_id"]
        }));
    });

    console.log("agencies: ", Agencies);
    let newState = state.setIn(["HomeViewData", "agencies"], Agencies);
    newState = newState.setIn(["HomeViewData", "agenciesIsLoading"], false);
    console.log("newState: ", newState.get("agencies"));

    return newState
};

let handleSearchAgenciesFailure = (state, payload) => {
    let newState = state.setIn(["HomeViewData", "agenciesIsLoading"], false);
    return newState;
};

export {
    handleSearchAgencies,
    handleSearchAgenciesSuccess,
    handleSearchAgenciesFailure
}
