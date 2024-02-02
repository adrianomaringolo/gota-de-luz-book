import Link from 'next/link'
import React from 'react'

export const VisitCTA = () => {
  return (
    <Link href="/visitas/inscricao">
      <div className="cta-button hover:cursor-pointer">
        👉 Faça seu cadastro e garanta sua vaga
      </div>
    </Link>
  )
}
