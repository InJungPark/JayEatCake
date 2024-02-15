<template>
  <div class="notice">
    <h1>{{ notice.title }}</h1>
    <section>
      <h2>주문</h2>
      <ul>
        <li>주문을 원하시는 날짜의 최소 일주일 전에 주문을 해주시길 부탁드립니다.</li>
        <li>
          일일 제작 가능한 양이 한정되어 있어, 예상치 못한 마감 상황이 발생할 수 있습니다.
          <br>
          이에 대한 이해와 양해를 부탁드립니다.
        </li>
        <li>주문 제작 상품의 특성상, 제작 순서는 입금 순서대로 결정됩니다.</li>
      </ul>
    </section>

    <section>
      <h2>환불 규정</h2>
      <ul>
        <li>당일 100% 환불</li>
        <li>주문 다음날부터 ~ 픽업 5일전 50% 환불</li>
        <li>픽업 3일전 30% 환불</li>
        <li>픽업 2~1일전 환불 불가</li>
      </ul>
    </section>

    <section>
      <h2>배송 안내</h2>
      <p>JAY EAT CAKE에서는 픽업을 주된 서비스로 채택하고 있습니다.</p>
      <p>픽업이 어려우신 경우, 전문 배송업체를 통해 제품을 안전하게 전달해드립니다.</p>
      <ul>
        <li>배송 비용은 배송업체의 내규에 따라 선불로 진행됩니다.</li>
        <li>픽업 시간에 맞추어 퀵업체를 공방으로 보내주시는 것을 권장드립니다.</li>
        <li>
          퀵업체 대행을 원하시는 경우, 아래의 주의사항을 참고해주시기 바랍니다.
          <br>
          (퀵서비스 요금은 현금으로 선불 결제됩니다.) 
        </li>
      </ul>
      <p>
        ★ 특별한 날 혹은 시간 (주말의 특정 시간, 크리스마스 등)에는 예약이 어려울 수 있습니다.
        <br>
        이 점을 미리 참고해주시기 바랍니다. 
      </p>
      <p id="emphasis">
        배송을 요청하시는 경우, 구매자께서는 파손 면책에 동의한 것으로 간주되며, 제품 발송 후 발생하는 문제에 대해서는 책임을 지지 않습니다. 
      </p>
    </section>

    <section>
      <h2>보관 / 이용 방법</h2>
      <div>
        <h3>1. 떡 및 앙금 제품</h3>
        <p>떡과 앙금 제품 제품의 최상의 맛을 느끼시려면, 구매 당일에 섭취하시는 것이 좋습니다.</p>
        <p>픽업 후 제품을 고온이나 밀폐된 공간에 보관하는 것은 피해주세요.</p>
        <p style="font-weight: bold;">남은 떡은 소분 방법</p>
        <ul>
          <li>설기 : 냉동실에서 보관하시고, 필요할 때 자연해동하거나 전자레인지에 30초-1분 동안 데워서 드세요.</li>
          <li>앙금 : 냉장실에서 보관하시고, 필요할 때 자연해동 후 설기에 토핑해서 드세요.</li>
        </ul>
      </div>

      <div>
        <h3>2. 생크림 제품</h3>
        <p>
          생크림 제품 제품을 받으신 후 30분 이내에 냉장(0~5도 이하) 보관해주시는 것이 중요합니다.
          <br>
          섭취하기 전에는 제품을 먼저 꺼내두시면 좋습니다.
        </p>
        <p>생크림 제품은 제작 후 가능한 2일 이내에 드시는 것이 가장 좋습니다.</p>
      </div>
    </section>

    <section>
      <h2>앙금플라워떡케이크</h2>
      <h3>어레인지</h3>
      <p>컬러부분이 꽃이 장식되는 부분입니다.</p>
      <img src="@/assets/cakesheet.svg">
    </section>

    <section>
      <h2>케이크 사이즈</h2>
      <img src="@/assets/cake.svg">
      <p id="emphasis">※ 떡 케이크의 경우 특성상 수축되어 본 사이즈보다 약간 작아집니다.</p>
    </section>

    <section>
      <h2>문의사항</h2>
      <p>아래의 전화번호로 연락주시면, 친절하게 상담해드리겠습니다.</p>
      <p>상담 가능한 시간은 매일 오전 9시부터 오후 8시까지입니다.</p>
      <p>업무 시작 시간에 맞춰, 빠르게 연락드리겠습니다.</p>
      <p>감사합니다.</p>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    const notice = {
      title: "공지사항"
    };

    return { notice };
  },
};
</script>

<style>
section {
  text-align: center;
  padding-bottom: 3%;
}

h2 {
  color: #333;
}

ul,
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: #555;
}

ul li::before {
  content: '•';
  color: #555;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

div h3 {
  margin-top: 10px;
}

img {
  width: 60%;
  image-rendering: auto;
}
</style>
