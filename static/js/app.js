// FUNCTION #1 of 4
function buildCharts(selectedPatientID) {
    d3.json("samples.json").then(data => {
        console.log(data)
        // ADD APPROXIMATELY 50 LINES OF CODE
        // Plotly.newPlot("barDiv", barData, barLayout)
        // Plotly.newPlot("bubbleDiv", bubbleData, bubbleLayout)
        // Plotly.newPlot("gaugeDiv", gaugeData, gaugeLayout)
    })
};

// FUNCTION #2 of 4
function populateDemographicInfo(selectedPatientID) {

    var demographicInfoBox = d3.select("#sample-metadata");

    d3.json("samples.json").then(data => {
        console.log(data)
        // ADD APPROXIMATELY 3-6 LINE OF CODE
    })
}

// FUNCTION #3 of 4
function optionChanged(selectedPatientID) {
    console.log(selectedPatientID);
    buildCharts(selectedPatientID);
    populateDemographicInfo(selectedPatientID);
}

// FUNCTION #4 of 4
function initializeChartsAndDemoInfo() {
    var dropdown = d3.select("#selDataset")
    d3.json("samples.json").then(data => {
        var patientIDs = data.names;
        patientIDs.forEach(patientID => {
            dropdown.append("option").text(patientID).property("value", patientID)
        })
        buildCharts(patientIDs[0]);
        populateDemographicInfo(patientIDs[0]);
    });
};

initializeChartsAndDemoInfo();