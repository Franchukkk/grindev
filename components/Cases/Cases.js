'use client'

import Button from '@/components/Button/Button'
import Title from '../Title/Title'
import './Cases.sass'
import CaseCard from '../CaseCard/CaseCard'

export default function Cases() {
  return (
    <section className='cases wrapper-sm' id='cases'>
        <Title>Найкращі кейси</Title>
        <div className="row g-0 case-cards-list">
            <CaseCard></CaseCard>
            <CaseCard></CaseCard>
            <CaseCard></CaseCard>
            <CaseCard></CaseCard>
            <CaseCard></CaseCard>
            <CaseCard></CaseCard>
            <CaseCard></CaseCard>
            <CaseCard></CaseCard>
            <CaseCard></CaseCard>
        </div>
        {/* <div className="button-wrapper justify-center">
            <Button variant="primary-arrow">ПЕРЕГЛЯНУТИ ВСІ КЕЙСИ</Button>
        </div> */}
    </section>
  )
}
