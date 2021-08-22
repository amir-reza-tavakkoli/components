import { defineComponent } from '../../../packages/vue.js'

export let ChatInHome = defineComponent({
    template: `
        <article class="chat-in-home" aria-label="Chat with Username1">
            <a href="#">
                <img src="../../../users/username-1/username-1.png" alt="Username1 profile picture">
                <div>
                    <p>Username1</p>
                    <p>
                        <span class="nonvisual">Last message is: </span>Lrem Ipsum ...
                    </p>
                </div>
                <time>
                    <span class="nonvisual">Last message arrived at:</span>12:30PM
                </time>
                <p class="newly-arrived">
                    <span class="nonvisual">New unread messages:</span>8
                </p>
            </a>
        </article>
    `
})