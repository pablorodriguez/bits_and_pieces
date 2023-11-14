<script>
  let count = 0;
  let items = [];
  let categories = {};

  let updateCategories = () => {
    categories = {};
    items.forEach(item => {
      if(!categories[item.category]){
        categories[item.category] = 0;
      }
      categories[item.category] += item.price;
    });
  }
  let addToCartHandler = (event) =>{
    items.push(event.detail);

    count = items.length;
    updateCategories();
  }

  let removeFromCartHandler = (event) => {
    console.log(event.detail);
    console.log(items);
    const newItems = items.filter((prd) => {return prd.id != event.detail.id});
    items = newItems;
    console.log("items", items);
    count = items.length;
    updateCategories();
  }

  let clearCartHandler = () => {
    count = 0;
    items = [];
    categories = {};
  }

  window.addEventListener('addToCart', addToCartHandler);
  window.addEventListener('removeFromCart', removeFromCartHandler);
  window.addEventListener('clearCart', clearCartHandler);

</script>
<div class="container">
      <p class="d-inline-flex gap-1">
          <i class="bi bi-cart"></i>Cart ({count})
      </p>
      <a class="btn btn-link" data-bs-toggle="collapse" href="#cartSummary" role="button" aria-expanded="false" aria-controls="cartSummary">
        Show Summary
    </a>
      <div class="collapse" id="cartSummary">
          <div class="card card-body">
            {#if Object.entries(categories) == 0}
              <p>Nothing in your cart</p>
            {/if}
            {#each Object.entries(categories).sort() as [key, value], i}
            <div>
            {key} - ${value}
            </div>
            {/each}
          </div>
      </div>
</div>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</svelte:head>
