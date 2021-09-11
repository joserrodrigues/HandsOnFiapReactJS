/**
 * View do componente BusPosition
 */
const InfoComp2View = (props) => {

    // Criando o View com a informação do Info e o botão para alterar o Reducer
    return (
        <div>
            <div> Info: {props.info}</div>
            <button onClick={() => props.changeReducer()}>Alterar Reducer</button>
        </div>
    )
}
export default InfoComp2View;