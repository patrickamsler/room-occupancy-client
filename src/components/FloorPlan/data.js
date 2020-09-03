export const officeOutline = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-180, -100],
                    [-180, 100],
                    [180, 100],
                    [180, -100],
                    [20, -100],
                    [20, -95],
                    [110, -95],
                    [110, -60],
                    [115, -60],
                    [115, -95],
                    [175, -95],
                    [175, -40],
                    [110, -40],
                    [110, -20],
                    [115, -20],
                    [115, -35],
                    [175, -35],
                    [175, 60],
                    [115, 60],
                    [115, 0],
                    [110, 0],
                    [110, 65],
                    [175, 65],
                    [175, 95],
                    [-90, 95],
                    [-90, 15],
                    [-85, 15],
                    [-85, 95],
                    [-175, 95],
                    [-175, -95],
                    [-90, -95],
                    [-90, -15],
                    [-85, -15],
                    [-85, -95],
                    [-20, -95],
                    [-20, -100],
                ]]
            }
        }
    ]
};

export const buildingData = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [10, -80],
                    [-80, -80],
                    [-80, 80],
                    [40, 80],
                    [40, -20],
                    [100, -20],
                    [100, -80],
                    [30, -80],
                    [30, -74],
                    [34, -74],
                    [34, -68],
                    [40, -68],
                    [40, -74],
                    [94, -74],
                    [94, -26],
                    [40, -26],
                    [40, -60],
                    [34, -60],
                    [34, 74],
                    [-74, 74],
                    [-74, 30],
                    [10, 30],
                    [10, 24],
                    [-74, 24],
                    [-74, -24],
                    [10, -24],
                    [10, -30],
                    [-74, -30],
                    [-74, -74],
                    [10, -74]
                ]]
            }
        }
    ]
};

export const roomsData = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {
                name: 'Room 1',
                square: 576
            },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-74, -30],
                    [34, -30],
                    [34, -74],
                    [-74, -74]
                ]]
            }
        }, {
            type: 'Feature',
            properties: {
                name: 'Room 2',
                square: 600
            },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-74, 24],
                    [34, 24],
                    [34, -24],
                    [-74, -24]
                ]]
            }
        }, {
            type: 'Feature',
            properties: {
                name: 'Room 3',
                square: 540
            },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-74, 74],
                    [34, 74],
                    [34, 30],
                    [-74, 30]
                ]]
            }
        }, {
            type: 'Feature',
            properties: {
                name: 'Room 4',
                square: 288
            },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [40, -26],
                    [94, -26],
                    [94, -74],
                    [40, -74]
                ]]
            }
        }
    ]
};
