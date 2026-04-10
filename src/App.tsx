import { motion } from "motion/react";
import { 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Tag, 
  Headset, 
  CalendarCheck, 
  Facebook, 
  Globe,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const PARTNER_LINK = "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1962262";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-white/80 backdrop-blur-md py-4"}`}>
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight text-primary font-headline">Agoda</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-primary font-semibold border-b-2 border-primary transition-colors duration-200" href={PARTNER_LINK} target="_blank" rel="noopener noreferrer">Destinations</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href={PARTNER_LINK} target="_blank" rel="noopener noreferrer">Hotels</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href={PARTNER_LINK} target="_blank" rel="noopener noreferrer">Flights</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href={PARTNER_LINK} target="_blank" rel="noopener noreferrer">Deals</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href={PARTNER_LINK} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium">Sign In</a>
          <a href={PARTNER_LINK} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-container text-on-primary px-5 py-2 rounded-xl font-semibold transition-all active:scale-95">Join Now</a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDONWqnjD6z32dn1Cow7AR2gL8gDfjaT7wu4iattJx6a3kwImXqH_OT2BTEYsnndwVdAvzv2TVD4fVRbu-n-myahvl45nJBtuprWVRXTeDXlFiNPLdB55S8ilcxQmX5baknO6515393mjaml5DKJYauxVgQTgIfwqhUev0rrOPlJAJJAAP1VPMbCZkI6ylGc36sz29YfH0BeC-4RI8e_ig0b0jZn6cq0W0G7DNgZQ5o0P9DoGdxqgZu4ctf-62gf32DYWbR5AGExA" 
          alt="Tropical beach"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay and gradient for maximum readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-surface/90"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col items-center md:items-start">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary-fixed bg-primary/30 backdrop-blur-md rounded-full border border-white/10"
        >
          PLAN YOUR ESCAPE
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 max-w-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        >
          Find Your Next Adventure with <span className="text-primary-fixed">Agoda</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white mb-10 max-w-xl font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        >
          Unlock exclusive member-only rates and explore millions of hotels, vacation rentals, and flights across the globe.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-4xl p-2 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl"
        >
          <div className="bg-surface-container-lowest rounded-[1.75rem] p-4 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full px-4 py-2 flex items-center gap-3 border-r-0 md:border-r border-outline-variant/30">
              <MapPin className="text-primary w-6 h-6" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Destination</span>
                <input 
                  className="border-none focus:ring-0 p-0 text-on-surface font-semibold placeholder:text-outline-variant w-full bg-transparent" 
                  placeholder="Where are you going?" 
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 w-full px-4 py-2 flex items-center gap-3 border-r-0 md:border-r border-outline-variant/30">
              <Calendar className="text-primary w-6 h-6" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Check-in / Out</span>
                <span className="text-on-surface font-semibold">Jul 12 - Jul 19</span>
              </div>
            </div>
            <a href={PARTNER_LINK} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
              Search Hotels Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TopDestinations = () => {
  const destinations = [
    {
      title: "Bali, Indonesia",
      desc: "Experience serene beaches and lush jungles.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa6_YNwVOyASMd0g9C0jhPpomIuBVmsfOlBcAwaU7Hmrutllux1fRnqpp1g_nqiH4EEUoJ3s9Y_KhIS-FZkn5OkKIJAAV5sotCdLP0yZkOMHQi3t33xCU18s8QU9z6ETu-QTUKF9R0ZPt_Ud9TvtQWi3_s7osAfLj0T4iH_qCy7kHqoerb7bt3BWv6X960ZZnKYo0FCGhmd_jzNoi21MVekk5Cfof8azSHV_zu7FkU4mGakKgoBZr3cSFzfdfi8DyxEpF0fcYRWo8",
      large: true,
      tag: "Popular"
    },
    {
      title: "Paris",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-M-IpHXh1frl9PBU4lJ7RIFvyTBlL5D4I5tKm7MzsFg4L9FoQkPzcMYPfWQ_ms43nOKI2JVex5KkIqctvmrSRFvBzqBKG7mHCJSOumCAawzPY66dL85yirttXFgAqEtaz5eceqa15Qxv2Gt-AQF5e5msV82qNDujWwFoeucrQeXXmpETfMPFqkgWIhC_sIP27JkKNL8iUEnYYCLrLxzsnnxQTelHBfc6_XcWKzqrPBPXzgNVOF6y-DwjstcHnJShXgu6eXFsc6ng"
    },
    {
      title: "Maldives",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW4eRuxenYxbT-0pLG5ZIr25bJmFWBH1SOPlkgSdiD2UN84WSWmR8c8-K1RTtLhZd1KYzNGbHK0SUiv8lZ44NryitNpu_Qyci-2JCrh_g8ZUSSs3QD3Fu3HYq8ZVDxDDMWRZkr8BCpWYmDsluy1uUy2Nr77r1yrxG14fJLHvFEhlS_sZTRNkpv6nDCjmCHRf8d98X39hVIkdsECEi7jEu4ORksnj_hwS5lprI7oinbD3MMfyN_0Vz-lR7RDIvgP1u_oDryEofL124"
    },
    {
      title: "Dubai, UAE",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8NqOfUtQjdKxsS9vE2EB7P_g5ZdK1lBCKMFjnDHn1c0Z6Chc8IkqMriy8Ektwi_1efR5JKAUNDi7vUOLk4OJFIsobbLJL5BOA-HM0xvTiRrgoK5bcJxIkmNu0On60h5yIHCujWzwbnMpPMagKbbezsIEdIQV-QOtF6M7jkEc9vZljc--eXwETYqmPZL2SaTBzlzx7KPWtrfvBI6ZnLu1sklBgcAU9s0N1Zte6rZSbALiCpSUlG4d3Mpd95FsciPCy5QfmBNZim3A",
      wide: true
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Top Destinations</h2>
            <p className="text-on-surface-variant max-w-md">Our handpicked selection of the world's most breathtaking places to visit right now.</p>
          </div>
          <a href={PARTNER_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View all <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {destinations.map((dest, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`relative group overflow-hidden rounded-2xl shadow-lg ${dest.large ? "md:col-span-2 md:row-span-2" : ""} ${dest.wide ? "md:col-span-2" : ""}`}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={dest.img} 
                alt={dest.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                {dest.tag && (
                  <span className="bg-tertiary text-on-tertiary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter mb-3 inline-block">
                    {dest.tag}
                  </span>
                )}
                <h3 className={`${dest.large ? "text-3xl" : "text-xl"} font-headline font-bold text-white mb-2`}>{dest.title}</h3>
                {dest.desc && <p className="text-white/80 text-sm">{dest.desc}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExclusiveDeals = () => {
  const deals = [
    {
      title: "Marina Bay Sands",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvN_jpZPVOCCbNvj9DObUbTXT0LmhxcX2AoDsscZ2QW1WWJEZj7vGZqQ5lhO-hsbjrUgu_Ft0vpwT3QPARB5B748vN9l0da9edSEXtxGtmhDg1clTunIhRSWRceU-l2G9WvEmEouNjhDhn2q19H14zv5PIS3o81w4j532mirdzfy6efPJunjy9XwNQJBfnRDzwyJtbxGIFXxJSL_2klAs9jm2noyP3wfAzwMWkvLkTnZzt14RcgqQWcZMtPjTTqzGpxZArIYE8AIU",
      discount: "-30% OFF",
      rating: "9.2 Exceptional",
      price: 315,
      oldPrice: 450
    },
    {
      title: "Mountain View Resort",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBGyI9ZhXd_yuhw1k626iB9haLkoLutYpW6YRBLKpa0z9MbfUpLx52145u85ozd9mvNogfrRe8My2n-kRDlVixSMwthhMuOqUk5quj7BqLACraF2d3kL1TrwCmnj3z3ex2XwECIoRjRPSTzbLt8NC4kBMh5oHbeiUhZm4V0KPu_-5S25tTS_F6E_ecU6DPfE4ceNOnZwUqPUn0sy0idHiZD8AKUrkutsVjqnTWGxBnq1nS1ktV1g3sIspq2NwQmZcB28qunYbyJew",
      discount: "-40% OFF",
      rating: "8.8 Superb",
      price: 168,
      oldPrice: 280
    },
    {
      title: "Tokyo Grand Hotel",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ68WZDB36_EjT-gwfyeCtGV6VKr-PYBCXsLQfYzZhgP0j_c7r7jVyVSuyC3vy7B0eaqr8oNQCwI6XuNi4MvtvxDvhSUCvCIeBj0bcVShM1d2KElR_0nK9uDg0cxM2Bd8_XU3kp7jgS3jEjMVGTq9nVEuHYQxRkNRiBWW_IzY8pVFiV8WFdcEjZ2sWOeLvgWhSQBIFkdxkTtuU2zrSSOILsc_NQmVC30S7UKrSn5evK6mt28EA_TzN1EYiM1DcgdcFfr11QOzrMc",
      discount: "DEAL OF THE DAY",
      rating: "9.5 Exceptional",
      price: 190,
      oldPrice: 320
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Exclusive Deals</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Limited-time offers available only to our partners. Book your stay now and save up to 40%.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img 
                  className="w-full h-full object-cover" 
                  src={deal.img} 
                  alt={deal.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary font-bold px-3 py-1 rounded-lg text-sm">{deal.discount}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-tertiary fill-tertiary" />
                  ))}
                  <span className="text-on-surface-variant text-xs ml-2">{deal.rating}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{deal.title}</h3>
                <p className="text-on-surface-variant text-sm mb-4">Limited-time offers available only to our partners. Book your stay now and save up to 40%.</p>
                <div className="flex items-end justify-between pt-4 border-t border-outline-variant/10">
                  <div>
                    <span className="text-on-surface-variant text-xs line-through">${deal.oldPrice}</span>
                    <div className="text-2xl font-bold text-primary">${deal.price}<span className="text-xs text-on-surface-variant font-normal"> / night</span></div>
                  </div>
                  <a href={PARTNER_LINK} target="_blank" rel="noopener noreferrer" className="bg-primary-fixed hover:bg-primary-fixed-dim text-primary p-3 rounded-xl transition-colors">
                    <Calendar className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyBookWithUs = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgano43ydNrltoVMqdvGezbrq8VMvVJC83fRQqD9b8UgdhP1pSaVHxNWyjqJ-u9faRFvZHHEedoYiY5hDXE5oGB0OdN4Q8xFoi3FfS19kUD9lqt1XGNFqae4jZLDPxbFtmLJytCCMg0liCTf57MTsIUfC9-QPdV-Nwe7PS0nojtd4Y4U91wVEo-EvnygFrz1GL4ZB-8t3l_kVjfsUCIyHpSio7Ilp8xU5BZnwbxYeFzdpsKROnqYmZSBwrA-9fYzptfkB_5Wn6bo4" 
              alt="Happy travelers"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block max-w-[240px]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center">
                <ShieldCheck className="text-tertiary w-6 h-6" />
              </div>
              <span className="font-bold text-sm">Verified Listings</span>
            </div>
            <p className="text-xs text-on-surface-variant">Over 2 million property reviews from real travelers like you.</p>
          </motion.div>
        </div>
        <div>
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-8">Why Book with Us</h2>
          <div className="space-y-8">
            {[
              { icon: Tag, title: "Best Price Guarantee", desc: "Find a lower price elsewhere? We'll match it or give you AgodaCash back." },
              { icon: Headset, title: "24/7 Customer Support", desc: "Our global team is here to help you in over 40 languages, anytime, anywhere." },
              { icon: CalendarCheck, title: "Flexible Cancellations", desc: "Plans change. Most of our properties offer free cancellation for peace of mind." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href={PARTNER_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:bg-primary-container transition-all active:scale-95">
              Book Your Stay
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVtneLxC3JjX7cBjzeS3kQsWcFlczH_f1BLRjh2y0YQZSqP62NZWGZfJ8DafLiqNkoZ4MoypmhlLe2_UjV3QqRY3UcnIeoWZ57Wg-f5_vCI1i1azputAtCDMoxbR_h7Wr99IGq3k7S-SOfZug5V09mkPKrXmOGd6FuObw9BQu2r17TqCRwrWhH9s8bFy6Yi7NHR-qC3SPiPQmiE1DFfoZkQTjwcdq3xQQ_qW9KGbRK7pm3XFWgLa4aib_K31KqMRtWKEfxk1qtEtg" 
              alt="Mountain landscape"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl">Ready to start your journey?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl">Join millions of travelers booking their dream vacations with Agoda today.</p>
            <a href={PARTNER_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-surface-bright font-bold py-5 px-12 rounded-full text-xl shadow-2xl transition-all transform hover:scale-105 active:scale-95">
              Search Hotels Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-low w-full border-t border-outline-variant/20 text-sm leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="text-2xl font-bold text-primary mb-6 font-headline">Agoda</div>
          <p className="text-on-surface-variant max-w-xs">Connecting you to the world's most incredible travel experiences with unbeatable value.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-on-surface">About</span>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href={`${PARTNER_LINK}&page=partner-hub`}>Partner Hub</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href={`${PARTNER_LINK}&page=affiliate`}>Affiliate Program</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Press</a>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-on-surface">Legal</span>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Use</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Cookie Policy</a>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-on-surface">Connect</span>
          <div className="flex space-x-4">
            <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10 text-center md:text-left">
        <p className="text-on-surface-variant">© 2024 Agoda Company Pte. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <TopDestinations />
        <ExclusiveDeals />
        <WhyBookWithUs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
