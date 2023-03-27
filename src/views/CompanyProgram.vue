<template>
  <div class="container" style="min-height: 100vh;">
    <div class="columns" style="min-height: 100vh;">
      <div class="column is-3" style="background-color: #f8f8f8; min-height: 100vh;">
        <aside class="menu">
          <p class="menu-label">Navigation</p>
          <ul class="menu-list">
            <li><router-link :class="{ 'is-active': activeTab === 'info' }" @click="setActiveTab('info')" to="/company">ข้อมูลบริษัท</router-link></li>
            <li><router-link :class="{ 'is-active': activeTab === 'jobs' }" @click="setActiveTab('jobs')" to="/companyJob">งานที่ประกาศ</router-link></li>
            <li><router-link :class="{ 'is-active': activeTab === 'programs' }" @click="setActiveTab('programs')" to="/companyProgram">โครงการพิเศษ</router-link></li>
          </ul>
        </aside>
      </div>
      <div class="column is-9" style="background-color: #f1f1f1; min-height: 100vh;">
        <div class="card" style="min-height: 100vh;">
          <div class="card-content" style="min-height: 100vh;">
            <div class="content" style="min-height: 100vh;">
              <!-- About Us tab content -->
              <div v-show="activeTab === 'programs'" style="background-color: #fafafa; min-height: 100vh;">
                            <ul>
                              <li>โครงการพิเศษ 1</li>
                              <li>โครงการพิเศษ 2</li>
                              <li>โครงการพิเศษ 3</li>
                            </ul>
                          </div>
                          <!-- Services tab content -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
  <style>
  html, body {
    height: 100vh;
  }
  </style>
  <script>
  import 'bulma/css/bulma.css';
  
  export default {
    name: 'App',
    data() {
      return {
        activeTab: 'programs'
      }
    },
    methods: {
      setActiveTab(tab) {
        this.activeTab = tab;
      }
    }
  }
  </script>