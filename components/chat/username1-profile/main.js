import { createApp } from '../../../packages/vue.js'
import { ProfilePage } from './profile-page.js'

let app = createApp({
    components: { ProfilePage },
    template: `
        <ProfilePage></ProfilePage>
    `,
})

app.mount('#app')