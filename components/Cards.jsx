import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cards = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    const res = await fetch('http://localhost:8000/cards');
    const data = await res.json();
    setData(data);
    console.log(data);
  }, []);

  return (
    <>
      {data &&
        data.map((el) => {
          return (
            <section key={el.id} className='card'>
              <article
                className='card--top'
                style={{ backgroundColor: `${el.color}` }}
              >
                <img src={`/images/${el.imgName}`} />
              </article>
              <article className='card--content'>
                <div className='card--content--title'>
                  <h2>{el.title}</h2>
                  <img src='/images/icon-ellipsis.svg' alt='dots' />
                </div>
                <h1 className='current'>
                  {!id
                    ? el.timeframes.daily.current
                    : el.timeframes[id].current}
                  hrs
                </h1>
                <p className='last'>
                  Last Week -{' '}
                  {!id
                    ? el.timeframes.daily.current
                    : el.timeframes[id].previous}
                  hrs
                </p>
              </article>
            </section>
          );
        })}
    </>
  );
};

export default Cards;
