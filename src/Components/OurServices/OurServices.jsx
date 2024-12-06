import React from "react";

export default function OurServices() {
  const services = [
    {
      title: "Online Services",
      description:
        "Now you can get all your approved services remotely by our Efficient Smart Online System. So, you can avoid all miscommunications hustles.",
      icon: "🔗", // Replace with your icon/image
    },
    {
      title: "Medical Network Access",
      description:
        "Providing an editorial quality to our services which provides you with protection against misuse, allocating your resources to optimum service.",
      icon: "💊", // Replace with your icon/image
    },
    {
      title: "HR Reports",
      description:
        "We believe in (Clearance Right) to go with our business. So you have full access to follow up on your employees' transactions directly anywhere anytime.",
      icon: "📊", // Replace with your icon/image
    },
    {
      title: "Mobile Application",
      description:
        "Our smart mobile application system can give you the full access to yours & your family account. So, you have a full clearance access to all your account transactions Anywhere Anytime.",
      icon: "📱", // Replace with your icon/image
    },
    {
      title: "Continuation Options",
      description:
        "Providing an editorial quality to our services which provides you with protection against misuse, allocating your resources to optimum service.",
      icon: "🔄", // Replace with your icon/image
    },
    {
      title: "Health & Wellbeing Benefits",
      description:
        "Providing an editorial quality to our services which provides you with protection against misuse, allocating your resources to optimum service.",
      icon: "💖", // Replace with your icon/image
    },
  ];

  return (
    <div className="smart-service-section">
      <h2 className="section-title">OUR SMART SERVICE</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
