import React from 'react';

import VectorMap, {
    Layer,
    Tooltip,
    Label,
} from 'devextreme-react/vector-map';

import { officeOutline, roomsData } from './data.js';

const projection = {
    to: ([l, lt]) => [l / 120, lt / 120],
    from: ([x, y]) => [x * 120, y * 120]
};

const FloorPlan = (data) => {
    console.log(JSON.stringify(data, null, 2));
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
            <Layer
                dataSource={roomsData}
                name="rooms"
                borderWidth={1}
                customize={customizeLayer}
                color="transparent">
                <Label enabled={true} dataField="name" />
            </Layer>
            <Tooltip
                enabled={true}
                customizeTooltip={customizeTooltip}
            />
        </VectorMap>
    );
}

const customizeTooltip = (arg) => {
    if (arg.layer.name === 'rooms') {
        return { text: `Square: ${arg.attribute('square')} ft&#178` };
    }
}

const customizeLayer = (elements) => {
    elements.forEach((element) => {
        console.log(element.attribute('name'));
        const roomName = element.attribute('name');
        if (roomName === "Room-01") {
            element.applySettings({
                color: '#C6EFCE', //free
            });
        }
        if (roomName === "Room-02") {
            element.applySettings({
                color: '#FFC7CE', //occupied
            });
        }
        if (roomName === "Room-03") {
            element.applySettings({
                color: '#FFC7CE', //occupied
            });
        }
    });
}

export default FloorPlan;
