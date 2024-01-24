// components/Testimonials.tsx
import React from 'react';

interface Testimonial {
  id: number;
  author: string;
  content: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div>
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <strong>{testimonial.author}</strong>: {testimonial.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
