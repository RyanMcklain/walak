import React from 'react';

const WPM = 200; // words per minute
// const PROCRASTINATION_MINUTES = 5;

const ArticleCard = ({ article, first }) => {
  const totalWords = article.text && article.text.split(' ').length;
  const minutes = totalWords / WPM;
  const procrastination = minutes * 0.1;

  return (
    <div
      id={ article.id }
      className={ `article-card ${first ? 'double' : 'single'}` }>
      {/* <img src={ article.imgSrc } alt={ article.title } /> */ }
      <div className="body-image" style={{ backgroundImage: `url(${article.imgSrc})` }}></div>
      <div className="body-text">
        <h1>{ article.title }</h1>
        <h2>{ article.subtitle }</h2>
        <h3>זמן קריאה: { Math.round(minutes + procrastination) } דקות</h3>
      </div>
    </div>
  );
};

export default ArticleCard;
