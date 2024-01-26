import Image from "next/image";
import HeroIMG from "@/public/int.jpg"

export default function Home() {
  return (
    <main className="p-10 flex spa">
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 my-20">

        <div className="flex flex-col items-start gap-4 basis-1/3">
            <h1>WE WILL BE BACK SOON...</h1>
            <p>
                We&apos;re making improvements to enhance your experience.
                Exciting updates are on the way, including new user-friendly 
                features for easy access to documents and school information. 
                Additionally, we&apos;re simplifying the appointment booking process. 
                Thank you for your patience as we work to make your experience with us even better.
            </p>
            <a className="p-2 bg-black text-white rounded-md" href="https://form.jotform.com/240195822046555" target="_blank">
                <button type="submit">Send An Enquiry</button>
            </a>
        </div>

        <div className="basis-1/3">
            <Image className="rounded-md" src={HeroIMG} alt="header" width={500} height={500} />
        </div>
    
    </section>
    </main>
  );
}
