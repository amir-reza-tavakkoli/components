import { defineComponent } from '../../packages/vue.js'
import { ChatMessage, ChatMessageRight } from './chat-message.js'

export let ChatHistory = defineComponent({
    components: { ChatMessage, ChatMessageRight },
    template: `
        <article class="chat-history" aria-live="polite" tabindex="0" aria-label="Chat history and new messages">
            <ChatMessage></Chatmessage>
            <ChatMessageRight></ChatmessageRight>
            <ChatMessage></Chatmessage>
            <ChatMessage></Chatmessage>
            <ChatMessageRight></ChatmessageRight>
            <ChatMessage></Chatmessage>
        </article>
    `,
})
