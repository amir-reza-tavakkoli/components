import { defineComponent } from '../../../packages/vue.js'
import { TopMenu } from './top-menu.js'
import { SecondaryMenu } from './secondary-menu.js'
export let MainPage = defineComponent({
    components: { TopMenu,SecondaryMenu  },
    template: `
    <TopMenu></TopMenu><SecondaryMenu></SecondaryMenu>

    `,
})
