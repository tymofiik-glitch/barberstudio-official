'use client'

import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useModal } from '@/components/providers/ModalProvider'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { t, DAYS, MONTHS, SERVICES_T, BARBERS_T, type Lang } from '@/lib/translations'
import { cn } from '@/lib/utils'

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
]

function getNext7Days() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i + 1)
    return d
  })
}

function StepIndicator({ step, total, lang }: { step: number; total: number; lang: Lang }) {
  const s = t.modal.steps
  const labels = [s.service[lang], s.barber[lang], s.datetime[lang], s.details[lang]]
  return (
    <div className="flex items-center gap-0">
      {labels.map((label, i) => {
        const active = i + 1 === step
        const done = i + 1 < step
        return (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300',
                  done ? 'bg-gold text-dark-100' : active ? 'border-2 border-gold text-gold' : 'border border-dark-400 text-dark-500'
                )}
              >
                {done ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className={cn('mt-1 text-[10px] tracking-wide whitespace-nowrap hidden sm:block', active ? 'text-gold' : done ? 'text-dark-500' : 'text-dark-400')}>
                {label}
              </span>
            </div>
            {i < total - 1 && (
              <div className={cn('mx-2 mb-3 sm:mb-5 h-px w-8 sm:w-12 transition-all duration-300', done ? 'bg-gold' : 'bg-dark-400')} />
            )}
          </div>
        )
      })}
    </div>
  )
}

const slideEase = [0.32, 0.72, 0, 1] as [number, number, number, number]

interface BookingState {
  service: string | null
  barber: string
  date: Date | null
  time: string | null
  naam: string
  telefoon: string
  email: string
  opmerking: string
}

const emptyState: BookingState = {
  service: null,
  barber: 'any',
  date: null,
  time: null,
  naam: '',
  telefoon: '',
  email: '',
  opmerking: '',
}

