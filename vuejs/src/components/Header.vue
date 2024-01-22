<template>
    <header>
        <div class="navigation-container">
            <div class="top-head">
                <div class="web-name">
                    <span class="cnn-text">CNN</span>
                    <span class="indonesia-text"> Indonesia</span>
                </div>

                <div class="ham-btn">
                    <span>
                        <i class="fas fa-bars"></i>
                    </span>
                </div>

                <div class="times-btn">
                    <span>
                        <i class="fas fa-times"></i>
                    </span>
                </div>
            </div>

            <!-- nav bar -->
            <!-- <Navbar /> -->

        </div>
    </header>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    name: "Header",
    components: {
        Navbar
    }
}
</script>