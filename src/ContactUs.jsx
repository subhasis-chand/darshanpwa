import Header from "./Header";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '10px' }}>
        Contact us:
        <div style={{ fontWeight: 'bold' }}>
          This app is not made for any profit and we are not making any money out of it now.
        </div>
        <div>Our target is to make more and more people aware of the sanatan way of life.</div>
        <div>As a starting point we are showing live video stream of sanatan temples</div>
        <div>We are in the process of adding more videos.
          Meanwhile we are under discussion with the temple committees to obtain the licenses.</div>
        <div>Please contact us for any queries or complaints.</div>
        <div>Email us at: <span style={{ fontWeight: 'bold' }}>shanatandarshan@gmail.com</span></div>
        <div>Call us at: <span style={{ fontWeight: 'bold' }}>(+91) 7981029140</span></div>
        Stay Blessed!!!
      </div>
    </div>

  );
}

export default ContactUs;
