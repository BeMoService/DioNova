// src/pages/Contact.jsx
export default function Contact(){
  return (
    <section className="grid grid-2">
      <div className="col-image">
        <div className="ratio-4x5">
          <img src="images/contact.jpg" alt="Contact Dio Nova" />
        </div>
      </div>

      <div className="col-text">
        <h1 className="page-title">Contact</h1>
        <p>
          Wil je samenwerken of boeken voor een show, shoot of project? 
          Stuur gerust een bericht of neem contact op via social media.
        </p>

        <p style={{ marginTop:16 }}>
          <strong>E-mail:</strong><br/>
          <a href="mailto:dionovanl@outlook.com">dionovanl@outlook.com</a>
        </p>

        <p style={{ marginTop:16 }}>
          <strong>Instagram:</strong><br/>
          <a href="https://www.instagram.com/dio.nova" target="_blank" rel="noreferrer">@dio.nova</a>
        </p>
      </div>
    </section>
  );
}
