import Layout from 'components/Layout'
import { FormNumberedArea, InputField } from 'components/shared'
import Button from 'components/shared/basic/Button'
import { RadioField } from 'components/shared/Form/RadioField'
import { InscricaoData } from 'interfaces/visits'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useGetVisits } from 'services/hooks'
import { formatDateUTC } from 'utils/format'
import { ConfirmModal } from '../../../components/visitas/ConfirmModal'

const Inscricao = () => {
  const [selectedDate, setSelectedDate] = useState<string>()
  const { register, getValues } = useForm<InscricaoData>({})

  const [data, setData] = useState<InscricaoData>()

  const [companions, setCompanions] = useState<string[]>([])
  const [showConfirmation, setShowConfirmation] = useState(false)

  const openConfirmation = () => {
    const formData = getValues()
    if (!selectedDate || !formData.name || !formData.cellphone || !formData.email) {
      toast.error('Preencha todos os campos obrigatórios')
      return
    }
    if (formData.companions?.filter((name) => !name).length > 0) {
      toast.error('Preencha o nome de todos os acompanhantes')
      return
    }
    setData(formData)
    setShowConfirmation(true)
  }

  const visitList = useGetVisits()

  return (
    <>
      <Layout title={process.env.NEXT_PUBLIC_COMPANY_NAME}>
        <div className="max-w-xl mx-auto py-[80px] px-[10px]">
          <h1 className="text-4xl font-semibold mt-10">Inscrição para Visitação</h1>

          <div className="my-5">
            <FormNumberedArea
              number={1}
              text="Selecione a data da visita que deseja participar *"
            >
              <div className="flex flex-wrap gap-4 mt-3">
                {visitList.map((visit) => {
                  if (new Date(visit.date) < new Date()) return null
                  return (
                    <RadioField
                      key={visit.id}
                      value={visit.date}
                      label={formatDateUTC(visit.date)}
                      name="visit-date"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setSelectedDate(e.target.value)
                      }
                    />
                  )
                })}
              </div>
            </FormNumberedArea>
          </div>

          <form>
            <FormNumberedArea number={2} text="Preencha seus dados de contato *">
              <>
                <InputField
                  required
                  label="Nome completo"
                  {...register('name', { required: true })}
                />
                <InputField
                  required
                  label="Celular"
                  placeholder="(99) 99999-9999"
                  {...register('cellphone', { required: true })}
                  helperText={
                    <>
                      Nossa equipe entrará em contato com você por esse número por{' '}
                      <b>WhatsApp</b>. DDD + número do celular
                    </>
                  }
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
              text="Pretende levar acompanhantes? Se sim, preencha os nomes abaixo?"
            >
              {companions.map((_, index) => (
                <div className="flex items-end gap-2" key={index}>
                  <InputField
                    className="flex-1"
                    label={`Nome completo do acompanhante ${index + 1} *`}
                    {...register(`companions.${index}`)}
                  />
                  <button
                    type="button"
                    className="text-sm text-red-600 hover:text-red-500 hover:underline py-6"
                    onClick={() => {
                      setCompanions(companions.filter((_, i) => i !== index))
                    }}
                  >
                    Remover
                  </button>
                </div>
              ))}

              <Button
                type="button"
                onClick={() => setCompanions([...(companions ?? []), ''])}
                className="w-full text-sm bg-transparent text-purple-950 border-purple-950 border hover:text-white mt-4"
              >
                Adicionar acompanhante
              </Button>
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

      {data && (
        <ConfirmModal
          selectedDate={selectedDate as string}
          data={data}
          show={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </>
  )
}

export default Inscricao
