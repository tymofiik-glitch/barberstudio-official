export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    id: 'haircut',
    name: 'Classic Haircut',
    description: 'Precision cut tailored to your face shape. From textured crops to sleek side parts — executed with expert detail.',
    price: '€25',
    duration: '30 min',
    icon: '✂',
  },
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    description: 'Our signature low-to-high fade with seamless blending. Clean lines, sharp edges, flawless gradient.',
    price: '€30',
    duration: '45 min',
    icon: '◈',
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    description: 'Sculpted, shaped and refined. Whether a full beard or sharp stubble — we craft it to perfection.',
    price: '€15',
    duration: '20 min',
    icon: '⬡',
  },
  {
    id: 'combo',
    name: 'Combo Deal',
    description: 'Haircut + beard trim in one premium session. The full grooming experience at an unbeatable value.',
    price: '€40',
    duration: '60 min',
    icon: '◆',
  },
]

export const REVIEWS = [
  {
    id: 1,
    name: 'Sander V.',
    rating: 5,
    text: 'Best barber in Rijswijk, no question. Been coming here for over a year now and every single time the fade is absolutely perfect. The atmosphere is relaxed but professional — exactly what you want.',
    date: 'March 2025',
  },
  {
    id: 2,
    name: 'Mehdi R.',
    rating: 5,
    text: 'These guys really know what they\'re doing. Showed them a photo, they nailed it first try. Clean shop, good music, great conversation. Left feeling like a new man.',
    date: 'February 2025',
  },
  {
    id: 3,
    name: 'Thomas B.',
    rating: 5,
    text: 'Five stars isn\'t enough. The attention to detail here is on another level. My skin fade was so clean my barber back home was asking who did it. Will not go anywhere else.',
    date: 'January 2025',
  },
  {
    id: 4,
    name: 'Younes A.',
    rating: 5,
    text: 'Friendly guys, always on time, and the cuts are consistently sharp. Been a loyal client for two years. The combo deal is worth every cent — haircut and beard trim are both immaculate.',
    date: 'April 2025',
  },
  {
    id: 5,
    name: 'Pieter D.',
    rating: 5,
    text: 'Walked in for the first time last month and already booked my third appointment. The quality speaks for itself and they really listen to what you want. Highly recommend to anyone in the area.',
    date: 'April 2025',
  },
]

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    alt: 'Classic haircut precision styling',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
    alt: 'Skin fade barber technique',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
    alt: 'Modern barbershop interior',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80',
    alt: 'Beard trim and grooming',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&q=80',
    alt: 'Sharp line up and edge work',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    alt: 'Professional barber at work',
  },
]

export const SHOP_INFO = {
  name: 'Two in one barberstudio',
  address: 'Visseringlaan 19',
  city: 'Rijswijk, Netherlands',
  phone: '06 48539573',
  rating: 5.0,
  reviewCount: 45,
  hours: {
    weekdays: 'Mon – Fri: 09:00 – 19:00',
    saturday: 'Saturday: 09:00 – 17:00',
    sunday: 'Sunday: Closed',
  },
  mapUrl: 'https://maps.google.com/maps?q=Visseringlaan+19+Rijswijk+Netherlands&output=embed',
}
