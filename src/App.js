import { useEffect, useState } from "react";


function useLogger(value) {
  useEffect(() => {
    console.log('Value changed', value);
  })
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
  }
}


function App() {

  const input = useInput('')
  const lastName = useInput('')


  useLogger(input.value, lastName.value)

  return (
    <div className={'container pt-3'} >
      <input type='text' {...input.bind}  />
      <button className="btn btn-warning" onClick={() => input.clear()} >Очистить</button>
    </div>
  );
}

export default App;
