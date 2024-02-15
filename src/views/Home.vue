<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeRabbit.png" class="card-img-top" alt="rabbitcake">
          <div class="card-body">
            <h5 class="card-title">하트 토끼 케이크</h5>
            <p class="card-text">32,000{{ pay }}</p>
            <span class="badge bg-success"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">주문 폭주</font></font></span>&nbsp;
            <span class="badge bg-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">인기</font></font></span>&nbsp;
            <span class="badge bg-warning"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">추천</font></font></span>&nbsp;
            <span class="badge bg-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">신상품</font></font></span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeFlower.png" class="card-img-top" alt="flowercake">
          <div class="card-body">
            <h5 class="card-title">데이지 케이크</h5>
            <p class="card-text">42,000{{ pay }}</p>
            <span class="badge bg-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">인기</font></font></span>&nbsp;
            <span class="badge bg-warning"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">추천</font></font></span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeLettering.png" class="card-img-top" alt="letteringcake">
          <div class="card-body">
            <h5 class="card-title">레터링 케이크</h5>
            <p class="card-text">23,000{{ pay }}</p>
            <span class="badge bg-warning"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">추천</font></font></span>&nbsp;
            <span class="badge bg-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">신상품</font></font></span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeLotto.png" class="card-img-top" alt="lottocake">
          <div class="card-body">
            <h5 class="card-title">로또 떡 케이크</h5>
            <p class="card-text">88,000{{ pay }}</p>
            <span class="badge bg-success"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">주문 폭주</font></font></span>&nbsp;
            <span class="badge bg-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">인기</font></font></span>&nbsp;
            <span class="badge bg-warning"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">추천</font></font></span>&nbsp;
            <span class="badge bg-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">신상품</font></font></span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeStation.png" class="card-img-top" alt="stationcake">
          <div class="card-body">
            <h5 class="card-title">환갑 지하철역 케이크</h5>
            <p class="card-text">68,000{{ pay }}</p>
            <span class="badge bg-success"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">주문 폭주</font></font></span>&nbsp;
            <span class="badge bg-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">인기</font></font></span>&nbsp;
            <span class="badge bg-warning"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">추천</font></font></span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeFriend.png" class="card-img-top" alt="friendcake">
          <div class="card-body">
            <h5 class="card-title">죽마고우 케이크</h5>
            <p class="card-text">56,000{{ pay }}</p>
            <span class="badge bg-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">인기</font></font></span>&nbsp;
            <span class="badge bg-warning"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">추천</font></font></span>&nbsp;
            <span class="badge bg-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">신상품</font></font></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref("감성과 진심을 담은 케이크, JAY EAT CAKE을 소개합니다.");
    const pay = ref("원");

    return {
      msg,
      pay
    };
  },
};
</script>

<style>
.home { 
  margin: 3% 0 3% 0;
}

.card-img-top {
  margin-top: 5%;
  width: auto;
  height: 330px;
  object-fit: scale-down;
}

.badges {
  word-spacing: 20px;
}
</style>