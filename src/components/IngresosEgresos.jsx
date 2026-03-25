import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const IngresosEgresos = () => {
  
  const {gastos} = useContext(GlobalContext)  

  const importes = gastos.map(gasto => gasto.importe)

  const ingresos = importes
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)

  const egresos = importes
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) 

  return (
    <div className='inc-exp-container'>
    <div>
        <h4>Ingresos</h4>
        <p className='money plus'>+${ingresos.toFixed(2)}</p>
    </div>
    <div>
        <h4>Egresos</h4>
        <p className='money minus'>-${Math.abs(egresos.toFixed(2))}</p>
    </div>
    </div>
  )
}

export default IngresosEgresos