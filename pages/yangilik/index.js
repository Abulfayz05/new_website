import React from 'react';
import YangilikSection from '../../component/Yangiliklar/YangilikSection';

export default function yangilik({ data }) {
  
  return (
    <div>
      <YangilikSection data={data.data} />
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://new.uzbekvoice.ai/items/news_translations/')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
