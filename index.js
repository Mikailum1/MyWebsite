let dealerCards = []
let playerCards = []
let playerTotal = 0
let dealerTotal = 0
let message = " "
let hasBlackJack = false
let isAlive = false
let hasStarted = false

let messageEl = document.getElementById("message-el")
let dealerEl = document.getElementById("dealer-el")
let dealerTotalEl = document.getElementById("dealerTotal-el")
let cardsEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let saveBtn = document.getElementById("save-btn")
let inputEL = document.getElementById("input-el")
let playerEl = document.getElementById("player-el")


function showCards(){
    dealerEl.textContent = "Dealers Cards " + dealerCards
    cardsEl.textContent = "Cards:"+ playerCards
    sumEl.textContent = "playerTotal: "+ playerTotal
    dealerTotalEl.textContent = "Dealers Total: " + dealerTotal
    playerEl.textContent = player.name + ": $" + player.chips
}

let player = {
    name: "",
    chips: 100
}


saveBtn.addEventListener("click", function(){
    player.name = inputEL.value
    inputEL.value =""
    console.log(player)
    playerEl.textContent = player.name + ": $" + player.chips

})
    


function getRandomCard(){
    let randomNumber = (Math.floor(Math.random()  *13 ) + 1)
    if (randomNumber > 10){ return 10}
    else if(randomNumber === 1){return 11}
    else {return randomNumber}

}


function addPlayer(){
    for (let i = 0; i < playerCards.length; i ++)
        {playerTotal += playerCards[i]}
}

function addDealer(){
    for (let i = 0; i < dealerCards.length; i ++)
        {dealerTotal += dealerCards[i]}
}

function startGame(){
    
    if (hasStarted === false)
        
    {
        document.getElementById("startGame-btn").textContent = "check cards"

        for (let i = 0; i < 1 ; i ++){dealerCards.push(getRandomCard()
        )}

        for (let i = 0; i < 2 ; i ++){playerCards.push(getRandomCard()
        )}

        addDealer(dealerCards)
        addPlayer(playerCards)
        showCards()
        hasStarted = true
        isAlive = true
    }


         

    console.log(playerEl.textContent = player.name + ": $" + player.chips)
    // console.log("hasStarted",hasStarted)
    // console.log("hasblackjack" ,hasBlackJack)
    // console.log("isAlive",isAlive)

    // console.log("dealersCards",dealerCards ,"dealersTotal", dealerTotal)
    // console.log("playerCards",playerCards ,"playerTotal", playerTotal)

    if (isAlive === true)
        {
            renderGame(playerTotal)
    }

}





function renderGame(sum)
{   
    
        if (dealerTotal === 21){
            player.chips -= 10
            hasBlackJack = true
            isAlive = false
            message = "Dealer has Blackjack you lose!"
        } else if (sum === 21){
            player.chips += 20
            hasBlackJack = true
            isAlive = false
            message = "BLACKJACK! you win!"
        }else if(sum <= 20){
            message = "Do you want to draw another card?"
        }else {
            player.chips -= 10
            isAlive = false
            message = "you BUST , more than 21" 
            
        }
        messageEl.textContent = message
        // console.log("dealer total in render game",dealerTotal)
        // console.log("players total in render game",sum)
        showCards()
}

function newCard()
{
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        
        playerCards.push(card)
        playerTotal += card 

        renderGame(playerTotal)
        console.log("newCard",playerCards ,"playerTotal",playerTotal)
        }

        else {
            
        }
}

//just make a restart button appear when is alive = false
function restartBtn()
{   
    messageEl.textContent = " "
    dealerEl.textContent = "Dealers Cards " 
    cardsEl.textContent = "Cards:"
    sumEl.textContent = "playerTotal:"
    dealerTotalEl.textContent = "Dealers Total: "
    dealerCards = []
    playerCards = []
    playerTotal = 0
    dealerTotal = 0
    hasStarted = false
    hasBlackJack = false
    startGame()

    // console.log("restart =",dealerCards)
    // console.log("restart =",playerCards)
    // console.log("restart =",playerTotal)
    // console.log("restart =",dealerTotal)
}

function standBtn(){
    if (isAlive === true){
        let drawCard = getRandomCard()
        while (dealerTotal <= 18)
        {
            {dealerTotal += drawCard, dealerCards.push(drawCard)};
            // console.log("dealer draws" , dealerCards)
            // console.log("dealer draws total" , dealerTotal)
        
        showCards()
        if (dealerTotal >= 18 ){

            if (dealerTotal > 21){
                player.chips += 10
                isAlive = false
                message = "dealer BUSTS! YOU WIN!"
                console.log("dealer busts, YOU !WIN!")

            }else if (dealerTotal === 21){
                player.chips -= 10
                hasBlackJack = true
                isAlive = false
                message = "Dealer has Blackjack you lose!"

            }else if(playerTotal === dealerTotal){
                isAlive = false
                message = "its a DRAW!"
                console.log("DRAW")
            
            }else if(playerTotal < dealerTotal){
                isAlive = false
                player.chips -= 10
                message = "YOU LOSE , dealer is closer to 21"
                console.log("dealer WINS is closer to 21")}
            
            }else if(dealerTotal === 21){
                player.chips -= 10
                hasBlackJack = true
                isAlive = false
                console.log ("Dealer has Blackjack you lose!")
                message = "Dealer has Blackjack you lose!"
            }else {
                isAlive = false
                player.chips += 10
                message = "you !WIN!"
                console.log ("you !WIN!")
            }
            messageEl.textContent = message
        }}}

// console.log("hasBlackJack",hasBlackJack)
// console.log("isAlive",isAlive)
// console.log("hasStarted",hasStarted)
