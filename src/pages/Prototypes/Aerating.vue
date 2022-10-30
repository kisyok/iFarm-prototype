<template>
    <div>
      <!-- upcoming appointment -->
      <v-card class="my-3">
        <v-card-title>
          Upcoming Appointment(s)
          <v-spacer></v-spacer>
          <v-text-field
            v-model="searchUpcomingAppointment"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headersUpcomingAppointment"
          :items="listUpcomingAppointment"
          :search="searchUpcomingAppointment"
          :items-per-page="10"
          item-key="id"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus',
            itemsPerPageOptions: [10, 20, -1],
          }"
        >
          <template v-slot:[`item.date`]="{ item }">
            <span>{{ formattedDate(item.date) }}</span>
          </template>
          <template v-slot:[`item.time`]="{ item }">
            <span>{{ formattedTime(item.time) }}</span>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn
              class="ma-2 white--text"
              color="#FFCA28"
              @click="viewAppointment(item.id)"
            >
              View
              <v-icon dark right> mdi-eye-arrow-right-outline </v-icon>
            </v-btn>
            <v-btn
              class="ma-2 white--text"
              color="#BF9742"
              :disabled="
                item.status == 'Cancelled' ||
                item.status == 'Rejected' ||
                new Date() > getEndDateTime(item.date, item.time) ||
                new Date() < getStartDateTime(item.date, item.time)
              "
              @click="joinVideo(item.id)"
            >
              Join
              <v-icon dark right>mdi-video </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </template>
  
  <script>
  import { format, parseISO } from "date-fns";
  export default {
    data() {
      return {
        headersUpcomingAppointment: [
          {
            text: "Date",
            align: "start",
            sortable: true,
            value: "date",
          },
          {
            text: "Time",
            value: "time",
            sortable: false,
          },
          {
            text: "Patient",
            value: "Patient.full_name",
            sortable: false,
          },
          {
            text: "Status",
            value: "status",
            sortable: false,
          },
          {
            text: "Actions",
            value: "actions",
            sortable: false,
          },
        ],
        listUpcomingAppointment: [],
        searchUpcomingAppointment: "",
      };
    },
    methods: {
      formattedDate(date) {
        return format(parseISO(date), "dd/MM/yyyy");
      },
      formattedTime(data) {
        var time = String(data).split(":");
        var hours = parseInt(time[0]);
        var AmOrPm = hours >= 12 ? "pm" : "am";
        var minutes = time[1];
        hours = hours % 12 || 12;
        return String(hours) + ":" + minutes + " " + AmOrPm;
      },
    },
  };
  </script>
  
  <style></style>
  