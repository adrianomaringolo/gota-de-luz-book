import { Visit } from 'interfaces/visits'
import { db } from 'utils/firebase'

const visitsRef = db.collection('visits')

const getVisitsList: () => Promise<Visit[]> = async () => {
  let result: any[] = []
  const snapshot = await visitsRef.orderBy('date').get()

  snapshot.forEach((doc) => {
    result.push({ ...doc.data() })
  })
  return result as Visit[]
}

const addEnrollmentToVisit = async (visitId: string, enrollmentData: any) => {
  const visit = await visitsRef.doc(visitId).get()
  const visitData = visit.data()
  const enrollments = visitData?.enrollments ?? []
  enrollments.push({...enrollmentData, createdAt: new Date().toISOString()})

  return await visitsRef.doc(visitId).update({
    enrollments,
  })
}

export const VisitsService = {
  getVisitsList,
  addEnrollmentToVisit,
}
