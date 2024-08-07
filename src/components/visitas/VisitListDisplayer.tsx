import React from 'react'
import { useGetVisits } from 'services/hooks'
import { formatDateUTC } from 'utils/format'

export const VisitListDisplayer: React.FC = () => {
  const visitList = useGetVisits()

  return (
    <div className="flex flex-col  items-center">
      {visitList ? (
        <>
          Confira as datas disponíveis para{' '}
          <span className="font-bold text-xl">{new Date().getFullYear()}</span>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {visitList.map((item) => {
              if (new Date(item.date) > new Date()) {
                return (
                  <div key={item.id} className="p-4 bg-gray-200">
                    {formatDateUTC(item.date)}
                  </div>
                )
              }
              return null
            })}
          </div>
        </>
      ) : (
        <div>Não há visitas programadas</div>
      )}
    </div>
  )
}
