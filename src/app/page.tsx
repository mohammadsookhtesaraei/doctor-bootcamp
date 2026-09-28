import { ReactElement } from "react";

import GlobalSearchBox from "@/components/GlobalSearchBox/GlobalSearchBox";
import MyDoctorLogo from "@/logo/my-doctor.logo";

const HomePage = (): ReactElement => {
  return (
    <div className="grid min-h-full content-center justify-items-center gap-8">
      <h1 className="text-400 inline-flex items-center gap-4">
        <MyDoctorLogo className="text-[1.5rem]" />
        دکتر من
      </h1>
      <GlobalSearchBox />
      <div className="flex flex-wrap items-center gap-4">
        <div className="">آخرین جستجوهای شما</div>
        <ul className="flex gap-4">
          <li className="bg-surface-700 shadow-400 rounded-full px-3 py-1">
            ارتوپد
          </li>
          <li className="bg-surface-700 shadow-400 rounded-full px-3 py-1">
            قلب و عروق
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HomePage;
