import { defineComponent } from '../../packages/vue.js'
import { ChatForm } from './chat-form.js'
import { ChatHeader } from './chat-header.js'
import { ChatHistory } from './chat-history.js'
import { ChatMessage, ChatMessageRight } from './chat-message.js'

export let ChatPage = defineComponent({
    components: { ChatHeader, ChatForm, ChatMessage, ChatMessageRight, ChatHistory },
    template: `
        <article class="chat-page">
            <ChatHeader></ChatHeader>
            <ChatHistory></ChatHistory>
                <ChatMessage></Chatmessage>
                <ChatMessageRight></ChatmessageRight>
                <ChatMessage></Chatmessage>
                <ChatMessage></Chatmessage>
                <ChatMessageRight></ChatmessageRight>
                <ChatMessage></Chatmessage>

            <ChatForm></ChatForm>
        </article>
    `,
})