export function BookingModal() {
  const { isOpen, close } = useModal()
  const { lang } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState(1)
  const [dir, setDir] = useState(1)
  const [confirmed, setConfirmed] = useState(false)
  const [booking, setBooking] = useState<BookingState>(emptyState)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen])

  const handleClose = useCallback(() => {
    close()
    setTimeout(() => {
      setStep(1)
      setConfirmed(false)
      setBooking(emptyState)
    }, 400)
  }, [close])

  const goNext = useCallback(() => { setDir(1); setStep(s => Math.min(s + 1, 4)) }, [])
  const goPrev = useCallback(() => { setDir(-1); setStep(s => Math.max(s - 1, 1)) }, [])

  const canNext = useCallback(() => {
    if (step === 1) return !!booking.service
    if (step === 2) return true
    if (step === 3) return !!booking.date && !!booking.time
    if (step === 4) return !!booking.naam.trim() && !!booking.telefoon.trim()
    return false
  }, [step, booking])

  const handleConfirm = useCallback(() => { setConfirmed(true) }, [])

  const selectedService = SERVICES_T.find(s => s.id === booking.service)
  const selectedBarber = BARBERS_T.find(b => b.id === booking.barber)
  const tx = t.modal

  if (!mounted) return null

  const stepVariants = {
    enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: slideEase } },
    exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.25 } }),
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: slideEase }}
            className="fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-3xl md:inset-0 md:rounded-none"
            style={{
              maxHeight: '100dvh',
              height: '100%',
              background: 'rgba(28, 28, 28, 0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <div
              className="flex items-center justify-between px-6 py-5 md:px-10 flex-shrink-0"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-gold font-medium">
                  Two in One Barberstudio
                </p>
                <h2 className="font-display text-xl font-bold text-off-white mt-0.5">
                  {confirmed ? tx.confirmed[lang] : tx.title[lang]}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="flex h-10 w-10 items-center justify-center rounded-full text-dark-500 transition-all duration-200 hover:text-off-white"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                aria-label={tx.close[lang]}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {!confirmed && (
              <div className="flex-shrink-0 px-6 py-4 md:px-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <StepIndicator step={step} total={4} lang={lang} />
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-6 py-6 md:px-10">
              {confirmed ? (
                <ConfirmedView
                  booking={booking}
                  selectedService={selectedService}
                  selectedBarber={selectedBarber}
                  onClose={handleClose}
                  lang={lang}
                />
              ) : (
                <AnimatePresence custom={dir} mode="wait">
                  <motion.div
                    key={step}
                    custom={dir}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="h-full"
                  >
                    {step === 1 && <Step1 booking={booking} setBooking={setBooking} lang={lang} />}
                    {step === 2 && <Step2 booking={booking} setBooking={setBooking} lang={lang} />}
                    {step === 3 && <Step3 booking={booking} setBooking={setBooking} lang={lang} />}
                    {step === 4 && (
                      <Step4
                        booking={booking}
                        setBooking={setBooking}
                        selectedService={selectedService}
                        selectedBarber={selectedBarber}
                        lang={lang}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {!confirmed && (
              <div
                className="flex items-center justify-between px-6 py-4 md:px-10 flex-shrink-0"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(28,28,28,0.8)' }}
              >
                <button
                  onClick={step === 1 ? handleClose : goPrev}
                  className="font-body text-sm text-dark-500 transition-colors hover:text-off-white flex items-center gap-2"
                >
                  {step === 1 ? (
                    tx.cancel[lang]
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                      {tx.back[lang]}
                    </>
                  )}
                </button>

                {step < 4 ? (
                  <button
                    onClick={goNext}
                    disabled={!canNext()}
                    className={cn(
                      'flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold tracking-wide transition-all duration-200',
                      canNext()
                        ? 'bg-gold text-dark hover:bg-gold-light'
                        : 'bg-dark-300 text-dark-500 cursor-not-allowed'
                    )}
                  >
                    {tx.next[lang]}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleConfirm}
                    disabled={!canNext()}
                    className={cn(
                      'flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold tracking-wide transition-all duration-200',
                      canNext()
                        ? 'bg-gold text-dark hover:bg-gold-light'
                        : 'bg-dark-300 text-dark-500 cursor-not-allowed'
                    )}
                  >
                    {tx.confirm[lang]}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

function Step1({ booking, setBooking, lang }: { booking: BookingState; setBooking: (b: BookingState) => void; lang: Lang }) {
  const tx = t.modal.step1
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-off-white mb-6">{tx.heading[lang]}</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SERVICES_T.map(service => (
          <button
            key={service.id}
            onClick={() => setBooking({ ...booking, service: service.id })}
            className={cn(
              'relative group text-left rounded-2xl p-5 transition-all duration-200 border',
              booking.service === service.id
                ? 'border-gold bg-gold/10'
                : 'border-dark-300 hover:border-dark-400'
            )}
            style={{
              background: booking.service === service.id
                ? 'rgba(181,113,74,0.1)'
                : 'rgba(255,255,255,0.03)',
            }}
          >
            {service.popular && (
              <span className="absolute top-3 right-3 rounded-full bg-gold/20 border border-gold/30 px-2 py-0.5 font-body text-[10px] text-gold tracking-wide">
                {tx.popular[lang]}
              </span>
            )}
            <div className="flex items-start justify-between pr-14">
              <div>
                <p className="font-display text-base font-bold text-off-white">{service[lang]}</p>
                <p className="font-body text-xs text-dark-500 mt-0.5">{service.duration}</p>
              </div>
            </div>
            <p className="font-display text-xl font-black text-gold mt-3">{service.price}</p>
            {booking.service === service.id && (
              <div className="absolute top-3 left-3 flex h-5 w-5 items-center justify-center rounded-full bg-gold">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function Step2({ booking, setBooking, lang }: { booking: BookingState; setBooking: (b: BookingState) => void; lang: Lang }) {
  const tx = t.modal.step2
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-off-white mb-6">{tx.heading[lang]}</h3>
      <div className="flex flex-col gap-3">
        {BARBERS_T.map(barber => {
          const sub = lang === 'nl' ? barber.subNl : barber.subEn
          return (
            <button
              key={barber.id}
              onClick={() => setBooking({ ...booking, barber: barber.id })}
              className={cn(
                'flex items-center gap-4 rounded-2xl p-5 text-left transition-all duration-200 border',
                booking.barber === barber.id
                  ? 'border-gold'
                  : 'border-dark-300 hover:border-dark-400'
              )}
              style={{
                background: booking.barber === barber.id
                  ? 'rgba(181,113,74,0.1)'
                  : 'rgba(255,255,255,0.03)',
              }}
            >
              <div
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-display text-base font-bold"
                style={{
                  background: booking.barber === barber.id ? 'rgba(181,113,74,0.2)' : 'rgba(255,255,255,0.06)',
                  color: booking.barber === barber.id ? '#B5714A' : '#787068',
                  border: `1px solid ${booking.barber === barber.id ? 'rgba(181,113,74,0.3)' : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                {barber.id === 'any' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ) : (
                  barber[lang][0]
                )}
              </div>
              <div className="flex-1">
                <p className="font-display text-base font-bold text-off-white">{barber[lang]}</p>
                <p className="font-body text-xs text-dark-500 mt-0.5">{sub}</p>
              </div>
              {booking.barber === barber.id && (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gold flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Step3({ booking, setBooking, lang }: { booking: BookingState; setBooking: (b: BookingState) => void; lang: Lang }) {
  const days = getNext7Days()
  const tx = t.modal.step3

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-off-white mb-6">{tx.heading[lang]}</h3>

      <p className="font-body text-xs tracking-widest uppercase text-dark-500 mb-3">{tx.chooseDay[lang]}</p>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {days.map(day => {
          const isSelected = booking.date?.toDateString() === day.toDateString()
          return (
            <button
              key={day.toISOString()}
              onClick={() => setBooking({ ...booking, date: day, time: null })}
              className={cn(
                'flex-shrink-0 flex flex-col items-center rounded-xl px-3 py-3 transition-all duration-200 border min-w-[56px]',
                isSelected ? 'border-gold' : 'border-dark-300 hover:border-dark-400'
              )}
              style={{
                background: isSelected ? 'rgba(181,113,74,0.12)' : 'rgba(255,255,255,0.03)',
              }}
            >
              <span className={cn('font-body text-[10px] tracking-wide', isSelected ? 'text-gold' : 'text-dark-500')}>
                {DAYS[lang][day.getDay()]}
              </span>
              <span className={cn('font-display text-lg font-bold mt-0.5', isSelected ? 'text-gold' : 'text-off-white')}>
                {day.getDate()}
              </span>
              <span className={cn('font-body text-[10px]', isSelected ? 'text-gold/70' : 'text-dark-500')}>
                {MONTHS[lang][day.getMonth()]}
              </span>
            </button>
          )
        })}
      </div>

      {booking.date && (
        <>
          <p className="font-body text-xs tracking-widest uppercase text-dark-500 mb-3">{tx.times[lang]}</p>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6">
            {TIME_SLOTS.map(time => {
              const isSelected = booking.time === time
              return (
                <button
                  key={time}
                  onClick={() => setBooking({ ...booking, time })}
                  className={cn(
                    'rounded-xl py-2.5 font-body text-sm font-medium transition-all duration-200 border',
                    isSelected
                      ? 'border-gold bg-gold text-dark'
                      : 'border-dark-300 text-off-white/70 hover:border-gold/40 hover:text-off-white'
                  )}
                  style={{ background: isSelected ? '#B5714A' : 'rgba(255,255,255,0.03)' }}
                >
                  {time}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

function Step4({
  booking, setBooking, selectedService, selectedBarber, lang
}: {
  booking: BookingState
  setBooking: (b: BookingState) => void
  selectedService: typeof SERVICES_T[0] | undefined
  selectedBarber: typeof BARBERS_T[0] | undefined
  lang: Lang
}) {
  const tx4 = t.modal.step4
  const sum = t.modal.summary

  const dateStr = booking.date
    ? `${DAYS[lang][booking.date.getDay()]} ${booking.date.getDate()} ${MONTHS[lang][booking.date.getMonth()]}`
    : '—'

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-off-white mb-6">{tx4.heading[lang]}</h3>

      <div
        className="rounded-2xl p-4 mb-6 grid grid-cols-2 gap-3"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <SummaryItem label={sum.service[lang]} value={selectedService?.[lang] ?? '—'} sub={selectedService?.price} />
        <SummaryItem label={sum.barber[lang]} value={selectedBarber?.[lang] ?? '—'} />
        <SummaryItem label={sum.date[lang]} value={dateStr} />
        <SummaryItem label={sum.time[lang]} value={booking.time ?? '—'} />
      </div>

      <div className="flex flex-col gap-4">
        <BookingInput
          label={tx4.name[lang]}
          placeholder={tx4.namePh[lang]}
          value={booking.naam}
          onChange={v => setBooking({ ...booking, naam: v })}
        />
        <BookingInput
          label={tx4.phone[lang]}
          placeholder={tx4.phonePh[lang]}
          type="tel"
          value={booking.telefoon}
          onChange={v => setBooking({ ...booking, telefoon: v })}
        />
        <BookingInput
          label={tx4.email[lang]}
          placeholder={tx4.emailPh[lang]}
          type="email"
          value={booking.email}
          onChange={v => setBooking({ ...booking, email: v })}
        />
        <div>
          <label className="block font-body text-xs tracking-wide uppercase text-dark-500 mb-2">{tx4.note[lang]}</label>
          <textarea
            placeholder={tx4.notePh[lang]}
            value={booking.opmerking}
            onChange={e => setBooking({ ...booking, opmerking: e.target.value })}
            rows={3}
            className="w-full rounded-xl px-4 py-3 font-body text-sm text-off-white placeholder:text-dark-400 outline-none resize-none transition-all duration-200 focus:ring-1 focus:ring-gold/40"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          />
        </div>
      </div>
    </div>
  )
}

function SummaryItem({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div>
      <p className="font-body text-[10px] tracking-widest uppercase text-dark-500">{label}</p>
      <p className="font-display text-sm font-bold text-off-white mt-0.5">{value}</p>
      {sub && <p className="font-body text-xs text-gold">{sub}</p>}
    </div>
  )
}

function BookingInput({
  label, placeholder, type = 'text', value, onChange
}: {
  label: string; placeholder: string; type?: string; value: string; onChange: (v: string) => void
}) {
  return (
    <div>
      <label className="block font-body text-xs tracking-wide uppercase text-dark-500 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full rounded-xl px-4 py-3 font-body text-sm text-off-white placeholder:text-dark-400 outline-none transition-all duration-200 focus:ring-1 focus:ring-gold/40"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
      />
    </div>
  )
}

function ConfirmedView({
  booking, selectedService, selectedBarber, onClose, lang
}: {
  booking: BookingState
  selectedService: typeof SERVICES_T[0] | undefined
  selectedBarber: typeof BARBERS_T[0] | undefined
  onClose: () => void
  lang: Lang
}) {
  const tx = t.modal.success
  const sum = t.modal.summary

  const dateStr = booking.date
    ? `${DAYS[lang][booking.date.getDay()]} ${booking.date.getDate()} ${MONTHS[lang][booking.date.getMonth()]} · ${booking.time}`
    : '—'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-full text-center py-10"
    >
      <div
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full"
        style={{ background: 'rgba(181,113,74,0.15)', border: '1px solid rgba(181,113,74,0.3)' }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B5714A" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h3 className="font-display text-2xl font-bold text-off-white mb-2">{tx.title[lang]}</h3>
      <p className="font-body text-dark-500 mb-8 max-w-xs leading-relaxed">{tx.sub[lang]}</p>

      <div
        className="w-full max-w-xs rounded-2xl p-5 mb-8 text-left"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex flex-col gap-3">
          <SummaryItem label={sum.name[lang]} value={booking.naam} />
          <SummaryItem label={sum.service[lang]} value={selectedService?.[lang] ?? '—'} sub={selectedService?.price} />
          <SummaryItem label={sum.barber[lang]} value={selectedBarber?.[lang] ?? '—'} />
          {booking.date && (
            <SummaryItem label={sum.datetime[lang]} value={dateStr} />
          )}
        </div>
      </div>

      <p className="font-body text-xs text-dark-500 mb-6">
        {tx.phone[lang]}{' '}
        <a href="tel:0648539573" className="text-gold hover:text-gold-light transition-colors">
          06 48539573
        </a>
      </p>

      <button
        onClick={onClose}
        className="rounded-full border border-dark-400 px-7 py-3 font-body text-sm text-off-white/70 hover:text-off-white hover:border-dark-300 transition-all duration-200"
      >
        {t.modal.close[lang]}
      </button>
    </motion.div>
  )
}
