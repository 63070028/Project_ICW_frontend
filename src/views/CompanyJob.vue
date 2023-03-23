<template>
    <div class="container" style="min-height: 100vh;">
      <div class="columns" style="min-height: 100vh;">
        <div class="column is-8" style="min-height: 100vh;">
          <div class="card" style="min-height: 100vh;">
            <div class="card-content" style="min-height: 100vh;">
              <div class="content" style="min-height: 100vh;">
                <div class="columns" style="min-height: 100vh;">
                  <div class="column is-3" style="background-color: #f8f8f8; min-height: 100vh;">
                    <div class="menu">
                      <p class="menu-label">Navigation</p>
                        <p :class="{'button is-active ': activeTab === 'about'}" @click="setActiveTab('info')"><router-link to="/company">ข้อมูลบริษัท</router-link></p>
                        <p :class="{'button is-active': activeTab === 'products'}" @click="setActiveTab('jobs')"><router-link to="/companyJob">งานที่ประกาศ</router-link></p>
                        <p :class="{'button is-active': activeTab === 'services'}" @click="setActiveTab('programs')"><router-link to="/companyProgram">โครงการพิเศษ</router-link></p>
                    </div>
                  </div>
                  <div class="column is-9" style="background-color: #f1f1f1; min-height: 100vh;">
                    <div class="card" style="min-height: 100vh;">
                      <div class="card-content" style="min-height: 100vh;">
                        <div class="content" style="min-height: 100vh;">
                          <div v-show="activeTab === 'jobs'" style="background-color: #f6f6f6; min-height: 100vh;">
                            <h1 class="title">งานที่ประกาศ</h1>
                            <ul>
                              <li>ตำแหน่ง 1</li>
                              <li>ตำแหน่ง 2</li>
                              <li>ตำแหน่ง 3</li>
                            </ul>
                          </div>
                          <!-- Services tab content -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        activeTab: 'jobs'
      }
    },
    methods: {
      setActiveTab(tab) {
        this.activeTab = tab;
      }
    }
  }
  </script>