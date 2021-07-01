<template>
    <div>
        <div>
            <b-button v-b-toggle.sidebar-right variant="info">
               <i class="el-icon-user"></i>
            </b-button>
            <b-sidebar id="sidebar-right" title="Contact" right shadow backdrop>
                <div class="px-3 py-2">
                    <ContentAboutMe />
                </div>
            </b-sidebar>
        </div>
    </div>
</template>

<script>
import ContentAboutMe from '@/components/ContentAboutMe'

export default {
    components: { ContentAboutMe },
}
</script>

