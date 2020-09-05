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

export const roomsData = [
    {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {
                    name: 'Room-01',
                    square: 342,
                    capacity: 12
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [[
                        [-175, -95],
                        [-175, 95],
                        [-90, 95],
                        [-90, -95],
                    ]]
                }
            }
        ]
    }, {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {
                    name: 'Room-03',
                    square: 89,
                    capacity: 2
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [[
                        [115, -95],
                        [115, -40],
                        [175, -40],
                        [175, -95],
                    ]]
                }
            }
        ]
    }, {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {
                    name: 'Room-02',
                    square: 183,
                    capacity: 4
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [[
                        [115, -35],
                        [115, 60],
                        [175, 60],
                        [175, -35],
                    ]]
                }
            },
        ]
    }
];
