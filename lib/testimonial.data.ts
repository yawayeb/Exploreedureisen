import Profile from '@/public/profile.jpg'
import picture from '@/public/vera.jpeg'
import { StaticImageData } from 'next/image';

export interface Testimonial {
  id?: number;
  author: string;
  content: string;
  avatar: StaticImageData;
  rating: number;
  rated?: boolean;
}

const data: Testimonial[] = [
  {
    author: "Lordina Nkansah",
    content: '"Explore Edu Reisen made my study abroad dream a reality! Their expert guidance and personalized support made the entire process seamless. From choosing the perfect program to navigating paperwork, their team was there every step of the way. Grateful for this life-changing experience"',
    avatar: Profile,
    rating: 4
  },
  {
    author: "Rita Asebea",
    content: '"Thanks to Explore Edu Reisen, my study abroad journey was a breeze. Their knowledgeable team helped me find the right fit, navigate applications, and even offered cultural tips. Highly recommend their services for a smooth and enriching experience!"',
    avatar: Profile,
    rating: 4
  },
  {
    author: "Maame Serwaa Bonsu",
    content: '"Explore Edu Reisen exceeded my expectations in every way. Their unwavering support and personalized approach made studying abroad a joy. From program selection to adapting to a new culture, I felt well-prepared and cared for throughout. Thank you for an incredible experience!"',
    avatar: Profile,
    rating: 4
  },
  {
    author: "Vera Keelson",
    content: '"Choosing Explore Edu Reisen was the best decision for my study abroad journey. Their teams dedication and expertise made the entire process stress-free. They guided me through program selection, application, and cultural adaptation. Grateful for their exceptional support – truly a fantastic experience!"',
    avatar: picture,
    rating: 4
  },
  
];

export default data;
