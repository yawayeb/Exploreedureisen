import Profile from '@/public/profile.jpg'
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
    author: "Nana Kofi",
    content: '“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”',
    avatar: Profile,
    rating: 4
  },
  {
    author: "Nana Kwasi",
    content: '“Lobortis leo pretium ”',
    avatar: Profile,
    rating: 4
  },
  {
    author: "Nana Yaw",
    content: '“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”',
    avatar: Profile,
    rating: 4
  },
  
];

export default data;
