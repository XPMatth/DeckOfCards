import { searchCardDeck, createDeck } from "./card.js"


async function changeCard(){
    const deck = await createDeck()
    const card = await searchCardDeck(deck.deck_id);

    const cardImage = card.cards[0].image;
    const infoCard = card.cards[0].value;
    const infosCard = card.cards[0].suit;

    console.log(card)

    document.getElementById('card').src = cardImage;
    document.getElementById('suit').innerHTML = `${infosCard}`;
    document.getElementById('value').innerHTML = `${infoCard}`;
 }
 changeCard()

 document.getElementById('take-card').addEventListener('click', ()=>{
    changeCard()
 })