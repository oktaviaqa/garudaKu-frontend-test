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

            <div class="nav-bar" id="nav-bar">
                <nav>
                    <ul>
                        <li><a href="#">beranda</a></li>
                        <li><a href="#">nasional</a></li>
                        <li><a href="#">ekonomi</a></li>
                        <li><a href="#">keluarga</a></li>
                        <li><a href="#">teknologi</a></li>
                        <li><a href="#">gaya hidup</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>