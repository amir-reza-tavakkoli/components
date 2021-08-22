import { defineComponent } from '../../packages/vue.js'
import { ChatMessage } from './chat-message.js'

export let ChatHistory = defineComponent({
    components: { ChatMessage },
    template: `
        <article class="chat-history" aria-live="polite" tabindex="0" aria-label="Chat history and new messages">
            <ChatMessage></Chatmessage>
            <ChatMessage data-sender="self"></Chatmessage>
            <ChatMessage></Chatmessage>
        </article>
    `,
})
