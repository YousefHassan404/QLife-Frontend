import React from 'react';


const HowWork = () => {
  return (
    <div className="qlife-container">
      <header className="qlife-header">
        <h1>How QLife Works</h1>
        <p>Learn about the innovative technology behind QLife and how it improves patients' health and lifestyle.</p>
      </header>

      <section className="qlife-section">
        <h2>Step 1: Wear the QLife Device</h2>
        <p>Patients wear the QLife wristband, which is equipped with sensors to monitor health metrics in real-time.</p>
      </section>

      <section className="qlife-section">
        <h2>Step 2: Collect Data</h2>
        <p>The wristband collects data such as heart rate, activity levels, and other vital signs, transmitting them to a secure cloud system.</p>
      </section>

      <section className="qlife-section">
        <h2>Step 3: Access Your Medical Profile</h2>
        <p>Scan the QR code on the wristband to access your personalized medical profile and treatment plan on the QLife web page.</p>
      </section>

      <section className="qlife-section">
        <h2>Step 4: Analyze and Act</h2>
        <p>Doctors and healthcare providers can review the data to make informed decisions and offer personalized treatment recommendations.</p>
      </section>

      <footer className="qlife-footer">
        <p>Discover how QLife can help you live a healthier and more connected life.</p>
      </footer>
    </div>
  );
};

export default HowWork;
