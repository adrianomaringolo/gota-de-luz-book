import Button from 'components/shared/basic/Button'
import { BasicModal } from 'components/shared/Layout/BasicModal'
import { InscricaoData } from 'interfaces/visits'
import { useRouter } from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { EmailSender } from 'services/utils/EmailSender'
import { visitMailList } from 'services/utils/maillist'
import { VisitsService } from 'services/VisitsService'
import { formatDateUTC } from 'utils/format'

type ConfirmModalProps = {
  selectedDate: string
  data: InscricaoData
  show: boolean
  onClose: () => void
}

export const ConfirmModal = (props: ConfirmModalProps) => {
  const router = useRouter()
  const { selectedDate, data, show, onClose } = props

  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const saveEnrollment = async () => {
    setIsSaving(true)

    await VisitsService.addEnrollmentToVisit(selectedDate, data)

    EmailSender.sendNewEnrollmentEmail(selectedDate, data, visitMailList)
    EmailSender.sendEnrollmentGreetingEmail(data.name.split(' ')[0], [data.email])

    toast.success('Inscrição realizada com sucesso!')
    setIsSaving(false)

    onClose()
    setShowSuccess(true)
  }

  return (
    <>
      <BasicModal open={show}>
        <h2 className="text-2xl font-semibold mb-3">✅ Confirmação da inscrição</h2>
        <div className=" border p-5 rounded flex flex-col gap-2 items-baseline">
          <p>Por favor, confirme as informações abaixo!</p>

          <p className="pl-2">
            <b>Datas selecionada: </b>
            {formatDateUTC(selectedDate)}
          </p>
          <p className="pl-2">
            <b>Nome completo:</b> {data.name}
          </p>
          <p className="pl-2">
            <b>Celular:</b> {data.cellphone}
          </p>
          <p className="pl-2">
            <b>Email:</b> {data.email}
          </p>
          {data.companions?.length > 0 && (
            <p className="border-t pt-2 pl-2">
              <b>Acompanhantes:</b>{' '}
              {data.companions.map((name) => (
                <p>- {name}</p>
              ))}
            </p>
          )}

          <div className="flex justify-end gap-2">
            <Button onClick={onClose} className="bg-gray-400 hover:bg-gray-500">
              Corrigir informações
            </Button>
            <Button onClick={() => saveEnrollment()} disabled={isSaving}>
              {isSaving ? 'Salvando...' : 'Confirmar'}
            </Button>
          </div>
        </div>
      </BasicModal>

      <BasicModal open={showSuccess}>
        <div className="text-center">
          <p className="text-2xl font-semibold">
            ✅ Sua pré-inscrição foi realizada com sucesso!
          </p>

          <p className="mt-3">
            Nossa equipe vai entrar em contato com você para acertar os detalhes de
            pagamento e confirmar a sua presença.
          </p>

          <p className="mt-3">Obrigado por se inscrever!</p>
          <Button
            onClick={() => {
              setShowSuccess(false)
              router.push('/visitas')
            }}
            className="bg-gray-400 hover:bg-gray-500 mt-4"
          >
            OK
          </Button>
        </div>
      </BasicModal>
    </>
  )
}
