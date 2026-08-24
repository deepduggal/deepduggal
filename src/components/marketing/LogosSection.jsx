// const logos = [{img: '', alt: ''}];

export default function LogosSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 md:max-w-2xl md:grid-cols-4 md:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <img
            className="col-span-2 max-h-12 w-full object-contain md:col-span-1 lg:col-span-1"
            src="/external_logos/McK-RGB-McK-Logo-4CMYK.png"
            alt="Mckesson logo"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain md:col-span-1 lg:col-span-1"
            src="/external_logos/capgemini.png"
            alt="Capgemini Logo"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain md:col-span-1 lg:col-span-1"
            src="/external_logos/aig.svg"
            alt="AIG"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 md:col-start-auto md:col-span-1 lg:col-span-1"
            src="/external_logos/aafes.svg"
            alt="AAFES"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}