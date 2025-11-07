import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Ecom Store
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 px-1 text-sm sm:text-base"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 px-1 text-sm sm:text-base"
            >
              Cart
            </Link>
            <Link
              href="/profile"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 px-1 text-sm sm:text-base"
            >
              Profile
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 px-1 text-sm sm:text-base"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
