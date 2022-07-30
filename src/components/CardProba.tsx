import React, { useEffect, useState, useRef }  from 'react'

const CardProba = () => {

    let [addCardText,setAddCardText] = useState("");
    let [addCardNumber, setAddCardNumber] = useState(0);
    let [DeckList,setDeckList] = useState([]);

    const addCardEvent = (e) => {      
        if(!DeckList.some((element) => element.CardName === addCardText.toLowerCase())){
             setDeckList([...DeckList,{"CardName": addCardText.toLowerCase(),"CardLeft":addCardNumber}]);     
             console.log(DeckList.includes(addCardText.toLowerCase()));
        }
        else {
            let existingCard = DeckList.find(element => element.CardName === addCardText.toLowerCase());
            existingCard.CardLeft =  existingCard.CardLeft+addCardNumber;    
            setDeckList([...DeckList]);     
        }         
    }

    const removeFromDeckList = (e) => {
        let newDeck = DeckList.filter(element => element.CardName !== e.target.name);          
        setDeckList([...newDeck]);
        
    }

  return (
    <div className="cardProba-container">
        <h2>Simulateur de deck</h2>
        <div className="addCard-container">
            <p className="addcard-text">mettre dans le deck</p>
            <input type="text" name="addcard-card" id="" onChange={(e) => {setAddCardText(e.target.value)}}/>
            <input type="number" name="addcard-number" id="" onChange={(e) => {setAddCardNumber(parseInt(e.target.value))}}/>
            <input type="button" value="Add" onClick={addCardEvent}/>
        </div>
        <div className="deckList-container">  
        <ul>
            {DeckList.map(card => 
            <li key={card.CardName}>{card.CardName} x {card.CardLeft}
            <input type="button" value="-" name={card.CardName} onClick={removeFromDeckList}/>
            </li>
            )}
        </ul>    
        
        </div>

    </div>
    
  )
}

export default CardProba
