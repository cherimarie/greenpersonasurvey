 // a: futuristic fossa
    // b: responsible red panda (Laila)
    // c: practical puffin (Jordan)
    // d: contrary crawfish
    // e: curious quail
    // f: champion papillion
    var answers = {motivation: "", excited: "", weekend: "", donate: "", steps: ""}
    var count = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0}

    document.querySelector("form#question1").addEventListener("submit", function(event){
      event.preventDefault()
      answers.motivation = document.question1.motivation.value
      document.question1.motivation.forEach(function(a){a.checked = false})
      this.classList.add("hidden")
      document.querySelector("form#question2").classList.remove("hidden")
      console.log(answers)
    })
    document.querySelector("form#question2").addEventListener("submit", function(event){
      event.preventDefault()
      answers.excited = document.question2.excited.value
      document.question2.excited.forEach(function(a){a.checked = false})
      this.classList.add("hidden")
      document.querySelector("form#question3").classList.remove("hidden")
      console.log(answers)
    })
    document.querySelector("form#question3").addEventListener("submit", function(event){
      event.preventDefault()
      answers.weekend = document.question3.weekend.value
      document.question3.weekend.forEach(function(a){a.checked = false})
      this.classList.add("hidden")
      document.querySelector("form#question4").classList.remove("hidden")
      console.log(answers)
    })
    document.querySelector("form#question4").addEventListener("submit", function(event){
      event.preventDefault()
      answers.donate = document.question4.donate.value
      document.question4.donate.forEach(function(a){a.checked = false})
      this.classList.add("hidden")
      document.querySelector("form#question5").classList.remove("hidden")
      console.log(answers)
    })
    document.querySelector("form#question5").addEventListener("submit", function(event){
      event.preventDefault()
      answers.steps = document.question5.steps.value
      document.question5.steps.forEach(function(a){a.checked = false})
      this.classList.add("hidden")
      document.querySelector("div.result").classList.remove("hidden")
      console.log(answers)
      count[answers.motivation] +=1
      count[answers.excited] +=1
      count[answers.weekend] +=1
      count[answers.donate] +=1
      count[answers.steps] +=1
      var sorted = Object.keys(count).sort(function(a, b){
        return count[a] - count[b]
      })
      console.log(sorted)
      switch(sorted[sorted.length -1]){
        case "a":
          buildA()
          break
        case "b":
          buildB()
          break
        case "c":
          buildC()
          break
        case "d":
          buildD()
          break
        case "e":
          buildE()
          break
        case "f":
          buildF()
          break
      }
    })

    function buildA() {
      document.querySelector("h2#headline").innerHTML = "Your green persona is <b>Futuristic Fossa</b>"
      document.querySelector("img#persona").setAttribute("src", "http://animals.sandiegozoo.org/sites/default/files/inline-images/fossa_tree.jpg")
      document.querySelector("p#persona-desc").innerHTML = "You're excited about how cool the future is going to be, and can't wait to be a part of it! You stay abreast of the latest scientific and technological advances, so you know how many of them are in the field of renewable energy right now. Being a supporter of clean energy means helping drive those advances."
    }

    function buildB() {
      document.querySelector("h2#headline").innerHTML = "Your green persona is <b>Responsible Red Panda</b>"
      document.querySelector("img#persona").setAttribute("src", "http://www.zoonewengland.org/media/813822/redpanda_gallery10.jpg")
      document.querySelector("p#persona-desc").innerHTML = "You care about being a responsbile global citizen, helping to preserve and protect our natural resources. Your life is busy, so you want to maximize the impact of the contributions you're able to make."
    }

    function buildC() {
      document.querySelector("h2#headline").innerHTML = "Your green persona is <b>Practical Puffin</b>"
      document.querySelector("img#persona").setAttribute("src", "http://www.cbc.ca/kidscbc2/content/the_feed/cute_puffin1.jpg")
      document.querySelector("p#persona-desc").innerHTML = "You want affordable electricity service that you don't have to think about. We respect that."
    }

    function buildD() {
      document.querySelector("h2#headline").innerHTML = "Your green persona is <b>Contrary Crawfish</b>"
      document.querySelector("img#persona").setAttribute("src", "https://res-4.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,f_auto,w_800/v1485378104/event-poster-7337598.jpg")
      document.querySelector("p#persona-desc").innerHTML = "You're a grump! But I bet you wouldn't mind having a positive impact on our environment if you didn't have to go out of your way to do it."
    }

    function buildE() {
      document.querySelector("h2#headline").innerHTML = "Your green persona is <b>Curious Quail</b>"
      document.querySelector("img#persona").setAttribute("src", "https://i.pinimg.com/736x/58/56/c1/5856c1da528a5672d7fa6f36805259bd--quails-pheasant.jpg")
      document.querySelector("p#persona-desc").innerHTML = "You know protecting and preserving our environment is important, but aren't quite sure how you can make a difference. You're excited to learn more and participate in the growing sustainability movement."
    }

    function buildF() {
      document.querySelector("h2#headline").innerHTML = "Your green persona is <b>Champion Papillon</b>"
      document.querySelector("img#persona").setAttribute("src", "https://i.pinimg.com/originals/b0/c4/59/b0c4595489f790c909a008776ef51e75.jpg")
      document.querySelector("p#persona-desc").innerHTML = "You're an outspoken champion of environmental stewardship, active in your community and always looking to share your knowledge. We bet you're a bike commuter and have your own worm bin. In fact, you're probably already a Drift customer!"
    }

    function reset() {
      answers = {motivation: "", excited: "", weekend: "", donate: "", steps: ""}
      count = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0}
      document.querySelector("form#question5").classList.add("hidden")
      document.querySelector("form#question4").classList.add("hidden")
      document.querySelector("form#question3").classList.add("hidden")
      document.querySelector("form#question2").classList.add("hidden")
      document.querySelector("div.result").classList.add("hidden")
      document.querySelector("form#question1").classList.remove("hidden")
    }