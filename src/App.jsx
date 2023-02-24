import data from "./data"
import Header from "./Header"
import Card from "./Card"

function App() {
  const cards = data.map(card=>{
    return (
      <Card 
        key={card.id}
        {...card}
      />
    )
  })

  return (
    <>
      <Header />
      <main>
        {cards}
      </main>
    </>
  )
}

export default App
