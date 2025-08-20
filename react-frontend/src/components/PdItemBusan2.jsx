import React from 'react';
import styled from 'styled-components';

// styled-components 이용해서,
// 컴포넌트 안에 , css 스타일 작업 같이 진행하기.

const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.75rem;
    color: #343a40;
  }
  p {
    margin: 0.25rem 0 0 0;
    color: #868e96;
    font-size: 1rem;
  }

  // 뉴스 아이템 서로 간의 간격 조절,
  & + & {
    margin-top: 3rem;
  }
`;

const WeatherBusan = ({ article }) => {
  // 사용할 데이터 목록
  // title, 제목
  // description, 내용
  // url, 기사 원본 링크
  // urlToImage, 뉴스 이미지

  // 공공데이터 추가 작업 6
  const { wlfrFcltNm, wlfrFcltLctnAddr, wlfrFcltTelno } = article;

  return (
    <NewsItemBlock>
      {/*공공데이터 추가 작업 7*/}
      <div className="contents">
        {/*공공데이터 추가 작업 8*/}
        <h2>{wlfrFcltNm}</h2>
        <p>
          <strong>주소 :</strong> {wlfrFcltLctnAddr}
        </p>
        <p>
          <strong>전화번호 :</strong> {wlfrFcltTelno}
        </p>
      </div>
    </NewsItemBlock>
  );
};

export default WeatherBusan;
