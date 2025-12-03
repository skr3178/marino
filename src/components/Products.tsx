import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import pulleyChainImg from '@/assets/products/pulley-chain.jpg';
import liftingChainImg from '@/assets/products/lifting-chain.jpg';
import containerHookImg from '@/assets/products/container-hook.jpg';
import wireRopeSlingImg from '@/assets/products/wire-rope-sling.jpg';
import shipAnchorImg from '@/assets/products/ship-anchor.jpg';
import metalChainImg from '@/assets/products/metal-chain.jpg';

const Products = () => {
  const products = [
    {
      title: 'Pulley Blocks',
      description: 'Heavy-duty crane pulley chains and industrial pulley systems for lifting operations.',
      items: ['Crane Pulley Chain', 'Pulley Big Size', 'Industrial Pulley Block'],
      image: pulleyChainImg,
    },
    {
      title: 'Lifting Chains',
      description: 'High-strength lifting, link, and drag chains for industrial and marine applications.',
      items: ['Lashing Chain', 'Long Link Chain', 'Stud Link Chain', 'Crane Lifting Chains'],
      image: liftingChainImg,
    },
    {
      title: 'Marine Equipment',
      description: 'Complete range of marine hardware including anchors, buoys, and accessories.',
      items: ['Ship Anchor', 'Life Buoy', 'Floating Buoy', 'Marine Accessories'],
      image: shipAnchorImg,
    },
    {
      title: 'Wire Rope Slings',
      description: 'Steel wire rope slings for heavy lifting and material handling operations.',
      items: ['Steel Wire Rope Sling', 'Steel Wire Sling', 'Wire Rod'],
      image: wireRopeSlingImg,
    },
    {
      title: 'Container Hooks',
      description: 'Industrial-grade hooks for container handling and heavy-duty applications.',
      items: ['Container Hook', 'C-Hook', 'Industrial Hooks'],
      image: containerHookImg,
    },
    {
      title: 'Metal Chains',
      description: 'Various types of metal chains for different industrial applications.',
      items: ['Lifting Chain Slings', 'Metal Chains', 'Key Chains'],
      image: metalChainImg,
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="section-title text-foreground mt-2">
            Industrial Solutions
            <span className="text-gradient"> You Can Trust</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            We offer a comprehensive range of industrial chains, marine equipment, and lifting hardware to meet your business needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="card-industrial overflow-hidden group hover:border-accent/50 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                {/* Items */}
                <ul className="space-y-2 mb-6">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/919831144669?text=Hello%2C%20I%20am%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/919831144669?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="btn-accent gap-2">
              Request Full Product Catalog
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
