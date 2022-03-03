import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import Alert from './context and reducer/Alert';
import { AlertProvider } from './context and reducer/AlertContext';
import Main from './context and reducer/Main';




function App() {

  return (
    <AlertProvider >
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle = {() => {}} />
      </div>
    </AlertProvider>
  );
}

export default App;
