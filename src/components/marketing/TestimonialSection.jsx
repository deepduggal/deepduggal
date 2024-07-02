const logoImg = '/external_logos/McK-RGB-McK-Logo-4CMYK.png';
const logoAlt = 'Mckesson logo';
const quote = "Deep and I worked together on one big critical for company project for McKesson. Deep’s responsibility were Front End changes for client face ordering application (with 100k accounts with list of users for each account). He played a significant role, often, in deploying and implementing web strategies, and dealt with the details with the details along with the bigger picture. He has good code skills and strategy view. Deep is a good team player who can also work independently and do a fantastic job.";
const quotedPerson = "Natalia Puchkova";
const quotedPersonTitle = "Architect at McKesson";
const quotedPersonImg = '/people/natalia_puchkova.jpeg';
const quotedPersonImgAlt = 'Natalia Puchkova';

export default function TestimonialSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-brand-blue/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* Logo */}
        <img className="mx-auto h-12" src={logoImg} alt={logoAlt} />

        {/* Testimonial Component */}
        <figure className="mt-10">
          {/* Testimonial Quote */}
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “{quote}”
            </p>
          </blockquote>
          
          {/* Testimonial Caption */}
          <figcaption className="mt-10">
            {/* Testimonial Person Img */}
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src={quotedPersonImg}
              alt={quotedPersonImgAlt}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              {/* Testimonial Person Name */}
              <div className="font-semibold text-gray-900">{quotedPerson}</div>

              {/* Bullet Divider */}
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>

              {/* Testimonial Person Title */}
              <div className="text-gray-600">{quotedPersonTitle}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}