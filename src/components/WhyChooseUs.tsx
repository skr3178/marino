import { Shield, Truck, Clock, ThumbsUp, Wrench, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All products undergo strict quality checks to ensure durability and performance.',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      description: 'We deliver across India with reliable logistics and timely dispatch.',
    },
    {
      icon: Clock,
      title: '40 Years Experience',
      description: 'Trusted by businesses for over four decades with proven track record.',
    },
    {
      icon: ThumbsUp,
      title: 'Competitive Pricing',
      description: 'Best market prices without compromising on quality standards.',
    },
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Tailored industrial solutions to meet your specific requirements.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Support',
      description: 'Expert guidance and after-sales support for all your queries.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-steel-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="section-title text-primary-foreground mt-2">
            Your Trusted
            <span className="text-accent"> Industrial Partner</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg mt-4">
            We are committed to delivering excellence in every product and service we provide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
