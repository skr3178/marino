import { Building2, Users, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building2, label: 'Business Type', value: 'Proprietorship' },
    { icon: Users, label: 'Nature of Business', value: 'Manufacturer & Retailer' },
    { icon: MapPin, label: 'Location', value: 'Kolkata, West Bengal' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="section-title text-foreground mt-2">
              Trusted Industrial
              <span className="text-gradient"> Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong>Marino Corporation Of India</strong> is a leading manufacturer and supplier of industrial hardware, specializing in Steel Wire Rope, Rope Slings, Chain & Chain Slings, Shackles Hooks, Turn Buckles & All Kinds of Safety and Lifting Tackles. Based in Kolkata, West Bengal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 40 years of industry experience, we have established ourselves as a reliable partner for businesses requiring high-quality industrial chains, marine equipment, wire rope slings, and lifting solutions. Our commitment to quality and customer satisfaction has made us a preferred choice for industries across India.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card-industrial p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    <p className="font-semibold text-foreground">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="card-industrial p-8 bg-primary text-primary-foreground">
                  <span className="font-display text-5xl font-bold">40+</span>
                  <p className="text-primary-foreground/80 mt-2">Years in Business</p>
                </div>
                <div className="card-industrial p-6">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">GST Registered</h3>
                  <p className="text-sm text-muted-foreground">19ADMPR1740H1ZA</p>
                  <p className="text-xs text-muted-foreground mt-1">Since 22-08-2017</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="card-industrial p-6">
                  <div className="w-12 h-12 bg-marine-blue/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-marine-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">Premium industrial grade products</p>
                </div>
                <div className="card-industrial p-8 bg-accent text-accent-foreground">
                  <span className="font-display text-4xl font-bold">100+</span>
                  <p className="text-accent-foreground/80 mt-2">Products Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
