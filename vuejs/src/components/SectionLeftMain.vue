<template>
    <section class="main-container-left">
        <h2>Top Stories</h2>
        <div class="border-subheading"></div>
        <div class="container-top-left">
            <article>
                <img src="images/top-left.jpg" />

                <div>
                    <h3>Best Used Cars Under $20, 000 for families</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis ea sint, nisi rem earum fugit? Facere veritatis
                        sapiente eveniet quibusdam.
                    </p>

                    <router-link to="/detail">Read More <span>>></span></router-link>
                </div>
            </article>
        </div>
        <SectionBottom />

    </section>
</template>

<script>
import SectionBottom from './SectionBottom.vue';
export default {
    components: {
        SectionBottom
    }
}
</script>