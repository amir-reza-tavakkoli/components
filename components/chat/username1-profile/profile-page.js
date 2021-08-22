import { defineComponent } from '../../../packages/vue.js'
import { UserInfo } from './user-info.js'
import { UserRelated } from './user-related.js'
import { UserSign } from './user-sign.js'
import { UserNotify } from './user-notify.js'

export let ProfilePage = defineComponent({
    components: { UserInfo, UserRelated, UserSign, UserNotify },
    template: `
        <article class="profile-page" aria-label="Username1 profile page">
            <UserSign></UserSign>
            <UserInfo></UserInfo>
            <UserNotify></UserNotify>
            <UserRelated><UserRelated>
        </article>
    `,
})
