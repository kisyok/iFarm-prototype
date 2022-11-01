<template>
    <div>
        <v-card class="mt-2">
          <v-toolbar flat color="#d6ec78" light class="d-flex justify-center">
            <v-toolbar-title>Add New Other Activity</v-toolbar-title>
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
                  <v-col cols="6" sm="3">
                    <v-text-field
                      v-model="itemInEdit.date"
                      label="Date"
                      prepend-icon="mdi-calendar-blank"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      v-model="itemInEdit.remarks"
                      label="Remarks"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-text-field
                      v-model="itemInEdit.field"
                      label="Field Number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="3">
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
            text: "Remarks",
            value: "remarks",
            sortable: false,
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
            remarks: "Make a scarecrow",
            field: "1",
            row: "1",
          },
          {
            id: 2,
            date: "28/10/2022",
            remarks: "Make a scarecrow",
            field: "2",
            row: "2",
          },
          {
            id: 3,
            date: "28/10/2022",
            remarks: "Make a scarecrow",
            field: "3",
            row: "3",
          },
          {
            id: 4,
            date: "29/10/2022",
            remarks: "Make a scarecrow",
            field: "4",
            row: "4",
          },
          {
            id: 5,
            date: "29/10/2022",
            remarks: "Make a scarecrow",
            field: "5",
            row: "5",
          },
        ],
        search: "",
        editDialog: false,
        itemInEdit: {
          id: null,
          date: null,
          remarks: null,
          field: null,
          row: null,
        },
        addDialog: false,
        numOfRow: 3,
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
  