import React, { useEffect, useState, useRef }  from 'react'

const CardProba = () => {

    let [addCardText,setAddCardText] = useState("");
    let [addCardNumber, setAddCardNumber] = useState(0);
    let [DeckList,setDeckList] = useState([]);
    let [cardFound,setCardFound] = useState("");

    const addCardEvent = (e) => {      
        if(!DeckList.some((element) => element.CardName === addCardText.toLowerCase())){
             setDeckList([...DeckList,{"CardName": addCardText.toLowerCase(),"CardLeft":addCardNumber}]);              
        }
        else {
            let existingCard = DeckList.find(element => element.CardName === addCardText.toLowerCase());
            existingCard.CardLeft =  existingCard.CardLeft+addCardNumber;    
            setDeckList([...DeckList]);     
        }         
    }

    const removeFromDeckList = (name:string) => {
        let newDeck = DeckList.filter(element => element.CardName !== name);          
        setDeckList([...newDeck]);
        
    }

    const HandlerDelete = (e) => {
        removeFromDeckList(e.target.name);
    }

    const Draw = () => {
        
        let maxNumber = 0;
         DeckList.forEach( element => maxNumber = maxNumber+element.CardLeft);
        const randomCard = Math.floor(Math.random() * maxNumber);
        let cardDrawed = "";
        let currentTestNumber = 0;
        DeckList.every( element => {
            currentTestNumber = currentTestNumber + element.CardLeft;
            if(randomCard < currentTestNumber) {
                cardDrawed = element.CardName;                
                element.CardLeft--;
                if(element.CardLeft === 0){
                    console.log(element.CardName);
                    removeFromDeckList(element.CardName);                    
                }
                else {
                    setDeckList([...DeckList]);
                }
                return false;                
            }
            else {
                return true;
            }
        });
        setCardFound(cardDrawed);
        
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
            <input type="button" value="-" name={card.CardName} onClick={HandlerDelete}/>
            </li>
            )}
        </ul>    
        
        </div>
        <div className="Draw-container">
            <input type="button" value="Draw" onClick={Draw} />
            <p>{cardFound}</p>
        </div>

    </div>
    
  )
}

export default CardProba
