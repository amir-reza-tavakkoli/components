import { createApp, defineComponent } from './vue.js'

let Header = defineComponent({
    template: `
        <div id="i"></div>
        <header class="username-info" aria-label="Chat info">
            <button type="button" aria-label="Back to all chats">
                <svg role="presentation" x="0px" y="0px"
                viewBox="0 0 219.151 219.151" style="enable-background:new 0 0 219.151 219.151;" >
                    <g>
                        <path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575
                        C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575
                        c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"/>
                        <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008
                        c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825
                        c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628
                        c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"/>
                    </g>
                </svg>
            </button>
            <address>
                <h1 class="visually-hidden">Chat with username 1</h1>
                <a href="users/username-1/username-1.html" aria-label="Go to username1 profile">
                    <img src="users/username-1/username-1.png" alt="username1 avatar" aria-label="Go to username1 avatar">
                    <p><span id="k">Username 1<span></p>
                </a>
            </address>
            <button type="button" aria-label="Other options">
                <svg x="0px" y="0px" role="presentation" id="l"
                style="enable-background:new 0 0 32.055 32.055;" >
                    <g>
	                <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
		        C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
		        s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
		        c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                    </g>
                </svg>
            </button>
        </header>
    `,
})

let Input = defineComponent({
    template: `
        <div id="j" role="presentation"></div>
        <article class="messaging-1" aria-label="Enter and send your message">
            <h2 class="visually-hidden">Enter your message to send</h2>
            <label for="textarea" class="visually-hidden">Enter your message to send</label>
            <textarea name="textarea" id="textarea" placeholder="Enter message">
            </textarea>
            <button class="btn" type="submit" id="submit" aria-label="Send message">Send</button>
            <button class="btn" type="button" id="attach" aria-label="Attach a file">Attach</button>
            <button class="btn" type="button" id="record" aria-label="Record your voice">Record</button>
        </article>
    `,
})

let MidSection = defineComponent({
    template: `
        <article class="middle-part" aria-live="polite"></article>
    `,
})

let Message = defineComponent({
    template: `
        <article id="#1" class="messaging-body-1" aria-label="Message from username1 at 12:30 on @date">
            <h2 class="visually-hidden">Message form username1
            </h2>
            <address aria-label="username 1 profile">
                <a href="users/username-1/username-1.html">
                    <img src="users/username-1/username-1.png" alt="Username 1 avatar">
                </a>
                <p>Username-1 </p>
            </address>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste culpa, in itaque blanditiis ex totamasperiores aliquid!</p>
            <time pubdate >12:30</time>
        </article>
    `,
})

let MessageRight = defineComponent({
    template: `
        <article id="#1" class="messaging-body-2" aria-label="Already sent message from you at 12:30 on @date">
            <h2 class="visually-hidden">Message sent from you
            </h2>
            <address aria-label="your profile">
                <a href="users/username-2/username-2.html">
                    <img src="users/username-2/username-2.png" alt="Your avatar">
                </a>
                <p>You </p>
            </address>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste culpa, in itaque blanditiis ex totamasperiores aliquid!</p>
            <time pubdate >12:30</time>
        </article>
    `,
})

let EntirePage = defineComponent({
    components: { Header, Input, Message, MessageRight, MidSection },
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
        </article>
    `,
})

let app = createApp({
	components: { EntirePage },
 	template: `
        	<EntirePage></EntirePage>
	`,
})

app.mount('#app')
