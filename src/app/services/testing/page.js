import Link from "next/link";
import Image from "next/image";

export default function Testing() {
  return (
    <div className="bg-gray-900 text-white">

      {/* ✅ Hero Section (Reduced space for compact design) */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Software Testing Services
        </h1>
        <p className="text-lg sm:text-xl mt-3 max-w-3xl text-gray-300 leading-relaxed">
          Ensure the highest quality software with our cutting-edge testing solutions.
        </p>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#FACC15] mb-3">Why Choose Our Testing Services?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We provide top-notch testing services that ensure software stability and performance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Experienced QA Engineers", desc: "Our testers are experts in various testing methodologies." },
            { title: "Automated & Manual Testing", desc: "We offer both manual and automated testing to ensure full coverage." },
            { title: "Advanced Testing Tools", desc: "We use industry-leading tools like Selenium, Playwright, JMeter, and more." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-[#1E293B] rounded-lg shadow-lg text-center transition hover:scale-105">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Technologies & Tools (More compact & well-aligned) */}
      <section className="py-10 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#FACC15] mb-3">Technologies & Tools We Use</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We leverage the best testing tools and frameworks in the industry.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[
            { name: "Selenium", image: "/selenium.png", link: "https://www.selenium.dev/" },
            { name: "Playwright", image: "/playwright.png", link: "https://playwright.dev/" },
            { name: "Cypress", image: "/cypress.png", link: "https://www.cypress.io/" },
            { name: "JMeter", image: "/jmeter.png", link: "https://jmeter.apache.org/" },
          ].map((tool, idx) => (
            <Link key={idx} href={tool.link} target="_blank">
              <div className="flex flex-col items-center space-y-2 w-24">
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-lg p-2 shadow-md">
                  <Image src={tool.image} alt={tool.name} width={70} height={70} className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ Client Testimonials */}
      <section className="py-10 bg-[#121826] px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#FACC15]">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-[#1E293B] rounded-lg shadow-lg">
            <p className="text-gray-400">"The Sphere Sync team provided excellent testing services that ensured our software was bug-free."</p>
            <h3 className="text-lg font-semibold text-white mt-3">— Alex Smith, CTO of XYZ Corp</h3>
          </div>
          <div className="p-6 bg-[#1E293B] rounded-lg shadow-lg">
            <p className="text-gray-400">"Thanks to their automated testing, our release cycles are much faster and smoother!"</p>
            <h3 className="text-lg font-semibold text-white mt-3">— Sarah Johnson, Product Manager at ABC Ltd</h3>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="py-10 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#FACC15] mb-3">Ready to Ensure a Bug-Free Product?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Contact us today for high-quality testing services.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#FACC15] text-[#1E1E2E] text-lg font-semibold rounded-lg hover:bg-[#EAB308] transition shadow-md hover:scale-105">
            Get in Touch →
          </button>
        </Link>
      </section>
    </div>
  );
}
