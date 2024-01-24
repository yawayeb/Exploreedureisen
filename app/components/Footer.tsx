import { FaWhatsapp, FaInstagram, FaX } from "react-icons/fa6";

export default async function Footer() {
  return (
    <footer className="flex flex-col items-center content-center gap-3 md:absolute bottom-0 w-full">
      <div className="">
        <ul className="flex gap-3 lg:gap-20">
          <li className="quick-items">
            <a href="#">About</a>
          </li>
          <li className="quick-items">
            <a href="#">Partners</a>
          </li>
          <li className="quick-items">
            <a href="./testimonials">Testimonials</a>
          </li>
          <li className="quick-items">
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="social-links">
          <ul className="flex gap-2">
            <li>
              <a
                className="text-lg font-bold"
                href="https://chat.whatsapp.com/DGYRNQF6ojzC4ktETadtIU"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                className="text-lg"
                href="https://www.instagram.com/edu_reisen?igsh=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                className="text-lg"
                href="https://x.com/edu_reisen/status/1741811241205768694?s=46"
                target="_blank"
              >
                <FaX />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm">
        © 2024 Explore Edu Reisen. All rights reserved
      </div>
    </footer>
  );
}
