const suits = ['♠', '♣', '♦', '♥'];
const values = [
  'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];
const jokers = ['🃏 Joker (Black)', '🃏 Joker (Red)'];
const deck = [];

// 카드 덱 생성
function createDeck() {
  for (let suit of suits) {
    for (let value of values) {
      deck.push(`${value} ${suit}`);
    }
  }
  // 조커 추가
  deck.push(...jokers);
}

// 무작위 카드 뽑기
function drawCard() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  displayCard(card);
}

// 화면에 카드 표시
function displayCard(card) {
  const cardDisplay = document.getElementById('card-display');
  cardDisplay.textContent = card;
}

// 이벤트 리스너 등록
document.getElementById('draw-button').addEventListener('click', drawCard);

// 게임 시작 시 덱 생성
createDeck();
