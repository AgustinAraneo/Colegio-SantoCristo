import Link from "next/link";

const BecasButton = () => {
  return (
    <div className="w-fit">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/forms/d/1B3YNPtNea1bgOokEC6GxpX_bISBc9pSEkm2ha8aRKJc/edit"
      >
        <p className="test4 font-Montserrat m-2 xl:text-base lg:text-xs text-[8px] hidden md:block">
          Becas
        </p>
      </Link>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/forms/d/1B3YNPtNea1bgOokEC6GxpX_bISBc9pSEkm2ha8aRKJc/edit"
      >
        <p className="text-white bg-[#024430] px-10 py-2 rounded-full font-bold text-center text-lg shadow-redcoach-lg block md:hidden">
          Becas
        </p>
      </Link>
    </div>
  );
};

export default BecasButton;
