import React from 'react';

import VectorMap, {
  Layer,
  Tooltip,
  Label,
} from 'devextreme-react/vector-map';

import { roomsData, buildingData } from './data.js';

const projection = {
  to: ([l, lt]) => [l / 100, lt / 100],
  from: ([x, y]) => [x * 100, y * 100]
};

export default function App() {
  return (
      <VectorMap
          id="vector-map"
          maxZoomFactor={4}
          projection={projection}
      >
        <Layer
            dataSource={buildingData}
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
    if (roomName === "Room 1") {
      element.applySettings({
        color: '#C6EFCE', //free
      });
    }
    if (roomName === "Room 3") {
      element.applySettings({
        color: '#FFC7CE', //occupied
      });
    }
  });
}
