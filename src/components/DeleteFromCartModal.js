import React from "react";
import PortalReactDOM from 'react-dom'
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { HIDE_MODAL, removeFromCart } from "./actions/actions";

const DeleteFromCartModal = ({item}) => {
    const show = useSelector((state)=>state.modal.show);
    const dispach = useDispatch();
 
    return PortalReactDOM.createPortal(
        <Modal
        show={show}
        onHide={() => dispach(HIDE_MODAL)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Remover do carrinho
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
           Você quer remover o item {item.name} do carrinho?
          </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>{ 
              dispach(removeFromCart(item)) 
              dispach(HIDE_MODAL)
              }}>Sim</Button>
            <Button onClick={()=>{ dispach(HIDE_MODAL)}} variant={'danger'}>Cancelar</Button>
        </Modal.Footer>
      </Modal>,
      document.querySelector("#modal")
    )
}

export default DeleteFromCartModal;