import { createApp } from '../packages/vue.js'
import { ChatMessage } from './chat-message.js'

let app = createApp({
    components: { ChatMessage },
    template: `
        <ChatMessage></ChatMessage>
    `,
})

app.mount('#app')