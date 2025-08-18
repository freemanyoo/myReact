import React from 'react';

// 임의로 같은 파일에, 컴포넌트 만들기.
const ArticleItem = ({ id }) => {
  // 샘플 css
  const activeStyle = {
    color: 'green',
    fontSize: '21px',
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default ArticleItem;
