
var calculatedData = {
    labels: [],
    levelData: [],
    lowData: [],
    lowIntData: [],
    highIntData: [],
    highData: []
}

for (var i = 0; i < data.length; i++) {

    calculatedData.labels.push(data[i].approximate);
    calculatedData.levelData.push(data[i].level);
    if (data[i].low !== undefined)
        calculatedData.lowData.push(data[i].low);
    else
        calculatedData.lowData.push(13);

    if (data[i].low_int !== undefined)
        calculatedData.lowIntData.push(data[i].low_int);
    else
        calculatedData.lowIntData.push(15.2);

    if (data[i].high_int !== undefined)
        calculatedData.highIntData.push(data[i].high_int);
    else
        calculatedData.highIntData.push(17.3);

    calculatedData.highData.push(25);
}



var options = {
    type: 'line',

    options: {
        plugins: {
            autocolors: false,
            annotation: {
                annotations: {
                    box1: {
                        type: 'box',
                        xMin: 1,
                        xMax: 4,
                        yMin: 25,
                        yMax: 0,
                        backgroundColor: 'rgba(0, 0, 132, 0.25)'
                    },
                    box2: {
                        type: 'box',
                        xMin: 4,
                        xMax: 7,
                        yMin: 25,
                        yMax: 0,
                        backgroundColor: 'rgba(0, 0, 132, 0.50)'
                    },

                    box3: {
                        type: 'box',
                        xMin: 7,
                        xMax: 8,
                        yMin: 25,
                        yMax: 0,
                        backgroundColor: 'rgba(0, 0, 132, 0.75)'
                    }
                }
            }
        }

    },

    data: {
        labels: calculatedData.labels,
        datasets: [
            {
                label: 'Level',
                data: calculatedData.levelData,
                borderWidth: 3,
                fill: false,
                spanGaps: true,
                tension: 0,
                borderColor: 'blue',
                pointRadius: 0,
            },
            {
                label: 'Low',
                data: calculatedData.lowData,
                borderWidth: 1,
                backgroundColor: 'rgba(255,255,255,0.5)',
                pointRadius: 0,
                spanGaps: true,
                tension: 0,
                fill: true
            },
            {
                label: 'Low Intermediate',
                data: calculatedData.lowIntData,
                borderWidth: 1,
                pointRadius: 0,
                spanGaps: true,
                tension: 0,
                backgroundColor: 'rgba(255,255,255,0.5)',
                fill: true
            },
            {
                label: 'High Intermediate',
                data: calculatedData.highIntData,
                borderWidth: 1,
                pointRadius: 0,
                spanGaps: true,
                tension: 0,
                backgroundColor: 'rgba(255,255,255,0.5)',
                fill: true
            },
            {
                label: 'High',
                data: calculatedData.highData,
                borderWidth: 1,
                pointRadius: 0,
                spanGaps: true,
                tension: 0,
                backgroundColor: 'rgba(128,0,0,0.7)',
                fill: true
            }
        ]
    }

}

var ctx = document.getElementById('chartJSContainer').getContext('2d');
new Chart(ctx, options);
console.log(options);
