<template>
  <div>
    <v-card class="my-3">
      <v-card-title>
        Aerating
        <v-spacer></v-spacer>
        <v-btn
          large
          color="error"
          @click="openForm()"
          v-if="selected.length !== 0"
        >
          Delete Selected Rows
          <v-icon
            dark
            right
          >
            mdi-delete
          </v-icon>
          </v-btn
        >
        <v-spacer></v-spacer>
        <v-btn large color="primary" @click="openForm()">
          Add New Activity
          <v-icon
            dark
            right
          >
            mdi-plus
          </v-icon>
          </v-btn
        >
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-model="selected"
        :headers="headersItems"
        :items="listItems"
        :search="search"
        :items-per-page="10"
        item-key="id"
        multi-sort
        show-select
        :single-select="false"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
          itemsPerPageOptions: [10, 20, -1],
        }"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      headersItems: [
        {
          text: "Date",
          align: "start",
          sortable: true,
          value: "date",
        },
        {
          text: "Field",
          value: "field",
          sortable: true,
        },
        {
          text: "Row",
          value: "row",
          sortable: true,
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
        },
      ],
      listItems: [
        {
          id: 1,
          date: "28/10/2022",
          field: "1",
          row: "1",
        },
        {
          id: 2,
          date: "28/10/2022",
          field: "2",
          row: "2",
        },
        {
          id: 3,
          date: "28/10/2022",
          field: "3",
          row: "3",
        },
        {
          id: 4,
          date: "29/10/2022",
          field: "4",
          row: "4",
        },
        {
          id: 5,
          date: "29/10/2022",
          field: "5",
          row: "5",
        },
      ],
      search: "",
    };
  },
  methods: {
    openForm() {
      console.log();
    },
  },
};
</script>

<style></style>
