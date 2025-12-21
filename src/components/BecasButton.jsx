import Link from "next/link";

const BecasButton = () => {
  return (
    <div className="w-fit">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://forms.gle/o6wWCD9Eanwky9vc6"
      >
        <p className="test4 font-Montserrat m-2 xl:text-base lg:text-xs text-[8px] hidden md:block">
          Becas
        </p>
      </Link>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://forms.gle/o6wWCD9Eanwky9vc6"
      >
        <p className="text-white bg-[#024430] px-10 py-2 rounded-full font-bold text-center text-lg shadow-redcoach-lg block md:hidden">
          Becas
        </p>
      </Link>
    </div>
  );
};

export default BecasButton;
