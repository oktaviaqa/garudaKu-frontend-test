<template>
  <div>
    <Header />
    <!-- <p>Hello</p> -->
    <!-- <img v-for="data in news.data.posts" :key="data.link" :src=data.thumbnail> -->
    <!-- </div> -->
    <main>
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

              <a href="#">Read More <span>>></span></a>
            </div>
          </article>
        </div>

        <div class="container-bottom-left">
          <article>
            <img src="images/bottom-left-1.jpg" />
            <div>
              <h3>Best smart speakers for the year</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi iure modi animi cupiditate. Explicabo, nihil?
              </p>

              <a href="#">Read More <span>>></span></a>
            </div>
          </article>

          <article>
            <img src="images/bottom-left-2.jpg" />
            <div>
              <h3>
                iPad Pro, reviewed: Has the iPad become my main computer now?
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi iure modi animi cupiditate. Explicabo, nihil?
              </p>

              <a href="#">Read More <span>>></span></a>
            </div>
          </article>
        </div>
      </section>

      <section class="main-container-right">
        <h2>Latest Stories</h2>
        <div class="border-subheading"></div>

        <article>
          <h4>just in</h4>
          <div>
            <h2>
              Here's how to track your stimulus check with the IRS Get My
              Payment Portal
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">Read More <span>>></span></a>
          </div>
          <img src="images/right-1.jpg" />
        </article>

        <article>
          <h4>just in</h4>
          <div>
            <h2>The best outdoor games to play with your family</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">Read More <span>>></span></a>
          </div>
          <img src="images/right-2.jpg" />
        </article>

        <article>
          <h4>just in</h4>
          <div>
            <h2>
              Why walk? Check out the best electric scooters and e-bikes for
              2020
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">Read More <span>>></span></a>
          </div>
          <img src="images/right-3.jpg" />
        </article>

        <article>
          <h4>just in</h4>
          <div>
            <h2>
              Disneyland Paris will stream its Lion King stage show Friday night
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">Read More <span>>></span></a>
          </div>
          <img src="images/right-4.jpg" />
        </article>

        <article>
          <h4>just in</h4>
          <div>
            <h2>
              Looking at a phone's lock screen also requries a warrant, judge
              rules
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">Read More <span>>></span></a>
          </div>
          <img src="images/right-5.jpg" />
        </article>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    Header
  },
  computed: {
    ...mapState(['news'])
  },
  methods: {
    ...mapActions(['fetchNews'])
  },
  created() {
    this.fetchNews();
  }
};
</script>