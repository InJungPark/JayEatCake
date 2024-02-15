<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header id="header">
      <img alt="JAY EAT CAKE Logo" class="logo" src="@/assets/logo.svg"/>
      <nav>
        <RouterLink to="/">HOME<font-awesome-icon icon="fa-solid fa-store" /></RouterLink>
        <RouterLink to="/cakes">CAKES<font-awesome-icon icon="fa-solid fa-cake-candles" /></RouterLink>
        <RouterLink to="/order">ORDER<font-awesome-icon icon="fa-regular fa-clipboard" /></RouterLink>
        <RouterLink to="/cart">CART<font-awesome-icon icon="fa-solid fa-cart-shopping" /></RouterLink>
        <RouterLink to="/notice">NOTICE<font-awesome-icon icon="fa-regular fa-comments" /></RouterLink>
      </nav>
  </header>

  <RouterView />

  <footer id="footer">
    <div class="footer_section">
      <div class="footer_info">
        <p>상호: JayCompany | 대표: 박인정</p>
        <p>사업자 등록번호: 521-92-0419J | 개인정보관리책임자: 박인정</p>
        <p>TEL: 010-9186-3921 | E-mail : in.jung2066@gmail.com</p>
        <p>주소: 서울특별시 동작구 여의대방로 22아길 86 우성하이츠빌라 군밤이집 2호</p>
        <p>Copyright© Jay Eat Cake. All Rights Reserved.</p>
      </div>
      <div class="footer_term">
        <RouterLink to="/terms">이용약관</RouterLink>
        <RouterLink to="/privacy">개인정보처리방침</RouterLink>
        <RouterLink to="/refusal">이메일무단수집거부</RouterLink>
      </div>
    </div>
  </footer>

  <div id="scrollTop" @click="scrollToTop">
    <font-awesome-icon icon="fa-solid fa-angle-up" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showScrollTop: false,
    };
  },
  methods: {
    handleScroll() {
      this.showScrollTop = window.scrollY > 200; // Adjust based on scroll position
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    // Add Scroll Event Listener
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Remove the listener before the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
