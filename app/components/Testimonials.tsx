// components/Testimonials.tsx
import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import data, { Testimonial } from "@/lib/testimonial.data";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-orange-500 text-lg">Testimonials</h3>
          <h1 className="text-4xl font-semibold">What our clients say about us</h1>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white border border-orange-400 rounded-lg p-6 flex flex-col items-center shadow-lg">
      <Image
        className="rounded-full w-36 h-36 object-cover mb-4"
        width={144}
        height={144}
        src={testimonial.avatar}
        alt={testimonial.author}
      />
      <h3 className="text-xl font-semibold mb-2">{testimonial.author}</h3>
      <Rating />
      <p className="text-gray-700 text-center mt-4">{testimonial.content}</p>
    </div>
  );
};

const Rating: React.FC = () => {
  return (
    <div className="flex justify-center">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
    </div>
  );
};

export default Testimonials;
