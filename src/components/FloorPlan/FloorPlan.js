import React from 'react';

import VectorMap, {Label, Layer, Tooltip,} from 'devextreme-react/vector-map';

import {officeOutline, roomsData} from './data.js';

const projection = {
    to: ([l, lt]) => [l / 120, lt / 120],
    from: ([x, y]) => [x * 120, y * 120]
};

const colorOccupied = '#FFC7CE';
const colorFree = '#C6EFCE';

const FloorPlan = ({data}) => {

    const getSensor = (roomName) => data.find(sensor => sensor.id === roomName);

    const getRoomColor = (roomName) => {
        const sensor = getSensor(roomName);
        if (sensor) {
            return sensor.occupancy === 0 ? colorFree : colorOccupied;
        }
        return "transparent";
    }

    const roomLayers = roomsData.map(room => {
        const roomName = room.features[0].properties.name;
        const color = getRoomColor(roomName);
        return (
            <Layer
                key={roomName}
                dataSource={room}
                name={roomName}
                borderWidth={1}
                // customize={customizeLayer}
                color={color}>
                <Label enabled={true} dataField="name"/>
            </Layer>
        )}
    );

    const customizeTooltip = (arg) => {
        const layerName = arg.layer.name;
        if (!layerName.startsWith("Room")) {
            return;
        }
        const sensor = getSensor(layerName);
        if (!sensor) {
            return;
        }
        const temp = sensor.temperature;
        const humidity = sensor.humidity;
        const light = sensor.light;
        const capacity = arg.attribute('capacity');

        let text = `Temperature ${temp}&#8451 <br>`;
        text += `Humidity: ${humidity}% <br>`;
        text += `Light: ${light} Lux <br>`;
        text += `Capacity: ${capacity} person`;
        return { html: text};
    }

    let toolTip;
    if (data && data.length > 0) {
        toolTip = (
            <Tooltip
                enabled={true}
                customizeTooltip={customizeTooltip}
            />
        );
    }

    return (
        <VectorMap
            id="vector-map"
            maxZoomFactor={3}
            projection={projection}
        >
            <Layer
                dataSource={officeOutline}
                hoverEnabled={false}
                name="building">
            </Layer>
            {roomLayers}
            {toolTip}
        </VectorMap>
    );
}

export default FloorPlan;
