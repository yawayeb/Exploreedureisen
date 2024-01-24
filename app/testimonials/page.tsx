// app/Testimonial/page.tsx
import React from 'react';
import header from '@/app/components/Header'
import Testimonials from '@/app/components/testimonials'; // Adjust the import path based on your folder structure

const TestimonialPage: React.FC = () => {
  const testimonialsData = [
    { id: 1, author: 'John Doe', content: 'Great service! Highly recommended.' },
    { id: 2, author: 'Jane Smith', content: 'Amazing experience with this company.' },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <h1>Testimonials</h1>
      <Testimonials testimonials={testimonialsData} />
    </div>
  );
};

export default TestimonialPage;
