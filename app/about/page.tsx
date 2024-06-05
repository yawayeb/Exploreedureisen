import React from "react";
import exploreimage from "@/public/image1.jpg";

const About: React.FC = () => {
  return (
    <>
      <h2 className="text-5xl text-center pt-32 font-semibold mb-4">
        Welcome to <span className="font-bold">Explore Edu Reisen</span>
      </h2>
      <div className="container mx-auto mt-8 flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex items-center justify-center">
          <img
            src={exploreimage.src}
            alt="Explore Edu Reisen"
            className="max-w-full h-auto object-center"
          />
        </div>
        <div className="w-full lg:w-1/2 px-8">
          <section className="mb-8">
            <p className="text-lg mb-4">
              Your trusted companion on the journey to international education.
              Our dedicated team of experts is deeply passionate about assisting
              students in realizing their aspirations of studying abroad. From
              the initial stages of exploring options to the final steps of
              application and post-experience support, we are here to provide
              comprehensive and tailored assistance every step of the way.
            </p>
            <p className="text-lg mb-4">
              At Explore Edu Reisen, we understand the complexities and
              challenges that students may encounter when navigating the path to
              studying abroad. That's why our mission is to not only guide
              students through this process but also to actively remove any
              barriers that may hinder their pursuit of an international
              education. Whether it's helping students find the perfect program,
              offering personalized application support, or providing ongoing
              assistance during their time abroad, we are committed to ensuring
              that each student receives the guidance and support they need to
              thrive.
            </p>
            <p className="text-lg mb-4">
              With Explore Edu Reisen, students can embark on their
              international education journey with confidence, knowing that they
              have a reliable partner by their side every step of the way. Let
              us help you turn your dreams of studying abroad into a reality.
            </p>
          </section>
        </div>
      </div>
      <h2 className="text-5xl text-center pt-32 font-semibold mb-4">
        OUR <span className="font-bold">CORE VALUES</span>
      </h2>
      <section className="min-h-screen w-screen grid grid-rows-2 sm:grid-cols-2 gap-4 p-4">
        <div className="flex justify-center items-center bg-white rounded-3xl shadow-xl p-8 m-2">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h3 className="font-semibold text-gray-900 text-4xl">Excellence</h3>
            <p className="text-lg text-gray-700 text-center mt-4">
              At Explore Edu Reisen, we strive for excellence in everything we
              do, ensuring the highest standards of quality and continuous
              improvement in our services. Our commitment to excellence drives
              us to innovate and adapt to the changing needs of our clients. We
              believe that excellence is a journey, not a destination, and we
              are dedicated to going above and beyond in our efforts. Through
              hard work and dedication, we aim to set the benchmark for quality
              in the study abroad industry.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-blue-500 rounded-3xl shadow-xl p-8 m-2">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h3 className="font-semibold text-white text-4xl">Honesty</h3>
            <p className="text-lg text-white text-center mt-4">
              Explore Edu Reisen upholds honesty as a fundamental principle,
              ensuring transparency, integrity, and ethical conduct in all our
              interactions. We believe that honesty builds trust and fosters
              strong, lasting relationships with our clients and partners. Our
              commitment to truthfulness means we provide accurate information
              and realistic expectations at all times. We stand by our promises
              and take responsibility for our actions, maintaining the highest
              ethical standards.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-teal-500 rounded-3xl shadow-xl p-8 m-2">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h3 className="font-semibold text-white text-4xl">Transparency</h3>
            <p className="text-lg text-white text-center mt-4">
              Explore Edu Reisen believes in transparency, providing clear,
              accurate, and timely information to foster trust and confidence
              among our clients and partners. Transparency is the cornerstone of
              our communication strategy, ensuring that all stakeholders are
              well-informed and engaged. We are open about our processes, fees,
              and expectations, creating an environment of mutual respect and
              understanding. By being transparent, we build credibility and
              ensure that our clients can make informed decisions with
              confidence.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-gray-200 rounded-3xl shadow-xl p-8 m-2">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h3 className="font-semibold text-gray-900 text-4xl">Prosperity</h3>
            <p className="text-lg text-gray-700 text-center mt-4">
              At Explore Edu Reisen, we are committed to the prosperity of our
              clients, helping them achieve their educational and career
              aspirations through dedicated support and guidance. We believe
              that education is a pathway to personal and professional growth,
              and we are passionate about enabling opportunities for success.
              Our goal is to empower students with the knowledge and resources
              they need to thrive in a global environment. By fostering a
              supportive and nurturing environment, we contribute to the overall
              prosperity of individuals and communities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
