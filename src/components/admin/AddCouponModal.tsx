import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { CouponsService } from 'services/CouponsService'

interface AddCouponModalProps {
  isOpen: boolean
  onClose: () => void
}

export type AddCouponData = {
  number: string
  percentageDiscount: number
  startDate: string
  endDate: string
}

export const AddCouponModal = (props: AddCouponModalProps) => {
  const { isOpen, onClose } = props
  const { register, handleSubmit, formState } = useForm<AddCouponData>()

  const onSubmit = async (data: AddCouponData) => {
    await CouponsService.addCoupon({ ...data, active: true })
    toast.success('Cupom criado com sucesso!')
  }

  return (
    <SweetAlert
      show={isOpen}
      showConfirm={false}
      showCancel={false}
      title="Criação de Cupom de Desconto"
      onConfirm={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Código do Cupom"
            className="input is-medium"
            {...register('number', { required: true })}
          />
          <input
            type="number"
            placeholder="Porcentagem de Desconto"
            className="input is-medium"
            {...register('percentageDiscount', { required: true })}
          />
          <input
            type="date"
            placeholder="Data de Início"
            className="input is-medium"
            {...register('startDate', { required: true })}
          />
          <input
            type="date"
            placeholder="Data de Fim"
            className="input is-medium"
            {...register('endDate', { required: true })}
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
            Criar
          </button>
        </div>
      </form>
    </SweetAlert>
  )
}
