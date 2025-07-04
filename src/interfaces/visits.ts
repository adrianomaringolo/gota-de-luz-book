export interface Visit {
  id: string
  date: string
  value: number
  enrollments?: InscricaoData[]
}

export type InscricaoData = {
  name: string
  cellphone: string
  email: string
  companions: string[]
  lastVisit: string
}
