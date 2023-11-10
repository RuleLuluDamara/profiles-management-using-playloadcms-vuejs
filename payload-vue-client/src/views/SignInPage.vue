<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Payload Ionic Vue</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container-sm">
        <h1 style="margin-left: 16px">Sign In</h1>
        <ion-list :inset="true">
          <form @submit.prevent="handleLogin">
            <ion-item>
              <ion-input v-model="email" name="email" label="Email" label-placement="stacked" type="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input v-model="password" name="password" label="Password" label-placement="stacked" type="password"></ion-input>
            </ion-item>
            <div class="ion-text-center">
              <ion-button expand="block" color="success" type="submit" fill="clear">Sign in</ion-button>
              <ion-button expand="block" color="success" type="button" fill="clear" @click="router.push('/signup')">Don't Have Account? Sign Up</ion-button>
            </div>
          </form>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonButton } from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  try {
    const resp = await fetch("http://localhost:3100/api/customers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message;
      throw new Error(errorMsg);
    }

    const user = await resp.json();
    console.log(user);
  } catch (error: any) {
    alert("Login Error: " + error.message);
  }
};
</script>

<style scoped></style>
