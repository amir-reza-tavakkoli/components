

import { defineComponent } from '../../../packages/vue.js'

export let SecondaryMenu = defineComponent({
    template: `



       <nav class="secondary-nav" data-sender="reveal" aria-label="secondary navigation">
       <article class="user-sign">
           <img src="../users/username-1/username-1.png" alt="Your profile picture">
           <p>
               <span class="nonvisual">Your username is:</span>Username
           </p>
           <button type="button" aria-label="Choose account">
               <svg
                   role="presentation"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="feather feather-chevron-down"
               >
                   <polyline points="6 9 12 15 18 9"></polyline>
               </svg>
           </button>
           <p>
               <span class="nonvisual">Your phone number is:</span>+98 765 4321
           </p>
       </article>
       <ul>
           <li>
               <button type="button">
                   <span class="nonvisual">All your</span>Contacts
               </button>
           </li>
           <li>
               <button type="button">
                   <span class="nonvisual">Go to your</span>Saved messages
               </button>
           </li>
           <li>
               <button type="button">
                   <span class="nonvisual">Go to</span>Settings
               </button>
           </li>
           <li>
               <button type="button">Invite friends</button>
           </li>
           <li>
               <button type="button">Proxy
                   <span class="nonvisual">settings</span>
               </button>
           </li>
           <li>
               <button type="button">
                   <span class="nonvisual">Get</span>Help
               </button>
           </li>
           <li>
               <button type="button">
                   <span class="nonvisual">Activate</span>Night mode
               </button>
           </li>
       </ul>
   </nav>
   `,
})
