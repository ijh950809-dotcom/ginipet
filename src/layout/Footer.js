import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <>
      <footer>
        <div><p>공지사항</p></div>
        <div className='footer_info'>
          <div>
            <Link to='/'>개인정보처리방침</Link>
            <Link to='/'>쇼핑몰 약관</Link>
          </div>
          <div><img src={`${process.env.PUBLIC_URL}/images/title_instar_icon.png`} alt="" />
          </div>
        </div>
        <div className='customer'>
          <p>고객센터</p>
          <p>02-0000-0000</p>
          <p>평일 10:00~17:00</p>
          <p>점심 12:00~13:00</p>
        </div>
        <div>
          지니펫 사업자 정보 확인
          <img src={`${process.env.PUBLIC_URL}/images/iconArrow_bottom.png`} alt="" />
        </div>


      </footer>
    </>
  );
}

export default Footer;