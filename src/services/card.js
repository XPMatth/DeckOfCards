async function createDeck(){
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    return await response.json()
}

async function searchCardDeck(deck_id){
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
    return await response.json()
}

export {createDeck, searchCardDeck}