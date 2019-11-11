<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Sign Up</v-toolbar-title>
                <v-spacer />
                <!-- <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      href="https://codepen.io/johnjleider/pen/pMvGQO"
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>-->
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    name="username"
                    :rules="rules"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    :rules="rules"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
                <ul v-for="(error, index) in errors.username" :key="index">
                  <li>Username: {{ error }}</li>
                </ul>
                <ul v-for="(error, index) in errors.password" :key="index">
                  <li>Password: {{ error }}</li>
                </ul>
                <ul v-if="response !== null">
                  <li>Fun Fact: This password has been breached online {{ breaches }} times!</li>
                  <li>
                    <strong>
                      Status:
                      <u>{{ status }}</u>
                    </strong>
                  </li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <div style="margin: 1em; font-size: 10px">
                  Disclaimer: The registration does not work yet. If you see
                  the status as 'success', then if you had actually registered
                  it would've gone through. If you see 'failed', try again!
                </div>
                <v-spacer />
                <v-btn color="primary" @click="register">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  props: {
    source: String
  },

  data: () => ({
    status: "",
    response: null,
    errors: {},
    breaches: 0,
    rules: [
      v => !!v || "field is required",
      v => (v || "").indexOf(" ") < 0 || "No spaces are allowed"
    ]
  }),

  methods: {
    test() {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        // eslint-disable-next-line
        console.log(response);
      });
    },
    async register() {
      await axios
        .post("https://api.seriousandprogamers.com/register", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          this.response = response.data;
          this.errors = this.response.errors;
          this.breaches = this.response.password_breaches;
          this.status = this.response.status;
        })
        .catch(e => {
          this.response = e.response.data;
          this.errors = this.response.errors;
          this.breaches = this.response.password_breaches;
          this.status = this.response.status;
        });
    }
  }
};
</script>