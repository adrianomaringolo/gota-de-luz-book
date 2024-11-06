import React, { useEffect, useRef, useState } from 'react'
import { cn } from 'utils/styling'

interface ScrollSliderProps {
  className?: string
  children: React.ReactNode
}

const ScrollSlider: React.FC<ScrollSliderProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  // Update scroll state to control arrow visibility
  const updateScrollState = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  // Scroll to the left by the width of the container
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth,
        behavior: 'smooth',
      })
    }
  }

  // Scroll to the right by the width of the container
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    updateScrollState()
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', updateScrollState)
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', updateScrollState)
      }
    }
  }, [])

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-50"
        >
          &#8592;
        </button>
      )}

      {/* Scrollable Content */}
      <div ref={containerRef} className="overflow-x-auto whitespace-nowrap scroll-smooth">
        <div className={cn('inline-flex', className)}>{children}</div>
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          &#8594;
        </button>
      )}
    </div>
  )
}

export default ScrollSlider
