import { ReactElement } from "react";

import Image from "next/image";

import notFoundImage from "@/assets/illustrations/not-found.svg";

import GlobalSearchBox from "@/components/GlobalSearchBox/GlobalSearchBox";

const NotFound = (): ReactElement => {
  return (
    <div className="grid place-content-center [grid-template-areas:'writings_visuals'_'search_visuals'] min-block-full">
      <div className="[grid-area:writings]">
        <div className="text-800 leading-[0.8] font-light">404</div>
        <h1 className="text-600 mb-4">صفحه‌ی مورد نظر پیدا نشد!</h1>

        <p className="max-w-[50ch]">
          با عرض پوزش، لطفاً از طریق کادر جستجو، پزشک یا مرکز درمانی مورد نظر
          خود را جستجو کنید.
        </p>
      </div>

      <div className="h-0 [grid-area:visuals] min-block-full">
        <Image src={notFoundImage} alt="" className="h-full" />
      </div>
      <div className="[grid-area:search]">
        <GlobalSearchBox />
      </div>
    </div>
  );
};
export default NotFound;
