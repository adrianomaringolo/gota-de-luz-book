import { Visit } from 'interfaces/visits'
import { useEffect, useState } from 'react'
import { VisitsService } from 'services/VisitsService'

export function useGetVisits() {
  const [visits, setVisits] = useState<Visit[]>([])

  const getVisits = async () => setVisits(await VisitsService.getVisitsList())

  useEffect(() => {
    getVisits()
  }, [])

  return visits
}
