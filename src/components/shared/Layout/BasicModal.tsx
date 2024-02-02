import React from 'react'
import Modal from 'react-modal'

interface ModalProps {
  open: boolean
  children: React.ReactNode
}

export const BasicModal: React.FC<ModalProps> = ({ open, children }) => {
  return (
    <Modal
      isOpen={open}
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          width: 'fit-content',
          maxWidth: '600px',
          maxHeight: '600px',
          position: 'relative',
          height: 'fit-content',
        },
      }}
    >
      {children}
    </Modal>
  )
}
