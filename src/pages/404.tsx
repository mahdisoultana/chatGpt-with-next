import Link from 'next/link';

function NotFound() {
  return (
    <section className="text-center h-full flex flex-col items-center  space-y-4 ">
      <div className="   w-[60vh] ">
        <img src="/maintenance.png" alt="maintenance" />
      </div>
      <h5 className="text-5xl font-bold ">Coming Soon </h5>
      <p className=" text-gray-600 w-[50%]">
        Something extraordinary is coming soon! Stay tuned for an exciting new
        project that will revolutionize your world
        <Link href="/">
          <span className="text-blue-600 font-medium px-2 underline">
            go back
          </span>
        </Link>
      </p>
    </section>
  );
}

export default NotFound;
