import { defineComponent } from '../../packages/vue.js'

export let ChatMessage = defineComponent({
    template: `
        <article aria-atomic="true" id="#1" class="messaging-body-1" aria-label="Message from username1 at 12:30 on @date">
            <address aria-label="username 1 profile">
                <a href="users/username-1/username-1.html" tabindex="-1">
                    <img src="users/username-1/username-1.png" alt="Username 1 avatar">
                </a>
                <p>Username-1 </p>
            </address>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste culpa, in itaque blanditiis ex totamasperiores aliquid!</p>
            <time>12:30</time>
        </article>
    `,
})

export let ChatMessageRight = defineComponent({
    template: `
        <article id="#1" class="messaging-body-2" aria-label="Already sent message from you at 12:30 on @date">
            <address aria-label="your profile">
                <a tabindex="-1" href="users/username-2/username-2.html">
                    <img src="users/username-2/username-2.png" alt="Your avatar">
                </a>
                <p>You </p>
            </address>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste culpa, in itaque blanditiis ex totamasperiores aliquid!</p>
            <time>12:30</time>
        </article>
    `,
})
