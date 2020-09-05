import React, {useCallback, useEffect, useState} from 'react';
import FloorPlan from "./components/FloorPlan/FloorPlan";
import useWebSocket, { ReadyState } from 'react-use-websocket';

const socketUrl = 'wss://c20o43lam4.execute-api.ap-southeast-1.amazonaws.com/Prod';

const App = () => {

  const [roomSensors, setRoomSensors] = useState([]);

  const onWebSocketMessage = (event) => {
    console.log('WebSocket message received');
    const sensorsUpdate = JSON.parse(event.data);

    const newRoomSensors = [];
    newRoomSensors.push(...sensorsUpdate); // add sensor data update

    // update doesn't contain all data. Add missing data from previous state
    roomSensors.forEach(previous => {
      if (!newRoomSensors.filter(s => previous.id === s.id).length) {
        newRoomSensors.push(previous);
      }
    })

    setRoomSensors(newRoomSensors);
  }

  const shouldWebSocketReconnect = (closeEvent) => {
    console.log(`Close event received; ${closeEvent}`);
    console.log('trying to reconnect...');
    return true
  }

  const {
    sendMessage,
    readyState,
  } = useWebSocket(socketUrl, {
    onMessage: onWebSocketMessage,
    shouldReconnect: shouldWebSocketReconnect,
  });

  const sendStatusUpdateMessage = useCallback(() => {
    const message = JSON.stringify({action: 'status'});
    sendMessage(message);
  }, [sendMessage]);

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendStatusUpdateMessage();
    }
  }, [readyState, sendStatusUpdateMessage]);

  return (
      <FloorPlan
          data={roomSensors}
      />
  );
}

export default App;
