import AdminLayout from 'components/admin/AdminLayout'
import { Visit } from 'interfaces/visits'
import { useEffect, useState } from 'react'
import { useGetVisits } from 'services/hooks'
import { formatDateUTC } from 'utils/format'

const Visitas = () => {
  const visits = useGetVisits()
  const [date, setDate] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(false)

  const [selectedVisit, setSelectedVisit] = useState<Visit>()

  useEffect(() => {
    setSelectedVisit(visits.find((v) => v.date === date))
  }, [visits, date])

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between">
          <h1 className="is-size-2">Visitas</h1>
          <button className="button is-primary" onClick={() => setShowModal(true)}>
            Enviar email de agradecimento
          </button>
        </div>
        Filtrar por data:
        <div className="is-flex">
          <div className="select is-large mb-3">
            <select value={date} onChange={(e: any) => setDate(e.target.value)}>
              <option value="">Todas</option>

              {visits.map((visit) => (
                <option value={visit.date} key={visit.date}>
                  {formatDateUTC(visit.date)}
                </option>
              ))}
            </select>
          </div>
          <button className="button is-large ml-2 is-primary" onClick={() => {}}>
            Filtrar
          </button>
        </div>
        {selectedVisit?.enrollments ? (
          <>
            <div className="table-container">
              <table className="table is-bordered is-striped is-hoverable">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Celular</th>
                    <th>Email</th>
                    <th>Acompanhantes</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedVisit?.enrollments.map((enrollment) => (
                    <tr key={'visit-' + enrollment.name}>
                      <td>{enrollment.name}</td>
                      <td>{enrollment.cellphone}</td>
                      <td>{enrollment.email}</td>
                      <td>{enrollment.companions?.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p>Não há visitas para exibir</p>
        )}
      </div>

      {/* <SendThankEmailModal isOpen={showModal} onClose={() => setShowModal(false)} /> */}
    </AdminLayout>
  )
}

export default Visitas
