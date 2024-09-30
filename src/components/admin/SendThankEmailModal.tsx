import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { EmailSender } from 'services/utils/EmailSender'

interface SendThankEmailModalProps {
  isOpen: boolean
  onClose: () => void
}

export type ThankEmailData = {
  visitorName: string
  visitorEmail: string
  // coupons: string
  bcc: string
}

export const SendThankEmailModal = (props: SendThankEmailModalProps) => {
  const { isOpen, onClose } = props
  const { register, handleSubmit, formState, setValue, setFocus } =
    useForm<ThankEmailData>()

  const onSubmit = async (data: ThankEmailData) => {
    await EmailSender.sendVisitThankEmail(
      data.visitorName,
      data.visitorEmail,
      // data.coupons,
      data.bcc,
    )
    toast.success('Email enviado com sucesso!')
    setValue('visitorName', '')
    setValue('visitorEmail', '')
    setFocus('visitorName')
  }

  return (
    <SweetAlert
      show={isOpen}
      showConfirm={false}
      showCancel={false}
      title="Enviar email de agradecimento"
      onConfirm={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <p>
            O visitante receberá o email padrão de agradecimento com o(s) cupom(ns)
            definidos abaixo. Preencha todas as informações corretamente.
          </p>
          <input
            className="input is-medium"
            placeholder="Nome do visitante"
            {...register('visitorName', { required: true })}
          />
          <input
            type="email"
            className="input is-medium"
            placeholder="Email do visitante"
            {...register('visitorEmail', { required: true })}
          />
          {/* <input
            className="input is-medium"
            placeholder="Cupons (separados por vírgula)"
            {...register('coupons', { required: true })}
          /> */}
          <input
            className="input is-medium"
            placeholder="Emails (BCC)"
            {...register('bcc')}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="button is-light" onClick={onClose}>
            Fechar
          </button>
          <button
            type="submit"
            className="button is-primary"
            disabled={!formState.isValid}
          >
            Enviar
          </button>
        </div>
      </form>
    </SweetAlert>
  )
}
