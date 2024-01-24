// components/Testimonials.tsx
import React from "react";
import { FaStar } from "react-icons/fa6";
import Profile from "@/public/profile.jpg";
import Image from "next/image";
import data, { Testimonial } from "@/lib/testimonial.data";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = async ({ testimonials }) => {
  return (
    <div>
      <TestimonialCard />
    </div>
  );
};

export const TestimonialCard: React.FC = () => {
  const pics = Array.from({ length: 3 }, () => {
    return <Card />;
  });
  return (
    <section className="md:px-20">
      <div className="flex flex-col items-center py-5 md:py-20">
        <h3 className="text-orange-500">Testimonials</h3>
        <h1 className="text-2xl">What our clients say about us.</h1>
      </div>
      <Card />
    </section>
  );
};

export const Card: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 items-center justify-around gap-5">
      {data.map((show) => (
        <>
          <div className="flex flex-col items-center justify-center gap-6 border border-orange-400 rounded-lg px-4 py-8 flex-1">
            <Image
              className=""
              style={{ borderRadius: "50%" }}
              width={150}
              height={150}
              src={show.avatar}
              alt="avatar"
            />
            <div className="flex flex-col items-center gap-4 md:gap-4">
              <h1>{show.author}</h1>
              <Rating />
              <p className="text-center">{show.content}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export const Rating: React.FC = () => {
  const StarArr = Array.from({ length: 5 }, (_, i) => (
    <div className="text-yellow-400">
      <FaStar />
    </div>
  ));
  return <div className="flex flex-row">{StarArr}</div>;
};

export default Testimonials;
