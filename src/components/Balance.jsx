import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

const Balance = () => {

    const {gastos} = useContext(GlobalContext)

    //Obtener todos los importes de la lista de gastos
    const importes = gastos.map(gasto => gasto.importe)
    console.log(importes)

    //Calculamos nuestro salario
    const total = importes.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <>
        <h4>Tu Saldo</h4>
        <h1>${total}</h1>
        </>
    )
}

export default Balance