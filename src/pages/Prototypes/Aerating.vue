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
          :class="{ 'btn-delete': $vuetify.breakpoint.xs }"
        >
          Delete Selected Rows
          <v-icon dark right> mdi-delete </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          large
          color="primary"
          @click="addDialog = true"
          :class="{ 'btn-add': $vuetify.breakpoint.xs }"
        >
          Add New Activity
          <v-icon dark right> mdi-plus </v-icon>
        </v-btn>
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
        :items-per-page="5"
        item-key="id"
        multi-sort
        show-select
        :single-select="false"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
          itemsPerPageOptions: [5, 10, 20, -1],
        }"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="
              itemInEdit = item;
              editDialog = true;
            "
          >
            mdi-pencil
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <!-- edit dialog -->
    <v-dialog v-model="editDialog">
      <v-card>
        <v-toolbar flat color="primary" dark class="d-flex justify-center">
          <v-toolbar-title>Edit Aerating Activity</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-form ref="editForm">
              <v-row align="center" class="mt-2">
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="itemInEdit.date"
                    label="Date"
                    prepend-icon="mdi-calendar-blank"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="4">
                  <v-text-field
                    v-model="itemInEdit.field"
                    label="Field Number"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="4">
                  <v-text-field
                    v-model="itemInEdit.row"
                    label="Row Number"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" text @click="editDialog = false">
            Cancel
          </v-btn>

          <v-btn color="blue darken-1" text @click="editDialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- add dialog -->
    <v-dialog v-model="addDialog">
      <v-card>
        <v-toolbar flat color="primary" dark class="d-flex justify-center">
          <v-toolbar-title>Add New Aerating Activity</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-form ref="addForm">
              <v-row align="center" class="mt-2">
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="numOfRow"
                    label="Number of Rows to add"
                    type="number"
                    min="1"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row
                align="center"
                class="mt-2 form-row"
                v-for="n in 3"
                :key="n"
              >
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="itemInEdit.date"
                    label="Date"
                    prepend-icon="mdi-calendar-blank"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="4">
                  <v-text-field
                    v-model="itemInEdit.field"
                    label="Field Number"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="4">
                  <v-text-field
                    v-model="itemInEdit.row"
                    label="Row Number"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" text @click="addDialog = false">
            Cancel
          </v-btn>

          <v-btn color="blue darken-1" text @click="addDialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
          text: "Edit",
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
      editDialog: false,
      itemInEdit: { id: null, date: null, field: null, row: null },
      addDialog: false,
      numOfRow: 1,
      sortBy: "date",
      sortDesc: true,
    };
  },
};
</script>

<style scoped>
.btn-delete {
  margin-bottom: 10px;
  width: 100%;
}

.btn-add {
  margin-bottom: 10px;
  width: 100%;
}

.form-row {
  background-color: rgb(240, 255, 242);
  margin-bottom: 10px;
}
</style>
