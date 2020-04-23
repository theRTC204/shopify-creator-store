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

var init = function(evt) {
  console.debug('DEBUG', 'DOMContentLoaded', evt);
  if (window.Shopify) {
    const productJson = JSON.parse(
      document.getElementById('ProductJson').innerHTML
    );

    new Shopify.OptionSelectors('OptionSelector', { product: productJson, onVariantSelected: selectCallback, enableHistoryState: true })
  }
}

window.addEventListener('DOMContentLoaded', init);
