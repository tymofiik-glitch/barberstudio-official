interface StarRatingProps {
  rating: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
}

export function StarRating({ rating, max = 5, size = 'md' }: StarRatingProps) {
  const sizes = { sm: 14, md: 18, lg: 22 }
  const px = sizes[size]

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          width={px}
          height={px}
          viewBox="0 0 24 24"
          fill={i < Math.floor(rating) ? '#B5714A' : 'none'}
          stroke="#B5714A"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}
