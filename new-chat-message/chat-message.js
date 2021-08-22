import { defineComponent } from '../packages/vue.js'

export let ChatMessage = defineComponent({

    template: `
    <article data-sender="other" class="chat-message" aria-label="Message from username1 at 12:30 on @date">
    <address aria-label="username 1 profile">
        <a href="../users/username-1/username-1.html" tabindex="-1">
            <img src="/users/username-1/username-1.png" alt="Username 1 avatar">
        </a>
        <p>Username</p>
    </address>
    <p>Lorem ipsum</p>
    <time>12:30</time>
</article>
<article
    id="#1"
    data-sender="self"
    class="chat-message"
    aria-label="Message from username1 at 12:30 on @date"
>
    <address aria-label="username 1 profile">
        <a href="../users/username-1/username-1.html" tabindex="-1">
            <img src="/users/username-1/username-1.png" alt="Username 1 avatar">
        </a>
        <p>Username</p>
    </address>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste culpa, in itaque blanditiis ex totamasperiores aliquid!</p>
    <time>12:30</time>
</article>
    `,
})
