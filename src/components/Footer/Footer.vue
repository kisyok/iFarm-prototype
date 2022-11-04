<template>
  <div>
    <v-footer class="px-0 mt-10" color="transparent">
      <v-row no-gutters>
        <div>
          <v-btn
            v-for="link in links"
            :key="link.link"
            color="primary"
            text
            :href="link.link"
            class="text-capitalize ml-1 font-weight-regular"
          >
            {{ link.text }}
          </v-btn>
        </div>
        <div v-if="this.online">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            :href="icon.link"
            class="mr-1"
            :color="config.light.textColor"
            icon
          >
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-footer>
    <v-divider></v-divider>
    <v-row no-gutters class="justify-center mt-3">
      <div>
        <p class="font-weight-light">
          iLab &copy; Copyright 2022 All Rights Reserved.
        </p>
      </div>
    </v-row>
  </div>
</template>

<script>
import config from "../../config";

export default {
  name: "Footer",

  data: () => ({
    config,
    online: null,
    icons: [
      { icon: "mdi-facebook", link: "https://twitter.com/flatlogic/" },
      { icon: "mdi-twitter", link: "https://www.facebook.com/flatlogic" },
      { icon: "mdi-whatsapp", link: "https://github.com/flatlogic/" },
    ],
    links: [
      { text: "About Us", link: "https://flatlogic.com/" },
      { text: "Contact Us", link: "https://flatlogic.com/about" },
      { text: "FAQ", link: "https://flatlogic.com/blog" },
    ],
  }),
  mounted() {
    this.online = this.$store.state.online;
  }
};
</script>

<style src="./Footer.scss" lang="scss" />
