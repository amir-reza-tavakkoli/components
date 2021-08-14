import { createApp,defineComponent  } from './vue.js'


let Header = defineComponent({

    template: `

    <div id="i" role="presentation"></div>
    <header class="username-info" aria-label="Chat info">
        <button type="button" aria-label="Back to all chats"><img src="back.svg" alt="Back to all chats" role="presentation">
        </button>
        <address >
            <a href="users/username-1/username-1.html" aria-label="Go to username1 profile">
                <img src="users/username-1/username-1.png" alt="username1 avatar" aria-label="Go to username1 avatar">
                <h1><span class="visually-hidden">Chat with</span><span id="k"> Username 1</span></h1>
            </a>
        </address>
        <button type="button" aria-label="Other options"><img src="threedots.svg" alt="Other options" role="presentation"></button>
    </header>`,
  })

let Input = defineComponent({

    template: `
    <div id="j" role="presentation"></div>
    <article class="messaging-1" aria-label="Enter and send your message">
        <h2 class="visually-hidden">Enter your message in textarea</h2>
        <label for="textarea" class="visually-hidden">Enter your message to send</label>
        <textarea
        name="textarea"
        id="textarea"
        placeholder="Enter message">
        </textarea>
        <button class="btn" type="submit" id="submit" aria-label="Send message">Send</button>
        <button class="btn" type="button" id="attach" aria-label="Attach a file">Attach</button>
        <button class="btn" type="button" id="record" aria-label="Record your voice">Record</button>
    </article>`,
  })
let MidSection = defineComponent({

    template: `
            <article class="middle-part" role="presentation" aria-live="polite"></article>`,
  })

let Message = defineComponent({

    template: `
        <article id="#1" class="messaging-body-1" aria-label="Message from username1 at 12:30 on @date">
            <h3 class="visually-hidden">Message form username1</h3>
            <address aria-label="username 1 profile">
                <a href="users/username-1/username-1.html">
                    <img src="users/username-1/username-1.png" alt="Username 1 avatar">
                </a>
                <p>Username-1 </p>
            </address>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste culpa, in itaque blanditiis ex totamasperiores aliquid!</p>
            <time pubdate >12:30</time>
    </article>`,
  })
let MessageRight = defineComponent({

    template: `
        <article id="#1" class="messaging-body-2" aria-label="Already sent message from you at 12:30 on @date">
            <address aria-label="your profile">
                <a href="users/username-2/username-2.html">
                    <img src="users/username-2/username-2.png" alt="Username 2 avatar">

                </a>
                <p>You </p>
            </address>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste culpa, in itaque blanditiis ex totamasperiores aliquid!</p>
            <time pubdate >12:30</time>
        </article>`,
  })

  let EntirePage = defineComponent({
    components:{Header,Input,Message,MessageRight,MidSection},
    template: `
    <article class="entire-page-1">
        <Header></Header>
        <Midsection>
            <Message></message>
            <MessageRight></messageRight>
            <Message></message>
            <Message></message>
            <MessageRight></messageRight>
            <Message></message>
        </Midsection>
        <Input></Input>
        </article>`,
  })


let app = createApp({
    components:{Header,EntirePage,Input,Message,MessageRight,MidSection},
   template: `
   <EntirePage></EntirePage>`
})

app.mount('#app')