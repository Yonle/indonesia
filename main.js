const t = document.getElementById("t")
const img = document.getElementById("merahputih")

let curText = ""
let int = null
let tim = null

function tulis(text, c) {
  clearInterval(int)
  clearTimeout(tim)
  t.style.visibility = "visible";
  text = text.split("")
  curText = "";
  t.innerText = curText

  int = setInterval(() => {
    let p = text.shift();
    if (!p) {
      clearInterval(int)
      clearTimeout(tim)
      tim = setTimeout(_ => {
        if (c === 1) return
        t.style.visibility = "hidden";
        if (typeof(c) === "function") c()
      }, 2000)
      return
    }
    curText += p;
    t.innerText = curText;
  }, 70)
}

let respected = false

function awalan() {
  if (respected) return
  respected = true;
  tulis("Hiduplah Indonesia Raya", _ => {
    let op = 0.5
    let int = setInterval(() => {
      if (op < 0.1) {
        clearInterval(int)
        tulis("Merdeka", _ => setTimeout(_ => {
					t.style.visibility = "visible";
					img.src = "pki.svg"
					img.onload = _ => {
						img.style.opacity = 1
						t.style.opacity = 1
						document.body.style.background = "darkred"
						t.innerText = "M A L A N G N Y A !"
					}
				}, 3000))
        return
      }
      op -= 0.1
      img.style.opacity = op
    }, 120)
  })
}
