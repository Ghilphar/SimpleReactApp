// src/pages/Home.jsx
import React from 'react';
import FadeInOnScroll from '../components/FadeInScroll';

const Home = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to Our Amazing Website</h1>

      <FadeInOnScroll>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555' }}>
          Discover the latest updates, features, and content curated just for you.
        </p>
      </FadeInOnScroll>

      {/* Fade-in Section: Hero Image */}
      <FadeInOnScroll>
        <img
          src="https://via.placeholder.com/900x400"
          alt="Hero Banner"
          style={{ width: '100%', borderRadius: '8px', marginTop: '1.5rem' }}
        />
      </FadeInOnScroll>

      {/* Large Content Section */}
      <FadeInOnScroll>
        <p style={{ marginTop: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt felis vitae odio ultrices, 
          eget pharetra justo consequat. Nulla facilisi. Integer sed diam sed elit aliquet congue ac et massa. 
          Quisque id orci a nunc fermentum suscipit a at nunc. Ut porta dapibus velit, vel gravida turpis tincidunt ac. 
          Duis sed magna ac purus vestibulum tincidunt eget vel ligula.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Donec fermentum massa eget libero volutpat, ut scelerisque lorem aliquet. Mauris non augue at quam efficitur dapibus.
          Suspendisse accumsan ante id metus egestas, sed facilisis magna gravida. Nam at quam nec erat tristique consequat.
        </p>
      </FadeInOnScroll>

      {/* Image Gallery Section */}
      <FadeInOnScroll>
        <h2 style={{ marginTop: '3rem', textAlign: 'center' }}>Explore Our Features</h2>
      </FadeInOnScroll>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <FadeInOnScroll>
          <img
            src="https://via.placeholder.com/300"
            alt="Feature 1"
            style={{ width: '300px', height: '200px', borderRadius: '8px' }}
          />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <img
            src="https://via.placeholder.com/300"
            alt="Feature 2"
            style={{ width: '300px', height: '200px', borderRadius: '8px' }}
          />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <img
            src="https://via.placeholder.com/300"
            alt="Feature 3"
            style={{ width: '300px', height: '200px', borderRadius: '8px' }}
          />
        </FadeInOnScroll>
      </div>

      {/* List Section */}
      <FadeInOnScroll>
        <h2 style={{ marginTop: '3rem', textAlign: 'center' }}>Why Choose Us?</h2>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
          <li>✅ High-quality content curated for you</li>
          <li>🚀 Lightning-fast performance with the latest technologies</li>
          <li>💡 Smart features to enhance your experience</li>
          <li>🔒 Secure and privacy-focused platform</li>
          <li>🌍 Accessible from anywhere, anytime</li>
        </ul>
      </FadeInOnScroll>

      {/* Call-to-Action Section */}
      <FadeInOnScroll>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h3>Get Started Today!</h3>
          <p>Join thousands of users enjoying our platform.</p>
          <button
            style={{
              padding: '12px 25px',
              fontSize: '1.2rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              marginTop: '1rem',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Sign Up Now 🚀
          </button>
        </div>
      </FadeInOnScroll>
	<FadeInOnScroll>
  <div style={{ textAlign: 'center', marginTop: '3rem' }}>
    <h2>Discover More</h2>
    <p>Explore our latest features and improvements.</p>
    <img 
      src="https://via.placeholder.com/800x400" 
      alt="New Features"
      style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
    />
  </div>
</FadeInOnScroll>
<FadeInOnScroll>
  <p style={{ marginTop: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a metus quis lorem tempus cursus in nec turpis. 
    Vivamus at justo at neque egestas tristique in nec dui. In hac habitasse platea dictumst. Sed vel elit eget mauris auctor ultricies. 
    Curabitur convallis urna ut quam sodales, eu porttitor ligula vehicula. Vestibulum laoreet ipsum eget erat auctor, et porttitor turpis auctor.
  </p>
</FadeInOnScroll>

<FadeInOnScroll>
  <p style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
    Fusce dapibus velit at eros fermentum, eu cursus arcu consectetur. Ut at lorem suscipit, vehicula magna in, cursus mauris. 
    Duis tincidunt libero nec convallis consequat. Integer eget lacus in urna fermentum tempor. Sed aliquam scelerisque purus ut maximus. 
    Aliquam tristique felis a odio tristique ultricies. Etiam et odio at risus dignissim faucibus eget ac felis.
  </p>
</FadeInOnScroll>
<FadeInOnScroll>
  <h2 style={{ marginTop: '3rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
</FadeInOnScroll>

<FadeInOnScroll>
  <div style={{ marginTop: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
    <h3>❓ How does this work?</h3>
    <p>This page uses a fade-in effect when you scroll. The more you scroll, the more elements appear.</p>
  </div>
</FadeInOnScroll>

<FadeInOnScroll>
  <div style={{ marginTop: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
    <h3>❓ Can I customize the animation?</h3>
    <p>Yes! You can adjust the animation duration in the `FadeInOnScroll` component.</p>
  </div>
</FadeInOnScroll>

<FadeInOnScroll>
  <div style={{ marginTop: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
    <h3>❓ Why is my animation not working?</h3>
    <p>Make sure you have enough scrollable content, and that `FadeInOnScroll` is correctly observing elements.</p>
  </div>
</FadeInOnScroll>
<FadeInOnScroll>
  <h2 style={{ marginTop: '3rem', textAlign: 'center' }}>Our Pricing Plans</h2>
</FadeInOnScroll>

<FadeInOnScroll>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
    <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', width: '250px', textAlign: 'center' }}>
      <h3>Basic Plan</h3>
      <p><strong>$9.99/month</strong></p>
      <p>✔ Access to basic features</p>
      <p>✔ Limited support</p>
      <button style={{ marginTop: '1rem', padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Get Started</button>
    </div>

    <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', width: '250px', textAlign: 'center' }}>
      <h3>Pro Plan</h3>
      <p><strong>$19.99/month</strong></p>
      <p>✔ Everything in Basic</p>
      <p>✔ Priority Support</p>
      <button style={{ marginTop: '1rem', padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Get Pro</button>
    </div>
  </div>
</FadeInOnScroll>



      {/* Footer Section */}
      <FadeInOnScroll>
        <footer style={{ textAlign: 'center', marginTop: '5rem', paddingBottom: '2rem', fontSize: '0.9rem', color: '#777' }}>
          © {new Date().getFullYear()} Our Website. All Rights Reserved.
        </footer>
      </FadeInOnScroll>
    </div>
  );
};

export default Home;

