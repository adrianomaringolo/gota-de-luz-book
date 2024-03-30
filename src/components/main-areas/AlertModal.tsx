import React, { useEffect, useState } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { CartService } from 'services/CartService'

const WARNING_KEY = '2024-novo-hidrolato-ylang'

export const AlertModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    const modalSet = localStorage.getItem(WARNING_KEY)

    if (!modalSet) {
      setShowModal(true)
    }
  }, [])

  const closeWarningModal = () => {
    CartService.clearCart()
    setShowModal(false)
    localStorage.setItem(WARNING_KEY, 'true')
  }

  return (
    <SweetAlert
      show={showModal}
      showCancel={false}
      title="🆕 Temos hidrolato de ylang-ylang"
      onConfirm={closeWarningModal}
      customButtons={
        <React.Fragment>
          <button className="button-confirmation big" onClick={closeWarningModal}>
            OK
          </button>
        </React.Fragment>
      }
    >
      Temos novidades no nosso catálogo!
      <br />
      Aproveite para pedir nosso novo hidrolato de ylang-ylang! Temos também OE de
      ylang-ylang diluído em TCM!
      <br />
      Confira nosso catálogo e aproveite!😉
    </SweetAlert>
  )
}
