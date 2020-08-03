var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  }
];

function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill} </p>
    </div>
  );
}

function TradingCardContainer() {
  const floatCard = {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  };
  
  const [cards, updateCards] = React.useState([floatCard]);


  console.log(cards, cards.length);

  const tradingCards = [];
  let time_loop = 0; 
  console.log('break', time_loop, cards.length)
  
  for (const currentCard of cards) {
    
    if (time_loop > cards.length){
      console.log('break', time_loop, cards.length)
       break; 
    }
    
    tradingCards.push(
      <TradingCard
        key={currentCard.name}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
    time_loop += 1;
    console.log(tradingCards, cards,"INCREMEMENT", time_loop);
  }
  

  return (
    <div>{tradingCards}</div>
  );
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
