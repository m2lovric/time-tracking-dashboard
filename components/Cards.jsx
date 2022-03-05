import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Cards = () => {
  const [data, setData] = useState([]);

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
                <h1 className='current'>{el.timeframes.weekly.current}hrs</h1>
                <p className='last'>
                  Last Week - {el.timeframes.weekly.previous}hrs
                </p>
              </article>
            </section>
          );
        })}
    </>
  );
};

export default Cards;
