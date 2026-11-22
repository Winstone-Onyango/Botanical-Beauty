import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { ServiceCard } from '../components/Cards'
import WhatsAppLink from '../components/WhatsAppLink'
import { fallbackServices } from '../data/site'
import { getData } from '../lib/api'

export default function Services() {
  const [services,setServices]=useState(fallbackServices)
  useEffect(()=>{getData('/services/').then(data=>data.length&&setServices(data)).catch(()=>{})},[])
  return <><section className="page-banner"><div className="container-shell"><p className="eyebrow">Beauty experiences</p><h1 className="mt-3 font-display text-3xl sm:text-4xl text-forest">Our services</h1><p className="mt-4 max-w-2xl leading-8 text-earth/70">Thoughtful beauty services for your everyday moments and special occasions.</p></div></section><section className="section-space"><div className="container-shell"><SectionHeading eyebrow="Care, your way" title="A little time for yourself" text="Explore our services and contact us for availability, details and appointments."/><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(s=><ServiceCard key={s.slug||s.name} service={s}/>)}</div><div className="mt-14 rounded-2xl bg-ivory p-8 text-center"><h2 className="font-display text-2xl sm:text-3xl text-forest">Interested in a service?</h2><p className="mt-3 text-sm text-earth/70">Contact us to ask a question or arrange an appointment.</p><div className="mt-6 flex justify-center"><WhatsAppLink message="Hello, I would like to enquire about your beauty services."/></div></div></div></section></>
}
