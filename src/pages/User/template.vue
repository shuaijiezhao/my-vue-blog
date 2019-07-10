<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <div class="item" v-for="blog in blogs" :key="blog.id">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span>
          <span class="month">{{splitDate(blog.createdAt).month}}月</span>
          <span class="year">{{splitDate(blog.createdAt).year}}</span>
        </div>
        <h3><router-link :to="`/detail/${blog.id}`">{{blog.title}}</router-link></h3>
        <p>{{blog.description}}</p>
      </div>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style src="../My/template.less" lang="less"></style>
