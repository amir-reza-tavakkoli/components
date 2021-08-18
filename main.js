import { createApp } from './packages/vue.js'
import { ChatPage } from './components/chat/chat-page.js'

let app = createApp({
    components: { ChatPage },
    template: `
        <ChatPage></ChatPage>
    `,
})

app.mount('#app')
