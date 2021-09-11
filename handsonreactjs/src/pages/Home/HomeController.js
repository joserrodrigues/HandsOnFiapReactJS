//Importar o useState no componente
import { useState, useEffect } from 'react';
import InfoComp1Controller from '../../Components/InfoComp1/InfoComp1Controller';
import InfoComp2Controller from '../../Components/InfoComp2/InfoComp2Controller';

const HomeController = () => {


    //Passando a variavel information como o props info e a função onClicked
    return (
        <>
            <InfoComp1Controller />
            <InfoComp2Controller />
        </>
    )
}

export default HomeController;