<template>
  <div class="app-container">
    <div class="machine-news">
      <div class="logo-machine-news">
        <router-link :to="{ name: 'home' }" class="link">
          <h1>Machine News</h1>
        </router-link>
      </div>
      <!-- <div class="navbar-machine-news" v-if="user.first_name"> -->
      <div class="navbar">
        <navbar />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer">
        <p>Copyright Ypper</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/shared/Navbar";
// import stateUser from '@/modules/user'
export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    //   const { getSite } = stateSite;
    //   const site = getSite();
    //   const { getUser } = stateUser
    //   const user = getUser()
    //   return {
    //     getSite,
    //     site,
    //     getUser,
    //     user
    //   };
  },
};
</script>

<style>
#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  width: 100%;
  height: 100%;
}
.app-container {
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
}

.machine-news {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  background-color: #efefef;
  min-height: 100vh;
}
.logo-machine-news {
  margin-top: 20px;
  cursor: pointer;
  grid-row: 1;
  grid-column: 2 / 5;
  text-decoration: none;
}
.logo-machine-news .link {
  text-decoration: none;
}
.logo-machine-news h1 {
  margin: 0;
  color: #a9a9a9;
}
.navbar {
  margin-top: 20px;
  grid-column: 5 / 12;
  grid-row: 1;
  justify-items: center;
  align-items: center;
}
.content {
  margin-top: 30px;
  grid-column: 2 / 12;
  grid-row: 2;
  overflow: auto;
}
.footer {
  grid-column: 1 / 13;
  grid-row: 3;
  color: #a9a9a9;
}
</style>
