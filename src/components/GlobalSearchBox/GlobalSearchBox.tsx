import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import { ReactElement} from "react"

type GlobalSearchBoxProps={};

 const GlobalSearchBox = ({}:GlobalSearchBoxProps):ReactElement => {
  return (
    <div className=" group flex items-center gap-2 px-4 border border-gray-20 rounded-full w-[min(50rem,100%)] focus-within:border-primary">
      <div className="grid items-center text-[1.5rem] group-has-[input:focus]:text-primary">
        <MingcuteSearchLine/>
      </div>
      <input className="flex-1 bg-transparent p-4 border-none focus:outline-none" type="text"  placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..." />
      <div className="bg-gray-20 px-px h-[2em]"></div>
      <div>
        <button className="bg-transparent flex items-center gap-1 p-2 border-none rounded-base cursor-pointer hover:bg-gray-16">
          <MingcuteLocationLine className="text-4"/>
          همه شهرها
        </button>
      </div>
    </div>
  );
}

export default GlobalSearchBox;
