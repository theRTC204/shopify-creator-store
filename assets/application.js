// Put your applicaiton javascript here

var selectCallback = function(variant, selector) {
  if (!variant) {
    console.debug('DEBUG:', `Variant was ${variant}`);
    return;
  }

  if (!variant.available) {
    console.debug('DEBUG:', 'Variant is not available')
    return;
  }

  console.debug('DEBUG:', variant);
  return;
}

var registerSingleOptionSelector = function() {
   if (window.Shopify) {
    const productJson = getProductJson();

    if (productJson) {
      new Shopify.OptionSelectors('OptionSelector', { product: productJson, onVariantSelected: selectCallback, enableHistoryState: true })
    }
  }
}

var getProductJson = function() {
  var el = document.getElementById('ProductJson');
  if (el) {
    return JSON.parse(el.innerHTML);
  }
  return null;
}

var init = function(evt) {
  registerSingleOptionSelector();
}

window.addEventListener('DOMContentLoaded', init);
