import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import APP_VAR from '../constants/appConst';

const socket = io(APP_VAR.BACKEND_BASE);

function useChatExample() {
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [lastPong, setLastPong] = useState<string | any>(null);

  useEffect(() => {
    socket.on('connection', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connection');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = (message: string) => {
    socket.emit('chat', message);
  }

  return { isConnected, lastPong, sendPing } as const;
}

export default useChatExample;