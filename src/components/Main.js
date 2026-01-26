import React from 'react';
import '../style/main.css';

function Main(props) {
  return (
    <main className='main'>
      <section>

        <img src={`${process.env.PUBLIC_URL}/images/main1.jpg`} alt="" />
      </section>

      <section>
        <img src={`${process.env.PUBLIC_URL}/images/shop.jpg`} alt="" />
      </section>

      <section>
        <img src={`${process.env.PUBLIC_URL}/images/story.jpg`} alt="" />
      </section>
      <section className='sns_bg'>
        <img src={`${process.env.PUBLIC_URL}/images/in_star.jpg`} alt="" />
      </section>
    </main>
  );
}

export default Main;