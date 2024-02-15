<template>
  <div class="cakes">
    <h1>{{ cakes.title }}</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeRabbit.png" class="card-img-top" alt="rabbitcake">
          <div class="card-body">
            <h5 class="card-title">하트 토끼 케이크</h5>
            <p class="card-text">32,000{{ cakes.pay }}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              {{ cakes.order }}
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeFlower.png" class="card-img-top" alt="flowercake">
          <div class="card-body">
            <h5 class="card-title">데이지 케이크</h5>
            <p class="card-text">42,000{{ cakes.pay }}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary" data-bs-target="#exampleModal">
              {{ cakes.order }}
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeLettering.png" class="card-img-top" alt="letteringcake">
          <div class="card-body">
            <h5 class="card-title">레터링 케이크</h5>
            <p class="card-text">23,000{{ cakes.pay }}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary" data-bs-target="#exampleModal">
              {{ cakes.order }}
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeLotto.png" class="card-img-top" alt="lottocake">
          <div class="card-body">
            <h5 class="card-title">로또 떡 케이크</h5>
            <p class="card-text">88,000{{ cakes.pay }}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary" data-bs-target="#exampleModal">
              {{ cakes.order }}
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeStation.png" class="card-img-top" alt="stationcake">
          <div class="card-body">
            <h5 class="card-title">환갑 지하철역 케이크</h5>
            <p class="card-text">68,000{{ cakes.pay }}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary" data-bs-target="#exampleModal">
              {{ cakes.order }}
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/images/cakeFriend.png" class="card-img-top" alt="friendcake">
          <div class="card-body">
            <h5 class="card-title">죽마고우 케이크</h5>
            <p class="card-text">56,000{{ cakes.pay }}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary" data-bs-target="#exampleModal">
              {{ cakes.order }}
            </button>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">상세 보기</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="card_list mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../assets/images/cakeRabbit.png" class="img-fluid rounded-start" alt="cake">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">하트 토끼 {{ cakes.name }}</h5>
                  <h6 class="card-title">32,000{{ cakes.pay }}</h6>
                  <p class="card-text">러블리한 토끼 케이크 당근맛이나요!</p>
                  <p class="card-text"><small class="text-muted">방문 픽업만 가능합니다.<br>배달을 원하실 경우 추가요금이 부과됩니다.</small></p>
                  <router-link to="/cart"><button type="button" class="btn btn-outline-dark"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">장바구니</font></font></button></router-link>
                </div>
              </div>
            </div>
          </div>
            <div class="modal-body">
              한정 수량 제작으로 소진 시 빨리 마감이 될 수 있습니다!
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
              <button type="button" class="btn btn-primary">주문</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const cakes = {
      title: "케잌 종류",
      pay: "원",
      order: "주문하기",
      name: "케이크"
    };

    return { cakes };
  },
};
</script>

<style>
.cakes { 
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