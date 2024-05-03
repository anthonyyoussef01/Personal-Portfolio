<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/30884253?v=4',
    name: 'Anthony Elkommos Youssef',
    title: 'SWE',
    links: [
      { icon: 'github', link: 'https://github.com/anthonyyoussef01' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/anthony-elkommos' }
    ]
  },
]
</script>

# How do you contact me?

Say hello!

<VPTeamMembers size="small" :members="members" />