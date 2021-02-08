<template>
  <div>
    <div class="cart shadow col-10">
      <div class="cart-top">
        <div>
          <img src="../assets/image/food-and-restaurant.png" alt="empty" />
          <h3>Your cart is empty</h3>
          <p>Please add some items from the menu</p>
        </div>
      </div>
      <div class="cart-bottom">
        <h3>Total:</h3>
        <br />
        <p>*belum termasuk ppn</p>
        <h4 class="confirm-btn" id="confirm-checkout" href="">Checkout</h4>
        <h4 class="cancel-btn" href="">Cancel</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scope>
.cart {
  width: 500px;
  margin-left: 70px;
  overflow: hidden;
}
</style>
