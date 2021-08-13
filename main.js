import { createApp,defineComponent  } from './vue.js'


let Header = defineComponent({

    template: `
    <div id="i"></div>
            <header class="username-info">
    <button type="button" aria-label="Back to all chats">&lt;</button>
    <address >
        <a href="users/username-1/username-1.html" >
            <img src="users/username-1/username-1.png" alt="username1 avatar">
            <h1><span class="visually-hidden">Chat with</span> Username 1</h1>
        </a>
    </address>
    <button type="button" aria-label="Other options">...</button>
</header>`,
  })

let Input = defineComponent({

    template: `
            <article class="messaging-1">
    <label for="textarea">Enter your message to send</label>
    <textarea
        name="textarea"
        id="textarea"

        placeholder="Enter message"
    ></textarea>
    <button class="btn" type="submit" id="submit" aria-label="Send message">Send</button>
    <button class="btn" type="button" id="attach" aria-label="Attach a file">Attach</button>
    <button class="btn" type="button" id="record" aria-label="Record your voice">Record</button>
</article>`,
  })
let MidSection = defineComponent({

    template: `
            <article class="middle-part"></article>`,
  })

let Message = defineComponent({

    template: `
           <article id="#1" class="messaging-body-1">
    <address>
        <a href="users/username-1/username-1.html">
            <img src="users/username-1/username-1.png" alt="Username 1 avatar">
        </a>
    </address>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste culpa, in itaque blanditiis ex totamasperiores aliquid!</p>
    <time pubdate >12:30</time>
</article>`,
  })
let MessageRight = defineComponent({

    template: `
            <article id="#1" class="messaging-body-2">
    <address>
        <a href="users/username-1/username-1.html">
            <img src="users/username-1/username-1.png" alt="Username 1 avatar">
        </a>
    </address>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste culpa, in itaque blanditiis ex totamasperiores aliquid!</p>
    <time pubdate >12:30</time>
</article>`,
  })

  let EntirePage = defineComponent({
    components:{Header,Input,Message,MessageRight,MidSection},
    template: '<article class="entire-page-1"><Header></Header><Midsection><Message></message><MessageRight></messageRight><Message></message><Message></message><MessageRight></messageRight><Message></message></Midsection><Input></article>',
  })


let app = createApp({
    components:{Header,EntirePage,Input,Message,MessageRight,MidSection},
   template: `
   <EntirePage></EntirePage>`
})

app.mount('#app')
