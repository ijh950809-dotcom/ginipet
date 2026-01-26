import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/login.css';

function Login(props) {
  //1. 변수선언 값 설정하기
  const [form, setForm] = useState({//값이 여러개일 경우 중괄호
    username: '',//아이디저장
    password: ''//패스워드 저장
  });

  const [error, setError] = useState('');//값이 1개일 경우 소괄호
  const navigate = useNavigate();//url주소이동

  //2. 입력폼에 입력시 실행되는 함수
  const handleChange = (e) => {//아이디, 패스워드 입력하면
    setForm({
      ...form,//기존객체에 추가하여 데이터 입력
      [e.target.name]: e.target.value//사용자가 입력한 것을
    });
    setError('')//에러초기화
  }

  //3. 로그인 버튼 클릭시 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();//새로고침 방지

    axios.post('http://localhost:9070/login', form)
      .then(res => {//성공시 작업
        //jwt토큰저장
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', form.username);//사용자 아이디 저장

        alert('로그인성공 메인페이지로 이동합니다');
        navigate('/');//메인페이지 경로로 이동
      })
      .catch(() => {//실패시 작업
        setError('로그인 실패 : 아이디 또는 비밀번호를 확인하세요.');
      });
  }

  return (
    <main>
      <section className='login'>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <input type="radio" id="member" name="memberGroup" />
            <label htmlFor="member">회원</label>
            <input type="radio" id="nomember" name="memberGroup" />
            <label htmlFor="nomember">비회원</label>
          </p>
          <p>
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디"
              onChange={handleChange}
              value={form.username}
              required
            />
          </p>
          <p>
            <label htmlFor="password">패스워드</label>
            <input type="password"
              id="password"
              name="password"
              placeholder="패스워드"
              onChange={handleChange}
              value={form.password}
              required
            />
          </p>
          <p>
            <input type="checkbox"
              id="username_check"
            />
            <label htmlFor="username_check">아이디 저장</label>
          </p>

          <p>
            <button type="submit">로그인</button>
            {/* 리액트에서는 input="submit"보다 button태그를 씀. */}
            {/* button 회원가입 - 확장 가능한 버튼, 문자, 이미지, 아이콘, html요소 모구 사용이 가능하여 자유롭게 css로 서식이 변경가능함. 스타일 적용이 쉬워 리액트에서 주로 많이 사용함. 
            input type="submt" - 내용을 단순하게 전송하기 위한 목적, 버튼안에 텍스트만 들어가면 아이콘, 이미지, 로딩바 적용이 쉽지않음
            */}
          </p>
          <p>
            <Link to="/id_search">아이디 찾기</Link> &#10072;
            <Link to="/pw_search">비번찾기</Link> &#10072;
            <Link to="/join">회원가입</Link>
          </p>
          {error && <p style={{ color: '#f00' }}>{error}</p>}
        </form>
        <div className='join_btn_box'>
          <p>아직회원이 아니세요?
            <span>지금 지니펫 회원으로 가입하고 풍성한 혜택 받아가세요.</span>
          </p>
          <Link to='/join'><button className='join_btn'>회원가입</button></Link>
        </div>

      </section>

    </main>
  );
}

export default Login;