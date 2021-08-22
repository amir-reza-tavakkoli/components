import { createApp } from '../../../packages/vue.js'
import { MainPage } from './main-page.js'

let app = createApp({
    components: { MainPage },
    template: `
        <MainPage></MainPage>
    `,
})

app.mount('#app')
