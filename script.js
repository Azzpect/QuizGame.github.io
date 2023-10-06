const statement = [
"I would describe myself as an honest person who doesn't mislead anyone and tries to be fair with everyone",
"I like girls older than me",
"I am the one who calls", 
"I fap to pixels", 
"I am the most innocent girl you have ever met",
"I am a bengali who loves eating",
"I don't like music which doesn't have lyrics in it",
"Tea with Luchi",
"I like pans'",
"I masterbate when i am depressed",
"Dude I don't even know who I am WTF..."]
const kakima =["atanu","jatin","arpita","meghna","shreeja","rajdeep", "siddarth","sushmita","swarup","tanisha","nilkantha"]
const container = document.querySelector(".container")
let i = 1
statement.forEach(statement => {
    const div = document.createElement("div")
    div.classList.add("statement-container")
    const heading = document.createElement("h2")
    heading.classList.add("heading")
    heading.innerHTML = "Statement"
    const text = document.createElement("p")
    text.classList.add("statement-text")
    text.innerHTML = statement
    const selector = document.createElement("select")
    selector.classList.add("kakima-selector")
    selector.setAttribute("id", `selector-${i++}`)
    selector.setAttribute("required", "true")
    const none = document.createElement("option")
    none.setAttribute("value", "none")
    none.setAttribute("hidden", "true")
    none.innerHTML = "Select a Kakima:"
    selector.appendChild(none)
    kakima.forEach(kakima => {
        const option = document.createElement("option")
        option.value = kakima
        option.innerHTML = kakima.toUpperCase()
        selector.appendChild(option)
    })
    div.appendChild(heading)
    div.appendChild(text)
    div.appendChild(selector)
    container.appendChild(div)
})

const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    let i = 1
    let score = 0
    while(document.querySelector(`#selector-${i}`)) {
        if(i == 1 && document.querySelector(`#selector-${i}`).value == "arpita")
            score += 10
        else if(i == 2 && document.querySelector(`#selector-${i}`).value == "atanu")
            score += 10
        else if(i == 3 && document.querySelector(`#selector-${i}`).value == "siddarth")
            score += 10
        else if(i == 4 && document.querySelector(`#selector-${i}`).value == "nilkantha")
            score += 10
        else if(i == 5 && document.querySelector(`#selector-${i}`).value == "meghna")
            score += 10
        else if(i == 6 && document.querySelector(`#selector-${i}`).value == "rajdeep")
            score += 10
        else if(i == 7 && document.querySelector(`#selector-${i}`).value == "jatin")
            score += 10
        else if(i == 8 && document.querySelector(`#selector-${i}`).value == "sushmita")
            score += 10
        else if(i == 9 && document.querySelector(`#selector-${i}`).value == "shreeja")
            score += 10
        else if(i == 10 && document.querySelector(`#selector-${i}`).value == "swarup")
            score += 10
        else if(i == 11 && document.querySelector(`#selector-${i}`).value == "tanisha")
            score += 10
        i++
    }
    const result = document.createElement("div")
    result.classList.add("result-container")
    if(score == 110)
        result.innerHTML = `Your score is ${score} out of 110`
    else
        result.innerHTML = `Your score is ${score} out of 110. Please! Try again.`
    container.appendChild(result)
})
