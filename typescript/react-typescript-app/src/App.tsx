import React from 'react';
import logo from './logo.svg';
import './App.css';

//do this https://dev.to/camilomejia/fetch-data-with-react-hooks-and-typescript-390c

export interface StarShip {
  name: string;
  crew: string;
  passengers: string;
  cost_in_credits?: string;
  url:string;
}

interface ServiceInit {
  status: 'init';
}
interface ServiceLoading {
  status: 'loading';
}
interface ServiceLoaded<T> {
  status: 'loaded';
  payload: T;
}
interface ServiceError {
  status: 'error';
  error: Error;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;


function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;
