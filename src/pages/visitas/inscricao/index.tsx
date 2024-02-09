import Layout from 'components/Layout'
import { CheckboxField, FormNumberedArea, InputField } from 'components/shared'
import Button from 'components/shared/basic/Button'
import { BasicModal } from 'components/shared/Layout/BasicModal'
import { InscricaoData } from 'interfaces/visits'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useGetVisits } from 'services/hooks'
import { EmailSender } from 'services/utils/EmailSender'
import { visitMailList } from 'services/utils/maillist'
import { VisitsService } from 'services/VisitsService'
import { formatDateUTC } from 'utils/format'

const Inscricao = () => {
  const router = useRouter()

  const [selectedDates, setSelectedDates] = useState<string[]>([])
  const { register, getValues } = useForm<InscricaoData>()

  const [isSaving, setIsSaving] = useState(false)

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const openConfirmation = () => {
    setShowConfirmation(true)
  }

  const saveEnrollment = async () => {
    const data = getValues()
    setIsSaving(true)
    for (const date of selectedDates) {
      await VisitsService.addEnrollmentToVisit(date, data)
    }

    EmailSender.sendNewEnrollmentEmail(selectedDates, data, visitMailList)
    EmailSender.sendEnrollmentGreetingEmail(data.name.split(' ')[0], [data.email])

    toast.success('Inscrição realizada com sucesso!')
    setIsSaving(false)

    setShowConfirmation(false)
    setShowSuccess(true)
  }

  const checkDate = (date: string) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date))
    } else {
      setSelectedDates([...selectedDates, date])
    }
  }

  const visitList = useGetVisits()

  return (
    <>
      <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
        <div className="max-w-xl mx-auto py-[80px] px-[10px]">
          <h1 className="text-4xl font-semibold">Inscrição para Visitação</h1>

          <div className="my-5">
            <FormNumberedArea
              number={1}
              text="Selecione a(s) data(s) da visita que deseja participar"
            >
              <div className="flex flex-wrap gap-4 mt-3">
                {visitList.map((visit) => (
                  <CheckboxField
                    key={visit.id}
                    value={visit.date}
                    label={formatDateUTC(visit.date)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      checkDate(e.target.value)
                    }
                  />
                ))}
              </div>
            </FormNumberedArea>
          </div>

          <form>
            <FormNumberedArea number={2} text="Preencha seus dados de contato">
              <>
                <InputField
                  required
                  label="Nome"
                  {...register('name', { required: true })}
                />
                <InputField
                  required
                  label="Celular"
                  placeholder="(99) 99999-9999"
                  {...register('cellphone', { required: true })}
                  helperText="Nossa equipe entrará em contato com você por esse número por <b>WhatsApp</b>. DDD + número do celular"
                />
                <InputField
                  required
                  type="email"
                  label="E-mail"
                  {...register('email', { required: true })}
                />
              </>
            </FormNumberedArea>

            <FormNumberedArea
              number={3}
              text="Pretende levar acompanhantes? Se sim, quantos?"
            >
              <InputField
                type="number"
                label="Número de acompanhantes"
                {...register('companions')}
              />
            </FormNumberedArea>
            <FormNumberedArea number={4} text="Mais informações">
              <InputField
                label="Você já visitou a chácara? Se sim, poderia nos informar a data (mês e ano) e qual a planta destilada?"
                {...register('lastVisit')}
              />
            </FormNumberedArea>
            <div className="flex mt-5 justify-end">
              <Button type="button" onClick={openConfirmation} className="w-full">
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </Layout>

      <BasicModal open={showConfirmation}>
        <h2 className="text-2xl font-semibold mb-3">✅ Confirmação da inscrição</h2>
        <div className=" border p-5 rounded flex flex-col gap-2 items-baseline">
          <p>Por favor, confirme as informações abaixo!</p>

          <p className="pl-2">
            <b>Datas selecionadas: </b>
            {selectedDates.map((date) => formatDateUTC(date)).join(', ')}
          </p>
          <p className="pl-2">
            <b>Nome completo:</b> {getValues().name}
          </p>
          <p className="pl-2">
            <b>Celular:</b> {getValues().cellphone}
          </p>
          <p className="pl-2">
            <b>Email:</b> {getValues().email}
          </p>
          <p className="border-t pt-2 pl-2">
            <b>Acompanhantes:</b> {getValues().companions}
          </p>

          <div className="flex justify-end gap-2">
            <Button
              onClick={() => setShowConfirmation(false)}
              className="bg-gray-400 hover:bg-gray-500"
            >
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
            ✅ Sua inscrição foi realizada com sucesso!
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

export default Inscricao
