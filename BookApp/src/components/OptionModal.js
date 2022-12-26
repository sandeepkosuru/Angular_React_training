import Modal from 'react-modal'
import React from 'react';

const OptionModal = (props) => (

    <Modal isOpen= {!!props.selectedOption} onRequestClose={props.handleClearSelectedOption}>
        <h1>This is my book</h1>
        <h1>{props.selectedOption}</h1>
        <button onClick = {props.handleClearSelectedOption}>OK</button>
    </Modal>
)
 export default OptionModal