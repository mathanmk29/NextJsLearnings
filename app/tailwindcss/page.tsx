export default function tailwindcssPage() {
  return (
    <main className="flex justify-center items-start min-h-screen bg-gray-50 pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="p-6 sm:p-8 lg:p-10 mb-4 sm:mb-6 lg:mb-8 flex flex-col border border-gray-200 rounded-lg bg-white shadow-md w-full max-w-4xl mt-4 sm:mt-6 lg:mt-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-tight">
            Tailwind layout utilities — specifically display, width, and height.
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
          {/* Fact 1 */}
          <div className="text-center">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Honey never spoils – archaeologists have found edible honey in
              ancient tombs.
            </p>
          </div>

          {/* Fact 2 */}
          <div className="text-center">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Octopuses have three hearts to pump blood through their bodies.
            </p>
          </div>

          {/* Fact 3 */}
          <div className="text-center">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              A group of flamingos is called a "flamboyance."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
