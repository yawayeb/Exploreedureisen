import Image from "next/image";
import HeroIMG from "@/public/int.jpg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <section className="flex items-center content-center gap-10">
        <div className="">
            <h1>WE WILL BE BACK SOON...</h1>
            <p>
                We&apos;re making improvements to enhance your experience.
                Exciting updates are on the way, including new user-friendly 
                features for easy access to documents and school information. 
                Additionally, we&apos;re simplifying the appointment booking process. 
                Thank you for your patience as we work to make your experience with us even better.
            </p>
            <a href="https://form.jotform.com/240195822046555" target="_blank">
                <button type="submit">Send An Enquiry</button>
            </a>
        </div>
        <div className="" style={{ wid}}>
            <Image src={HeroIMG} alt="header" width={400} height={400} />
        </div>    
    </section>
    </main>
  );
}
