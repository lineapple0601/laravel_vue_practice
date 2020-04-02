<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">自己管理ツール</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link class="nav-link" :to="{ name: 'report-page' }" style="padding:0;">レポート</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="nav-link" :to="{ name: 'form-page' }" style="padding:0;">記録</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>