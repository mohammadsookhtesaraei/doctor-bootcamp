import { ReactElement } from "react";

// next-link
import Image from "next/image";
import Link from "next/link";

// logo
import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import idkLogo from "@/assets/logo/idk.svg";

// icons
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";

const Footer = (): ReactElement => {
  return (
    <footer className="bg-surface-400 grid grid-cols-2 gap-x-8 gap-y-4 py-4 [grid-template-areas:'writings_visuals'_'copy_copy']">
      {/* writings */}
      <div className="[grid-area:writings]">
        <div className="text-400 ms-1 font-bold">دکترمن</div>
        <p>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
          ایران
        </p>
      </div>

      {/* visuals */}
      <div className="grid justify-items-center gap-4 [grid-area:visuals]">
        {/* certificate */}
        <ul className="flex gap-8">
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="IDK Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="Certificate Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="Enamad Logo" />
            </Link>
          </li>
        </ul>
        {/* socials */}
        <ul className="[&>li>a]:text-four flex gap-1 [&>li>a]:text-[1.5em]">
          <li>
            <Link href="#" target="_blank" aria-label="تلگرام">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank" aria-label="لینکدین">
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank" aria-label="یوتیوب">
              <MingcuteYoutubeFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center [grid-area:copy]">
        تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
        من می‌باشد!
      </p>
    </footer>
  );
};

export default Footer;
