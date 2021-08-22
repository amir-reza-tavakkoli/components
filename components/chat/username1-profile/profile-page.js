import { defineComponent } from '../../../packages/vue.js'
import { UserInfo } from './user-info.js'
import { UserRelated } from './user-related.js'
import { UserSign } from './user-sign.js'


export let ProfilePage = defineComponent({
    components: { UserInfo,UserRelated,UserSign },
    template: `

<UserSign></UserSign><UserInfo></UserInfo><UserRelated><UserRelated>
    `,
})
