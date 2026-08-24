import { Disclosure } from "@headlessui/react";

const companyName = "Deep Duggal";

const Navbar = () => {
  const navigation = [
    // "Home",
    // "Product",
    // "Features",
    // // "Pricing",
    // "Company",
    // "Blog",
  ];

  return (
    <>
      {/* <!-- Main Navigation Bar --> */}
      <header class="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-20">
          {/* Logo, Title, Subtitle */}
          <div class="flex items-center gap-3">
              <a href="/">
                <span className="flex items-center space-x-2 text-2xl font-medium text-brand-blue dark:text-gray-600">
                  <span>
                    <img
                      src="/img/deep-duggal-branding/DLogo.svg"
                      alt="DD logo"
                      width="32"
                      height="32"
                      className="w-8"
                    />
                  </span>
                  <div>
                      <span class="font-bold text-lg tracking-tight text-slate-100 dark-target">{companyName}</span>
                      <span class="text-xs text-blue-400 block font-mono">Full-Stack Engineer</span>
                  </div>
                </span>
              </a>
          </div>

          {/* Navigation Links */}
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300 dark-target-sub">
              <a href="##projects" class="hover:text-blue-400 transition">Selected Work</a>
              {/* <a href="#capabilities" class="hover:text-blue-400 transition">Capabilities</a> */}
              {/* <a href="#impact" class="hover:text-blue-400 transition">Case Metrics</a> */}
              <a href="#about" class="hover:text-blue-400 transition">About</a>
          </nav>

          {/* Call to Action Button */}
          <div class="flex items-center gap-3">
              <a href="#contact" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md shadow-blue-600/20 transition-all duration-200">
                  Let's Talk
              </a>
          </div>
      </header>
    </>
  );
}

export default Navbar;
