const ClientTicker = () => {
  const clients = [
    { name: 'SAIL', fullName: 'Steel Authority of India', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Steel_Authority_of_India_logo.svg/200px-Steel_Authority_of_India_logo.svg.png' },
    { name: 'Tata Steel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tata_Steel_logo.svg/200px-Tata_Steel_logo.svg.png' },
    { name: 'JSW Steel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/JSW_Steel_logo.svg/200px-JSW_Steel_logo.svg.png' },
    { name: 'Essar Steel', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Essar-Logo.png' },
    { name: 'RINL', fullName: 'Rashtriya Ispat Nigam Limited', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/RINL_logo.svg/200px-RINL_logo.svg.png' },
    { name: 'Jindal Steel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jindal_Steel_%26_Power_logo.svg/200px-Jindal_Steel_%26_Power_logo.svg.png' },
    { name: 'JindalCo', logo: 'https://www.jindalsteelpower.com/images/jindal-logo.png' },
    { name: 'ISRO', fullName: 'Indian Space Research Organisation', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/200px-Indian_Space_Research_Organisation_Logo.svg.png' },
    { name: 'DRDO', fullName: 'Defence Research and Development Organisation', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/DRDO_logo.svg/200px-DRDO_logo.svg.png' },
    { name: 'Adani Ports', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Adani_Group_logo.svg/200px-Adani_Group_logo.svg.png' },
    { name: 'Coal India', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Coal_India_logo.svg/200px-Coal_India_logo.svg.png' },
    { name: 'Indian Railways', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Indian_Railways_logo.svg/200px-Indian_Railways_logo.svg.png' },
    { name: 'Port Trust', logo: null },
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white py-3 overflow-hidden relative shadow-lg">
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 px-5 bg-gradient-to-r from-pink-500 to-rose-500 py-2 shadow-md">
          <span className="text-sm font-bold uppercase tracking-wider whitespace-nowrap" style={{ fontFamily: 'Arial Black, sans-serif' }}>Our Clients Include:</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {duplicatedClients.map((client, index) => (
              <div key={index} className="flex items-center mx-6 gap-3">
                {client.logo ? (
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="h-10 w-auto max-w-[120px] object-contain"
                      style={{ filter: 'brightness(0) invert(1)' }}
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const textFallback = target.parentElement?.querySelector('.logo-fallback');
                        if (textFallback) {
                          textFallback.classList.remove('hidden');
                        }
                      }}
                    />
                    <span className="text-xs font-bold tracking-wide hidden logo-fallback" style={{ fontFamily: 'Georgia, serif' }}>
                      {client.fullName || client.name}
                    </span>
                  </div>
                ) : (
                  <span className="text-sm font-bold tracking-wide px-4 py-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {client.fullName || client.name}
                  </span>
                )}
                {index < duplicatedClients.length - 1 && (
                  <span className="mx-4 text-white/40 text-lg">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTicker;

