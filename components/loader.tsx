import { Bars } from "react-loader-spinner";
export const Loader = () => {
  return (
    <div className="w-full flex  gap-y-4 items-center justify-center">
      <Bars
        height="80"
        width="80"
        color="#111827"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
