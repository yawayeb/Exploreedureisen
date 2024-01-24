// app/Testimonial/page.tsx
import React from 'react';
import Testimonials from '@/app/components/Testimonials';
import data from '@/lib/testimonial.data'

const TestimonialPage: React.FC = () => {
  const testimonialsData = [
    { id: 1, author: 'John Doe', content: 'Great service! Highly recommended.' },
    { id: 2, author: 'Jane Smith', content: 'Amazing experience with this company.' },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <Testimonials testimonials={data} />
    </div>
  );
};

export default TestimonialPage;
