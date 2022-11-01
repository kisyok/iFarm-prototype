<template>
  <v-app-bar class="main-header" height="64" fixed color="primary" dark>
    <v-btn icon class="mx-1" @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon style="font-size: 28px">mdi-arrow-left</v-icon>
      </template>
      <template v-else>
        <v-icon style="font-size: 28px">mdi-menu</v-icon>
      </template>
    </v-btn>
    <v-toolbar-title>iFarm</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn
      class="ma-2 white--text"
      outlined
    >
      Sync
      <v-icon dark right> mdi-autorenew </v-icon>
    </v-btn>

    <!-- <v-menu max-width="280" offset-y bottom nudge-bottom="10" left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          @click="messageBadge ? (messageBadge = !messageBadge) : ''"
          v-bind="attrs"
          v-on="on"
          style="font-size: 28px"
          icon
          class="mr-2"
        >
          <v-badge :value="messageBadge" color="warning" content="3" overlap>
            <v-icon :color="config.light.iconColor" style="font-size: 28px">
              mdi-file-document-check-outline</v-icon
            >
          </v-badge>
        </v-btn>
      </template>
      <v-list>
        <div class="text-h5 grey--text text--darken-3 px-4 pt-4 text-center">
          Planned Tasks
        </div>
        <div
          class="subtitle-2 error--text font-weight-regular px-4 pb-2 link-item text-center"
        >
          2 unfinished tasks today
        </div>
        <v-divider></v-divider>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in messages" :key="i">
            <v-list-item-icon class="mr-4 mb-1 d-flex flex-column">
              <v-btn fab x-small depressed :color="item.color"
                >{{ item.text }}
              </v-btn>
              <div style="font-size: 11px">{{ item.time }}</div>
            </v-list-item-icon>
            <v-list-item two-line>
              <v-list-item-content style="width: 190px">
                <v-list-item-title
                  v-text="item.name"
                  class="pb-2"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.message"
                  class="text-truncate"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item>
        </v-list-item-group>
        <div class="d-flex justify-center my-3">
          <v-btn
            large
            color="primary"
            rounded
            elevation="5"
            class="text-capitalize"
          >
            View All
          </v-btn>
        </div>
      </v-list>
    </v-menu>

    <v-menu offset-y bottom nudge-bottom="10" left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          @click="
            notificationsBadge ? (notificationsBadge = !notificationsBadge) : ''
          "
          v-bind="attrs"
          v-on="on"
          style="font-size: 28px"
          icon
          class="mr-2"
        >
          <v-badge
            :value="notificationsBadge"
            color="error"
            content="4"
            overlap
          >
            <v-icon style="font-size: 28px" :color="config.light.iconColor"
              >mdi-cart-outline</v-icon
            >
          </v-badge>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in notifications" :key="i">
            <v-list-item-icon class="mr-4 mb-1">
              <v-icon :color="item.color" v-text="item.icon"> </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-menu min-width="180" offset-y bottom left nudge-bottom="10">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-0" icon v-bind="attrs" v-on="on">
          <v-icon style="font-size: 28px" :color="config.light.iconColor"
            >mdi-account</v-icon
          >
        </v-btn>
      </template>
      <v-list>
        <div
          class="text-h5 grey--text text--darken-3 px-4 pt-4 text-center mb-2"
        >
          Rahman
        </div>
        <v-divider></v-divider>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in account" :key="i">
            <v-list-item-icon class="mr-4">
              <v-icon :color="item.color" v-text="item.icon"> </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                :color="config.light.textColor"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <div class="d-flex justify-center my-3">
          <v-btn
            width="80%"
            large
            outlined
            color="primary"
            class="text-capitalize"
            @click="logOut"
            >Sign Out
          </v-btn>
        </div>
      </v-list>
    </v-menu>

    <v-menu max-width="280" offset-y bottom nudge-bottom="10" left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          style="font-size: 28px"
          icon
          class="mr-2 text-body-2 ml-5"
        >
          ENG
          <v-icon :color="config.light.iconColor" style="font-size: 28px">
            mdi-chevron-down</v-icon
          >
        </v-btn>
      </template>
    </v-menu> -->
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";
import config from "../../config";

export default {
  name: "Header",
  data: () => ({
    config,
    searchCollapse: true,
    notifications: [
      {
        text: "Check out this awesome ticket",
        icon: "mdi-tag",
        color: "warning",
      },
      {
        text: "What is the best way to get ...",
        icon: "mdi-thumb-up",
        color: "success",
      },
      {
        text: "This is just a simple notification",
        icon: "mdi-flag",
        color: "error",
      },
      {
        text: "12 new orders has arrived today",
        icon: "mdi-cart",
        color: "primary",
      },
    ],
    messages: [
      {
        text: "JN",
        name: "Watering",
        message: "Water okra plants...",
        time: "09:30",
        color: "success",
      },
      {
        text: "LN",
        name: "Planting",
        message: "Plant brinjal...",
        time: "11:00",
        color: "warning",
      },
    ],
    account: [
      { text: "Profile", icon: "mdi-account", color: "textColor" },
      { text: "Settings", icon: "mdi-cog-outline", color: "textColor" },
    ],
    notificationsBadge: true,
    messageBadge: true,
  }),
  computed: {
    ...mapState(["drawer"]),
    DRAWER_STATE: {
      get() {
        return this.drawer;
      },
    },
  },
  methods: {
    ...mapActions(["TOGGLE_DRAWER"]),
    logOut: function () {
      window.localStorage.setItem("authenticated", false);
      this.$router.push("/login");
    },
  },
};
</script>

<style src="./Header.scss" lang="scss"></style>
