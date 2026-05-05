import { StarRating } from '@/components/ui/StarRating'

interface ReviewCardProps {
  name: string
  rating: number
  text: string
  date: string
}

export function ReviewCard({ name, rating, text, date }: ReviewCardProps) {
  return (
    <div
      className="flex flex-col rounded-2xl p-8 md:p-10"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="mb-5 font-display text-5xl font-black leading-none select-none" style={{ color: 'rgba(181,113,74,0.2)' }}>
        &ldquo;
      </div>

      <blockquote className="flex-1 font-body text-base md:text-lg leading-relaxed text-off-white/70">
        {text}
      </blockquote>

      <div className="mt-8 flex items-center justify-between pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <p className="font-display text-base font-bold text-off-white">{name}</p>
          <p className="mt-0.5 font-body text-xs text-dark-500">{date}</p>
        </div>
        <StarRating rating={rating} size="sm" />
      </div>
    </div>
  )
}
