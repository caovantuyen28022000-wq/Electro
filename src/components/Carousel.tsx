import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, FreeMode } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Import Swiper styles
import './Carousel.css';

// Define Breakpoints type for Swiper
type Breakpoints = {
  [width: number]: SwiperOptions;
};

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'header' | 'productList' | 'productImg' | 'single' | 'related';
  autoplay?: boolean;
  autoplayDelay?: number;
  items?: number;
  responsive?: Breakpoints;
  style?: React.CSSProperties;
}

/**
 * Carousel Component using Swiper
 * Replaces: All Owl Carousel instances from main.js
 */
export default function Carousel({
  children,
  className = '',
  variant = 'header',
  autoplay = true,
  autoplayDelay = 2000,
  items = 1,
  responsive,
  style,
}: CarouselProps) {
  const getSwiperConfig = (): SwiperOptions => {
    const baseConfig: SwiperOptions = {
      modules: [Navigation, Autoplay, Pagination, FreeMode],
      autoplay: autoplay
        ? {
            delay: autoplayDelay,
            disableOnInteraction: false,
          }
        : false,
      loop: true,
      speed: variant === 'header' ? 2000 : 1500,
      navigation: {
        nextEl: `.swiper-button-next-${variant}`,
        prevEl: `.swiper-button-prev-${variant}`,
      },
      effect: 'slide',
    };

    // Variant-specific configurations
    switch (variant) {
      case 'header':
        return {
          ...baseConfig,
          slidesPerView: 1,
          centeredSlides: true,
          pagination: false,
          speed: 2000,
          effect: 'slide',
          watchSlidesProgress: true,
          direction: 'horizontal',
          autoHeight: false,
        };

      case 'productList':
        return {
          ...baseConfig,
          slidesPerView: 1,
          spaceBetween: 25,
          breakpoints: responsive || {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          },
        };

      case 'productImg':
        return {
          ...baseConfig,
          slidesPerView: 1,
          spaceBetween: 25,
          pagination: false,
        };

      case 'single':
        return {
          ...baseConfig,
          slidesPerView: 1,
          pagination: {
            clickable: true,
            type: 'bullets',
          },
        };

      case 'related':
        return {
          ...baseConfig,
          slidesPerView: 1,
          spaceBetween: 25,
          breakpoints: responsive || {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          },
        };

      default:
        return baseConfig;
    }
  };

  return (
    <div className={`carousel-container ${className}`} style={style}>
      <Swiper {...getSwiperConfig()} className={`swiper ${variant}-swiper`}>
        {children}
      </Swiper>
      
      {/* Navigation buttons */}
      {variant !== 'single' && (
        <>
          <div className={`swiper-button-prev swiper-button-prev-${variant}`}>
            {variant === 'header' ? (
              <i className="bi bi-arrow-left" />
            ) : (
              <i className="fas fa-chevron-left" />
            )}
          </div>
          <div className={`swiper-button-next swiper-button-next-${variant}`}>
            {variant === 'header' ? (
              <i className="bi bi-arrow-right" />
            ) : (
              <i className="fas fa-chevron-right" />
            )}
          </div>
        </>
      )}
    </div>
  );
}

// Slide component for convenience
export function CarouselSlide({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <SwiperSlide className={className}>{children}</SwiperSlide>;
}