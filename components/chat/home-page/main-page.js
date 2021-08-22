import { defineComponent } from '../../../packages/vue.js'
import { TopMenu } from './top-menu.js'
import { SecondaryMenu } from './secondary-menu.js'
import { ChatInHome } from './chat-in-home.js'

export let MainPage = defineComponent({
    components: { TopMenu, SecondaryMenu, ChatInHome },
    template: `
        <TopMenu></TopMenu>
        <SecondaryMenu data-sender="hidden"></SecondaryMenu>
        <ChatInHome></ChatInHome>
        <ChatInHome></ChatInHome>
        <ChatInHome></ChatInHome>
    `,
})
